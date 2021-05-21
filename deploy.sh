#!/bin/sh
set -e

prisma introspect

prisma generate

git add .

git commit -m "$(date)"

git push origin main