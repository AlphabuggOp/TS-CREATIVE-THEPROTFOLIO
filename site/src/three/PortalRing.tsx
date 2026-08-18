import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function RingField({ knocked }: { knocked: number }) {
  const group = useRef<THREE.Group>(null)
  const inner = useRef<THREE.Mesh>(null)
  const count = 140
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const t = (i / count) * Math.PI * 2
      const r = 2.15 + (Math.random() - 0.5) * 0.18
      a[i * 3] = Math.cos(t) * r
      a[i * 3 + 1] = (Math.random() - 0.5) * 0.15
      a[i * 3 + 2] = Math.sin(t) * r
    }
    return a
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (group.current) group.current.rotation.y = t * 0.12
    if (inner.current) inner.current.rotation.z = -t * 0.22
  })

  const glow = 0.35 + knocked * 0.22

  return (
    <group ref={group}>
      <mesh rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[2.2, 0.035, 16, 180]} />
        <meshBasicMaterial color="#67e8f9" transparent opacity={0.85} />
      </mesh>
      <mesh ref={inner} rotation={[Math.PI / 2.4, 0, 0.4]}>
        <torusGeometry args={[1.55, 0.012, 12, 140]} />
        <meshBasicMaterial color="#e8b44c" transparent opacity={0.55 + knocked * 0.15} />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0, 0]}>
        <ringGeometry args={[1.05, 1.45, 80]} />
        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={glow * 0.18}
          side={THREE.DoubleSide}
        />
      </mesh>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#9ff6ff" size={0.035} sizeAttenuation transparent opacity={0.7} />
      </points>
    </group>
  )
}

export default function PortalRing({
  knocked,
  onKnock,
}: {
  knocked: number
  onKnock: () => void
}) {
  return (
    <div
      data-hot
      onClick={onKnock}
      style={{ position: 'absolute', inset: 0, zIndex: 1 }}
      aria-label="The ring. Knock three times."
    >
      <Canvas
        camera={{ position: [0, 0.2, 5.6], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <color attach="background" args={['#07090f']} />
        <ambientLight intensity={0.4} />
        <pointLight position={[2, 2, 3]} color="#67e8f9" intensity={6} />
        <RingField knocked={knocked} />
      </Canvas>
    </div>
  )
}
