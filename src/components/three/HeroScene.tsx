"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import * as THREE from "three";
import { prefersReducedMotion } from "@/lib/utils";

function HeroShape({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const group = useRef<THREE.Group>(null);
  const float = useRef(0);

  useFrame((_, delta) => {
    if (!group.current) return;
    float.current += delta;
    group.current.rotation.x += delta * 0.15;
    group.current.rotation.y += delta * 0.22;
    group.current.rotation.z += delta * 0.08;
    group.current.position.y = Math.sin(float.current * 0.8) * 0.15;
    group.current.rotation.x += mouse.current.y * 0.002;
    group.current.rotation.y += mouse.current.x * 0.002;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshBasicMaterial color="#2D7DD2" wireframe transparent opacity={0.85} />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0, Math.PI / 4]}>
        <torusGeometry args={[2.2, 0.02, 16, 80]} />
        <meshBasicMaterial color="#2D7DD2" transparent opacity={0.5} />
        <Edges color="#06D6A0" threshold={15} />
      </mesh>
    </group>
  );
}

function Scene({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <HeroShape mouse={mouse} />
    </>
  );
}

export function HeroScene({ className = "" }: { className?: string }) {
  const mouse = useRef({ x: 0, y: 0 });

  if (prefersReducedMotion()) return null;

  return (
    <div
      className={`h-full w-full ${className}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        mouse.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 2)}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene mouse={mouse} />
      </Canvas>
    </div>
  );
}
