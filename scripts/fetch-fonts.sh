#!/bin/sh
# Puts the licensed MonoLisa font files into public/fonts/ before a build.
# The font license forbids sharing the files, so they live in a private repo
# and never in this public one. Optional: without them the build still works
# and code uses the system monospace font.
#
# Netlify env vars:
#   FONTS_REPO   private repo with MonoLisa-Normal.ttf and MonoLisa-Italic.ttf
#                in its root, e.g. "slimcandy/fonts"
#   FONTS_TOKEN  fine-grained GitHub token with read-only "Contents" access
#                to that repo only

set -e
DIR=public/fonts
FILES="MonoLisa-Normal.ttf MonoLisa-Italic.ttf"

missing=""
for f in $FILES; do [ -f "$DIR/$f" ] || missing="$missing $f"; done
[ -z "$missing" ] && exit 0

if [ -z "$FONTS_REPO" ] || [ -z "$FONTS_TOKEN" ]; then
  echo "fetch-fonts: MonoLisa not found, using system monospace (set FONTS_REPO and FONTS_TOKEN to fetch it)"
  exit 0
fi

mkdir -p "$DIR"
for f in $missing; do
  curl --fail --silent --show-error --location \
    -H "Authorization: Bearer $FONTS_TOKEN" \
    -H "Accept: application/vnd.github.raw" \
    -o "$DIR/$f" "https://api.github.com/repos/$FONTS_REPO/contents/$f"
  echo "fetch-fonts: downloaded $f"
done
