"use client";
import { Canvas } from "@react-three/fiber";
import style from "../../styles/homepage.module.css";
import { ScrollControls, Scroll, useGLTF,Loader } from '@react-three/drei'
import Box from "./box";
import { Suspense, useEffect } from "react";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette
} from "@react-three/postprocessing";
import GroupMesh from "./group";
import HomepageForeground from "../HomepageForeground";

export default function BackgroundCanvas() {
  return (
    <div className={style.scene}>
      <Suspense fallback={<h1>Loading Canvas...</h1>}>
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

        <ScrollControls distance={2} damping={0.75} pages={12}>
        <Scroll>
          <GroupMesh/>
        </Scroll>
        <Scroll html>
          <HomepageForeground/>
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
      </Suspense>
      <Loader
      containerStyles={{
        backgroundImage: "url('./assets/logo.png')",
        backgroundRepeat:"no-repeat",
        backgroundPosition: "center 35%",
      }}
      innerStyles={{height:"32px",width:"300px",marginTop:"40%", borderRadius:"50px"}}
      dataStyles={{fontSize:"18pt"}}
      barStyles={
        {height:"32px",width:"300px",borderRadius:"50px",backgroundColor:"blue"}
      }
      dataInterpolation={(p) => `Loading portfolio, ${p.toFixed(2)}%`} />

    </div>
  );
}

useGLTF.preload('./assets/planet1.gltf')
useGLTF.preload('./assets/planet2.gltf')
useGLTF.preload('./assets/planet3.gltf')
useGLTF.preload('./assets/planet4.gltf')
useGLTF.preload('./assets/planet5.gltf')
useGLTF.preload('./assets/planet6.gltf')
useGLTF.preload("./assets/spaceship.gltf");
