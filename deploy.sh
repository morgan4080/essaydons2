#!/bin/sh
set -e

prisma introspect

prisma generate

git add .

echo ::::::: Hello friend, what is your commit message ?

read COMMENT

git commit -m "$COMMENT"

git push origin main
