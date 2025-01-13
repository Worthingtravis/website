import { Environment } from "@react-three/drei";
import React from "react";

/**
 * Simple point-light “bulb” + environment, with all extra references removed.
 */
export const GlowingBulbSpotLight = () => {
  return (
    <group>
      <pointLight
        intensity={1000}
        color={"#fdb400"}
        castShadow
        position={[1, -0.85, 1]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <Environment preset="night" />
    </group>
  );
};
