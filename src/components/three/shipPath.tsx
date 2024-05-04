"use client";
import React, { useMemo, useRef } from "react";
import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";
import {
  CatmullRomLine,
  Sky,
  Sparkles,
  Stars,
  useScroll,
} from "@react-three/drei";
import Box from "./box";
import { Planet1 } from "./models/planet1";
import { Planet2 } from "./models/planet2";
import { Planet4 } from "./models/planet4";
import { Planet5 } from "./models/planet5";
import { Planet6 } from "./models/planet6";
import { Planet3 } from "./models/planet3";
import { Spaceship } from "./models/spaceship";


const LINE_NB_POINTS = 600;

import { CatmullRomCurve3, Group, Mesh, Shape, Vector3 } from "three";
export default function ShipPath(props: any) {
  const group = useRef();
  const spaceship = useRef<Group>();
  const scroll= useScroll();
  const points: [number, number, number][] = [

  ];
  var oldScroll = scroll.offset;

  const curve = useMemo(() => {
    return new CatmullRomCurve3(
      [
        new Vector3(2,0,-2),
        new Vector3(3,-1,0),
        new Vector3(0,-4,0),
        new Vector3(-3,-8,0),
        new Vector3(0,-12,-7),
        new Vector3(3,-16,-3),
        new Vector3(0,-20,-3),
        new Vector3(-3,-24,0),
        new Vector3(3,-28,0),
        new Vector3(0,-30,-4),
      ],
      false,
      "catmullrom",
      0.5
    )
  },[]);

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, [curve]);

  const shape = useMemo(() => {
    const shape = new Shape();
    shape.moveTo(0, -0.01);
    shape.lineTo(0, 0.01);

    return shape;
  }, []);


  useFrame((state,delta)=>{
    try {
      var pos = new Vector3(0,0,0);
      var future = new Vector3(0,0,0);
      var diff = scroll.offset - oldScroll;
      curve.getPointAt(scroll.offset,pos); 
      var offset = (scroll.offset+0.01);
      if(diff < 0)offset =(scroll.offset-0.01);
      if(offset>1)offset=1; 
      if(offset<0)offset=0; 
      curve.getPointAt(offset,future);
      var axis= new Vector3(0, 0, 0);
      curve.getTangentAt(offset,axis)
      var angle = -Math.PI * 0.5;
      var lookAt = new Vector3(0,0,0);
      if(diff >= 0) {
        axis=axis.normalize().multiply(new Vector3(-1,-1,-0.25));
        lookAt=future.clone().applyAxisAngle(axis, angle);
      }
      else {
        axis=axis.normalize().multiply(new Vector3(1,-1,1));
        angle = Math.PI * 0.75;
        lookAt= future.clone().applyAxisAngle(axis, angle);
        lookAt.setY(1);
      }
      
      if(spaceship.current) {
        spaceship.current.position.copy(pos);
        spaceship.current.lookAt(lookAt);

      }
    }
    catch (e){

    }
    oldScroll=scroll.offset;
  })


  return (
    <group position={[0, 0, 0]} {...props} ref={group}>
      <Spaceship ref={spaceship} />
      <group>
        <mesh >
          <extrudeGeometry
            args={[
              shape,
              {
                steps: LINE_NB_POINTS,
                bevelEnabled: false,
                extrudePath: curve,
              },
            ]}
          />
          <meshStandardMaterial color={"white"} opacity={0.0} transparent />
        </mesh>
      </group>
    </group>
  );
}
