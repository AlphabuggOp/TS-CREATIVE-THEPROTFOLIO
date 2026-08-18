import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useState, type ReactElement } from 'react'
import {
  ACTS,
  APP_WRITEUP,
  DECK_WRITEUP,
  EXHIBITS,
  FILES,
  HUB,
  LINKS,
  STACK,
  TEAM,
  TOKENS,
  TRIALS,
  type ChamberId,
} from '../data/content'
import { knockTick } from '../lib/audio'
import { useVault } from '../store'
import BrowserFrame from './BrowserFrame'
import Sigil from './Sigil'

function isChamber(id: string | null): id is ChamberId {
  return EXHIBITS.some((e) => e.id === id)
}

function RitualDemo() {
  const [n, setN] = useState(0)
  return (
    <div className="ritual">
      <button
        type="button"
        className="ring-btn"
        data-hot
        onClick={() => {
          setN((v) => Math.min(3, v + 1))
          knockTick()
        }}
        aria-label="Knock the ring"
      >
        <Sigil size={72} />
        <i className="glow" style={{ opacity: 0.2 + n * 0.25 }} />
      </button>
      <div>
        <p className="t-mono t-ember">{n === 0 ? 'FIND THE RING' : n < 3 ? `${n} / 3` : 'THE DOOR ASKS.'}</p>
        <p className="t-dim" style={{ marginTop: 8, lineHeight: 1.65 }}>
          In the app the ring lives in the photo drawer — <em>IMG_0528 — DO NOT</em>. Three knocks.
          Always three. Then the frequency the blog already taught you.
        </p>
        {n >= 3 && (
          <p className="t-mono t-kyber" style={{ marginTop: 12, letterSpacing: '.28em' }}>
            0528
          </p>
        )}
      </div>
    </div>
  )
}

function Lives() {
  return (
    <div className="chamber-body">
      <p className="kicker">01 · TWO DISGUISES</p>
      <h2 className="section-title">THE LIVES</h2>
      <p className="lede">
        The cover is the concept. Each frame is the first thing a stranger sees. Click the chrome
        and you leave this hangar for the live network.
      </p>
      <div className="duo" style={{ marginTop: 28 }}>
        <BrowserFrame
          url={LINKS.app}
          href={LINKS.app}
          title="SIGNAL & STATIC"
          shot="/shots/app.png"
          caption="ts-creative.vercel.app · 0528"
        />
        <BrowserFrame
          url={LINKS.deck}
          href={LINKS.deck}
          title="ANDORIA"
          shot="/shots/deck.png"
          caption="project-sanctum-ppt.vercel.app · HIDE"
        />
      </div>
      <div className="duo" style={{ marginTop: 18 }}>
        <article className="card">
          <p className="t-mono t-kyber">THE APP</p>
          <h3 className="t-display">SIGNAL &amp; STATIC</h3>
          <p>Abandoned shortwave blog. Est. 2008. Last log 14 Mar 2013. Signed — m. Code <b>0528</b>.</p>
        </article>
        <article className="card">
          <p className="t-mono t-kyber">THE DECK</p>
          <h3 className="t-display">ANDORIA DEEP-SKY</h3>
          <p>Dead astronomy archive. Est. 1998. Webring #481. Fig. 5 is the door. Code <b>HIDE</b>.</p>
        </article>
      </div>
    </div>
  )
}

function Theater() {
  return (
    <div className="chamber-body">
      <p className="kicker">02 · SIXTY SECONDS</p>
      <h2 className="section-title">THE THEATER</h2>
      <video
        className="player"
        controls
        playsInline
        preload="metadata"
        poster="/shots/promo.jpg"
        src="/files/SANCTUM-Promo.mp4"
      />
      <p className="t-mono t-dim" style={{ marginTop: 12 }}>
        <a href="/files/SANCTUM-Promo.mp4" download data-hot>
          DOWNLOAD THE PROMO →
        </a>
      </p>
    </div>
  )
}

function Vault() {
  return (
    <div className="chamber-body">
      <p className="kicker">03 · THE DRIVE, HUNG</p>
      <h2 className="section-title">THE VAULT</h2>
      <p className="lede">Every deliverable that used to live in a folder. Real downloads.</p>
      <div className="file-list">
        {FILES.map((f) => (
          <a key={f.name} className="file" href={f.href} download data-hot>
            <span className="t-mono t-ember">{f.group}</span>
            <strong>{f.name}</strong>
            <em>{f.line}</em>
            <b className="t-mono">DOWNLOAD</b>
          </a>
        ))}
      </div>
    </div>
  )
}

function Dossier() {
  const [doc, setDoc] = useState('/files/TS26_CCA_WRITEUP.pdf')
  return (
    <div className="chamber-body">
      <p className="kicker">04 · READ IN PLACE</p>
      <h2 className="section-title">THE DOSSIER</h2>
      <blockquote className="quote">
        <p>{APP_WRITEUP}</p>
        <footer className="t-mono">TS26_CCA_WRITEUP · THE APP</footer>
      </blockquote>
      <blockquote className="quote">
        <p>{DECK_WRITEUP}</p>
        <footer className="t-mono">SANCTUM-WriteUp · THE DECK</footer>
      </blockquote>
      <div className="doc-tabs">
        {FILES.filter((f) => f.kind === 'pdf').map((f) => (
          <button
            key={f.href}
            type="button"
            data-hot
            className={doc === f.href ? 'on' : ''}
            onClick={() => setDoc(f.href)}
          >
            {f.name.replace('.pdf', '')}
          </button>
        ))}
      </div>
      <iframe className="pdf" title="Document" src={doc} />
      <p className="t-mono" style={{ marginTop: 12 }}>
        <a href={doc} target="_blank" rel="noreferrer" data-hot>
          OPEN IN NEW TAB →
        </a>
      </p>
    </div>
  )
}

function Rite() {
  return (
    <div className="chamber-body">
      <p className="kicker">05 · SECURITY THROUGH LORE</p>
      <h2 className="section-title">THE RITE</h2>
      <p className="lede">
        After the Purge every public channel is watched. The HCET Syndicate cannot recruit in the
        open. So SANCTUM hides its front door inside a dead website — and makes finding that door
        the filter. The password is taught, never told.
      </p>
      <RitualDemo />
      <div className="acts">
        {ACTS.map((a) => (
          <article key={a.id} className="card">
            <p className="t-mono t-ember">{a.act}</p>
            <h3 className="t-display">{a.title}</h3>
            <p>{a.body}</p>
          </article>
        ))}
      </div>
      <div className="cards3" style={{ marginTop: 16 }}>
        {TRIALS.map((t) => (
          <article key={t.id} className="card">
            <p className="t-mono t-kyber">{t.kicker}</p>
            <h3 className="t-display">{t.title}</h3>
            <p>{t.body}</p>
          </article>
        ))}
      </div>
      <p className="lede">
        Press <span className="key">~</span> anywhere and the hangar vanishes back into the title
        card. Press it again to return.
      </p>
    </div>
  )
}

function Council() {
  return (
    <div className="chamber-body">
      <p className="kicker">06 · COLONELS CENTRAL ACADEMY</p>
      <h2 className="section-title">THE COUNCIL</h2>
      <div className="cards3">
        {TEAM.map((m) => (
          <article key={m.name} className="card team-card">
            <div className="plate">
              <img src={m.plate} alt="" />
            </div>
            <h3 className="t-display">{m.name}</h3>
            <p className="t-mono t-kyber">{m.role}</p>
            <p>{m.line}</p>
          </article>
        ))}
      </div>
      <p className="lede">TS ’26 Creative · Tech Syndicate. Walk us through the app.</p>
    </div>
  )
}

function Forge() {
  return (
    <div className="chamber-body">
      <p className="kicker">07 · MOTION MUST MEAN SOMETHING</p>
      <h2 className="section-title">THE FORGE</h2>
      <div className="cards3">
        {STACK.map((s) => (
          <article key={s.name} className="card">
            <h3>{s.name}</h3>
            <p>{s.why}</p>
          </article>
        ))}
      </div>
      <div className="swatches">
        {TOKENS.map((t) => (
          <article key={t.name}>
            <i style={{ background: t.hex }} />
            <b className="t-mono">{t.name}</b>
            <span className="t-mono">{t.hex}</span>
            <em>{t.use}</em>
          </article>
        ))}
      </div>
      <div className="cards3" style={{ marginTop: 16 }}>
        {HUB.map((h) => (
          <article key={h.title} className="card">
            <h3 className="t-display">{h.title}</h3>
            <p>{h.body}</p>
          </article>
        ))}
      </div>
      <div className="duo" style={{ marginTop: 16 }}>
        <a className="card" href={LINKS.appRepo} target="_blank" rel="noreferrer" data-hot>
          <p className="t-mono t-kyber">APPLICATION</p>
          <h3>AlphabuggOp / ts-creative</h3>
          <p>The hidden network. Fully static.</p>
        </a>
        <a className="card" href={LINKS.deckRepo} target="_blank" rel="noreferrer" data-hot>
          <p className="t-mono t-kyber">PITCH DECK</p>
          <h3>AlphabuggOp / Ts-Creative-PPT</h3>
          <p>Twelve live WebGL slides behind Andoria.</p>
        </a>
      </div>
    </div>
  )
}

const CHAMBERS: Record<ChamberId, () => ReactElement> = {
  lives: Lives,
  theater: Theater,
  vault: Vault,
  dossier: Dossier,
  rite: Rite,
  council: Council,
  forge: Forge,
}

export default function Hangar() {
  const visitor = useVault((s) => s.visitor)
  const reset = useVault((s) => s.reset)
  const [chamber, setChamber] = useState<ChamberId | null>(null)

  const open = useCallback((id: ChamberId) => {
    setChamber(id)
    window.history.replaceState(null, '', `#${id}`)
  }, [])

  const close = useCallback(() => {
    setChamber(null)
    window.history.replaceState(null, '', window.location.pathname + window.location.search)
  }, [])

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (isChamber(hash)) setChamber(hash)
    const onHash = () => {
      const h = window.location.hash.replace('#', '')
      setChamber(isChamber(h) ? h : null)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('hashchange', onHash)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('hashchange', onHash)
      window.removeEventListener('keydown', onKey)
    }
  }, [close])

  return (
    <div className="hangar">
      <header className="hud">
        <button type="button" className="hud-brand" data-hot onClick={close}>
          <Sigil size={22} />
          <span className="t-display">SANCTUM</span>
        </button>
        <nav className="hud-nav">
          {EXHIBITS.map((e) => (
            <button
              key={e.id}
              type="button"
              data-hot
              className={chamber === e.id ? 'on' : ''}
              onClick={() => open(e.id)}
            >
              {e.title.replace('THE ', '')}
            </button>
          ))}
        </nav>
        <p className="hud-who t-mono t-dim">
          {visitor ? `WELCOME BACK, ${visitor.toUpperCase()}` : 'TEAM CCA · TS ’26'}
        </p>
      </header>

      <div className="floor">
        <div className="floor-hero">
          <p className="kicker">THE ARCHIVE · TEAM CCA</p>
          <h1 className="hero-word">SANCTUM</h1>
          <p className="hero-line t-mono t-kyber">the network that pretends not to exist</p>
          <p className="lede floor-lede">
            Not a Drive folder. Seven exhibits. The lives, the promo, the files, the documents, the
            rite, the council, the forge. Pick one.
          </p>
        </div>

        <div className="exhibits">
          <button type="button" className="exhibit span2" data-hot onClick={() => open('lives')}>
            <div className="exhibit-shots">
              <img src="/shots/app.png" alt="" />
              <img src="/shots/deck.png" alt="" />
            </div>
            <div className="exhibit-meta">
              <span className="t-mono t-ember">01</span>
              <h2 className="t-display">THE LIVES</h2>
              <p>Both decoys. Click through.</p>
            </div>
          </button>

          {EXHIBITS.filter((e) => e.id !== 'lives').map((e) => (
            <button key={e.id} type="button" className="exhibit" data-hot onClick={() => open(e.id)}>
              {e.id === 'theater' && <img className="exhibit-still" src="/shots/promo.jpg" alt="" />}
              {e.id === 'forge' && <img className="exhibit-still" src="/shots/globe.jpg" alt="" />}
              {e.id === 'council' && (
                <div className="exhibit-plates">
                  {TEAM.map((m) => (
                    <img key={m.name} src={m.plate} alt="" />
                  ))}
                </div>
              )}
              <span className="t-mono t-ember">{e.no}</span>
              <h2 className="t-display">{e.title}</h2>
              <p>{e.sub}</p>
              <b className="t-mono">ENTER →</b>
            </button>
          ))}
        </div>

        <footer className="foot">
          <p className="t-display">the network remembers</p>
          <p className="t-mono t-dim">TEAM CCA · PROJECT SANCTUM · TS ’26 CREATIVE</p>
          <button type="button" className="reset t-mono" onClick={reset} data-hot>
            forget this visit
          </button>
        </footer>
      </div>

      <AnimatePresence>
        {chamber && (
          <motion.div
            key={chamber}
            className="chamber"
            initial={{ clipPath: 'circle(0% at 50% 8%)' }}
            animate={{ clipPath: 'circle(160% at 50% 8%)' }}
            exit={{ clipPath: 'circle(0% at 50% 8%)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {(() => {
              const View = CHAMBERS[chamber]
              return (
                <>
                  <button type="button" className="back t-mono" data-hot onClick={close}>
                    ← THE HANGAR
                  </button>
                  <View />
                </>
              )
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{css}</style>
    </div>
  )
}

const css = `
.hangar { min-height: 100vh; }
.hud {
  position: sticky; top: 0; z-index: 30;
  display: flex; align-items: center; gap: 18px;
  padding: 14px 22px;
  background: linear-gradient(180deg, rgba(7,9,15,.94), rgba(7,9,15,.4) 80%, transparent);
  backdrop-filter: blur(8px);
}
.hud-brand {
  display: flex; align-items: center; gap: 10px;
  letter-spacing: .2em; font-size: 14px; font-weight: 700;
}
.hud-nav { display: flex; gap: 8px; flex: 1; justify-content: center; flex-wrap: wrap; }
.hud-nav button {
  font-family: var(--font-mono); font-size: 10px; letter-spacing: .18em;
  color: var(--ghost); padding: 6px 8px;
}
.hud-nav button:hover, .hud-nav button.on { color: var(--kyber); }
.hud-who { font-size: 9px; letter-spacing: .18em; }
.floor { width: min(1180px, calc(100% - 36px)); margin: 0 auto; padding: 12px 0 80px; }
.exhibit-still { width: 100%; height: 92px; object-fit: cover; object-position: center; margin: -22px -22px 10px; width: calc(100% + 44px); }
.floor-hero { padding: 24px 0 36px; }
.hero-word {
  font-family: var(--font-display); font-weight: 900;
  font-size: clamp(56px, 11vw, 128px); letter-spacing: .14em; line-height: .9;
  color: #eef6f8; text-shadow: 0 0 28px rgba(103,232,249,.3);
}
.hero-line { margin-top: 14px; letter-spacing: .32em; font-size: 13px; }
.floor-lede { max-width: 62ch; }
.exhibits {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px;
}
.exhibit {
  text-align: left; padding: 22px;
  border: 1px solid rgba(103,232,249,.14);
  background: rgba(11,16,28,.7);
  min-height: 180px;
  display: flex; flex-direction: column; gap: 8px;
  transition: transform .35s var(--ease-out), border-color .35s, box-shadow .35s;
}
.exhibit:hover {
  transform: translateY(-6px);
  border-color: rgba(103,232,249,.5);
  box-shadow: 0 20px 60px rgba(0,0,0,.4), 0 0 30px rgba(103,232,249,.1);
}
.exhibit h2 { letter-spacing: .12em; font-size: 22px; }
.exhibit p { color: var(--ghost); font-size: 14px; line-height: 1.5; }
.exhibit b { margin-top: auto; font-size: 10px; letter-spacing: .2em; color: var(--ember); }
.span2 { grid-column: span 2; padding: 0; overflow: hidden; min-height: 280px; }
.exhibit-shots { display: grid; grid-template-columns: 1fr 1fr; height: 210px; }
.exhibit-shots img { width: 100%; height: 100%; object-fit: cover; object-position: top; }
.exhibit-meta { padding: 16px 22px 20px; display: flex; flex-direction: column; gap: 6px; }
.chamber {
  position: fixed; inset: 0; z-index: 24;
  background: var(--ink);
  overflow: auto;
  padding: 78px 0 60px;
}
.chamber-body { width: min(1180px, calc(100% - 36px)); margin: 0 auto; }
.back {
  display: block; width: min(1180px, calc(100% - 36px)); margin: 0 auto 16px;
  font-size: 10px; letter-spacing: .22em; color: var(--ember); text-align: left;
}
.acts, .cards3, .duo, .swatches, .file-list { display: grid; gap: 14px; margin-top: 28px; }
.acts { grid-template-columns: repeat(4, 1fr); }
.cards3 { grid-template-columns: repeat(3, 1fr); }
.duo { grid-template-columns: 1fr 1fr; }
.card, .duo article {
  padding: 22px; border: 1px solid rgba(103,232,249,.12); background: rgba(11,16,28,.65);
}
.card h3, .duo h3 { margin: 8px 0 10px; letter-spacing: .12em; font-size: 20px; }
.card p, .duo p { color: var(--ghost); line-height: 1.6; font-size: 14px; }
.ritual {
  margin-top: 28px; display: grid; grid-template-columns: 140px 1fr; gap: 24px;
  align-items: center; padding: 24px; border: 1px solid rgba(103,232,249,.16);
  background: rgba(11,16,28,.7);
}
.ring-btn { position: relative; width: 110px; height: 110px; display: grid; place-items: center; }
.ring-btn .glow {
  position: absolute; inset: 8px; border-radius: 50%;
  box-shadow: 0 0 30px rgba(103,232,249,.55); pointer-events: none;
}
.key {
  display: inline-block; padding: 2px 10px; border: 1px solid rgba(232,180,76,.5);
  color: var(--ember); font-family: var(--font-mono);
}
.swatches { grid-template-columns: repeat(7, 1fr); }
.swatches article { display: grid; gap: 6px; }
.swatches i { display: block; height: 54px; border: 1px solid rgba(255,255,255,.08); }
.swatches b { font-size: 11px; letter-spacing: .16em; }
.swatches span, .swatches em { font-size: 10px; color: var(--ghost); font-style: normal; }
.team-card { text-align: center; }
.plate { display: grid; place-items: center; height: 140px; margin-bottom: 8px; }
.plate img { width: 120px; height: 120px; object-fit: cover; border-radius: 50%; }
.exhibit-plates { display: flex; gap: 8px; margin: -6px 0 6px; }
.exhibit-plates img { width: 42px; height: 42px; object-fit: cover; border-radius: 50%; border: 1px solid rgba(103,232,249,.25); }
.file-list { grid-template-columns: 1fr; }
.file {
  display: grid; grid-template-columns: 88px minmax(0,1fr) auto; grid-template-rows: auto auto;
  column-gap: 18px; row-gap: 4px; align-items: center;
  padding: 16px 18px; border: 1px solid rgba(103,232,249,.12); background: rgba(11,16,28,.65);
}
.file span { grid-column: 1; grid-row: 1 / span 2; font-size: 10px; letter-spacing: .16em; }
.file strong { grid-column: 2; grid-row: 1; }
.file em { grid-column: 2; grid-row: 2; color: var(--ghost); font-style: normal; font-size: 13px; }
.file b { grid-column: 3; grid-row: 1 / span 2; font-size: 10px; letter-spacing: .18em; color: var(--kyber); }
.player { width: 100%; margin-top: 24px; border: 1px solid rgba(103,232,249,.16); background: #000; }
.doc-tabs { display: flex; flex-wrap: wrap; gap: 8px; margin: 24px 0 12px; }
.doc-tabs button {
  padding: 8px 10px; border: 1px solid rgba(103,232,249,.16);
  font-family: var(--font-mono); font-size: 9px; letter-spacing: .12em; color: var(--ghost);
}
.doc-tabs button.on { color: var(--kyber); border-color: rgba(103,232,249,.5); }
.pdf { width: 100%; height: 64vh; border: 1px solid rgba(103,232,249,.16); background: #111; }
.quote {
  margin-top: 22px; padding: 24px; border-left: 2px solid var(--kyber);
  background: rgba(11,16,28,.65); font-size: 16px; line-height: 1.75;
}
.quote footer { margin-top: 14px; font-size: 10px; letter-spacing: .2em; color: var(--ghost); }
.foot { padding: 64px 0 12px; text-align: center; }
.foot .t-display { letter-spacing: .2em; font-size: 20px; margin-bottom: 10px; }
.reset { margin-top: 18px; font-size: 10px; letter-spacing: .2em; color: var(--ghost); }
@media (max-width: 980px) {
  .exhibits, .acts, .cards3, .duo, .swatches { grid-template-columns: 1fr; }
  .span2 { grid-column: auto; }
  .hud-who, .hud-nav { display: none; }
  .ritual { grid-template-columns: 1fr; }
  .file { grid-template-columns: 1fr; }
  .file span, .file b { grid-row: auto; }
  .exhibit-shots { height: 160px; }
}
`
