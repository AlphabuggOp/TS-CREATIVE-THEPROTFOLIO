type Props = { size?: number; className?: string }

/** The original SANCTUM mark — eight-point star in a broken ring. */
export default function Sigil({ size = 84, className }: Props) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden
    >
      <circle
        cx="50"
        cy="50"
        r="46"
        stroke="var(--kyber)"
        strokeWidth="1.4"
        strokeDasharray="210 80"
        strokeLinecap="round"
      />
      <path
        d="M50 14 L56 44 L86 50 L56 56 L50 86 L44 56 L14 50 L44 44 Z"
        stroke="var(--kyber)"
        strokeWidth="1.4"
        fill="rgba(103,232,249,.06)"
      />
      <circle cx="50" cy="50" r="5" fill="var(--ember)" />
    </svg>
  )
}
