# Ink It · MoneyBot Games

A free, browser-based MoneyBot game that teaches students how checks work. Players write and sign a real check, endorse checks for different situations, then work a timed teller window and catch fraudulent checks.

It's a static site: plain HTML, CSS, and JavaScript with no build step and no dependencies. The only external request is the Inter font from Google Fonts.

## What's inside

```
ink-it/
  index.html          the game page
  css/ink-it.css      all styles (MoneyBot brand tokens at the top)
  js/ink-it.js        game logic, art, sound
  assets/favicon.svg  MoneyBot head icon
  assets/og-image.png link preview image (1200x630)
embed-example.html    how a host page embeds the game and listens for events
```

## Run it locally

From the repo root:

```bash
npx serve .
# or
python3 -m http.server 8080
```

Open `http://localhost:8080/ink-it/` (or the port `serve` prints).

## Put it on getmoneybot.com

Pick one.

**A. Its own page on the site (simplest).** Copy the `ink-it/` folder into the site's static or public folder so it's served at `https://getmoneybot.com/games/ink-it/`. In most React/Next/Vite setups that folder is `public/`, so the path becomes `public/games/ink-it/`. Nothing needs to be compiled.

**B. Embedded inside an existing page (live demo block).** Host the folder (option A, or its own deploy on Vercel, Netlify, or GitHub Pages), then drop this where the demo should appear:

```html
<div style="position:relative;width:100%;max-width:1040px;aspect-ratio:16/10;min-height:640px;margin:0 auto;border-radius:20px;overflow:hidden;background:#000">
  <iframe
    src="https://getmoneybot.com/games/ink-it/"
    title="Ink It, a MoneyBot game"
    style="position:absolute;inset:0;width:100%;height:100%;border:0"
    allow="autoplay; fullscreen"
    loading="lazy"></iframe>
</div>
```

On phones, link to the full page instead of embedding. The game is built to fill one screen, and a small iframe inside a scrolling page is cramped:

```html
<a href="https://getmoneybot.com/games/ink-it/">Play Ink It</a>
```

**C. Its own deploy.** The repo root is a valid static site. On Vercel or Netlify, set no build command and use `.` as the output directory. The game lives at `/ink-it/`.

## Events for the host page

When the game runs inside an iframe, it posts messages to the parent page so the site can track plays without touching game code:

| event      | when                    | data                          |
|------------|-------------------------|-------------------------------|
| `start`    | player starts a run     | none                          |
| `complete` | player finishes the run | `xp`, `rank`, `accuracy` (%) |

Every message has `source: "moneybot-ink-it"`. Example:

```js
window.addEventListener('message', (e) => {
  if (e.data?.source !== 'moneybot-ink-it') return;
  if (e.data.event === 'complete') {
    // e.g. analytics.track('ink_it_complete', e.data)
  }
});
```

Check `e.origin` against the domain hosting the game if you act on these events. See `embed-example.html` for a working page.

## Before launch

- **Social previews:** in `ink-it/index.html`, change `og:image` to the absolute URL (for example `https://getmoneybot.com/games/ink-it/assets/og-image.png`). Most link previewers ignore relative image paths.
- **Mascot art:** MoneyBot is drawn in code (`botSVG()` in `js/ink-it.js`) to match the 3D render. If the design team has a final vector MoneyBot, it can replace that function.
- **Test on real phones and Chromebooks**, the devices students actually use.

## How the game is organized

- **Mission 1, Cut the Check.** A short tour of the check, then three bills to pay. Students type or tap each field, build the amount in words from word tiles, draw the line-out and signature, and MoneyBot inspects every line.
- **Mission 2, Flip & Endorse.** Students flip a paycheck, choose an endorsement for the situation (teller, ATM, or app), sign the back, and see the consequence.
- **Mission 3, Teller Rush.** Twelve checks on a timer. Students deposit the clean ones and tap the exact problem on the bad ones (wrong payee, mismatched amounts, missing signature, stale date, overpayment scam).

Content to edit lives in plain arrays near each mission in `js/ink-it.js`: `M1` (bills), `M2` (endorsement situations), and `FLAGS` / `makeRush()` (teller checks). MoneyBot's lines are in the `say(...)` calls.

Progress is saved in the player's browser only: unlocked missions, per-mission bests, and the sound setting (`localStorage` keys `inkit-progress` and `inkit-best`). Nothing is sent to a server.

Players can pause any time (button or Esc) to mute sound, restart the current mission, or quit. Linking to `/ink-it/#m2` or `#m3` preselects that mission on the title screen if the player has unlocked it.

## Content notes

Educational content only. All checks, names, and banks are fictional. Rules shown in the game reflect common US banking practice; individual banks differ, especially on mobile-deposit wording, so the game tells students to check their own bank's app.

© MoneyBot. All rights reserved.
