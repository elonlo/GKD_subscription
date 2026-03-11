# Project Agent Notes

## Working Style

- Default to autonomous execution: inspect, implement, test, build, and deploy without asking for step-by-step confirmation.
- Stop only when blocked by missing external credentials, missing third-party resources, or an ambiguous business decision with real risk.
- Prefer modifying existing app rules in `src/apps/*.ts` and then regenerating `dist/*` through the project build.

## Local Dev Workflow

- Runtime requirement: `node >= 22`
- Package manager: `pnpm@10.25.0`
- Typical commands:
  - `pnpm install`
  - `pnpm run check`
  - `pnpm run build`
- Build updates:
  - `dist/gkd.json5`
  - `dist/gkd.version.json5`
  - `dist/README.md`
  - `dist/CHANGELOG.md`

## Rule Development Workflow

- For GKD rule work, prefer this order:
  1. inspect existing rule file under `src/apps/`
  2. ask the user for GKD snapshots only if selector authoring needs node data
  3. patch source rule file
  4. run `pnpm run check`
  5. run `pnpm run build`
  6. verify that the expected rule appears in `dist/gkd.json5` and `dist/README.md`
- If the user provides only screenshots, treat them as symptom evidence, not enough for precise selectors.
- Prefer `action: 'clickCenter'` when snapshots show no `clickable=true` nodes but the visual close target is clear.
- Keep app group `key` values sorted in ascending order.
- Preferred collaboration input is a GKD share link like `https://i.gkd.li/i/<id>`.
- When the user provides a GKD share link, first resolve it to the underlying downloadable resource, then inspect the snapshot contents, then start selector analysis and rule edits.

## Current Project-Specific Decisions

- Cloudflare Pages is used as a static deployment target for `dist/`.
- Current Pages project name and public URL are configured outside the repository via GitHub Variables / Cloudflare.
- `tmp/` is for local snapshots and should stay ignored.
- For Xiaomi devices, ad landing pages may jump into `com.miui.hybrid` (`快应用服务框架`) via `com.miui.hybrid.VendorLauncherActivity$Launcher1`.
- The current mitigation strategy for that path is two-stage:
  1. keep the source app rule that closes the ad on its own splash/activity
  2. add a fallback `action: 'back'` rule under `src/apps/com.miui.hybrid.ts` for the quick app landing page

## Cloudflare Deployment Workflow

- Local config files:
  - `wrangler.jsonc`
  - `.github/workflows/deploy_cloudflare_pages.yml`
- Local deploy commands:
  - `pnpm run cf:dev`
  - `pnpm run cf:deploy`
  - `pnpm run cf:build-deploy`
- When deploying manually from this environment, `wrangler` may fail behind the configured proxy. If that happens, retry without proxy env vars:
  - unset `HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `http_proxy`, `https_proxy`, `all_proxy`

## Required External Configuration

- Never ask the user for repeated deployment details if they are already configured in GitHub.
- For GitHub Actions deployment, the workflow reads Cloudflare identifiers from GitHub repository variables.
- Required GitHub Actions secret:
  - `CLOUDFLARE_API_TOKEN`
- Required GitHub Actions variables:
  - `CLOUDFLARE_ACCOUNT_ID`
  - `CLOUDFLARE_PAGES_PROJECT_NAME`
- If deployment is blocked, ask only for the missing item(s).
- Do not request API tokens in chat if avoidable; prefer that the user sets them as environment variables or GitHub Secrets.

## Git / Release Workflow

- Preferred branch: `main`
- Preferred push target: `origin main`
- Before push, expect repo hooks to run `pnpm run check`
- If commit is needed and local git identity is missing, configure repository-local identity instead of global identity.

## Custom Domain Follow-Up

- If the user asks to bind a custom domain, direct them to:
  - Cloudflare Dashboard -> `Workers & Pages` -> current Pages project -> `Custom domains`
- Ask for the exact hostname only if DNS record advice depends on whether it is apex domain or subdomain.

## Security Notes

- If a Cloudflare API token has ever been pasted into chat, remind the user to revoke and recreate it.
- Do not persist API tokens, cookies, or secrets into repository files.

## Yunyi Session Notes

- Current `云蚁物联` rule source lives in `src/apps/com.yunyi.smartcamera.ts`.
- Current deployed subscription version after the latest `云蚁物联` work: `v446`.
- A shareable memory-subscription export for the app was generated at:
  - `tmp/云蚁物联-内存订阅-v446.json5`

## Yunyi Coverage Summary

- `云蚁物联` ad handling currently covers these in-app paths:
  - `com.ants360.yicamera.activity.SplashActivityChina`
  - `com.ants360.yicamera.fragment.AdDialogFragment`
  - `com.ants360.yicamera.activity.MainActivity`
  - `com.xiaoyi.yiplayer.ui.PlayerActivity`
- Covered splash variants include:
  - top-right text/countdown skip
  - top-left `skip_button` under `com.kwad.dy.sdk:id/ksad_splash_root_container`
  - bottom-left skip area for `上滑或点击查看` / `第三方应用` / `详情页`
  - `立即进入`
  - in-app WebView landing ads under `webContainer` with `ptgImgClose` / `ptgImgBack`
- Covered non-splash variants include:
  - home/player full-screen ads
  - bottom/home ad cards
  - `被不断的广告烦扰了吗？` popup via `仔细思考`
  - ad feedback popup via `不感兴趣`

## Yunyi External Jump Fallbacks

- Xiaomi quick-app jump fallback is handled in `src/apps/com.miui.hybrid.ts`.
- Xiaomi App Store detail-page jump fallback is handled in `src/apps/com.xiaomi.market.ts`.
- Strategy remains:
  1. close the ad inside `云蚁物联` if possible
  2. if external jump still happens, add a package-specific fallback rule in the landing app

## Yunyi Future Workflow

- For new `云蚁物联` samples, keep preferring SDK/node-level selectors over pure coordinates when available.
- The only collaboration flow for new `云蚁物联` samples is:
  1. user sends a GKD share link
  2. resolve the link to the underlying zip resource
  3. download and inspect the snapshot contents
  4. analyze nodes and identify stable anchors
  5. patch source rules
  6. run `pnpm run check`
  7. run `pnpm run build`
  8. push to `main`
  9. confirm Cloudflare Pages deployment result
- If a new branch appears, inspect for these stable anchors first:
  - `skip_button`
  - `ptgSkipLayout`
  - `tv_nm_splash_count_down`
  - `webContainer`
  - `ptgImgClose`
  - `ptgImgBack`
  - bottom text like `第三方应用`, `详情页`, `上滑或点击查看`, `摇动手机`
