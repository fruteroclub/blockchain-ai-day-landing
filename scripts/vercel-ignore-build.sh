#!/usr/bin/env bash
#
# Vercel "Ignored Build Step" for blockchain-ai-day-landing.
# Wired via Project Settings -> Git -> Ignored Build Step:
#     bash scripts/vercel-ignore-build.sh
#
# Contract (Vercel):
#   exit 0  => SKIP the deploy (build is cancelled)
#   exit 1  => PROCEED with the deploy
#
# Policy: a push deploys ONLY when it changes a file that affects the built
# site. Doc / design / repo-meta changes (DESIGN.md, docs/, README, etc.) are
# non-functional and skip the build. This list is the source of truth for what
# "functional" means: keep it in sync if you add a new build input.
#
# Mechanism: `git diff --quiet HEAD^ HEAD -- <functional paths>` exits 0 when
# none of those paths changed (so we skip) and exits 1 when any did (so we
# build). Vercel clones with enough depth for HEAD^.
set -uo pipefail

FUNCTIONAL_PATHS=(
  'src/'              # components, pages, layouts, styles, i18n, content collections
  'public/'           # static assets shipped as-is
  'astro.config.mjs'
  'tsconfig.json'
  'package.json'
  'pnpm-lock.yaml'
  'vercel.json'
  'scripts/vercel-ignore-build.sh'  # changing the gate itself should redeploy once
)

if git diff --quiet "HEAD^" "HEAD" -- "${FUNCTIONAL_PATHS[@]}"; then
  echo "Only non-functional files changed (docs / design / meta). Skipping deploy."
  exit 0
fi

echo "Functional changes detected. Proceeding with deploy."
exit 1
