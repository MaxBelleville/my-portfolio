"use client";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sky, Sparkles, Stars, useScroll} from '@react-three/drei'
import Box from "./box";
import { Group, Object3DEventMap } from "three";
import { Planet1 } from "./models/planet1";
import { Planet2 } from "./models/planet2";
import { Planet4 } from "./models/planet4";
import { Planet5 } from "./models/planet5";
import { Planet6 } from "./models/planet6";
import { Planet3 } from "./models/planet3";
import ShipPath from "./shipPath";

export default function GroupMesh(props:any) {

  const group = useRef();


  return (
    <group position={[0, 0, -1]} {...props} ref={group}>
      <Stars radius={60} depth={10} count={500} factor={1} saturation={0} fade speed={1} />
      <Sparkles count={250} scale={60} opacity={0.75} size={6} speed={0.4} />
      <Planet1/>
      <Planet2/>
      <Planet3/>
      <Planet4/>
      <Planet5/>
      <Planet6/>
      <ShipPath/>
      
    </group>
  );
}
