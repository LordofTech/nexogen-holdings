"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { prefersReducedMotion } from "@/lib/utils";

const SHAPES = ["sphere", "box", "torus", "icosahedron"] as const;

function MorphingOrb() {
  const mesh = useRef<THREE.Mesh>(null);
  const [shapeIndex, setShapeIndex] = useState(0);
  const timer = useRef(0);
  const satellites = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    timer.current += delta;
    if (timer.current > 4) {
      timer.current = 0;
      setShapeIndex((i) => (i + 1) % SHAPES.length);
    }
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.3;
      mesh.current.rotation.x += delta * 0.1;
    }
    if (satellites.current) {
      satellites.current.rotation.z += delta * 0.5;
    }
  });

  const geometry = (() => {
    switch (SHAPES[shapeIndex]) {
      case "box":
        return <boxGeometry args={[1.8, 1.8, 1.8]} />;
      case "torus":
        return <torusGeometry args={[1.2, 0.35, 24, 64]} />;
      case "icosahedron":
        return <icosahedronGeometry args={[1.4, 0]} />;
      default:
        return <sphereGeometry args={[1.4, 32, 32]} />;
    }
  })();

  return (
    <group>
      <mesh ref={mesh}>
        {geometry}
        <meshStandardMaterial
          color="#2D7DD2"
          emissive="#2D7DD2"
          emissiveIntensity={0.4}
          wireframe
          transparent
          opacity={0.9}
        />
      </mesh>
      <group ref={satellites}>
        {[0, 1, 2, 3].map((i) => (
          <mesh
            key={i}
            position={[Math.cos((i / 4) * Math.PI * 2) * 2.8, Math.sin((i / 4) * Math.PI * 2) * 2.8, 0]}
          >
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshBasicMaterial color={i % 2 === 0 ? "#2D7DD2" : "#06D6A0"} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

export function AboutOrb({ className = "" }: { className?: string }) {
  if (prefersReducedMotion()) {
    return (
      <div className={`flex h-full items-center justify-center ${className}`}>
        <div className="h-48 w-48 rounded-full border border-[#2D7DD2]/40 bg-[#2D7DD2]/10" />
      </div>
    );
  }

  return (
    <div className={`h-full min-h-[400px] w-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={1}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#2D7DD2" />
        <MorphingOrb />
      </Canvas>
    </div>
  );
}
