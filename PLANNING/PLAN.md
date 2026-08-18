# PROJECT SANCTUM — THE PORTFOLIO
## Master Build Plan (the biggest version)

> Status: **READY. Waiting for "go" to begin Phase 1.**
> Method: think → map → implement → eyes-verify → logbook → wait for **continue**.
> Password: `0528` · Shortcut: `?unlock` · Panic: `~`
> Live app: https://ts-creative.vercel.app/
> Live deck: https://project-sanctum-ppt.vercel.app/

---

## 0. What this is (and why it exists)

Team CCA (Aarav · Jeehan · Anuj) pitches PROJECT SANCTUM at TS '26 Creative.

- **8 minutes** pitch maximum · **2 minutes** setup · **3–4 minutes** Q&A · **15 minutes** total.
- The script already eats ~6 minutes. There is no time to walk a Drive folder.
- The event manager signed off: end the pitch with a **QR code** that opens this portfolio.
- The portfolio is the over-the-top leave-behind: every file, every live demo, the story, the craft, the team — cinematic, on-brand, hidden the same way the product is hidden.

**The assignment fails if the portfolio does not hide.** It must open as a decoy, ask for `0528`, play a banger loader, then iris-open into the archive.

Judged on: Functionality · UI/UX · Aesthetic · Creativity · Originality.

---

## 1. What I studied (receipts)

### 1.1 The master brief
`use this as teh prompt !.txt` — full 10-part spec internalized.

### 1.2 Discord context (the three screenshots)
- Pitch clock: 8 + 2 + 3–4 = 15.
- Aarav proposed a Project-Verde-style portfolio + QR closer so judges get the Drive without wasting pitch time.
- thedoctor: "if you think it would save time, to fir krdo" → then "okay".
- Draft finals script exists (`SANCTUM — FINALS SCRIPT`, 8 min, Aarav opens).

### 1.3 Live product (fetched)
**SIGNAL & STATIC** (`ts-creative.vercel.app`) — abandoned shortwave blog, est. 2008, last log 14 Mar 2013, signed "— m."
Posts internalized:
- *last log. the band is tired.*
- *the hum at 0528* ← teaches the code: "Three knocks. Always three… It answers at 0528. Remember the number the way you remember a doorbell."
- *the wow! signal, 34 years on*
- *uvb-76 — the buzzer, and the night it stopped*
- *numbers stations: a primer…*
- *first light on the rt-64*

**Andoria Deep-Sky Archive** (`project-sanctum-ppt.vercel.app`) — dead 1998 astronomy blog, webring #481, Geocities texture, code `HIDE`, Fig. 5 is the door.

### 1.4 Repos (via `gh`)
- `AlphabuggOp/ts-creative` — Vite + React + TS + three + GSAP + framer-motion + zustand + howler + lenis. Cover, Seal, Gate, Trials, Ceremony, Field Log.
- `AlphabuggOp/Ts-Creative-PPT` — 12-slide WebGL deck + decoy + `exports/` of all deliverables.

Design tokens confirmed in `sanctum/src/design/tokens.css`:
`--ink #07090f` · `--kyber #67e8f9` · `--kyber-dim #2e8fa3` · `--ember #e8b44c` · `--threat #ff3b3b` · `--bone #e8e6df` · `--ghost #9aa3b2`
Fonts: Cinzel / Space Grotesk / IBM Plex Mono (self-hosted).
Motion law: wall-clock gates, rAF paints. Motion must mean something.

### 1.5 Drive archive (extracted from 3-part RAR, 54 MB)
Staged in `/files/`:

| File | Size | Role |
|---|---|---|
| `SANCTUM-Promo.mp4` | 32 MB | 60s promo — Watch |
| `SANCTUM-Deck.pptx` | 22 MB | 16-slide physical deck — Present |
| `SANCTUM-WriteUp.pdf` | 82 KB | Deck write-up (2 pages) — Read |
| `SANCTUM-UIUX.pdf` | 55 KB | Deck UI/UX — Read |
| `SANCTUM-JudgesGuide.pdf` | 50 KB | How to enter the deck (`HIDE`) — Read |
| `TS26_CCA_WRITEUP.pdf` | 278 KB | App ≤100-word write-up — Read |
| `TS26_CCA_UIUX_DESIGN.pdf` | 500 KB | 10-page app dossier — Read |
| `TS26_CCA_JUDGES_GUIDE.pdf` | 94 KB | How to enter the app (`0528`) — Read |

Also recovered:
- Live URLs (app + deck)
- GitHub URLs (app + deck)

### 1.6 Inspiration (not identity)
Awwwards cinematic portfolios (Michael Gatt / Synchronized Studio, PX PUSH), Active Theory / Locomotive / Obys / Basement language: pinned scroll, kinetic type, framed work, one wow per page. We steal *discipline*, not look.

---

## 2. The metaphor, applied to the portfolio

The product hides a network behind a dead blog.
The deck hides twelve slides behind a dead astronomy site.
**The portfolio hides the entire submission behind a movie-title card.**

Same ritual grammar:
1. Land on something that does not look like a portfolio.
2. Notice a faint ring / sigil.
3. Three knocks.
4. THE DOOR ASKS.
5. Speak `0528`.
6. The Seal draws itself. Honest counter. Status lines. Iris opens.
7. You are inside the archive.
8. `~` and it was never there.

This is not decoration. This is the idea, restated as the container.

---

## 3. Architecture

```
decoy (3D title card)
   │  3 knocks on the orbiting ring
   ▼
password 0528  ──wrong──► ACCESS DENIED + shake
   │ correct  (or ?unlock / ?pitch)
   ▼
THE SEAL (loader) ──iris──► PORTFOLIO SHELL
                                │
                    HUD header + kyber cursor + grain
                                │
              single-page cinematic scroll (22 sections)
              + /handoff last-slide QR page
              + /files/* real downloads
```

**Stack (locked):** Vite + React + TypeScript · three.js · @react-three/fiber · GSAP · framer-motion · split-type · @fontsource (Cinzel, Space Grotesk, IBM Plex Mono) · zustand (unlock persistence) · howler (optional chime).

**State (zustand, persist `sanctum-portfolio-v1`):**
- `unlocked: boolean`
- `visitor: string | null` (optional — if we ask a name, keep it)
- `panic: boolean` (toggles decoy overlay)
- `seenSeal: boolean` (skip loader on later visits unless `?seal`)
- `muted: boolean`

**Shortcuts (documented, diegetic where possible):**
- `?unlock` — skip decoy + password, play a short seal, enter.
- `?pitch` — skip everything, land on `/handoff` (QR + 4 tiles). For the last 20 seconds of the pitch.
- `?seal` — force the full loader even if already unlocked.
- `↑ ↑ ↓ ↓` during the seal — lift instantly (mirrors the app).
- `~` anywhere after unlock — panic back to the title card.
- `D` or a hidden footer glyph — reset access (`localStorage` wipe).

**Vite config (preview-critical):**
```ts
server: { host: true, allowedHosts: true }
```

**Headless-Chromium law:**
- No `background-clip: text` + CSS `filter` on the same node.
- Titles: solid `--bone` / `--kyber` + `text-shadow` halo (verified by pixel check).
- Wall-clock `setTimeout` for unlock / loader completion, never rAF-only.

---

## 4. Information architecture — the 22 sections + extras

A single cinematic scroll, HUD-anchored. Each section has **one wow**.

| # | Section | Wow |
|---|---|---|
| 00 | **Decoy title card** | Orbiting 3D kyber ring + steel SANCTUM wordmark. Almost nothing else. |
| 00b | **THE SEAL** | SVG sigil draw + honest % + status decode + iris. |
| 01 | **Hero** | Wordmark, pitch line, Team CCA, "explore" that magnetizes. |
| 02 | **The Story** | Narrative prose, not bullets. "The Empire surveils the obvious." |
| 03 | **The Journey** | Four-act timeline (Seal → Gate → Trials → Sanctum) that lights as you scroll. |
| 04 | **The Two Decoys** | Side-by-side: Andoria vs SIGNAL & STATIC. Why two disguises = the system, not a gimmick. |
| 05 | **The Unlock Ritual** | Playable 3-knock widget. Recreates the door in miniature. |
| 06 | **The Gate** | Framed still / looping preview of the 620vh scroll-cinematic. |
| 07 | **The Trials** | Three rite cards — Signal / Focus / Choice — each with a 4-second loop. |
| 08 | **The Ceremony** | Rank · Callsign · Sigil explainer. A living sample sigil draws itself. |
| 09 | **The Sanctum Hub** | Six tools as a holo-grid (map, cipher, router, archives, council, beacon). |
| 10 | **The Panic Key** | Giant `~`. Press it here and the page really hides. Gag + proof. |
| 11 | **The Craft** | Stack constellation. Hover a lib, it decrypts what it does. |
| 12 | **The Brand** | Live swatches + type specimens + the motion law, typeset as a commandment. |
| 13 | **The Team** | Three cards. Aarav (Product & Story) · Jeehan (Design & Motion) · Anuj (Engineering). |
| 14 | **Live Demos** | Browser-chrome frames of both live sites. Click = go. Hover = GO. |
| 15 | **Files** | Download cards grouped Watch / Present / Read / Explore. Real files. |
| 16 | **The Video** | In-page `<video>` of `SANCTUM-Promo.mp4` + poster. |
| 17 | **The Documents** | Inline PDF viewers + open-in-new-tab. |
| 18 | **The Repos** | Two GitHub cards. |
| 19 | **The Write-Ups** | The 100-word write-up as a quote card (the real text). |
| 20 | **The Process** | How it was built — a short making-of timeline. |
| 21 | **Contact / CTA** | "Walk us through the app." Team + school. |
| 22 | **Footer** | "the network remembers" · credits · back-to-top · hidden reset. |
| **+** | **`/handoff`** | Pitch closer. Giant QR + 4 tiles. Designed to be projected. |

---

## 5. Creative additions (beyond the brief — on-brand)

These are not extras for extras' sake. Each one serves the pitch or the metaphor.

1. **`/handoff` pitch closer.** The last slide of the 8-minute script. Full-bleed SANCTUM, one sentence, a giant QR, four tiles: OPEN THE APP · OPEN THE DECK · WATCH THE PROMO · TAKE THE FILES. `?pitch` jumps here.
2. **Judge-time rails.** A tiny HUD chip: "2-minute path" (Demos → Files → Video) vs "wander." Saves a tired judge.
3. **The portfolio teaches its own code.** The decoy title card has a barely-legible kicker that flickers `0528` once every ~12 seconds — the same way the blog teaches the frequency. Noticing is the puzzle.
4. **Playable ritual widget** (section 05) that actually knocks, flickers, and asks. Proof, not description.
5. **Panic is real.** `~` overlays the decoy on top of the portfolio. Press again to return. Same as the product.
6. **Visitor name (optional, first unlock only).** "the archive must know what to call you." Later visits: `WELCOME BACK, {name}`. Mirrors the app. Can be skipped with Enter.
7. **Two-decoy proof.** Screenshots of *both* live decoys, side by side, so a judge who never opened either still gets the joke.
8. **Sigil that is this site's.** Not a copy of a player's sigil — a portfolio sigil: eight-point star in a broken ring (the original from `Landing.tsx`), drawn on the seal and reused as favicon / QR mark.
9. **Ambient audio by consent.** Soft drone on the decoy after first click; a chime on CHANNEL OPEN. Mute persisted. Never autoplay.
10. **Turbine mode.** If WebGL dies, the decoy ring is a CSS conic-gradient spinner. The journey never gates on hardware (app law).
11. **Corner-bracket HUD + film grain + scanlines + vignette + teal/orange grade.** The SANCTUM look, not "a dark site."
12. **Custom kyber cursor** (ring + dot, morphs on hot targets). Native cursor on the decoy (the cover must not leak chrome).
13. **Reduced-motion path.** Theater collapses; content and unlock still work.
14. **QR asset generated in Phase 9** once the Vercel URL exists. Printed on `/handoff` and as `files/SANCTUM-QR.png` for the physical deck closer.

---

## 6. Copy voice (do not write like a SaaS landing)

Write like the network. Short. Specific. A little tired. A little sacred.

- Display: Cinzel, wide tracking, steel or bone. Never gradient-clip + filter.
- Kickers: IBM Plex Mono, `LETTER-SPACING: .3em`, kyber or ghost.
- Body: Space Grotesk, bone on ink, 13:1.
- Forbidden: "Welcome to our portfolio", "Check out our amazing project", emoji, lorem, AI-flavored adjectives ("delve", "tapestry", "robust").
- Allowed: "the network that pretends not to exist." "We hide in plain sight." "THE DOOR ASKS." "CHANNEL OPEN." "the network remembers."
- Denial: **ACCESS DENIED** — same words as the app.

Write-up quote (the real 100 words, to be typeset in §19):

> PROJECT SANCTUM is a network that refuses to look like one. It hides behind an abandoned shortwave blog; a three-click ritual and a four-digit frequency open the door. Inside, three rites — Signal, Focus, Choice — test how you listen, hold and decide… Press ~ and everything vanishes. The Empire surveils the obvious. We hide in plain sight.

---

## 7. Team (locked)

| Name | Role | One-line |
|---|---|---|
| **Aarav Choudhary** | Product & Story | Wrote the world. Holds the 8-minute hook. |
| **Jeehan Kwatra** | Design & Motion | The steel, the grain, the motion law. |
| **Anuj Phulera** | Engineering | The two-layer house, the rites, the persistence. |

School: Colonels Central Academy · Event: TS '26 Creative · Tech Syndicate.

Avatars: generate in Phase 6 as kyber-etched portrait plates (not photoreal headshots unless the team supplies them).

---

## 8. File / download contract

Serve from `/files/` (copied into `public/files/` at scaffold).

Groups:
- **Watch** — `SANCTUM-Promo.mp4`
- **Present** — `SANCTUM-Deck.pptx`
- **Read** — write-ups, UI/UX docs, judges' guides (deck + app)
- **Explore** — live app, live deck, both repos

Each card: type icon · filename · one-line · Download (real `Content-Disposition` via static file, or an `<a download>`).

Viewers:
- Video: native `<video controls poster>` in-page.
- PDF: `<iframe>` + "open in new tab".
- PPTX: download card only (no fake renderer).

---

## 9. The 9 phases (how we actually build)

Each phase ends with: **eyes-verified screenshot (1366×768)** + **logbook entry** + **short report** + wait for **continue**.

### Phase 1 — Foundation
Scaffold Vite + React + TS. Install the locked stack. Tokens, fonts, grain/scan/vignette overlays, HUD header stub, kyber cursor, `vite.config` host/allowedHosts. Live preview on `0.0.0.0`. `scripts/shoot.mjs` started. `PLANNING/LOGBOOK.md` already exists.

**Done when:** a dark ink page with Cinzel "SANCTUM", grain, cursor, and a working preview URL.

### Phase 2 — Decoy + Password + Seal
3D title-card decoy (R3F portal ring). Three knocks on the ring. THE DOOR ASKS. `0528` / ACCESS DENIED. `?unlock`. Seal: sigil draw, honest counter (fonts.ready + min 1.5s, wall-clock lift), status lines, iris-open. Persist unlock.

**Done when:** a stranger sees a movie title; a worthy one types 0528 and the veil lifts.

### Phase 3 — Home + Story + Journey
Hero, narrative story, four-act timeline. HUD nav starts working.

**Done when:** the first three sections feel like a film, not a landing page.

### Phase 4 — Two Decoys + Ritual + Gate
Side-by-side decoy explainer. Playable 3-knock widget. Gate showcase frame.

**Done when:** a judge who never opened the app still understands the joke.

### Phase 5 — Trials + Ceremony + Hub + Panic
Three rite cards. Ceremony explainer + sample sigil. Six hub tools. Real `~` panic gag.

**Done when:** pressing `~` actually hides the site.

### Phase 6 — Craft + Brand + Team
Stack, tokens-as-UI, three member cards + generated portrait plates.

**Done when:** the site looks like it was designed by the same three people who designed SANCTUM.

### Phase 7 — Showcase + Files + Viewers
Headless screenshots of both live sites → framed mock browsers that redirect. Download cards wired to real files. Promo video in-page. PDFs in-page.

**Done when:** a judge can watch, present, read, and open both lives without leaving.

### Phase 8 — Repos + Write-Ups + Process + Contact + Footer + /handoff
Remaining sections. Pitch-closer page. Footer reset. Polish pass. Reduced-motion + keyboard + mobile.

**Done when:** all 22 + handoff exist, and a 1366×768 walk does not break.

### Phase 9 — Deploy + QR + Scrub
Vercel deploy. Generate QR to the live URL. Drop it on `/handoff` and into `/files`. Remove Arena commit-msg hook. Squash to one clean commit. Zero AI trace.

**Done when:** a printed QR opens the decoy, and the public repo looks human.

---

## 10. Definition of done (the brief's checklist + ours)

- [ ] Opens as a decoy; `0528` unlocks; wrong code denies with a shake.
- [ ] Banger loading screen (sigil + honest counter + status + iris).
- [ ] Portfolio home with hero, pitch line, team, nav.
- [ ] All ~22 sections present and styled.
- [ ] Showcase frames show real screenshots and redirect on click.
- [ ] Every deliverable file downloadable from Files.
- [ ] Promo video plays in-page; PDFs view in-page.
- [ ] Team cards (Aarav / Jeehan / Anuj) with roles.
- [ ] Both GitHub repo links present.
- [ ] Matches the SANCTUM design system exactly.
- [ ] Responsive, custom cursor, reduced-motion, keyboard.
- [ ] `/handoff` + QR for the pitch closer.
- [ ] `~` panic really hides the site.
- [ ] `?unlock` and `?pitch` shortcuts work.
- [ ] Deployed to Vercel with a clean URL.
- [ ] Zero AI/tooling trace in the public repo.

---

## 11. Continue protocol

You say **go** → Phase 1.
You say **continue** → next phase.
Each phase ships something visible, screenshots itself, writes the logbook, and stops.
If a phase is too large for one turn it splits (e.g. 7a screenshots, 7b viewers) and says so.

The sandbox forgets. The logbook does not.

---

*The portfolio is the door to everything the team made. Make it beautiful enough that the judges want to walk through it.*
