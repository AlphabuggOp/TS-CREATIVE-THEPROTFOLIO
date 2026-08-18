import { AnimatePresence, motion } from 'framer-motion'
import gsap from 'gsap'
import { useCallback, useEffect, useRef, useState, type ReactElement } from 'react'
import { useLenis } from '../lib/lenis'
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
import { armAudio, knockTick, openTone, startDrone, stopDrone } from '../lib/audio'
import { useVault } from '../store'
import BrowserFrame from './BrowserFrame'
import Scramble from './Scramble'
import Sigil from './Sigil'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function isChamber(id: string | null): id is ChamberId {
  return EXHIBITS.some((e) => e.id === id)
}

function RitualDemo() {
  const [n, setN] = useState(0)
  return (
    <div className="ritual altar">
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
        <Sigil size={96} />
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
    <div className="room room-lives">
      <p className="kicker">01 · TWO DISGUISES</p>
      <Scramble as="h2" className="section-title" text="THE LIVES" />
      <p className="lede">The cover is the concept. Click a frame. You leave this hangar for the live network.</p>
      <div className="frame-hangar">
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
      <div className="plaques">
        <article>
          <p className="t-mono t-kyber">THE APP</p>
          <h3 className="t-display">SIGNAL &amp; STATIC</h3>
          <p>Abandoned shortwave blog. Est. 2008. Last log 14 Mar 2013. Signed — m. Code <b>0528</b>.</p>
        </article>
        <article>
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
    <div className="room room-theater">
      <div className="cinema-meta">
        <p className="kicker">02 · SIXTY SECONDS</p>
        <Scramble as="h2" className="section-title" text="THE THEATER" />
      </div>
      <video
        className="cinema"
        controls
        playsInline
        preload="metadata"
        poster="/shots/promo.jpg"
        src="/files/SANCTUM-Promo.mp4"
      />
      <a className="t-mono room-dl" href="/files/SANCTUM-Promo.mp4" download data-hot>
        DOWNLOAD THE PROMO →
      </a>
    </div>
  )
}

function Vault() {
  const groups = ['Watch', 'Present', 'Read', 'Explore'] as const
  return (
    <div className="room">
      <p className="kicker">03 · THE DRIVE, HUNG</p>
      <Scramble as="h2" className="section-title" text="THE VAULT" />
      <p className="lede">Every deliverable that used to live in a folder. Real downloads. All ten files from the archive.</p>
      <div className="stacks">
        {groups.map((g) => (
          <div key={g} className="stack">
            <p className="t-mono t-ember stack-label">{g}</p>
            {FILES.filter((f) => f.group === g).map((f) => (
              <a key={f.name} className="slab" href={f.href} download data-hot>
                <strong>{f.name}</strong>
                <em>{f.line}</em>
                <b className="t-mono">DOWNLOAD</b>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function Dossier() {
  const [doc, setDoc] = useState('/files/TS26_CCA_WRITEUP.pdf')
  return (
    <div className="room">
      <p className="kicker">04 · READ IN PLACE</p>
      <Scramble as="h2" className="section-title" text="THE DOSSIER" />
      <div className="desk">
        <div className="desk-quotes">
          <blockquote className="quote">
            <p>{APP_WRITEUP}</p>
            <footer className="t-mono">TS26_CCA_WRITEUP · THE APP</footer>
          </blockquote>
          <blockquote className="quote">
            <p>{DECK_WRITEUP}</p>
            <footer className="t-mono">SANCTUM-WriteUp · THE DECK</footer>
          </blockquote>
        </div>
        <div className="desk-reader">
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
      </div>
    </div>
  )
}

function Rite() {
  return (
    <div className="room">
      <p className="kicker">05 · SECURITY THROUGH LORE</p>
      <Scramble as="h2" className="section-title" text="THE RITE" />
      <p className="lede">
        After the Purge every public channel is watched. SANCTUM hides its front door inside a dead
        website — and makes finding that door the filter. The password is taught, never told.
      </p>
      <RitualDemo />
      <div className="path">
        {ACTS.map((a) => (
          <article key={a.id} className="step">
            <p className="t-mono t-ember">{a.act}</p>
            <h3 className="t-display">{a.title}</h3>
            <p>{a.body}</p>
          </article>
        ))}
      </div>
      <div className="cards3">
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
    <div className="room">
      <p className="kicker">06 · COLONELS CENTRAL ACADEMY</p>
      <Scramble as="h2" className="section-title" text="THE COUNCIL" />
      <div className="thrones">
        {TEAM.map((m) => (
          <article key={m.name} className="throne">
            <img src={m.plate} alt="" />
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
    <div className="room">
      <p className="kicker">07 · MOTION MUST MEAN SOMETHING</p>
      <h2 className="section-title">THE FORGE</h2>
      <div className="wall">
        {TOKENS.map((t) => (
          <article key={t.name}>
            <i style={{ background: t.hex }} />
            <b className="t-mono">{t.name}</b>
            <span className="t-mono">{t.hex}</span>
            <em>{t.use}</em>
          </article>
        ))}
      </div>
      <div className="cards3">
        {STACK.map((s) => (
          <article key={s.name} className="card">
            <h3>{s.name}</h3>
            <p>{s.why}</p>
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
      <div className="benches">
        <a className="bench" href={LINKS.appRepo} target="_blank" rel="noreferrer" data-hot>
          <p className="t-mono t-kyber">APPLICATION</p>
          <h3>AlphabuggOp / ts-creative</h3>
          <p>The hidden network. Fully static.</p>
        </a>
        <a className="bench" href={LINKS.deckRepo} target="_blank" rel="noreferrer" data-hot>
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

const BAY_STILL: Record<ChamberId, string | null> = {
  lives: null,
  theater: '/shots/promo.jpg',
  vault: '/shots/promo-20.jpg',
  dossier: '/shots/promo-35.jpg',
  rite: '/shots/plate-aarav.png',
  council: null,
  forge: '/shots/globe.jpg',
}

export default function Hangar() {
  const visitor = useVault((s) => s.visitor)
  const reset = useVault((s) => s.reset)
  const [chamber, setChamber] = useState<ChamberId | null>(null)
  const heroRef = useRef<HTMLHeadingElement>(null)
  useLenis(!chamber)

  useEffect(() => {
    const arm = () => armAudio()
    window.addEventListener('pointerdown', arm, { once: true })
    return () => window.removeEventListener('pointerdown', arm)
  }, [])

  useEffect(() => {
    if (chamber) {
      stopDrone()
      openTone()
      return
    }
    startDrone()
    return () => stopDrone()
  }, [chamber])

  useEffect(() => {
    if (chamber) return
    const imgs = gsap.utils.toArray<HTMLElement>('.bay-visual img')
    const tweens = imgs.map((el) =>
      gsap.to(el, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: { trigger: el.closest('.bay') ?? el, start: 'top bottom', end: 'bottom top', scrub: true },
      }),
    )
    return () => {
      tweens.forEach((t) => t.kill())
      ScrollTrigger.getAll().forEach((s) => s.kill())
    }
  }, [chamber])

  useEffect(() => {
    if (!heroRef.current) return
    const chars = heroRef.current.querySelectorAll('span')
    gsap.fromTo(
      chars,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.06, ease: 'power3.out', delay: 0.15 },
    )
  }, [])

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
          <h1 className="hero-word" ref={heroRef}>
            {'SANCTUM'.split('').map((c, i) => (
              <span key={`${c}${i}`}>{c}</span>
            ))}
          </h1>
          <p className="hero-line t-mono t-kyber">the network that pretends not to exist</p>
          <p className="lede floor-lede">
            Not a Drive folder. Seven exhibits. Walk the hangar. Open a chamber. Take what you need.
          </p>
          <p className="t-mono t-ember walk">▽ WALK THE RUNWAY</p>
        </div>

        <div className="strip" aria-hidden>
          <div className="strip-track">
            <img src="/shots/promo-20.jpg" alt="" />
            <img src="/shots/promo.jpg" alt="" />
            <img src="/shots/globe.jpg" alt="" />
            <img src="/shots/app.png" alt="" />
            <img src="/shots/deck.png" alt="" />
            <img src="/shots/promo-20.jpg" alt="" />
            <img src="/shots/promo.jpg" alt="" />
            <img src="/shots/globe.jpg" alt="" />
          </div>
        </div>

        <div className="runway">
          {EXHIBITS.map((e, i) => (
            <motion.button
              key={e.id}
              type="button"
              className={`bay ${i % 2 ? 'flip' : ''}`}
              data-hot
              onClick={() => open(e.id)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bay-visual">
                {e.id === 'lives' && (
                  <div className="exhibit-shots tall">
                    <img src="/shots/app.png" alt="" />
                    <img src="/shots/deck.png" alt="" />
                  </div>
                )}
                {e.id === 'council' && (
                  <div className="exhibit-shots tall three">
                    {TEAM.map((m) => (
                      <img key={m.name} src={m.plate} alt="" />
                    ))}
                  </div>
                )}
                {BAY_STILL[e.id] && <img src={BAY_STILL[e.id]!} alt="" />}
              </div>
              <div className="bay-copy">
                <span className="t-mono t-ember">{e.no}</span>
                <h2 className="t-display">{e.title}</h2>
                <p>{e.sub}</p>
                <b className="t-mono">ENTER THE CHAMBER →</b>
              </div>
            </motion.button>
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
            <button type="button" className="back t-mono" data-hot onClick={close}>
              ← THE HANGAR
            </button>
            {(() => {
              const View = CHAMBERS[chamber]
              return <View />
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
.floor-hero {
  min-height: calc(100vh - 72px);
  display: flex; flex-direction: column; justify-content: center;
  padding: 24px 0 48px;
}
.hero-word {
  font-family: var(--font-display); font-weight: 900;
  font-size: clamp(64px, 14vw, 168px); letter-spacing: .14em; line-height: .86;
  color: #eef6f8; text-shadow: 0 0 28px rgba(103,232,249,.3);
}
.hero-word span { display: inline-block; }
.hero-line { margin-top: 18px; letter-spacing: .32em; font-size: 13px; }
.floor-lede { max-width: 62ch; }
.walk { margin-top: 48px; letter-spacing: .32em; font-size: 11px; animation: chev 1.6s ease-in-out infinite; }
@keyframes chev { 0%,100% { transform: translateY(0); opacity: .55; } 50% { transform: translateY(7px); opacity: 1; } }
.strip { overflow: hidden; margin: 0 calc(50% - 50vw) 56px; width: 100vw; border-top: 1px solid rgba(103,232,249,.12); border-bottom: 1px solid rgba(103,232,249,.12); }
.strip-track { display: flex; gap: 8px; width: max-content; animation: film 42s linear infinite; }
.strip-track img { height: 168px; width: 280px; object-fit: cover; filter: saturate(.75) contrast(1.05); }
@keyframes film { to { transform: translateX(-50%); } }
.runway { display: grid; gap: 28px; }
.bay {
  display: grid; grid-template-columns: 1.25fr .85fr; min-height: 52vh;
  border: 1px solid rgba(103,232,249,.16); background: rgba(11,16,28,.55);
  overflow: hidden; text-align: left; padding: 0;
  transition: border-color .35s, box-shadow .35s, transform .45s var(--ease-out);
}
.bay.flip { grid-template-columns: .85fr 1.25fr; }
.bay.flip .bay-visual { order: 2; }
.bay:hover {
  transform: translateY(-6px);
  border-color: rgba(103,232,249,.5);
  box-shadow: 0 24px 70px rgba(0,0,0,.45), 0 0 36px rgba(103,232,249,.1);
}
.bay-visual { overflow: hidden; min-height: 280px; }
.bay-visual img { width: 100%; height: 100%; min-height: 280px; object-fit: cover; object-position: top center; display: block; }
.bay-copy { padding: 36px 32px; display: flex; flex-direction: column; gap: 10px; justify-content: center; }
.bay-copy h2 { letter-spacing: .14em; font-size: clamp(28px, 4vw, 48px); }
.bay-copy p { color: var(--ghost); font-size: 15px; line-height: 1.6; }
.bay-copy b { margin-top: 12px; font-size: 11px; letter-spacing: .22em; color: var(--ember); }
.exhibit-shots { display: grid; grid-template-columns: 1fr 1fr; height: 100%; min-height: 280px; }
.exhibit-shots.three { grid-template-columns: 1fr 1fr 1fr; }
.exhibit-shots img { width: 100%; height: 100%; object-fit: cover; object-position: top; }
.chamber {
  position: fixed; inset: 0; z-index: 24;
  background: var(--ink);
  overflow: auto;
  padding: 78px 0 60px;
}
.back {
  display: block; width: min(1320px, calc(100% - 36px)); margin: 0 auto 16px;
  font-size: 10px; letter-spacing: .22em; color: var(--ember); text-align: left;
}
.room { width: min(1320px, calc(100% - 36px)); margin: 0 auto; }
.frame-hangar { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 28px; }
.plaques { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 16px; }
.plaques article, .card, .step, .bench {
  padding: 22px; border: 1px solid rgba(103,232,249,.12); background: rgba(11,16,28,.65);
}
.plaques h3, .card h3, .step h3, .bench h3 { margin: 8px 0 10px; letter-spacing: .12em; font-size: 20px; }
.plaques p, .card p, .step p, .bench p { color: var(--ghost); line-height: 1.6; font-size: 14px; }
.cinema {
  width: 100%; height: min(74vh, 820px);
  object-fit: contain; background: #000;
  border: 1px solid rgba(103,232,249,.2);
  margin-top: 18px;
}
.room-dl { display: inline-block; margin-top: 14px; letter-spacing: .22em; font-size: 11px; color: var(--ember); }
.stacks { display: grid; grid-template-columns: 1fr 1fr 1.3fr 1fr; gap: 16px; margin-top: 28px; align-items: start; }
.stack { display: grid; gap: 10px; }
.stack-label { font-size: 11px; letter-spacing: .28em; }
.slab {
  display: grid; gap: 8px; padding: 22px 20px;
  border: 1px solid rgba(103,232,249,.16); background: rgba(11,16,28,.75);
  min-height: 120px;
  transition: border-color .3s, transform .3s;
}
.slab:hover { border-color: rgba(103,232,249,.5); transform: translateY(-3px); }
.slab em { color: var(--ghost); font-style: normal; font-size: 13px; }
.slab b { font-size: 10px; letter-spacing: .18em; color: var(--kyber); }
.desk { display: grid; grid-template-columns: .85fr 1.15fr; gap: 22px; margin-top: 24px; align-items: start; }
.desk-quotes { display: grid; gap: 14px; }
.quote {
  padding: 22px; border-left: 2px solid var(--kyber);
  background: rgba(11,16,28,.65); font-size: 15px; line-height: 1.7;
}
.quote footer { margin-top: 14px; font-size: 10px; letter-spacing: .2em; color: var(--ghost); }
.doc-tabs { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; }
.doc-tabs button {
  padding: 8px 10px; border: 1px solid rgba(103,232,249,.16);
  font-family: var(--font-mono); font-size: 9px; letter-spacing: .12em; color: var(--ghost);
}
.doc-tabs button.on { color: var(--kyber); border-color: rgba(103,232,249,.5); }
.pdf { width: 100%; height: 72vh; border: 1px solid rgba(103,232,249,.16); background: #111; }
.ritual {
  margin-top: 28px; display: grid; grid-template-columns: 160px 1fr; gap: 24px;
  align-items: center; padding: 28px; border: 1px solid rgba(103,232,249,.16);
  background: rgba(11,16,28,.7);
}
.altar { min-height: 200px; }
.ring-btn { position: relative; width: 120px; height: 120px; display: grid; place-items: center; }
.ring-btn .glow {
  position: absolute; inset: 8px; border-radius: 50%;
  box-shadow: 0 0 30px rgba(103,232,249,.55); pointer-events: none;
}
.path { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 22px; }
.cards3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 16px; }
.key {
  display: inline-block; padding: 2px 10px; border: 1px solid rgba(232,180,76,.5);
  color: var(--ember); font-family: var(--font-mono);
}
.thrones { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 28px; }
.throne {
  min-height: 58vh; padding: 36px 22px 28px; text-align: center;
  border: 1px solid rgba(103,232,249,.14); background: rgba(11,16,28,.65);
}
.throne img { width: 168px; height: 168px; object-fit: cover; border-radius: 50%; margin: 0 auto 18px; display: block; }
.throne h3 { letter-spacing: .12em; margin-bottom: 8px; }
.throne p { color: var(--ghost); line-height: 1.6; }
.wall { display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; margin: 28px 0 18px; }
.wall i { display: block; height: 88px; border: 1px solid rgba(255,255,255,.08); }
.wall b { display: block; font-size: 11px; letter-spacing: .16em; margin-top: 8px; }
.wall span, .wall em { font-size: 10px; color: var(--ghost); font-style: normal; display: block; }
.benches { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 18px; }
.foot { padding: 64px 0 12px; text-align: center; }
.foot .t-display { letter-spacing: .2em; font-size: 20px; margin-bottom: 10px; }
.reset { margin-top: 18px; font-size: 10px; letter-spacing: .2em; color: var(--ghost); }
@media (max-width: 980px) {
  .hud-who, .hud-nav { display: none; }
  .bay, .bay.flip, .frame-hangar, .plaques, .stacks, .desk, .path, .cards3, .thrones, .wall, .benches {
    grid-template-columns: 1fr;
  }
  .bay.flip .bay-visual { order: 0; }
  .bay-visual, .bay-visual img { min-height: 200px; }
  .strip-track img { height: 110px; width: 176px; }
  .cinema, .pdf { height: 52vh; }
  .throne { min-height: 0; }
  .ritual { grid-template-columns: 1fr; }
}
`
