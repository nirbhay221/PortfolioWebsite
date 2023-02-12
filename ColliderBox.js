import React, { useCallback, useEffect, useState } from "react";
import { useBox } from "@react-three/cannon";

export default function Collider (props) {
  const [cubeRef, api] = useBox(() => ({
    mass: 1,
    args: [0.7,0.7,0.7],
    material: {
      friction: 1,
      restitution: 0
    },
    ...props
  }));

  
  return (
    <mesh ref={cubeRef} castShadow layers={props.layers}>
      <boxBufferGeometry args={[0.3,0.3,0.3]}  />
      <meshLambertMaterial emissive="cyan" emissiveIntensity = {4} color = "blue" />
    </mesh>
  );
};
