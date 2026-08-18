export const LINKS = {
  app: 'https://ts-creative.vercel.app/',
  deck: 'https://project-sanctum-ppt.vercel.app/',
  appRepo: 'https://github.com/AlphabuggOp/ts-creative',
  deckRepo: 'https://github.com/AlphabuggOp/Ts-Creative-PPT',
} as const

export const TEAM = [
  {
    name: 'Aarav Choudhary',
    role: 'Product & Story',
    line: 'Wrote the world. Holds the eight-minute hook.',
  },
  {
    name: 'Jeehan Kwatra',
    role: 'Design & Motion',
    line: 'The steel, the grain, the motion law.',
  },
  {
    name: 'Anuj Phulera',
    role: 'Engineering',
    line: 'The two-layer house, the rites, the persistence.',
  },
] as const

export const APP_WRITEUP =
  'PROJECT SANCTUM is a network that refuses to look like one. It hides behind an abandoned shortwave blog; a three-click ritual and a four-digit frequency open the door. Inside, three rites — Signal, Focus, Choice — test how you listen, hold and decide, and every verdict detonates into its own proof game. A living Field Log tracks nineteen quests. Finish the rites and a Ceremony forges your rank, callsign, and a sigil grown from your own play; the Departure walks you back out through the ring. Press ~ and everything vanishes. The Empire surveils the obvious. We hide in plain sight.'

export const DECK_WRITEUP =
  'The SANCTUM pitch deck is twelve slides, each a living scene — a procedural portal, a hyperspace tunnel, a threat-scanner, a self-assembling constellation. It hides behind a decoy and opens only to those who find the door and speak the protocol. Type flows like steel; every motion is hand-budgeted on a beat-locked timeline. A design system of ink, kyber, ember and threat holds it together — and a physical edition ships alongside, so the story reads as sharply on paper as it moves on screen.'

export const ACTS = [
  {
    id: 'seal',
    act: 'ACT 0',
    title: 'THE SEAL',
    body: 'A loader that behaves like establishing a covert uplink. A sigil draws itself. An honest percentage runs. Status lines decode. At 100% the veil iris-opens.',
  },
  {
    id: 'gate',
    act: 'ACT 1',
    title: 'THE GATE',
    body: 'Six hundred and twenty viewport-heights of scroll-driven cinema. You scroll, and you fly — through a procedural GLSL portal into hyperspace. The transmission resolves. Then the way to the Trials opens.',
  },
  {
    id: 'trials',
    act: 'ACT 2',
    title: 'THE TRIALS',
    body: 'Three playable rites judged by the Archivist. Signal trains the ear. Focus trains the hand. Choice trains the mind — and every verdict becomes a proof game.',
  },
  {
    id: 'sanctum',
    act: 'ACT 3',
    title: 'THE SANCTUM',
    body: 'The hub: a holo-map of beacons and threat zones, a dead-drop cipher, an A* safe-lane router, archives, a council war-room, and a Beacon that forges recruitment posters.',
  },
] as const

export const TRIALS = [
  {
    id: 'signal',
    title: 'SIGNAL',
    kicker: 'RITE I · MEMORY',
    body: 'Drag-rotate a sealed dial to catch a living, drifting frequency. Round I waits still. II slips. III runs with drift. Catch the carrier, hold the window, decode the fragments.',
  },
  {
    id: 'focus',
    title: 'FOCUS',
    kicker: 'RITE II · STEADINESS',
    body: 'Hold your light inside a breathing ring while the void pulls. Three escalating waves. Probe-droids fly past. The ring tightens as your coherence rises.',
  },
  {
    id: 'choice',
    title: 'CHOICE',
    kicker: 'RITE III · JUDGMENT',
    body: 'Three dilemmas. No wrong answers — only conviction. Every judgment slams a wax-stamp verdict, then demands its proof: a minigame that makes your words become deeds.',
  },
] as const

export const HUB = [
  { title: 'HOLO-MAP', body: 'Living 3D map of beacons and threat zones.' },
  { title: 'DEAD-DROP CIPHER', body: 'Encode messages into star-chart coordinates. Your sigil is the key.' },
  { title: 'SAFE-LANE ROUTER', body: 'A* pathing that avoids patrol zones.' },
  { title: 'ARCHIVES', body: 'Holocron lore and survival guides.' },
  { title: 'COUNCIL', body: 'The war-room board.' },
  { title: 'BEACON FORGE', body: 'Mint recruitment posters and export them as PNG.' },
] as const

export const STACK = [
  { name: 'Vite + React + TypeScript', why: 'Fully static. Zero servers. Runs anywhere a browser does.' },
  { name: 'three.js / R3F', why: 'The portal, the tunnel, every setpiece is procedural — no video, no models.' },
  { name: 'GSAP + Lenis', why: 'Scroll drives a master timeline. Every beat is hand-budgeted.' },
  { name: 'framer-motion', why: 'State-driven entrances. A reopened chamber replays cleanly.' },
  { name: 'zustand', why: 'The Sanctum remembers. Rank, callsign, rites persist on-device.' },
  { name: 'howler / synth audio', why: 'Arms on first gesture. Temple drone and crystal chimes, never autoplay.' },
] as const

export const TOKENS = [
  { name: 'INK', hex: '#07090f', use: 'void / base' },
  { name: 'KYBER', hex: '#67e8f9', use: "the network's light" },
  { name: 'KYBER-DIM', hex: '#2e8fa3', use: 'secondary labels' },
  { name: 'EMBER', hex: '#e8b44c', use: 'attention / warmth' },
  { name: 'THREAT', hex: '#ff3b3b', use: 'danger only' },
  { name: 'BONE', hex: '#e8e6df', use: 'primary text' },
  { name: 'GHOST', hex: '#9aa3b2', use: 'muted text' },
] as const

export const FILES = [
  {
    group: 'Watch',
    name: 'SANCTUM-Promo.mp4',
    href: '/files/SANCTUM-Promo.mp4',
    kind: 'video',
    line: '60-second promo. 1080p60.',
  },
  {
    group: 'Present',
    name: 'SANCTUM-Deck.pptx',
    href: '/files/SANCTUM-Deck.pptx',
    kind: 'deck',
    line: 'Physical 16-slide pitch deck.',
  },
  {
    group: 'Read',
    name: 'SANCTUM-WriteUp.pdf',
    href: '/files/SANCTUM-WriteUp.pdf',
    kind: 'pdf',
    line: 'Deck write-up. Two pages.',
  },
  {
    group: 'Read',
    name: 'SANCTUM-UIUX.pdf',
    href: '/files/SANCTUM-UIUX.pdf',
    kind: 'pdf',
    line: 'Deck UI/UX: tokens, motion, interaction.',
  },
  {
    group: 'Read',
    name: 'SANCTUM-JudgesGuide.pdf',
    href: '/files/SANCTUM-JudgesGuide.pdf',
    kind: 'pdf',
    line: 'How to enter the deck. Code: HIDE.',
  },
  {
    group: 'Read',
    name: 'TS26_CCA_WRITEUP.pdf',
    href: '/files/TS26_CCA_WRITEUP.pdf',
    kind: 'pdf',
    line: 'App task write-up. The ≤100-word pitch.',
  },
  {
    group: 'Read',
    name: 'TS26_CCA_UIUX_DESIGN.pdf',
    href: '/files/TS26_CCA_UIUX_DESIGN.pdf',
    kind: 'pdf',
    line: '10-page app dossier. Architecture through hearts/minds/wallets.',
  },
  {
    group: 'Read',
    name: 'TS26_CCA_JUDGES_GUIDE.pdf',
    href: '/files/TS26_CCA_JUDGES_GUIDE.pdf',
    kind: 'pdf',
    line: 'How to enter the app. Code: 0528.',
  },
] as const

export const NAV = [
  { id: 'home', label: 'HOME' },
  { id: 'story', label: 'STORY' },
  { id: 'journey', label: 'JOURNEY' },
  { id: 'showcase', label: 'LIVE' },
  { id: 'files', label: 'FILES' },
  { id: 'video', label: 'VIDEO' },
  { id: 'team', label: 'TEAM' },
] as const

export const STATUS_LINES = [
  'CALIBRATING KYBER LATTICE',
  'ESTABLISHING COVERT UPLINK',
  'MASKING FORCE SIGNATURE',
  'SPOOFING IMPERIAL BEACONS',
  'DECRYPTING TRANSMISSIONS',
  'CHARGING PORTAL RING',
  'CHANNEL OPEN',
] as const
