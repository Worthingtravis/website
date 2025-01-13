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
import React, {
  FC,
  Suspense,
  useEffect,
  useRef,
  useState,
  RefObject,
} from "react";
import * as THREE from "three";
import { usePathname } from "next/navigation";

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

const SwingingCube: FC = () => {
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
      groupRef.current.rotation.set(angle, (Math.sin((time * Math.PI) / 3) * Math.PI) / 2, angle);
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
      <FullscreenRoundedBox />
      <PerspectiveCamera
        zoom={isHome ? 0.5 : 1}
        makeDefault
        ref={cameraRef}
      >
        {/* Container group for the cube & optional text */}
        <group position={[0, 0, -5]}>
          <group ref={groupRef} position={[0, 0, 0]} castShadow>
            <primitive object={scene.scene} scale={[0.5, 0.5, 0.5]} />
          </group>
          {isHome && <WorthyDev />}
        </group>
      </PerspectiveCamera>
      <GlowingBulbSpotLight />
      <DuckyShadowCaster />
    </group>
  );
};


/**
 * Simple point-light “bulb” + environment, with all extra references removed.
 */
const GlowingBulbSpotLight = () => {

  return (
    <group>
      {/* Single point light to match the original visuals */}
      <pointLight
        intensity={1000}
        color="#fff"
        castShadow
        position={[0, 25, 20]}
        // Reduced shadow map size to 1024 for performance; feel free to revert to 4096 if needed
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0005}
      />
      <Environment preset="night" />
    </group>
  );
};

const FullscreenRoundedBox: FC = () => {
  const boxRef = useRef<THREE.Mesh>(null!);

  return (
    <RoundedBox
      ref={boxRef}
      args={[45, 45, 45]}
      position={[0, 0, 10]}
      receiveShadow
    >
      <meshPhongMaterial shininess={1} side={THREE.BackSide} color="#934fd9" />
    </RoundedBox>
  );
};

const WorthyDev: FC = () => {
  const [fontSizeLarge, setFontSizeLarge] = useState(1);

  useEffect(() => {
    const updateFontSizes = () => {
      const isMobile = window.innerWidth <= 768;
      setFontSizeLarge(isMobile ? 0.6 : 2);
    };

    updateFontSizes();
    window.addEventListener("resize", updateFontSizes);
    return () => window.removeEventListener("resize", updateFontSizes);
  }, []);

  return (
    <group position={[0, 0, 4]} rotation={[0, 0, 0]} receiveShadow>
      <Text
        receiveShadow
        fontSize={fontSizeLarge}
        color="#fff"
        position={[0, 1, -7]}
      >
        Travis Worthing
      </Text>
      <Text fontSize={fontSizeLarge} color="lime" position={[0, -1, -7]}>
        @WorthyDev.com
      </Text>
    </group>
  );
};

const DuckyShadowCaster: FC = () => {
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
    if (duckyRef.current) {
      duckyRef.current.rotation.y = Math.abs(Date.now() * 0.001);
    }
  });

  return (
    <group
      ref={duckyRef}
      position={[0, 1, -3]}
      rotation={[0, -Math.PI / 2, 0]}
      castShadow
    >
      <primitive object={scene} scale={[2, 3, 3]} />
    </group>
  );
};

/**
 * Background scene container with Canvas + Suspense
 */
export const BgScene: FC = React.memo(() => {
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
