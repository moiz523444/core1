import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, OrbitControls, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField({ count = 550 }) {
  const ref = useRef(null);
  const positions = useMemo(() => {
    const data = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.2 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      data[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      data[i * 3 + 1] = r * Math.cos(phi);
      data[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    return data;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.025;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial transparent color="#67e8f9" size={0.018} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

function CoreObject() {
  const ref = useRef(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.12;
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.08;
    }
  });
  return (
    <group ref={ref}>
      <mesh>
        <icosahedronGeometry args={[1.18, 1]} />
        <MeshTransmissionMaterial backside thickness={0.5} roughness={0.12} transmission={1} ior={1.45} chromaticAberration={0.18} anisotropy={0.3} color="#b7f7ff" />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.55, 0.012, 12, 96]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.8} />
      </mesh>
      <mesh rotation={[0, Math.PI / 3, Math.PI / 4]}>
        <torusGeometry args={[1.78, 0.008, 12, 96]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

export function HeroCanvas() {
  return (
    <div className="canvas-shell" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5.8], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={1.4} />
        <pointLight position={[3, 2, 4]} intensity={14} color="#22d3ee" />
        <pointLight position={[-3, -2, 2]} intensity={9} color="#6366f1" />
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.2}>
          <CoreObject />
        </Float>
        <ParticleField />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.18} />
      </Canvas>
    </div>
  );
}

function GlobeMesh() {
  const globeGroupRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);
  const pulsePointsRef = useRef(null);

  // Generate glowing city node coordinates on the sphere
  const { nodePositions } = useMemo(() => {
    const count = 40;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const radius = 1.18;
      positions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return { nodePositions: positions };
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (globeGroupRef.current) {
      globeGroupRef.current.rotation.y = t * 0.18;
      globeGroupRef.current.rotation.x = Math.sin(t * 0.08) * 0.12;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.15;
    }
    if (pulsePointsRef.current) {
      const scale = 1 + Math.sin(t * 2) * 0.02;
      pulsePointsRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={globeGroupRef}>
      {/* Inner Glowing Core Sphere */}
      <mesh>
        <sphereGeometry args={[1.15, 36, 36]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.02} />
      </mesh>

      {/* Main Latitude & Longitude Wireframe Grid */}
      <mesh>
        <sphereGeometry args={[1.16, 28, 20]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.15} />
      </mesh>

      {/* Secondary Dense Latitude Ribs */}
      <mesh rotation={[0.4, 0.2, 0]}>
        <sphereGeometry args={[1.17, 20, 14]} />
        <meshBasicMaterial color="#a1a1aa" wireframe transparent opacity={0.1} />
      </mesh>

      {/* Glowing City Nodes / Data Points */}
      <Points ref={pulsePointsRef} positions={nodePositions} stride={3}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.045}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>

      {/* Outer Orbiting Data Ring 1 */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0.2, 0]}>
        <torusGeometry args={[1.52, 0.01, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
      </mesh>

      {/* Outer Orbiting Data Ring 2 */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 4, 0.5, 0]}>
        <torusGeometry args={[1.68, 0.007, 16, 100]} />
        <meshBasicMaterial color="#a1a1aa" transparent opacity={0.15} />
      </mesh>

      {/* Atmospheric Halo Shell */}
      <mesh>
        <sphereGeometry args={[1.28, 28, 28]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.03} />
      </mesh>
    </group>
  );
}

export function GlobeCanvas() {
  return (
    <div className="absolute inset-y-0 right-0 w-full md:w-[70%] pointer-events-none opacity-[0.25] z-0 translate-x-[10%] md:translate-x-[20%]" 
         style={{ maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)' }} 
         aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[5, 4, 5]} intensity={18} color="#ffffff" />
        <pointLight position={[-5, -4, 3]} intensity={12} color="#a1a1aa" />
        <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.25}>
          <GlobeMesh />
        </Float>
        <ParticleField count={180} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.35}
        />
      </Canvas>
    </div>
  );
}
