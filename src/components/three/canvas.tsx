"use client";
import { Canvas } from "@react-three/fiber";
import style from "../../styles/canvas.module.css";
import { ScrollControls,PerspectiveCamera, Scroll } from '@react-three/drei'
import Box from "./box";
import { Suspense } from "react";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette
} from "@react-three/postprocessing";
import GroupMesh from "./group";

export default function BackgroundCanvas() {
  return (
    <div className={style.scene}>
      <Canvas
        shadows
        gl={{ antialias: false,powerPreference: "high-performance", }} 
        dpr={[1, 1.5]}
        className={style.canvas}
        camera={{ position: [0, 0,2] }}

      >
        
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Suspense fallback={null}>
        <ScrollControls distance={2} damping={0.5} pages={12}>
        <Scroll>
          <GroupMesh/>
        </Scroll>
        <Scroll html>
        <h1 style={{ position: 'absolute', top: '0vh', left: '0.5em',fontSize:'20em' }}>First</h1>
          <h1 style={{ position: 'absolute', top: '200vh', left: '0.5em',fontSize:'20em' }}>Second</h1>
          <h1 style={{ position: 'absolute', top: '400vh', left: '0.5em',fontSize:'20em' }}>Third</h1>
          <h1 style={{ position: 'absolute', top: '600vh', left: '0.5em',fontSize:'20em' }}>Fourth</h1>
          <h1 style={{ position: 'absolute', top: '800vh', left: '0.5em',fontSize:'20em' }}>Fifth</h1>
          <h1 style={{ position: 'absolute', top: '1000vh', left: '0.5em',fontSize:'20em' }}>Sixth</h1>
      
        </Scroll>
        </ScrollControls>
        </Suspense>
        <EffectComposer multisampling={0} enableNormalPass={false}>
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
          height={480}
        />
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
          opacity={3}
        />
        <Noise opacity={0.025} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
      </Canvas>
    </div>
  );
}
