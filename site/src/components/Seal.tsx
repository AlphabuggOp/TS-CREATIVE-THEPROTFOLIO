import { useEffect, useRef, useState } from 'react'
import { STATUS_LINES } from '../data/content'
import { armAudio, chime } from '../lib/audio'

export default function Seal({ onLift, quick = false }: { onLift: () => void; quick?: boolean }) {
  const [pct, setPct] = useState(0)
  const [idx, setIdx] = useState(0)
  const [opening, setOpening] = useState(false)
  const lifted = useRef(false)

  useEffect(() => {
    armAudio()
    const floor = quick ? 900 : 2200
    const t0 = performance.now()
    let raf = 0
    let fontsReady = false
    document.fonts.ready.then(() => {
      fontsReady = true
    })

    const lift = () => {
      if (lifted.current) return
      lifted.current = true
      setPct(100)
      setIdx(STATUS_LINES.length - 1)
      chime(660, 1.4, 0.08)
      setOpening(true)
      window.setTimeout(onLift, 720)
    }

    const seq: string[] = []
    const onKey = (e: KeyboardEvent) => {
      seq.push(e.key)
      seq.splice(0, seq.length - 4)
      if (seq.join(',') === 'ArrowUp,ArrowUp,ArrowDown,ArrowDown') lift()
    }
    window.addEventListener('keydown', onKey)

    const tick = (now: number) => {
      const elapsed = now - t0
      const p = Math.min(99, Math.floor((elapsed / floor) * 100))
      setPct(p)
      setIdx(Math.min(STATUS_LINES.length - 1, Math.floor((p / 100) * STATUS_LINES.length)))
      if (elapsed >= floor && fontsReady) {
        lift()
        return
      }
      if (elapsed >= floor + 800) {
        lift()
        return
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    const failSafe = window.setTimeout(lift, floor + 1600)

    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(failSafe)
      window.removeEventListener('keydown', onKey)
    }
  }, [onLift, quick])

  return (
    <div className={`seal ${opening ? 'is-open' : ''}`}>
      <div className="seal-inner">
        <svg className="seal-svg" viewBox="0 0 100 100" width="132" height="132" aria-hidden>
          <circle
            className="draw"
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="#67e8f9"
            strokeWidth="1.4"
            strokeDasharray="1"
            strokeDashoffset="1"
            pathLength="1"
            strokeLinecap="round"
          />
          <path
            className="draw d2"
            d="M50 14 L56 44 L86 50 L56 56 L50 86 L44 56 L14 50 L44 44 Z"
            fill="none"
            stroke="#67e8f9"
            strokeWidth="1.4"
            strokeDasharray="1"
            strokeDashoffset="1"
            pathLength="1"
          />
          <circle cx="50" cy="50" r="5" fill="#e8b44c" />
        </svg>
        <p className="t-mono t-kyber pct">{String(pct).padStart(3, '0')}</p>
        <p className="t-mono t-dim status">{STATUS_LINES[idx]}</p>
      </div>
      <style>{`
        .seal {
          position: fixed; inset: 0; z-index: 50; background: #07090f;
          display: grid; place-items: center; text-align: center;
          clip-path: circle(140% at 50% 50%);
          transition: clip-path .7s cubic-bezier(.22,1,.36,1);
        }
        .seal.is-open { clip-path: circle(0% at 50% 50%); }
        .seal-svg .draw {
          animation: sealDraw 1.25s cubic-bezier(.22,1,.36,1) forwards;
        }
        .seal-svg .d2 { animation-delay: .18s; }
        @keyframes sealDraw { to { stroke-dashoffset: 0; } }
        .pct {
          margin-top: 22px; font-size: 13px; letter-spacing: .42em;
        }
        .status {
          margin-top: 10px; font-size: 11px; letter-spacing: .28em; min-height: 1.4em;
        }
      `}</style>
    </div>
  )
}
