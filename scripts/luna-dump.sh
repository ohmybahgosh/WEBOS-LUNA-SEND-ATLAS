#!/bin/sh
# luna-dump.sh - enumerate every Luna service and method on a rooted LG webOS TV.
#
# Read-only: it lists connected services and asks each one to *describe* itself
# through the standard introspection method.  It never calls any real service
# method, so it cannot change anything on the TV.
#
# This mirrors the approach proven on a retail webOS 7.0 OLED: the private
# introspection endpoint returns each service's method list and ACG permission
# groups, which is richer and more portable than scraping `ls-monitor -i`.
#
# Usage (on the TV, as root over SSH):
#   sh luna-dump.sh [output_dir]
# Then on your PC:
#   python3 scripts/parse_dump.py luna-dump-<model>-<date>.tar.gz
#
# Tested on webOS 7.0 (W22O).  Please open an issue with your webOS version if
# anything breaks.

set -u
OUT_BASE="${1:-/tmp}"
TS="$(date +%Y%m%d-%H%M%S)"

getprop() { # getprop <key>
  luna-send -n 1 -w 3000 luna://com.webos.service.update/getCurrentSWInformation '{}' </dev/null 2>/dev/null \
    | sed -n "s/.*\"$1\" *: *\"\([^\"]*\)\".*/\1/p"
}
MODEL="$(getprop model_name)"; [ -n "$MODEL" ] || MODEL="unknown"

DIR="$OUT_BASE/luna-dump-$MODEL-$TS"
mkdir -p "$DIR/lsi"
echo "[*] Writing dump to $DIR"

# 1. firmware info (read-only getter)
luna-send -n 1 -w 3000 luna://com.webos.service.update/getCurrentSWInformation '{}' </dev/null > "$DIR/firmware.json" 2>&1
cat /etc/starfish-release /etc/os-release 2>/dev/null > "$DIR/release.txt"

# 2. list connected bus names
ls-monitor -l > "$DIR/services.txt" 2>&1
grep -oE '[A-Za-z0-9_.-]+\.[A-Za-z0-9_.-]+\.[A-Za-z0-9_.-]+' "$DIR/services.txt" \
  | grep -v '^[0-9.]*$' | sort -u > "$DIR/service-names.txt"
echo "[*] $(wc -l < "$DIR/service-names.txt") candidate bus names"

# 3. ask each service to describe itself (introspection), bounded parallelism
n=0
while read -r svc; do
  [ -n "$svc" ] || continue
  ( timeout 4 luna-send -n 1 "luna://$svc/com/palm/luna/private/introspection" \
      '{"type":"description"}' </dev/null > "$DIR/lsi/$svc.json" 2>&1
    [ -s "$DIR/lsi/$svc.json" ] || rm -f "$DIR/lsi/$svc.json" ) &
  while [ "$(jobs -p | wc -l)" -ge 8 ]; do sleep 0.2; done
  n=$((n+1))
done < "$DIR/service-names.txt"
wait
echo "[*] introspected $(ls "$DIR/lsi" 2>/dev/null | wc -l) services"

# 4. SSAP->luna routing + settings whitelist (read-only copies, if present)
for p in /usr/palm/services/com.webos.service.secondscreen.gateway/interfaces \
         /etc/palm/description.json; do
  [ -e "$p" ] && { mkdir -p "$DIR/files$(dirname "$p")"; cp -r "$p" "$DIR/files$p" 2>/dev/null; }
done

# 5. pack
cd "$OUT_BASE" && tar czf "luna-dump-$MODEL-$TS.tar.gz" "luna-dump-$MODEL-$TS" \
  && echo "[+] Done: $OUT_BASE/luna-dump-$MODEL-$TS.tar.gz"
echo "    Contains model + firmware version only, nothing personal.  Review before sharing."
