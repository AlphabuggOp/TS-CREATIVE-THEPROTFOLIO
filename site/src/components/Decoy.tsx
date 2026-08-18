import { useEffect, useRef, useState } from 'react'
import { CODE } from '../store'
import { armAudio, chime, denyBlip, knockTick } from '../lib/audio'
import PortalRing from '../three/PortalRing'
import Sigil from './Sigil'

type Props = {
  onUnlock: (name: string) => void
  panic?: boolean
}

export default function Decoy({ onUnlock, panic }: Props) {
  const [knocks, setKnocks] = useState(0)
  const [asks, setAsks] = useState(false)
  const [code, setCode] = useState('')
  const [denied, setDenied] = useState(false)
  const [shake, setShake] = useState(false)
  const [nameStep, setNameStep] = useState(false)
  const [name, setName] = useState('')
  const [flicker, setFlicker] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (asks) inputRef.current?.focus()
  }, [asks])
  useEffect(() => {
    if (nameStep) nameRef.current?.focus()
  }, [nameStep])

  useEffect(() => {
    const id = window.setInterval(() => {
      setFlicker('0528')
      window.setTimeout(() => setFlicker(''), 180)
    }, 12000)
    return () => window.clearInterval(id)
  }, [])

  const knock = () => {
    armAudio()
    if (asks || nameStep) return
    const next = knocks + 1
    setKnocks(next)
    knockTick()
    if (next >= 3) {
      window.setTimeout(() => setAsks(true), 280)
    }
  }

  const submitCode = () => {
    armAudio()
    if (code.trim() === CODE) {
      chime(523, 0.8, 0.06)
      setNameStep(true)
      setAsks(false)
      return
    }
    denyBlip()
    setDenied(true)
    setShake(true)
    window.setTimeout(() => setShake(false), 420)
  }

  const submitName = () => {
    armAudio()
    chime(660, 1.2, 0.07)
    onUnlock(name.trim())
  }

  return (
    <div className="decoy">
      <PortalRing knocked={knocks} onKnock={knock} />

      <div className="decoy-ui">
        <div className="corners">
          <i className="tl" />
          <i className="tr" />
          <i className="bl" />
          <i className="br" />
        </div>

        <p className="decoy-kicker t-mono">
          {panic ? 'SURFACE RESTORED' : flicker || 'HCET SYNDICATE · CLASSIFIED'}
        </p>

        <h1 className="wordmark">
          {'SANCTUM'.split('').map((c) => (
            <span key={c}>{c}</span>
          ))}
        </h1>
        <p className="decoy-sub t-mono t-kyber">THE NETWORK THAT PRETENDS NOT TO EXIST</p>

        {!asks && !nameStep && (
          <p className="decoy-hint t-mono t-dim">
            {knocks === 0 && 'the ring remembers a doorbell'}
            {knocks === 1 && 'one'}
            {knocks === 2 && 'two'}
            {knocks >= 3 && 'three'}
          </p>
        )}

        {asks && (
          <form
            className={`door ${shake ? 'is-shake' : ''}`}
            onSubmit={(e) => {
              e.preventDefault()
              submitCode()
            }}
          >
            <p className="t-mono t-ember door-ask">THE DOOR ASKS.</p>
            <input
              ref={inputRef}
              inputMode="numeric"
              autoComplete="off"
              spellCheck={false}
              maxLength={8}
              value={code}
              onChange={(e) => {
                setCode(e.target.value)
                setDenied(false)
              }}
              placeholder="····"
              aria-label="Access code"
            />
            {denied && <p className="t-mono t-threat deny">ACCESS DENIED</p>}
          </form>
        )}

        {nameStep && (
          <form
            className="door"
            onSubmit={(e) => {
              e.preventDefault()
              submitName()
            }}
          >
            <p className="t-mono t-kyber door-ask">THE ARCHIVE MUST KNOW WHAT TO CALL YOU.</p>
            <input
              ref={nameRef}
              autoComplete="off"
              spellCheck={false}
              maxLength={24}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="leave blank to remain unnamed"
              aria-label="What the network should call you"
            />
            <button type="submit" className="enter t-mono" data-hot>
              ENTER
            </button>
          </form>
        )}
      </div>

      <div className="decoy-sigil">
        <Sigil size={36} />
      </div>

      <style>{decoyCss}</style>
    </div>
  )
}

const decoyCss = `
.decoy { position: fixed; inset: 0; z-index: 40; background: var(--ink); overflow: hidden; }
.decoy-ui {
  position: relative; z-index: 2; height: 100%;
  display: grid; place-items: center; text-align: center; padding: 28px;
  pointer-events: none;
}
.decoy-ui form, .decoy-ui input, .decoy-ui button { pointer-events: auto; }
.wordmark {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(56px, 14vw, 168px);
  letter-spacing: 0.16em;
  line-height: 0.9;
  color: #eef6f8;
  text-shadow: 0 0 24px rgba(103,232,249,.35), 0 0 80px rgba(103,232,249,.16);
}
.wordmark span { display: inline-block; }
.decoy-kicker {
  font-size: 11px; letter-spacing: .42em; color: var(--ghost); margin-bottom: 22px; min-height: 1.2em;
}
.decoy-sub { margin-top: 18px; font-size: 12px; letter-spacing: .38em; }
.decoy-hint { margin-top: 54px; font-size: 11px; letter-spacing: .28em; }
.door { margin-top: 40px; width: min(420px, 92vw); }
.door-ask { font-size: 13px; letter-spacing: .34em; margin-bottom: 16px; }
.door input {
  width: 100%; text-align: center; padding: 14px 16px;
  border: 1px solid rgba(103,232,249,.35);
  background: rgba(7,9,15,.72);
  letter-spacing: .42em; font-family: var(--font-mono); font-size: 18px;
  outline: none;
}
.door input:focus { border-color: var(--kyber); box-shadow: 0 0 24px rgba(103,232,249,.15); }
.deny { margin-top: 12px; font-size: 12px; letter-spacing: .3em; }
.enter {
  margin-top: 16px; padding: 10px 22px;
  border: 1px solid rgba(103,232,249,.4);
  letter-spacing: .28em; font-size: 11px; color: var(--kyber);
}
.enter:hover { background: rgba(103,232,249,.08); }
.is-shake { animation: doorShake .4s var(--ease-swift); }
@keyframes doorShake {
  0%,100% { transform: translateX(0); }
  20% { transform: translateX(-10px); }
  40% { transform: translateX(10px); }
  60% { transform: translateX(-6px); }
  80% { transform: translateX(6px); }
}
.corners i {
  position: absolute; width: 64px; height: 64px;
  border: 1px solid rgba(103,232,249,.32); pointer-events: none;
}
.corners .tl { top: 18px; left: 18px; border-right: 0; border-bottom: 0; }
.corners .tr { top: 18px; right: 18px; border-left: 0; border-bottom: 0; }
.corners .bl { bottom: 18px; left: 18px; border-right: 0; border-top: 0; }
.corners .br { bottom: 18px; right: 18px; border-left: 0; border-top: 0; }
.decoy-sigil { position: absolute; bottom: 22px; left: 50%; transform: translateX(-50%); z-index: 2; opacity: .55; pointer-events: none; }
`
