import { Environment } from "@react-three/drei";
import React from "react";
import { DuckyShadowCaster } from "@/duckyShadowCaster";

/**
 * Simple point-light “bulb” + environment, with all extra references removed.
 */
export const GlowingBulbSpotLight = () => {
  return (
    <group>
      <pointLight
        intensity={100}
        color={"#ffffff"}
        castShadow
        position={[1, -0.85, 1]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <DuckyShadowCaster />
      <Environment preset="night" />
    </group>
  );
};
