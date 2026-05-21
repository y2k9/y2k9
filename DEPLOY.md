# Deploying to y2k9.com

## How it works
Static site. No build step. Vercel auto-deploys on every push to `origin main`.

## To add a subpage
1. Create a folder inside `/Users/yashkewalramani/Desktop/Projects/y2k9 website/`
   - e.g. `mypage/index.html` → live at `y2k9.com/mypage`
2. Link to it from the main `index.html` grid if needed (same card pattern already there)
3. Push to git — Vercel deploys automatically

## To deploy any change
```bash
cd "/Users/yashkewalramani/Desktop/Projects/y2k9 website"
git add <files>
git commit -m "description"
git push origin main
```
That's it. Live in ~30 seconds.

## Notes
- `favicon.jpg` is at the repo root — reference it as `../favicon.jpg` from subfolders
- CSS/JS live inline in each page's `index.html` (no shared stylesheet)
- The main page `index.html` uses `style.css` and `script.js` at the root — don't touch those for subpages
- Always push to `origin main` — no staging branch, no preview URLs needed
