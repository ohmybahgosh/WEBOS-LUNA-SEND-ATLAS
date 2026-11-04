#!/bin/sh
# build-ipk.sh - package the Luna Atlas webOS app + service into an IPK.
# Run from repo root or anywhere; needs the webOS CLI (ares-package) and node/npm.
set -e
HERE="$(cd "$(dirname "$0")/.." && pwd)"
APP="$HERE/app/luna-atlas"
SVC="$HERE/app/luna-atlas-service"
OUT="${1:-$HERE/app/dist}"

command -v ares-package >/dev/null 2>&1 || { echo "ares-package not found (install the webOS CLI)"; exit 1; }

# regenerate the bundled catalog if the generator and source catalog are present
if [ -f "$HERE/tools/gen_app_catalog.py" ] && [ -f "$HERE/catalog/luna-catalog.jsonl" ]; then
  python3 "$HERE/tools/gen_app_catalog.py" || true
fi

# No bundling: webos-service and palmbus are provided by the TV's service
# runtime (/usr/lib/node_modules), the same way the Homebrew Channel service
# resolves them. Nothing to npm-install.

mkdir -p "$OUT"
echo "[*] packaging"
ares-package "$APP" "$SVC" -o "$OUT"
echo "[+] IPK in $OUT:"
ls -1 "$OUT"/*.ipk
