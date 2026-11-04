#!/bin/sh
# scrub-check.sh - fail if the repo contains anything that looks like a real
# secret, a personal network identifier, or a non-stock (homebrew / third-party
# app) service bus. Run before every commit:  sh scripts/scrub-check.sh
# Private/documentation IPs (RFC1918, loopback, TEST-NET, 8.8.8.8, 1.1.1.1) and
# BLE "bearer" params are treated as documentation, not secrets.

set -u
cd "$(dirname "$0")/.." || exit 2
fail=0
CORPUS="catalog docs README.md SOURCES.md"
report() { [ -n "$1" ] && { echo "POSSIBLE $2:"; echo "$1" | head -15; echo; fail=1; }; }

# MAC addresses (any real one is a leak; placeholder is fine)
report "$(grep -rhInE '\b([0-9a-fA-F]{2}:){5}[0-9a-fA-F]{2}\b' $CORPUS 2>/dev/null \
  | grep -vi 'AA:BB:CC:DD:EE:FF')" "MAC address"

# public IPv4 only (exclude private, loopback, TEST-NET, common public DNS, and
# dotted spec refs like 3.3.1.1 that sit next to letters)
report "$(grep -rhInoE '\b([0-9]{1,3}\.){3}[0-9]{1,3}\b' $CORPUS 2>/dev/null \
  | grep -vE '(^|:)[0-9]+:(192\.168\.|10\.|172\.(1[6-9]|2[0-9]|3[01])\.|127\.|0\.|255\.|169\.254\.|224\.|239\.|8\.8\.(8\.8|4\.4)|1\.1\.1\.1|192\.0\.2\.|198\.51\.100\.|203\.0\.113\.|[0-9]\.[0-9]\.[0-9]\.[0-9]($|[^0-9]))')" "public IPv4"

# real credentials (require an actual value, not a doc mention of the word)
report "$(grep -rhInE '(client-key|clientKey|pairingKey|client_key)[\"[:space:]]*[:=][[:space:]]*\"?[A-Za-z0-9+/_-]{12,}' $CORPUS 2>/dev/null)" "client/pairing key value"
report "$(grep -rhInE '[Bb]earer [A-Za-z0-9._-]{16,}' $CORPUS 2>/dev/null)" "bearer token"
report "$(grep -rhInE '(secret|api)[_-]?key[\"[:space:]]*[:=][[:space:]]*\"?[A-Za-z0-9+/_-]{12,}|password[\"[:space:]]*[:=][[:space:]]*\"?[^\"[:space:]]{6,}' $CORPUS 2>/dev/null \
  | grep -vE '<redacted>')" "secret/password value"
report "$(grep -rhInE 'BEGIN (RSA |EC |OPENSSH |DSA )?PRIVATE KEY' $CORPUS 2>/dev/null)" "private key block"
report "$(grep -rhInE '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}' $CORPUS 2>/dev/null \
  | grep -viE 'noreply@|example\.(com|org)|@lge\.com')" "email address"

# homebrew / sideloaded app buses (would leak what the owner installed).
# Stock vendor and dev-mode services are fine; only org.webosbrew.* and the
# bare app.* namespace are filtered. Parse the top-level "service" field with
# python (not grep, which also matches params named "service").
badns="$(python3 - <<'PY' 2>/dev/null
import json
bad=set()
for l in open("catalog/luna-catalog.jsonl"):
    l=l.strip()
    if not l: continue
    s=json.loads(l)["service"]
    if s.startswith(("org.webosbrew.","app.","org.ohmybahgosh.","org.aabytt.","com.beb.plxnative","com.open.hidden.","com.tvweb.")):
        bad.add(s)
print("\n".join(sorted(bad)))
PY
)"
[ -n "$badns" ] && { echo "HOMEBREW/sideloaded app buses present (should be filtered):"; echo "$badns" | head -40; echo; fail=1; }

if [ "$fail" -eq 0 ]; then echo "scrub-check: clean."; else echo "scrub-check: review the above before committing."; fi
exit $fail
