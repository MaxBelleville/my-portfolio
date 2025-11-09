"use client";
import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

import { Spaceship } from "./models/spaceship";

const LINE_NB_POINTS = 500;

import {
  CatmullRomCurve3,
  Group,
  Matrix4,
  Mesh,
  Quaternion,
  Shape,
  Vector3,
} from "three";
export default function ShipPath(props: any) {
  const group = useRef();
  const spaceship = useRef<Group>();
  const scroll = useScroll();

  const lastScroll = useRef(0);
  const scrollDir = useRef(1); // 1 forward, -1 backwards

  const slerpSpeed = useRef(0.1);
  const directionBuffer = useRef(0);

  const framePos = new Vector3();
  const frameFuture = new Vector3();
  const targetQuat = new Quaternion();
  const frameMat = new Matrix4();
  const hysteresis = 0.01;
  const threshold = 0.00001;

  const curve = useMemo(() => {
    return new CatmullRomCurve3(
      [
        new Vector3(0, 0, -6),
        new Vector3(3, -4, -3),
        new Vector3(0, -8, 0),
        new Vector3(-3, -12, -3),
        new Vector3(0, -16, -6),
        new Vector3(3, -20, -3),
        new Vector3(0, -24, 0),
        new Vector3(-3, -28, -3),
        new Vector3(0, -32, -6),
        new Vector3(3, -36, -3),
      ],
      false,
      "catmullrom",
      0.5
    );
  }, []);

  const shape = useMemo(() => {
    const shape = new Shape();
    shape.moveTo(0, -0.01);
    shape.lineTo(0, 0.01);

    return shape;
  }, []);

  useFrame((state, delta) => {
    const diff = scroll.offset - lastScroll.current;

    if (Math.abs(diff) > threshold) {
      const newDir = diff > 0 ? 1 : -1;
      directionBuffer.current += diff;

      if (Math.abs(directionBuffer.current) > hysteresis) {
        scrollDir.current = newDir;
        directionBuffer.current = 0;
      }

      //Reset the speed if direction changed
      if (scrollDir.current !== newDir) slerpSpeed.current = 0.0;
    }
    lastScroll.current = scroll.offset;

    //Slowly adjust to target
    slerpSpeed.current += (0.1 - slerpSpeed.current) * 0.05;

    const t = scroll.offset;
    const futureT = Math.min(Math.max(t + scrollDir.current * 0.02, 0), 1);

    curve.getPointAt(t, framePos);
    curve.getPointAt(futureT, frameFuture);

    if (!spaceship.current) return;

    spaceship.current.position.lerp(framePos, 0.2);

    frameMat.lookAt(framePos, frameFuture, new Vector3(0, 1, 0));
    targetQuat.setFromRotationMatrix(frameMat);

    spaceship.current.quaternion.slerp(targetQuat, slerpSpeed.current);
  });

  return (
    <group position={[0, 0, 0]} {...props} ref={group}>
      <Spaceship ref={spaceship} />
      <group>
        <mesh>
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
          <meshBasicMaterial
            color={"white"}
            fog={false}
            opacity={0.0}
            transparent={true}
            wireframe={true}
            wireframeLinewidth={0}
            lightMapIntensity={0}
          />
        </mesh>
      </group>
    </group>
  );
}
