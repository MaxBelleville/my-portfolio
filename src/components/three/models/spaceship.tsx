import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Spaceship(props: any) {
  const { nodes, materials } = useGLTF("./assets/models/pixel_spaceship.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spaceship_0.geometry}
        material={materials.Spaceship_Material}
        rotation={[-Math.PI * 0.5, 0, -Math.PI]}
        scale={0.075}
      />
    </group>
  );
}
