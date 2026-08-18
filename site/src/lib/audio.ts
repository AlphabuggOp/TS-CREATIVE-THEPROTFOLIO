let ctx: AudioContext | null = null
let armed = false

function ac() {
  if (!ctx) ctx = new AudioContext()
  return ctx
}

export function armAudio() {
  if (armed) return
  armed = true
  const c = ac()
  if (c.state === 'suspended') void c.resume()
}

export function chime(freq = 660, dur = 1.2, gain = 0.06) {
  if (!armed) return
  const c = ac()
  const o = c.createOscillator()
  const g = c.createGain()
  o.type = 'sine'
  o.frequency.value = freq
  g.gain.setValueAtTime(0, c.currentTime)
  g.gain.linearRampToValueAtTime(gain, c.currentTime + 0.02)
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur)
  o.connect(g)
  g.connect(c.destination)
  o.start()
  o.stop(c.currentTime + dur + 0.05)
}

export function denyBlip() {
  if (!armed) return
  const c = ac()
  const o = c.createOscillator()
  const g = c.createGain()
  o.type = 'square'
  o.frequency.setValueAtTime(180, c.currentTime)
  o.frequency.exponentialRampToValueAtTime(90, c.currentTime + 0.18)
  g.gain.setValueAtTime(0.05, c.currentTime)
  g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.22)
  o.connect(g)
  g.connect(c.destination)
  o.start()
  o.stop(c.currentTime + 0.24)
}

export function knockTick() {
  chime(220 + Math.random() * 40, 0.18, 0.04)
}

export function openTone() {
  chime(523, 0.55, 0.045)
}

let drone: { o: OscillatorNode; o2: OscillatorNode; g: GainNode } | null = null

export function startDrone() {
  if (!armed || drone) return
  const c = ac()
  const o = c.createOscillator()
  const o2 = c.createOscillator()
  const g = c.createGain()
  o.type = 'sine'
  o2.type = 'sine'
  o.frequency.value = 55
  o2.frequency.value = 82.4
  g.gain.setValueAtTime(0, c.currentTime)
  g.gain.linearRampToValueAtTime(0.018, c.currentTime + 1.4)
  o.connect(g)
  o2.connect(g)
  g.connect(c.destination)
  o.start()
  o2.start()
  drone = { o, o2, g }
}

export function stopDrone() {
  if (!drone) return
  const c = ac()
  const { o, o2, g } = drone
  g.gain.cancelScheduledValues(c.currentTime)
  g.gain.linearRampToValueAtTime(0.0001, c.currentTime + 0.4)
  window.setTimeout(() => {
    try {
      o.stop()
      o2.stop()
    } catch {
      /* already stopped */
    }
  }, 450)
  drone = null
}
