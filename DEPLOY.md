# Deploy SANCTUM — The Portfolio

The site is ready to host. Do **not** generate the QR until this URL exists. After Vercel gives you the link, send it here and I will mint the QR for the last pitch slide.

## The easy way (Vercel + this GitHub repo)

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Import **`AlphabuggOp/TS-CREATIVE-THEPROTFOLIO`**.
3. Leave the **Root Directory** as the repo root. `vercel.json` already points the build at `site/`.
4. Framework preset: Vite (or leave it — the build command is set).
5. Environment variables: none. It is fully static.
6. Deploy.
7. Copy the production URL (something like `https://ts-creative-theprotfolio.vercel.app`) and send it back.

If Vercel asks for commands, these are already in `vercel.json`:

```
install:  npm install --prefix site
build:    npm run build --prefix site
output:   site/dist
```

## Local production check (already done in this chat when we say so)

```bash
cd site
npm install
npm run build
npm run preview -- --host 0.0.0.0
```

## After you send the live URL

I will:

- Generate a SANCTUM-marked QR pointing at that URL
- Drop it on the hangar floor (optional) and as `site/public/files/SANCTUM-QR.png` so you can drop it on the last pitch slide
- That is the last phase. Not before.

## How judges enter

- Land on the title card. Three knocks on the ring. Code **`0528`**.
- Demo skip: `https://YOUR-URL/?unlock`
- Panic: `~`
