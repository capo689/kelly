import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function TerrainPoints() {
  const ref = useRef()
  const positions = useMemo(() => {
    const count = 650
    const data = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 1) {
      const x = (i % 26) / 25 * 12 - 6
      const z = Math.floor(i / 26) / 25 * 9 - 4.5
      const ridge = Math.sin(x * 0.8) * 0.5 + Math.cos(z * 1.15) * 0.35
      const taper = Math.max(0, 1 - Math.abs(x) / 7)
      data[i * 3] = x + (Math.sin(i * 7.31) * 0.08)
      data[i * 3 + 1] = ridge * taper - 1.2 + (Math.cos(i * 2.17) * 0.04)
      data[i * 3 + 2] = z
    }
    return data
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.12) * 0.08
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.04
  })

  return (
    <points ref={ref} rotation={[-0.22, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#efc36b" size={0.035} transparent opacity={0.58} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  )
}

export default function TerrainCanvas() {
  return (
    <div className="terrain-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 1.6, 6], fov: 46 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: false }}>
        <TerrainPoints />
      </Canvas>
    </div>
  )
}
