"use client";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sky, Sparkles, Stars, useScroll } from "@react-three/drei";
import { Group, Object3DEventMap } from "three";
import { Planet } from "./models/planet";
import ShipPath from "./ShipPath";

export default function GroupMesh(props: any) {
  const group = useRef();

  return (
    <group position={[0, 0, -1]} {...props} ref={group}>
      <Stars
        radius={60}
        depth={10}
        count={500}
        factor={1}
        saturation={0}
        fade
        speed={1}
      />
      <Sparkles
        position={[0, 0, -12]}
        count={250}
        scale={60}
        opacity={0.75}
        size={6}
        speed={0.4}
      />
      <Planet
        model="./assets/models/pixel_planet_1.glb"
        position={[0, 0, -1]}
        scale={1}
      />
      <Planet
        model="./assets/models/pixel_planet_2.glb"
        position={[0, -6, -4]}
        scale={1.5}
      />
      <Planet
        model="./assets/models/pixel_planet_3.glb"
        position={[0, -12, -1]}
      />
      <Planet
        model="./assets/models/pixel_planet_4.glb"
        position={[0, -18, -4]}
        scale={1.2}
      />
      <Planet
        model="./assets/models/pixel_planet_5.glb"
        position={[0, -24, -2]}
        scale={1.0}
      />
      <Planet
        model="./assets/models/pixel_planet_6.glb"
        position={[0, -30, -4]}
        scale={1.7}
      />
      <ShipPath />
    </group>
  );
}
