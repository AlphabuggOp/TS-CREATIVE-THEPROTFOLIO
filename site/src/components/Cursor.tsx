import { useEffect, useRef } from 'react'

export default function Cursor({ active }: { active: boolean }) {
  const ring = useRef<HTMLDivElement>(null)
  const dot = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!active) return
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine) return

    document.body.classList.add('kyber-cursor')
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let rx = x
    let ry = y
    let hot = false
    let raf = 0

    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      const t = e.target as HTMLElement | null
      hot = Boolean(t?.closest('a, button, input, [data-hot]'))
    }
    const tick = () => {
      rx += (x - rx) * 0.22
      ry += (y - ry) * 0.22
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx - 16}px, ${ry - 16}px, 0)`
        ring.current.style.borderColor = hot
          ? 'rgba(232,180,76,.95)'
          : 'rgba(103,232,249,.85)'
        ring.current.style.width = hot ? '42px' : '32px'
        ring.current.style.height = hot ? '42px' : '32px'
      }
      if (dot.current) {
        dot.current.style.transform = `translate3d(${x - 2}px, ${y - 2}px, 0)`
      }
      raf = requestAnimationFrame(tick)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => {
      document.body.classList.remove('kyber-cursor')
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [active])

  if (!active) return null

  return (
    <>
      <div ref={ring} className="cur-ring" />
      <div ref={dot} className="cur-dot" />
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          body.kyber-cursor, body.kyber-cursor * { cursor: none !important; }
        }
        .cur-ring, .cur-dot {
          position: fixed; top: 0; left: 0; z-index: 200;
          pointer-events: none; border-radius: 50%;
        }
        .cur-ring {
          width: 32px; height: 32px;
          border: 1px solid rgba(103,232,249,.85);
          box-shadow: 0 0 16px rgba(103,232,249,.25);
          transition: width .18s ease, height .18s ease, border-color .18s ease;
        }
        .cur-dot {
          width: 4px; height: 4px; background: var(--kyber);
          box-shadow: 0 0 10px var(--kyber);
        }
        @media (hover: none) { .cur-ring, .cur-dot { display: none; } }
      `}</style>
    </>
  )
}
