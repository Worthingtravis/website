"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  PerspectiveCamera,
  Preload,
  RoundedBox,
  Text,
  useGLTF,
} from "@react-three/drei";
import React, { FC, Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { usePathname } from "next/navigation";

/**
 * Example parametric function for a helix-like curve.
 * t ∈ [0, 1], though you could go beyond 1 for multiple loops.
 */
function helixAt(t: number): THREE.Vector3 {
  // Adjust these numbers to change radius, pitch, etc.
  const radius = 5;
  const verticalSpeed = 2; // how quickly z changes
  const angle = 2 * Math.PI * t; // one loop per 0→1 of t

  // x(t), y(t) = circular
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  // z(t) = climbs linearly (could also be sinusoidal, etc.)
  const z = verticalSpeed * t;

  return new THREE.Vector3(x, y, z);
}

const SwingingCube: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const containerRef = useRef<THREE.Group>(null!);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!);

  const pathName = usePathname();
  const isHome = pathName === "/";

  // Lights:
  const spotlightRef = useRef<THREE.SpotLight>(null!);
  const hemisphereRef = useRef<THREE.HemisphereLight>(null!);

  // Param to animate the spotlight
  const tRef = useRef(0);

  // Build a small array of points so we can visualize the curve as a line.

  // Fade / animation
  const fadeStartTime = useRef<number | null>(null);
  const [fadeInitialized, setFadeInitialized] = useState(false);

  // Final intensities for fade:
  const SPOTLIGHT_INTENSITY = 50;
  const HEMISPHERE_INTENSITY = 0.1;
  const FADE_DURATION = 3;

  useFrame((state, delta) => {
    // === Animate spotlight on the helix curve ===
    tRef.current += delta * 0.1; // speed factor
    // Let’s wrap the param so it keeps looping
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

    // === Fade-in logic for the lights ===
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

    if (hemisphereRef.current) {
      hemisphereRef.current.intensity = HEMISPHERE_INTENSITY * t;
    }

    // === Sample of other existing logic in your code (pendulum, etc.) ===
    if (groupRef.current) {
      const time = state.clock.getElapsedTime() * 0.45;
      const amplitude = 1;
      const pendulumLength = 9;
      const angle = amplitude * Math.sin((time * Math.PI) / 3);

      const x = Math.sin(angle) * pendulumLength;
      const y = -Math.cos(angle) * pendulumLength;
      groupRef.current.position.x = x;
      groupRef.current.position.y = y + pendulumLength;

      groupRef.current.rotation.z = angle;
      groupRef.current.rotation.x = angle;
      groupRef.current.rotation.y =
        (Math.sin((time * Math.PI) / 3) * Math.PI) / 2;
    }

    // Spotlight target
    if (spotlightRef.current && groupRef.current && cameraRef.current) {
      spotlightRef.current.target = groupRef.current;

      let angle = Math.hypot(
        cameraRef.current.position.x - spotlightRef.current.position.x,
        cameraRef.current.position.y - spotlightRef.current.position.y,
      );
      spotlightRef.current.target.position.x = Math.sin(angle) * 10;
      spotlightRef.current.target.position.y = Math.cos(angle) * 10;
      spotlightRef.current.target.updateMatrixWorld();
    }
  });

  // Load GLTF and enable shadows on its meshes
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
      <FullscreenRoundedBox />
      <PerspectiveCamera
        zoom={isHome ? 0.5 : 1}
        frames={60}
        makeDefault
        ref={cameraRef}
      >
        <group position={[0, 0, -5]} ref={containerRef}>
          <group ref={groupRef} position={[0, 0, 0]} castShadow>
            <primitive object={scene.scene} scale={[0.5, 0.5, 0.5]} />
          </group>
          {isHome && <WorthyDev />}
        </group>
      </PerspectiveCamera>{" "}
      <GlowingBulbSpotLight targetRef={groupRef} />
      <DuckyShadowCaster />
      {/* Background box */}
      {/*<hemisphereLight ref={hemisphereRef} intensity={0} color={"#fff"} />*/}
    </group>
  );
};

interface GlowingBulbSpotLightProps {
  /** The object you want this light to enclose/illuminate. */
  targetRef: React.RefObject<THREE.Group>;
}

const GlowingBulbSpotLight: FC<GlowingBulbSpotLightProps> = ({ targetRef }) => {
  // References to the various parts of our lighting group
  const groupRef = useRef<THREE.Group>(null!);
  const spotLightRef = useRef<THREE.SpotLight>(null!);
  const spotLightRef2 = useRef<THREE.SpotLight>(null!);
  const spotLightRef3 = useRef<THREE.SpotLight>(null!);

  const [intensity, setIntensity] = useState(0);
  // Animate the spotlight
  useFrame((state) => {
    if (
      !spotLightRef.current ||
      !spotLightRef2.current ||
      !spotLightRef3.current ||
      !targetRef.current
    )
      return;

    if (intensity < 500 && state.clock.getElapsedTime() > 1) {
      setIntensity(intensity + 5);
    }

    // spotLightRef.current.position.x = 5
    // spotLightRef.current.position.z = 0;

    spotLightRef2.current.position.z = targetRef.current.position.z;
    spotLightRef3.current.position.x = targetRef.current.position.x;

    spotLightRef2.current.position.y = 8;
    spotLightRef3.current.position.y = targetRef.current.position.y;

    spotLightRef.current.position.y = -8;

    spotLightRef.current.target = targetRef.current;
    spotLightRef2.current.target = targetRef.current;
    spotLightRef3.current.target = targetRef.current;
  });

  return (
    <group ref={groupRef}>
      <pointLight
        intensity={1000}
        color={"#db9292"}
        castShadow
        ref={spotLightRef}
        position={[0, 15, 50]}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-bias={-0.0005}
      />

      <Environment preset="night" />
    </group>
  );
};

/**
 * A “fullscreen” RoundedBox that fits the window on every resize,
 * so its edges hug the viewport.
 */
const FullscreenRoundedBox: React.FC = () => {
  const boxRef = useRef<THREE.Mesh>(null!);

  return (
    <RoundedBox
      ref={boxRef}
      args={[45, 45, 45]}
      position={[0, 0, 10]}
      receiveShadow
    >
      <meshPhongMaterial
        shininess={1}
        side={THREE.BackSide}
        color={"#934fd9"}
      />
    </RoundedBox>
  );
};

const WorthyDev = () => {
  const [fontSizeLarge, setFontSizeLarge] = useState(1);

  useEffect(() => {
    const updateFontSizes = () => {
      const isMobile = window.innerWidth <= 768; // Example breakpoint for mobile
      setFontSizeLarge(isMobile ? 0.6 : 2); // Adjust large text size
    };

    updateFontSizes(); // Initial setup
    window.addEventListener("resize", updateFontSizes);

    return () => window.removeEventListener("resize", updateFontSizes);
  }, []);

  return (
    <group>
      <Text
        fontSize={fontSizeLarge}
        color={"#fff"}
        position={[0, 1, -7]}
        receiveShadow
      >
        Travis Worthing
      </Text>

      <Text fontSize={fontSizeLarge} color={"lime"} position={[0, -1, -7]}>
        @WorthyDev.com
      </Text>
    </group>
  );
};

const DuckyShadowCaster: React.FC = () => {
  const { scene } = useGLTF("./ducky/scene.gltf");

  const duckyRef = useRef<THREE.Group>(null!);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        (child as THREE.Mesh).castShadow = true;
      }
    });
  }, [scene]);

  useFrame(() => {
    if (duckyRef?.current) {
      duckyRef.current.rotation.y = Math.abs(Date.now() * 0.001);
    }
  });

  return (
    <group
      ref={duckyRef}
      position={[0, -0.5, 1]}
      rotation={[0, -Math.PI / 2, 0]}
      castShadow
    >
      <primitive object={scene} scale={[2, 3, 3]} />
    </group>
  );
};

export const BgScene: React.FC = React.memo(() => {
  const ref = useRef<HTMLDivElement>(null!);

  return (
    <div className="fixed inset-0 top-0 z-[-1]" ref={ref}>
      <Canvas className="h-full w-full" shadows>
        <Suspense fallback={null}>
          <group rotation={[0, 0, 0]} position={[0, 0, 0]}>
            <SwingingCube />
          </group>
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
});

BgScene.displayName = "BgScene";

export default BgScene;
