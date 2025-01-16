import React, { useEffect, useRef } from "react";
import { useGLTF, Text } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export const DuckyShadowCaster = () => {
  const { scene } = useGLTF("./ducky/scene.gltf");
  const duckyRef = useRef<THREE.Group>(null!);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        (child as THREE.Mesh).castShadow = true;
        (child as THREE.Mesh).receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame(() => {
    duckyRef.current.rotation.y += 0.01;
  })

  return (
    <group
      ref={duckyRef}
      position={[0, 1.5, -6]}
      rotation={[0, -Math.PI / 2, 0]}
    >
      <primitive object={scene} scale={[3, 3, 3]} />
    </group>
  );
};
