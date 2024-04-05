import React from "react";
import { Canvas } from "@react-three/fiber";

export const Earth = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh rotation={[0, 10, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial />
      </mesh>
      kam
    </Canvas>
  );
};
