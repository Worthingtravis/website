"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useScroll, useTransform } from "framer-motion";


const SwingingCube: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const containerRef = useRef<THREE.Group>(null!);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!);
  const spotlightRef = useRef<THREE.SpotLight>(null!);

  const { scrollY } = useScroll();
  const zOffSet = useTransform(scrollY, [0, 1000], [1, 2]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.5;


    if (groupRef.current) {
      // Calculate pendulum position with longer string
      const amplitude = 0.5;
      const pendulumLength = 24;

      const angle = amplitude * Math.sin((time * Math.PI) / 3);

      // Convert angle to x,y position while maintaining pendulum length
      const x = Math.sin(angle) * pendulumLength;
      const y = -Math.cos(angle) * pendulumLength;

      // Update cube position
      groupRef.current.position.x = x;
      groupRef.current.position.y = y + pendulumLength;
      groupRef.current.position.z = -2;

      // Rotate cube to match swing angle
      groupRef.current.rotation.z = angle;
      groupRef.current.rotation.x = angle;

      // use mod, after a full rock back and forth, rotate the cube 90 degrees
      groupRef.current.rotation.y =
        (Math.sin((time * Math.PI) / 3) * Math.PI) / 2;
    }

    if (cameraRef.current && cameraRef.current.position) {
      //@ts-ignore
      cameraRef.current.target = groupRef.current;
    }

    if (spotlightRef.current && cameraRef.current && groupRef.current) {
      // Move spotlight with cube
      spotlightRef.current.position.x = cameraRef.current.position.x;
      spotlightRef.current.position.y = cameraRef.current.position.y;
      spotlightRef.current.position.z = cameraRef.current.position.z;

      // Rotate spotlight to match cube rotation
      spotlightRef.current.rotation.z = groupRef.current.rotation.z;
      spotlightRef.current.rotation.x = groupRef.current.rotation.x;
      spotlightRef.current.rotation.y = groupRef.current.rotation.y;
    }
  });

  const scene = useGLTF("/rubiks.gltf");

  return (
    <group>
      <group position={[0, 1, 10]} ref={containerRef} rotation={[0, 0, 0]}>
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          fov={100}
          near={0.1}
          far={3000}
        />
        <ambientLight intensity={55} />
        <directionalLight
          ref={(e) => {
            if (e) {
              e.position.set(50, 250, -155);
              e.intensity = 0.5;
            }
          }}
        />

        <directionalLight
          ref={(e) => {
            if (e) {
              e.position.set(-155, 50, 155);
              e.intensity = 0.5;
            }
          }}
        />

        <directionalLight
          ref={(e) => {
            if (e) {
              e.position.set(5, -5, 5);
              e.intensity = 0.5;
            }
          }}
        />
        {/*<directionalLight position={[-50, -50, -50]} intensity={1} />*/}
        {/*<RandomizedLight />*/}
      </group>

      <group ref={groupRef} receiveShadow>
        <primitive object={scene.scene} />
      </group>
    </group>
  );
};

export const BgScene: React.FC = React.memo(() => {
  const ref = useRef<HTMLDivElement>(null!);
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 900);
  }, []);

  return (
    <div className="fixed inset-0 top-0 z-[-1] h-screen w-screen" ref={ref}>
      {mounted && (
        <Canvas className="h-full w-full">
          <group rotation={[45, 0, 0]} position={[0, 0, 0]}>
            <SwingingCube />
          </group>
        </Canvas>
      )}
    </div>
  );
});

BgScene.displayName = "BgScene";

export default BgScene;
