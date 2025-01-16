"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Preload,
  RoundedBox,
  useGLTF,
} from "@react-three/drei";
import React, { FC, Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { usePathname } from "next/navigation";
import { GlowingBulbSpotLight } from "@/glowingBulbSpotLight";
import { WorthyDev } from "@/worthyDev";
import { AiOutlineLoading } from "react-icons/ai";
import { motion } from "framer-motion";

/**
 * Helix-like function returning a 3D position on a spiral.
 */
function helixAt(t: number): THREE.Vector3 {
  const radius = 5;
  const verticalSpeed = 2;
  const angle = 2 * Math.PI * t;
  return new THREE.Vector3(
    radius * Math.cos(angle),
    radius * Math.sin(angle),
    verticalSpeed * t,
  );
}

const SwingingCube = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!);

  const pathName = usePathname();
  const isHome = pathName === "/";

  // Single spotlight ref used for the helix light
  const spotlightRef = useRef<THREE.SpotLight>(null!);

  // Param for helix-based motion
  const tRef = useRef(0);

  // For fade-in logic
  const fadeStartTime = useRef<number | null>(null);
  const [fadeInitialized, setFadeInitialized] = useState(false);

  // Final intensities for fade
  const SPOTLIGHT_INTENSITY = 50;
  // Removed hemisphere lighting references since it’s never rendered
  const FADE_DURATION = 3;

  useFrame((state, delta) => {
    // === 1) Animate spotlight on the helix curve ===
    tRef.current += delta * 0.1;
    if (tRef.current > 2) {
      tRef.current = 0;
    }
    const positionOnCurve = helixAt(tRef.current);
    if (spotlightRef.current) {
      spotlightRef.current.position.set(
        positionOnCurve.x,
        positionOnCurve.y + 4,
        positionOnCurve.z,
      );
    }

    // === 2) Fade in the spotlight intensity over FADE_DURATION ===
    if (!fadeInitialized) {
      setFadeInitialized(true);
      fadeStartTime.current = state.clock.getElapsedTime();
    }
    if (!fadeInitialized) return;

    const elapsed = state.clock.getElapsedTime() - (fadeStartTime.current ?? 0);
    const t = THREE.MathUtils.clamp(elapsed / FADE_DURATION, 0, 1);

    if (spotlightRef.current) {
      spotlightRef.current.intensity = SPOTLIGHT_INTENSITY * t;
    }

    // === 3) Pendulum logic for the group ===
    if (groupRef.current) {
      const time = state.clock.getElapsedTime() * 0.45;
      const amplitude = 1;
      const pendulumLength = 9;
      const angle = amplitude * Math.sin((time * Math.PI) / 3);

      const x = Math.sin(angle) * pendulumLength;
      const y = -Math.cos(angle) * pendulumLength;

      groupRef.current.position.set(x, y + pendulumLength, 0);
      groupRef.current.rotation.set(
        angle,
        (Math.sin((time * Math.PI) / 3) * Math.PI) / 2,
        angle,
      );
    }

    // === 4) Aim the spotlight at the group using camera as reference ===
    if (spotlightRef.current && groupRef.current && cameraRef.current) {
      spotlightRef.current.target = groupRef.current;

      const angle = Math.hypot(
        cameraRef.current.position.x - spotlightRef.current.position.x,
        cameraRef.current.position.y - spotlightRef.current.position.y,
      );
      spotlightRef.current.target.position.set(
        Math.sin(angle) * 10,
        Math.cos(angle) * 10,
        spotlightRef.current.target.position.z,
      );
      spotlightRef.current.target.updateMatrixWorld();
    }
  });

  // Load the Rubik’s Cube GLTF and enable shadows
  const scene = useGLTF("/rubiks.gltf");
  useEffect(() => {
    scene.scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        (child as THREE.Mesh).castShadow = true;
        (child as THREE.Mesh).receiveShadow = true;
      }
    });
  }, [scene.scene]);

  return (
    <group>
      <PerspectiveCamera makeDefault ref={cameraRef} position={[0, 0, 5]} />
      {isHome && <WorthyDev />}
      <group position={[0, 0, -5]}>
        <group ref={groupRef} position={[0, 0, 0]} castShadow>
          <primitive object={scene.scene} scale={[0.5, 0.5, 0.5]} />
        </group>
      </group>
      <GlowingBulbSpotLight />
    </group>
  );
};

/**
 * Background scene container with Canvas + Suspense
 */
export const BgScene: FC = React.memo(() => {
  const ref = useRef<HTMLDivElement>(null!);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), 1000);
  }, []);
  if (!mounted)
    return (
      <AiOutlineLoading className="fixed top-1/2 left-1/2 size-52 -translate-x-1/2 -translate-y-1/2 animate-spin" />
    );
  return (
    <>
      <motion.div className="fixed inset-0 top-0 z-[-1]" ref={ref}>
        <Canvas className="h-full w-full" shadows>
          <Suspense fallback={null}>
            <SwingingCube />
            <Preload all />
          </Suspense>
        </Canvas>
      </motion.div>
    </>
  );
});

BgScene.displayName = "BgScene";

export default BgScene;
