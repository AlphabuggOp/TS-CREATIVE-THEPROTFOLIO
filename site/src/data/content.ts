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
    plate: '/shots/plate-aarav.png',
  },
  {
    name: 'Jeehan Kwatra',
    role: 'Design & Motion',
    line: 'The steel, the grain, the motion law.',
    plate: '/shots/plate-jeehan.png',
  },
  {
    name: 'Anuj Phulera',
    role: 'Engineering',
    line: 'The two-layer house, the rites, the persistence.',
    plate: '/shots/plate-anuj.png',
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
    body: 'Six hundred and twenty viewport-heights of scroll-driven cinema. You scroll, and you fly — through a procedural GLSL portal into hyperspace.',
  },
  {
    id: 'trials',
    act: 'ACT 2',
    title: 'THE TRIALS',
    body: 'Three playable rites judged by the Archivist. Signal trains the ear. Focus trains the hand. Choice trains the mind.',
  },
  {
    id: 'sanctum',
    act: 'ACT 3',
    title: 'THE SANCTUM',
    body: 'Holo-map, dead-drop cipher, A* router, archives, council, Beacon forge.',
  },
] as const

export const TRIALS = [
  {
    id: 'signal',
    title: 'SIGNAL',
    kicker: 'RITE I · MEMORY',
    body: 'Drag-rotate a sealed dial to catch a living, drifting frequency. Catch the carrier. Decode the fragments.',
  },
  {
    id: 'focus',
    title: 'FOCUS',
    kicker: 'RITE II · STEADINESS',
    body: 'Hold your light inside a breathing ring while the void pulls. Three escalating waves.',
  },
  {
    id: 'choice',
    title: 'CHOICE',
    kicker: 'RITE III · JUDGMENT',
    body: 'Three dilemmas. No wrong answers — only conviction. Every verdict becomes a proof game.',
  },
] as const

export const HUB = [
  { title: 'HOLO-MAP', body: 'Living 3D map of beacons and threat zones.' },
  { title: 'DEAD-DROP CIPHER', body: 'Encode messages into star-chart coordinates.' },
  { title: 'SAFE-LANE ROUTER', body: 'A* pathing that avoids patrol zones.' },
  { title: 'ARCHIVES', body: 'Holocron lore and survival guides.' },
  { title: 'COUNCIL', body: 'The war-room board.' },
  { title: 'BEACON FORGE', body: 'Mint recruitment posters. Export PNG.' },
] as const

export const STACK = [
  { name: 'Vite + React + TypeScript', why: 'Fully static. Zero servers.' },
  { name: 'three.js / R3F', why: 'Portal and setpieces are procedural.' },
  { name: 'GSAP + Lenis', why: 'Scroll drives a master timeline.' },
  { name: 'framer-motion', why: 'State-driven entrances.' },
  { name: 'zustand', why: 'The Sanctum remembers on-device.' },
  { name: 'synth audio', why: 'Arms on first gesture. Never autoplay.' },
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
    line: '10-page app dossier.',
  },
  {
    group: 'Read',
    name: 'TS26_CCA_JUDGES_GUIDE.pdf',
    href: '/files/TS26_CCA_JUDGES_GUIDE.pdf',
    kind: 'pdf',
    line: 'How to enter the app. Code: 0528.',
  },
  {
    group: 'Explore',
    name: 'SANCTUM-LiveLinks.txt',
    href: '/files/SANCTUM-LiveLinks.txt',
    kind: 'txt',
    line: 'The Drive note: live app + live deck URLs.',
  },
  {
    group: 'Explore',
    name: 'SANCTUM-RepoLinks.txt',
    href: '/files/SANCTUM-RepoLinks.txt',
    kind: 'txt',
    line: 'The Drive note: both GitHub repos.',
  },
  {
    group: 'Present',
    name: 'SANCTUM-Script.txt',
    href: '/files/SANCTUM-Script.txt',
    kind: 'txt',
    line: 'Finals script. ~6:30 spoken. Close on the QR.',
  },
] as const

export const PROCESS = [
  { no: '01', title: 'THE COVER FIRST', body: 'SIGNAL & STATIC had to survive as a blog before it was allowed to be a door.' },
  { no: '02', title: 'THEN THE SECOND COVER', body: 'Andoria Deep-Sky proved the disguise is a system, not a one-off.' },
  { no: '03', title: 'THEN THE RITES', body: 'Signal, Focus, Choice — playable, scored, remembered.' },
  { no: '04', title: 'THEN THE RECORD', body: 'Ceremony, Field Log, nineteen quests, a sigil that is yours.' },
  { no: '05', title: 'THEN THIS ARCHIVE', body: 'So a judge never has to open a Drive folder.' },
] as const

export const SCRIPT_BEATS = [
  { who: 'Aarav', slide: '01 HOOK', line: 'A website that pretends not to exist, until you prove you are worthy.' },
  { who: 'Aarav', slide: '02 PROBLEM', line: 'Survivors cannot google a rebellion.' },
  { who: 'Aarav', slide: '03 IDEA', line: 'Two layers. The cover is a complete website. Discovery is the product.' },
  { who: 'Jeehan', slide: '04 JOURNEY', line: 'Seal. Gate. Trials. Sanctum.' },
  { who: 'Jeehan', slide: '05 GATE', line: 'A scroll is a journey. 620vh. No video, no models.' },
  { who: 'Anuj', slide: '06 TRIALS', line: 'Signal. Focus. Choice. Every verdict becomes a proof game.' },
  { who: 'Anuj', slide: '07 SANCTUM', line: 'Map, cipher, router, archives, council, Beacon.' },
  { who: 'Anuj', slide: '08 CRAFT', line: 'Fully static. Zero servers. The Sanctum remembers.' },
  { who: 'Jeehan', slide: '09 BRAND', line: 'Motion must mean something.' },
  { who: 'Aarav', slide: '10 WHY', line: 'Every criterion is a feature.' },
  { who: 'Aarav', slide: '11-12 CLOSE', line: 'Do not take a Drive folder. Take the archive. Hold the QR.' },
] as const

export const STILLS = [
  { src: '/shots/promo-20.jpg', cap: 'Promo · the ring' },
  { src: '/shots/promo.jpg', cap: 'Promo · prove yourself' },
  { src: '/shots/globe.jpg', cap: 'Promo · the hidden war' },
  { src: '/shots/app.png', cap: 'SIGNAL & STATIC · first page' },
  { src: '/shots/deck.png', cap: 'Andoria · first page' },
] as const

export type ChamberId = 'lives' | 'theater' | 'vault' | 'dossier' | 'rite' | 'council' | 'forge' | 'record'

export const EXHIBITS: {
  id: ChamberId
  no: string
  title: string
  sub: string
}[] = [
  { id: 'lives', no: '01', title: 'THE LIVES', sub: 'Both decoys. Click a frame to leave.' },
  { id: 'theater', no: '02', title: 'THE THEATER', sub: 'The 60-second promo.' },
  { id: 'vault', no: '03', title: 'THE VAULT', sub: 'Every file from the Drive.' },
  { id: 'dossier', no: '04', title: 'THE DOSSIER', sub: 'Write-ups and guides, in place.' },
  { id: 'rite', no: '05', title: 'THE RITE', sub: 'How the door works.' },
  { id: 'council', no: '06', title: 'THE COUNCIL', sub: 'Aarav · Jeehan · Anuj' },
  { id: 'forge', no: '07', title: 'THE FORGE', sub: 'Stack, brand, source.' },
  { id: 'record', no: '08', title: 'THE RECORD', sub: 'Process, stills, the 8-minute script.' },
]

export const NAV = EXHIBITS.map((e) => ({ id: e.id, label: e.title.replace('THE ', '') }))

export const STATUS_LINES = [
  'CALIBRATING KYBER LATTICE',
  'ESTABLISHING COVERT UPLINK',
  'MASKING FORCE SIGNATURE',
  'SPOOFING IMPERIAL BEACONS',
  'DECRYPTING TRANSMISSIONS',
  'CHARGING PORTAL RING',
  'CHANNEL OPEN',
] as const
