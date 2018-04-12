#!/usr/bin/env bash

cd "$(dirname "$0")"
pwd

echo "Remove old files"
chmod -R 0777 color-web/src/common
chmod -R 0777 color-mobile/common
rm -rf color-mobile/common
rm -rf color-web/src/common

echo "Copy common directory"
cp -R common color-mobile/
cp -R common color-web/src/

echo "Set directories to readonly"
chmod -R 0555 color-web/src/common
chmod -R 0555 color-mobile/common
