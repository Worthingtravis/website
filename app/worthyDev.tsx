import React, { FC, useEffect, useState } from "react";
import { Text } from "@react-three/drei";

export const WorthyDev: FC = () => {
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
    <group position={[0, 0, -1]} rotation={[0, 0, 0]} receiveShadow>
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
