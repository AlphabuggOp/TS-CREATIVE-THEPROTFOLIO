import { useEffect, useState, type ReactNode } from 'react'
import {
  ACTS,
  APP_WRITEUP,
  DECK_WRITEUP,
  FILES,
  HUB,
  LINKS,
  STACK,
  TEAM,
  TOKENS,
  TRIALS,
} from '../data/content'
import { useVault } from '../store'
import { knockTick } from '../lib/audio'
import BrowserFrame from './BrowserFrame'
import Hud from './Hud'
import Sigil from './Sigil'

function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string
  kicker: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="section" id={id}>
      <div className="wrap">
        <p className="kicker">{kicker}</p>
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  )
}

function RitualDemo() {
  const [n, setN] = useState(0)
  const knock = () => {
    const next = Math.min(3, n + 1)
    setN(next)
    knockTick()
  }
  return (
    <div className="ritual hud-frame">
      <button type="button" className="ring-btn" data-hot onClick={knock} aria-label="Knock the ring">
        <Sigil size={72} />
        <i className="glow" style={{ opacity: 0.2 + n * 0.25 }} />
      </button>
      <div>
        <p className="t-mono t-ember">{n === 0 ? 'FIND THE RING' : n < 3 ? `${n} / 3` : 'THE DOOR ASKS.'}</p>
        <p className="t-dim" style={{ marginTop: 8, lineHeight: 1.6 }}>
          In the app the ring lives in the photo drawer — <em>IMG_0528 — DO NOT</em>. Three knocks.
          Always three. Then the frequency the blog already taught you.
        </p>
        {n >= 3 && <p className="t-mono t-kyber" style={{ marginTop: 12, letterSpacing: '.28em' }}>0528</p>}
      </div>
      <style>{`
        .ritual {
          margin-top: 36px; display: grid; grid-template-columns: 140px 1fr; gap: 28px;
          align-items: center; padding: 28px; border: 1px solid rgba(103,232,249,.16);
          background: rgba(11,16,28,.7);
        }
        .ring-btn { position: relative; width: 110px; height: 110px; display: grid; place-items: center; }
        .ring-btn .glow {
          position: absolute; inset: 8px; border-radius: 50%;
          box-shadow: 0 0 30px rgba(103,232,249,.55); pointer-events: none;
        }
        @media (max-width: 640px) { .ritual { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  )
}

export default function Archive() {
  const visitor = useVault((s) => s.visitor)
  const reset = useVault((s) => s.reset)
  const [doc, setDoc] = useState('/files/TS26_CCA_WRITEUP.pdf')

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div className="archive">
      <Hud visitor={visitor} />

      <section className="section hero" id="home">
        <div className="wrap hero-grid">
          <div>
            <p className="kicker">PROJECT SANCTUM · TEAM CCA</p>
            <h1 className="hero-word">SANCTUM</h1>
            <p className="hero-line t-mono t-kyber">the network that pretends not to exist</p>
            <p className="lede">
              After the Purge every public channel is watched. A rebellion still needs people. So the
              HCET Syndicate hid the front door inside a dead website — and made finding that door
              the filter. This archive is everything Team CCA built for TS ’26 Creative: the live
              network, the living deck, the promo, the documents, the code.
            </p>
            <div className="cta-row">
              <a className="btn" href="#showcase" data-hot>EXPLORE THE LIVES</a>
              <a className="btn ghost" href="#files" data-hot>TAKE THE FILES</a>
            </div>
          </div>
          <div className="hero-mark">
            <Sigil size={220} />
          </div>
        </div>
      </section>

      <Section id="story" kicker="02 · THE WORLD" title="THE STORY">
        <p className="lede">
          The Jedi are gone. The Empire logs every frequency. Survivors and sympathizers — organized
          as the <strong>HCET Syndicate</strong> — cannot post a call for recruits without it being
          found and burned within hours.
        </p>
        <p className="lede">
          The answer is not a hidden URL. The answer is a site that <strong>refuses to look like a
          network</strong>. It looks like an abandoned blog. The door itself — the act of noticing —
          is the interview.
        </p>
      </Section>

      <Section id="journey" kicker="03 · FOUR ACTS" title="THE JOURNEY">
        <div className="acts">
          {ACTS.map((a) => (
            <article key={a.id} className="act hud-frame">
              <p className="t-mono t-ember">{a.act}</p>
              <h3 className="t-display">{a.title}</h3>
              <p>{a.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="decoys" kicker="04 · A SYSTEM, NOT A GIMMICK" title="THE TWO DECOYS">
        <p className="lede">
          The team built <strong>two</strong> disguises to prove the cover is a format. The Empire
          that burns one dead website still has no idea the other one is a door.
        </p>
        <div className="duo">
          <article>
            <p className="t-mono t-kyber">THE APP</p>
            <h3 className="t-display">SIGNAL &amp; STATIC</h3>
            <p className="t-dim">Abandoned shortwave blog. Est. 2008. Last log 14 Mar 2013. Signed — m.</p>
            <p>The post <em>the hum at 0528</em> teaches the frequency. Code: <b>0528</b>.</p>
          </article>
          <article>
            <p className="t-mono t-kyber">THE DECK</p>
            <h3 className="t-display">ANDORIA DEEP-SKY</h3>
            <p className="t-dim">Dead astronomy archive. Est. 1998. Webring member #481. Hosted on Geocities.</p>
            <p>Fig. 5 is the unidentified object. Code: <b>HIDE</b>.</p>
          </article>
        </div>
      </Section>

      <Section id="ritual" kicker="05 · SECURITY THROUGH LORE" title="THE UNLOCK RITUAL">
        <p className="lede">
          The password is taught, never told. Read the blog. Open the photos. Knock the wrong frame
          three times. Speak the number the way you remember a doorbell.
        </p>
        <RitualDemo />
      </Section>

      <Section id="gate" kicker="06 · ACT 1" title="THE GATE">
        <p className="lede">
          A scroll is a journey. The Gate is six hundred and twenty viewport-heights of cinema: a
          procedural portal, a hyperspace tunnel, a transmission that resolves only if you stay with
          it. Sound fires on scroll crossings, both directions.
        </p>
      </Section>

      <Section id="trials" kicker="07 · ACT 2" title="THE TRIALS">
        <div className="cards3">
          {TRIALS.map((t) => (
            <article key={t.id} className="card hud-frame">
              <p className="t-mono t-kyber">{t.kicker}</p>
              <h3 className="t-display">{t.title}</h3>
              <p>{t.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="ceremony" kicker="08 · THE RECORD" title="THE CEREMONY">
        <p className="lede">
          When all three rites are cleared the order stops testing and starts recording. Your score
          (0–9) is minted into a <strong>Rank</strong> — Youngling, Padawan, or Knight — a{' '}
          <strong>Callsign</strong>, and a <strong>Sigil</strong> grown from how you actually played.
          It persists. Come back and it still knows your name.
        </p>
      </Section>

      <Section id="hub" kicker="09 · ACT 3" title="THE SANCTUM HUB">
        <div className="cards3">
          {HUB.map((h) => (
            <article key={h.title} className="card">
              <h3 className="t-display">{h.title}</h3>
              <p>{h.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="panic" kicker="10 · GHOST PROTOCOL" title="THE PANIC KEY">
        <p className="lede">
          Press <span className="key">~</span> anywhere inside the network and the whole thing
          vanishes back into the dead surface. Security theatre, made literal. Press it again to
          return. Try it here.
        </p>
      </Section>

      <Section id="craft" kicker="11 · ENGINEERED TO FEEL EXPENSIVE" title="THE CRAFT">
        <div className="cards3">
          {STACK.map((s) => (
            <article key={s.name} className="card">
              <h3>{s.name}</h3>
              <p>{s.why}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="brand" kicker="12 · ONE LAW" title="THE BRAND">
        <p className="lede">
          Motion must mean something. Nothing shakes for no reason. Cinzel for the sacred, Space
          Grotesk for the honest, IBM Plex Mono for the machine.
        </p>
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
      </Section>

      <Section id="team" kicker="13 · COLONELS CENTRAL ACADEMY" title="THE TEAM">
        <div className="cards3">
          {TEAM.map((m) => (
            <article key={m.name} className="card team-card hud-frame">
              <div className="plate"><Sigil size={54} /></div>
              <h3 className="t-display">{m.name}</h3>
              <p className="t-mono t-kyber">{m.role}</p>
              <p>{m.line}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="showcase" kicker="14 · THE HANGAR" title="LIVE DEMOS">
        <p className="lede">
          Each frame is the first thing a stranger sees — the decoy. Click the chrome and you leave
          this archive for the live network.
        </p>
        <div className="duo" style={{ marginTop: 32 }}>
          <BrowserFrame
            url={LINKS.app}
            href={LINKS.app}
            title="SIGNAL & STATIC"
            shot="/shots/app.png"
            caption="ts-creative.vercel.app · code 0528"
          />
          <BrowserFrame
            url={LINKS.deck}
            href={LINKS.deck}
            title="ANDORIA"
            shot="/shots/deck.png"
            caption="project-sanctum-ppt.vercel.app · code HIDE"
          />
        </div>
      </Section>

      <Section id="files" kicker="15 · THE VAULT" title="THE FILES">
        <p className="lede">Every deliverable that used to live in a Drive folder. Real downloads.</p>
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
      </Section>

      <Section id="video" kicker="16 · THE THEATER" title="THE VIDEO">
        <video
          className="player"
          controls
          playsInline
          preload="metadata"
          src="/files/SANCTUM-Promo.mp4"
        />
      </Section>

      <Section id="documents" kicker="17 · READ IN PLACE" title="THE DOCUMENTS">
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
      </Section>

      <Section id="repos" kicker="18 · SOURCE" title="THE REPOS">
        <div className="duo">
          <a className="card hud-frame" href={LINKS.appRepo} target="_blank" rel="noreferrer" data-hot>
            <p className="t-mono t-kyber">APPLICATION</p>
            <h3>AlphabuggOp / ts-creative</h3>
            <p>The hidden network. Vite + React + TypeScript. Fully static.</p>
          </a>
          <a className="card hud-frame" href={LINKS.deckRepo} target="_blank" rel="noreferrer" data-hot>
            <p className="t-mono t-kyber">PITCH DECK</p>
            <h3>AlphabuggOp / Ts-Creative-PPT</h3>
            <p>Twelve live WebGL slides behind Andoria Deep-Sky Archive.</p>
          </a>
        </div>
      </Section>

      <Section id="writeups" kicker="19 · ONE HUNDRED WORDS" title="THE WRITE-UPS">
        <blockquote className="quote">
          <p>{APP_WRITEUP}</p>
          <footer className="t-mono">TS26_CCA_WRITEUP · THE APP</footer>
        </blockquote>
        <blockquote className="quote">
          <p>{DECK_WRITEUP}</p>
          <footer className="t-mono">SANCTUM-WriteUp · THE DECK</footer>
        </blockquote>
      </Section>

      <Section id="process" kicker="20 · HOW IT WAS BUILT" title="THE PROCESS">
        <ol className="process">
          <li><b>The cover first.</b> SIGNAL &amp; STATIC had to survive as a blog before it was allowed to be a door.</li>
          <li><b>Then the second cover.</b> Andoria proved the disguise was a system.</li>
          <li><b>Then the rites.</b> Signal, Focus, Choice — playable, scored, remembered.</li>
          <li><b>Then the record.</b> Ceremony, Field Log, nineteen quests, a sigil that is yours.</li>
          <li><b>Then this archive.</b> So a judge never has to open a Drive folder.</li>
        </ol>
      </Section>

      <Section id="contact" kicker="21 · WALK US THROUGH IT" title="CONTACT">
        <p className="lede">
          Team CCA — Aarav Choudhary, Jeehan Kwatra, Anuj Phulera. Colonels Central Academy.
          TS ’26 Creative · Tech Syndicate.
        </p>
        <div className="cta-row">
          <a className="btn" href={LINKS.app} target="_blank" rel="noreferrer" data-hot>OPEN THE APP</a>
          <a className="btn ghost" href={LINKS.deck} target="_blank" rel="noreferrer" data-hot>OPEN THE DECK</a>
        </div>
      </Section>

      <footer className="foot" id="foot">
        <div className="wrap">
          <p className="t-display">the network remembers</p>
          <p className="t-mono t-dim">TEAM CCA · PROJECT SANCTUM · TS ’26 CREATIVE</p>
          <button type="button" className="reset t-mono" onClick={reset} data-hot>
            forget this visit
          </button>
        </div>
      </footer>

      <style>{archiveCss}</style>
    </div>
  )
}

const archiveCss = `
.hero { padding-top: 48px; border-top: 0; }
.hero-grid { display: grid; grid-template-columns: 1.2fr .8fr; gap: 40px; align-items: center; }
.hero-word {
  font-family: var(--font-display); font-weight: 900;
  font-size: clamp(52px, 10vw, 120px); letter-spacing: .14em; line-height: .9;
  color: #eef6f8; text-shadow: 0 0 28px rgba(103,232,249,.3);
}
.hero-line { margin-top: 14px; letter-spacing: .32em; font-size: 13px; }
.hero-mark { display: grid; place-items: center; opacity: .9; }
.cta-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
.btn {
  display: inline-block; padding: 12px 18px;
  border: 1px solid rgba(103,232,249,.45); color: var(--kyber);
  font-family: var(--font-mono); font-size: 11px; letter-spacing: .22em;
}
.btn.ghost { border-color: rgba(232,180,76,.4); color: var(--ember); }
.btn:hover { background: rgba(103,232,249,.08); }
.acts, .cards3, .duo, .swatches, .file-list {
  display: grid; gap: 16px; margin-top: 32px;
}
.acts { grid-template-columns: repeat(4, 1fr); }
.cards3 { grid-template-columns: repeat(3, 1fr); }
.duo { grid-template-columns: 1fr 1fr; }
.act, .card, .duo article {
  padding: 22px; border: 1px solid rgba(103,232,249,.12); background: rgba(11,16,28,.65);
}
.act h3, .card h3, .duo h3 { margin: 8px 0 10px; letter-spacing: .12em; font-size: 20px; }
.act p, .card p, .duo p { color: var(--ghost); line-height: 1.6; font-size: 14px; }
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
.plate { display: grid; place-items: center; height: 96px; margin-bottom: 8px; }
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
.pdf { width: 100%; height: 70vh; border: 1px solid rgba(103,232,249,.16); background: #111; }
.quote {
  margin-top: 24px; padding: 28px; border-left: 2px solid var(--kyber);
  background: rgba(11,16,28,.65); font-size: 16px; line-height: 1.75;
}
.quote footer { margin-top: 16px; font-size: 10px; letter-spacing: .2em; color: var(--ghost); }
.process { margin-top: 28px; display: grid; gap: 14px; padding-left: 20px; color: var(--ghost); line-height: 1.6; }
.process b { color: var(--bone); }
.foot { padding: 80px 0 48px; text-align: center; border-top: 1px solid rgba(103,232,249,.1); }
.foot .t-display { letter-spacing: .2em; font-size: 22px; margin-bottom: 10px; }
.reset { margin-top: 22px; font-size: 10px; letter-spacing: .2em; color: var(--ghost); }
@media (max-width: 980px) {
  .hero-grid, .acts, .cards3, .duo, .swatches { grid-template-columns: 1fr; }
  .file { grid-template-columns: 1fr; }
  .file span, .file b { grid-row: auto; }
}
`
