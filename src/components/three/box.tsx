"use client"
import React, { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {  useScroll } from '@react-three/drei'

export default function Box(props:any) {
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame

  return (
    <mesh
    {...props}
    ref={meshRef}
    scale={active ? 1.5 : 1}
    onClick={(event) => setActive(!active)}
    onPointerOver={(event) => setHover(true)}
    onPointerOut={(event) => setHover(false)}>
    <boxGeometry args={[1,1,1]} />
    <meshStandardMaterial color={hovered ? 'hotpink' : props.color?props.color:'orange'} />
  </mesh>

  );
}
