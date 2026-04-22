import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Stars, TorusKnot, Icosahedron } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function AbstractTechShape() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Icosahedron ref={meshRef} args={[1.5, 0]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#3b82f6" wireframe opacity={0.3} transparent />
        </Icosahedron>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
        <TorusKnot args={[0.8, 0.2, 100, 16]} position={[0, 0, 0]}>
          <meshPhysicalMaterial 
            color="#8b5cf6" 
            metalness={0.9} 
            roughness={0.1} 
            transmission={0.5} 
            thickness={1.5} 
          />
        </TorusKnot>
      </Float>
    </group>
  )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} color="#3b82f6" intensity={2} />
        <AbstractTechShape />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
