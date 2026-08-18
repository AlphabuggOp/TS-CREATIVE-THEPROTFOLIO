import { NAV } from '../data/content'
import Sigil from './Sigil'

export default function Hud({ visitor }: { visitor: string | null }) {
  return (
    <header className="hud">
      <a href="#home" className="hud-brand" data-hot>
        <Sigil size={22} />
        <span className="t-display">SANCTUM</span>
      </a>
      <nav className="hud-nav">
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} data-hot>
            {n.label}
          </a>
        ))}
      </nav>
      <p className="hud-who t-mono t-dim">
        {visitor ? `WELCOME BACK, ${visitor.toUpperCase()}` : 'TEAM CCA · TS ’26'}
      </p>
      <style>{`
        .hud {
          position: sticky; top: 0; z-index: 30;
          display: flex; align-items: center; gap: 22px;
          padding: 14px 22px;
          background: linear-gradient(180deg, rgba(7,9,15,.92), rgba(7,9,15,.55) 70%, transparent);
          backdrop-filter: blur(8px);
        }
        .hud-brand {
          display: flex; align-items: center; gap: 10px;
          letter-spacing: .2em; font-size: 14px; font-weight: 700;
        }
        .hud-nav { display: flex; gap: 16px; flex: 1; justify-content: center; flex-wrap: wrap; }
        .hud-nav a {
          font-family: var(--font-mono); font-size: 10px; letter-spacing: .22em;
          color: var(--ghost);
        }
        .hud-nav a:hover { color: var(--kyber); }
        .hud-who { font-size: 9px; letter-spacing: .18em; }
        @media (max-width: 820px) {
          .hud-who { display: none; }
          .hud-nav { justify-content: flex-end; gap: 10px; }
        }
      `}</style>
    </header>
  )
}
