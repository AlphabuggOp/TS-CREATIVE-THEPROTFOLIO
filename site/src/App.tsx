import { useCallback, useEffect, useMemo, useState } from 'react'
import Archive from './components/Archive'
import Cursor from './components/Cursor'
import Decoy from './components/Decoy'
import Overlays from './components/Overlays'
import Seal from './components/Seal'
import { useVault } from './store'

type Screen = 'decoy' | 'seal' | 'archive'

function readFlags() {
  const q = new URLSearchParams(window.location.search)
  return {
    unlock: q.has('unlock') || q.has('pitch'),
    forceSeal: q.has('seal'),
  }
}

export default function App() {
  const unlocked = useVault((s) => s.unlocked)
  const panic = useVault((s) => s.panic)
  const unlock = useVault((s) => s.unlock)
  const setPanic = useVault((s) => s.setPanic)
  const markSeal = useVault((s) => s.markSeal)
  const flags = useMemo(() => readFlags(), [])

  const [screen, setScreen] = useState<Screen>(() => {
    if (flags.unlock) return 'seal'
    if (unlocked && !flags.forceSeal) return 'archive'
    return 'decoy'
  })

  const onUnlock = useCallback(
    (name: string) => {
      unlock(name)
      setScreen('seal')
    },
    [unlock],
  )

  const onLift = useCallback(() => {
    markSeal()
    setScreen('archive')
  }, [markSeal])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === '~' || e.code === 'Backquote') {
        if (screen === 'archive' || panic) {
          e.preventDefault()
          setPanic(!panic)
        }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [panic, screen, setPanic])

  useEffect(() => {
    if (flags.unlock && !unlocked) unlock('')
  }, [flags.unlock, unlock, unlocked])

  const showDecoy = screen === 'decoy' || panic
  const showSeal = screen === 'seal' && !panic
  const showArchive = screen === 'seal' || screen === 'archive'

  return (
    <>
      <Overlays />
      <Cursor active={!showDecoy} />
      {showArchive && <Archive />}
      {showSeal && <Seal onLift={onLift} quick={flags.unlock} />}
      {showDecoy && <Decoy onUnlock={onUnlock} panic={panic} />}
    </>
  )
}
