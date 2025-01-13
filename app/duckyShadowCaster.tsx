import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export const DuckyShadowCaster = () => {
  const { scene } = useGLTF("./ducky/scene.gltf");
  const duckyRef = useRef<THREE.Group>(null!);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        (child as THREE.Mesh).castShadow = true;
        // (child as THREE.Mesh).receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <group
      ref={duckyRef}
      position={[1, -1.1, -0.5]}
      rotation={[0, -Math.PI / 2, 0]}
    >
      <primitive object={scene} scale={[2, 3, 3]} />
    </group>
  );
};
