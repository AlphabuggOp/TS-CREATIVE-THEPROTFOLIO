import { useEffect, useRef } from 'react'

const GLYPHS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789'

export default function Scramble({
  text,
  className,
  as: Tag = 'span',
}: {
  text: string
  className?: string
  as?: 'span' | 'p' | 'h2' | 'h1'
}) {
  const ref = useRef<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      el.textContent = text
      return
    }
    let frame = 0
    const total = Math.max(12, text.length + 8)
    let raf = 0
    const tick = () => {
      frame += 1
      const t = Math.min(1, frame / total)
      el.textContent = text
        .split('')
        .map((ch, i) => {
          if (ch === ' ' || ch === '·' || ch === '’') return ch
          if (i / text.length < t) return ch
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        })
        .join('')
      if (t < 1) raf = requestAnimationFrame(tick)
      else el.textContent = text
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [text])

  return <Tag ref={ref as never} className={className}>{text}</Tag>
}
