import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Phase = 'decoy' | 'seal' | 'archive'

type Vault = {
  unlocked: boolean
  visitor: string | null
  panic: boolean
  muted: boolean
  seenSeal: boolean
  unlock: (visitor?: string) => void
  lock: () => void
  setPanic: (v: boolean) => void
  setMuted: (v: boolean) => void
  markSeal: () => void
  reset: () => void
}

export const useVault = create<Vault>()(
  persist(
    (set) => ({
      unlocked: false,
      visitor: null,
      panic: false,
      muted: false,
      seenSeal: false,
      unlock: (visitor) =>
        set({
          unlocked: true,
          visitor: visitor?.trim() || null,
          panic: false,
        }),
      lock: () => set({ unlocked: false, panic: false }),
      setPanic: (v) => set({ panic: v }),
      setMuted: (v) => set({ muted: v }),
      markSeal: () => set({ seenSeal: true }),
      reset: () =>
        set({
          unlocked: false,
          visitor: null,
          panic: false,
          muted: false,
          seenSeal: false,
        }),
    }),
    { name: 'sanctum-portfolio-v1' },
  ),
)

export const CODE = '0528'
