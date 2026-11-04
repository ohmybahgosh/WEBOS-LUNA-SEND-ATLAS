#!/bin/sh
# Build the Luna Atlas webOS app (IPK) + its Homebrew Channel manifest.
# Usage: webos-app/build.sh [version]   (default: version in src/appinfo.json)
# Needs: ares-package (npm i -g @webos-tools/cli) and node.
# Output: webos-app/out/<id>_<version>_all.ipk and <id>.manifest.json
set -eu
HERE=$(cd "$(dirname "$0")" && pwd)
SRC="$HERE/src"
SVC="$HERE/service"
OUT="$HERE/out"

command -v ares-package >/dev/null 2>&1 || { echo "ares-package not found (npm i -g @webos-tools/cli)" >&2; exit 1; }

VERSION=${1:-$(sed -n 's/.*"version"[^"]*"\([^"]*\)".*/\1/p' "$SRC/appinfo.json" | head -1)}
case "$VERSION" in [0-9]*.[0-9]*.[0-9]*) ;; *) echo "Version must look like 1.0.0, got $VERSION" >&2; exit 1 ;; esac

# keep the bundled catalog fresh if the generator is around
if [ -f "$HERE/../../tools/gen_app_catalog.py" ] && [ -f "$HERE/../catalog/luna-catalog.jsonl" ]; then
  python3 "$HERE/../../tools/gen_app_catalog.py" >/dev/null 2>&1 || true
fi

rm -rf "$OUT"; mkdir -p "$OUT"
echo "[*] packaging Luna Atlas $VERSION"
ares-package --no-minify "$SRC" "$SVC" -o "$OUT"
IPK=$(ls "$OUT"/*.ipk)
echo "[+] Built $IPK"
[ -f "$HERE/gen-manifest.js" ] && node "$HERE/gen-manifest.js" "$SRC/appinfo.json" "$IPK" "$OUT" || true
