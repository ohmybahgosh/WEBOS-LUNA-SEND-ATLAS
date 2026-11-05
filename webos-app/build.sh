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

# keep the bundled web/catalog.json fresh from the catalog (the TV app reads it too)
if [ -f "$HERE/../scripts/build-web-catalog.py" ]; then
  python3 "$HERE/../scripts/build-web-catalog.py" >/dev/null 2>&1 || true
fi

# Bundle everything so one install gives the app, the SSH CLI and the web UI.
REPO="$HERE/.."
cp "$REPO/luna-atlas.sh" "$SRC/luna-atlas.sh"
mkdir -p "$SRC/catalog"; cp "$REPO/catalog/index.tsv" "$SRC/catalog/index.tsv"
rm -rf "$SRC/web"; mkdir -p "$SRC/web"
cp "$REPO/web/index.html" "$REPO/web/style.css" "$REPO/web/app.js" "$REPO/web/server.js" "$REPO/web/catalog.json" "$REPO/web/favicon.svg" "$SRC/web/" 2>/dev/null
# the service hosts the LAN web UI, so it needs the same static files
rm -rf "$SVC/web"; mkdir -p "$SVC/web"
cp "$SRC/web/index.html" "$SRC/web/style.css" "$SRC/web/app.js" "$SRC/web/catalog.json" "$SRC/web/favicon.svg" "$SVC/web/" 2>/dev/null

rm -rf "$OUT"; mkdir -p "$OUT"
echo "[*] packaging Luna Atlas $VERSION"
ares-package --no-minify "$SRC" "$SVC" -o "$OUT"
IPK=$(ls "$OUT"/*.ipk)
echo "[+] Built $IPK"
[ -f "$HERE/gen-manifest.js" ] && node "$HERE/gen-manifest.js" "$SRC/appinfo.json" "$IPK" "$OUT" || true
