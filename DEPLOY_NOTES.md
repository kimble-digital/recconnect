# Deploy notes — getting `design/wip` live

## Why the site works locally but not on prod

- All the redesign work lives on the **`design/wip`** branch.
- Your local dev server (`npm run dev`) runs whatever branch is checked out, so you see every change.
- **Vercel builds `main`.** Until `design/wip` is merged into `main` and pushed, production keeps serving the old build. Nothing is wrong with the code — it just hasn't been promoted.
- `design/wip` currently has **no upstream** (it only exists on your Mac), so it also needs pushing if you want it on GitHub / a preview URL.

## Recommended: preview first, then promote

Run these on your Mac (in `~/recconnect`):

```bash
# 1. Make sure everything is committed
git status

# 2. Push the branch so Vercel builds a PREVIEW deployment (safe, not live)
git push -u origin design/wip
```

Open the preview URL Vercel generates for that branch and click through it (home, join on mobile, suppliers, partners, events, socials studio). When you are happy:

```bash
# 3. Promote to production
git checkout main
git pull origin main          # get any changes others pushed
git merge design/wip
git push origin main          # Vercel builds + deploys main = live
```

## Before you promote — checklist

- **Env vars in Vercel** (Project → Settings → Environment Variables): the Resend key and any Airtable vars the contact/partner/event forms need. Without them the forms log but do not send.
- **Fonts licence:** `public/fonts/reissue.otf` is the free/watermarked test cut. Swap in the licensed file before go-live if we keep the brush script.
- **Legal pages** (`/privacy`, `/terms`) are drafts — have them reviewed.
- **Event dates/venues** on the cards and events page are best-guesses; confirm them.

## Prefer a PR?

```bash
git push -u origin design/wip
# then open a Pull Request design/wip -> main on GitHub, review the diff, merge.
```

Merging the PR triggers the production deploy the same way.

## Rollback

If a deploy looks wrong, in the Vercel dashboard open **Deployments**, find the previous good one, and click **Promote to Production** (instant revert, no git needed).
