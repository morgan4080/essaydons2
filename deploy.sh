#!/bin/sh
set -e

prisma introspect

prisma generate

git add .

echo ::::::: Add commit message ?

read COMMENT

git commit -m "$COMMENT"

git push origin main
