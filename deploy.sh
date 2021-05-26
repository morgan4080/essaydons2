#!/bin/sh
set -e

prisma introspect

prisma generate

git add .

echo Hello friend, provide a commit message

read COMMENT

git commit -m "$COMMENT"

git push origin main
