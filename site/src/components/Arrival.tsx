import { useEffect } from 'react'
import { chime } from '../lib/audio'
import Sigil from './Sigil'

export default function Arrival({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    chime(523, 1.1, 0.07)
    const a = window.setTimeout(() => chime(660, 1.4, 0.06), 400)
    const t = window.setTimeout(onDone, 2400)
    return () => {
      window.clearTimeout(a)
      window.clearTimeout(t)
    }
  }, [onDone])

  return (
    <div className="arrival">
      <Sigil size={72} />
      <p className="t-mono t-kyber">CHANNEL OPEN</p>
      <h1>THE ARCHIVE</h1>
      <p className="t-mono t-dim">TEAM CCA · PROJECT SANCTUM</p>
      <style>{`
        .arrival {
          position: fixed; inset: 0; z-index: 48;
          display: grid; place-items: center; text-align: center;
          background: #07090f;
          animation: arriveOut .55s cubic-bezier(.22,1,.36,1) 1.85s forwards;
        }
        .arrival h1 {
          font-family: var(--font-display); font-weight: 900;
          letter-spacing: .2em; font-size: clamp(36px, 7vw, 72px);
          color: #eef6f8; text-shadow: 0 0 28px rgba(103,232,249,.35);
          margin: 18px 0 12px;
        }
        .arrival .t-kyber { letter-spacing: .42em; font-size: 12px; }
        .arrival .t-dim { letter-spacing: .28em; font-size: 11px; }
        @keyframes arriveOut {
          to { clip-path: circle(0% at 50% 50%); }
        }
      `}</style>
    </div>
  )
}
