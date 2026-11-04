#!/bin/sh
# luna-dump.sh - enumerate every Luna service and method on a rooted LG webOS TV.
#
# Read-only: it only lists services, introspects them, and copies config files.
# It never calls any service method.
#
# Usage (on the TV, as root):
#   sh luna-dump.sh [output_dir]
# Then copy the tarball to your PC and run:
#   python3 scripts/parse_dump.py luna-dump-<model>-<date>.tar.gz
#
# Status: written from documented ls-monitor behaviour; not yet tested on every firmware.
#         Please open an issue with your webOS version if anything breaks.

set -u
OUT_BASE="${1:-/tmp}"
TS="$(date +%Y%m%d-%H%M%S)"

MODEL="unknown"
if command -v luna-send >/dev/null 2>&1; then
  MODEL="$(luna-send -n 1 -w 3000 luna://com.webos.service.tv.systemproperty/getSystemInfo \
    '{"keys":["modelName"]}' </dev/null 2>/dev/null | sed -n 's/.*"modelName" *: *"\([^"]*\)".*/\1/p')"
  [ -n "$MODEL" ] || MODEL="unknown"
fi

DIR="$OUT_BASE/luna-dump-$MODEL-$TS"
mkdir -p "$DIR/introspect" "$DIR/files"

echo "[*] Writing dump to $DIR"

# 1. firmware info (read-only getters)
{
  echo "date=$TS"
  echo "model=$MODEL"
  cat /etc/os-release 2>/dev/null
  cat /var/run/nyx/os_info.json 2>/dev/null
} > "$DIR/firmware.txt"
luna-send -n 1 -w 3000 luna://com.webos.service.update/getCurrentSWInformation '{}' </dev/null > "$DIR/sw-info.json" 2>&1

# 2. list of connected services
ls-monitor -l > "$DIR/services.txt" 2>&1
# service names: take every token that looks like a bus name
grep -o '[A-Za-z0-9_-]\+\(\.[A-Za-z0-9_-]\+\)\{2,\}' "$DIR/services.txt" | grep -v '^[0-9.]*$' | sort -u > "$DIR/service-names.txt"
echo "[*] $(wc -l < "$DIR/service-names.txt") candidate bus names"

# 3. introspect each one (methods + ACG groups)
TIMEOUT=""
command -v timeout >/dev/null 2>&1 && TIMEOUT="timeout 8"
n=0
while read -r svc; do
  [ -n "$svc" ] || continue
  $TIMEOUT ls-monitor -i "$svc" > "$DIR/introspect/$svc.txt" 2>&1
  [ -s "$DIR/introspect/$svc.txt" ] || rm -f "$DIR/introspect/$svc.txt"
  n=$((n+1))
  [ $((n % 25)) -eq 0 ] && echo "    ...$n"
done < "$DIR/service-names.txt"
echo "[*] introspected $(ls "$DIR/introspect" | wc -l) services"

# 4. permission / role / routing files (copy only, small text files)
for p in /usr/share/luna-service2 /var/luna-service2 /var/luna-service2-dev \
         /usr/palm/services/com.webos.service.secondscreen.gateway/interfaces \
         /etc/palm/description.json \
         /usr/palm/services/com.webos.service.apiadapter/adapters/settings/valid-settings.js; do
  if [ -e "$p" ]; then
    mkdir -p "$DIR/files$(dirname "$p")"
    cp -r "$p" "$DIR/files$p" 2>/dev/null
  fi
done

# 5. pack it
cd "$OUT_BASE" && tar czf "luna-dump-$MODEL-$TS.tar.gz" "luna-dump-$MODEL-$TS" && \
  echo "[+] Done: $OUT_BASE/luna-dump-$MODEL-$TS.tar.gz"
echo "    Note: the dump contains your model name and firmware version, nothing personal."
echo "    Review it before sharing publicly."
