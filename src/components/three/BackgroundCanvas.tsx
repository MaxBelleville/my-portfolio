"use client";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, useGLTF } from "@react-three/drei";
import { Suspense, useState } from "react";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
  Pixelation,
} from "@react-three/postprocessing";

import GroupMesh from "./GroupMesh";
import HomepageForeground from "../HomepageForeground";
import LoadingScreen from "../LoadingScreen";
import HomepageHeader from "../HomepageHeader";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import ScrollWatcher from "./ScrollWatcher";
import { OrderedDither } from "./effects/OrderedDither";
export default function BackgroundCanvas() {
  const [headerEnabled, setHeaderEnabled] = useState<boolean>(false);
  return (
    <div className="w-full h-screen">
      <Suspense fallback={<LoadingScreen />}>
        <HomepageHeader isVisible={headerEnabled} />
        <Canvas
          shadows
          gl={{ antialias: true, powerPreference: "high-performance" }}
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 2] }}
        >
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />

          <ScrollControls distance={2} damping={0.2} maxSpeed={0.2} pages={12}>
            <Scroll>
              <GroupMesh />
            </Scroll>
            <Scroll html>
              <ScrollWatcher
                onScroll={(scroll) => setHeaderEnabled(scroll >= 1)}
              />
              <HomepageForeground />
            </Scroll>
          </ScrollControls>

          <EffectComposer multisampling={0} enableNormalPass={false}>
            <DepthOfField
              focusDistance={0}
              focalLength={0.02}
              bokehScale={2}
              height={480}
            />

            <Bloom
              intensity={1.0} // The bloom intensity.
              luminanceThreshold={0.85} // luminance threshold. Raise this value to mask out darker elements in the scene.
              luminanceSmoothing={0.3} // smoothness of the luminance threshold. Range is [0, 1]
              mipmapBlur={false} // Enables or disables mipmap blur.
              height={300}
            />
            <Pixelation
              granularity={2} // pixel granularity
            />
            <OrderedDither
              matrixSize={4}
              eightNum={8}
              eightNumAug={1}
              useColor={true}
              invertDither={false}
              ditherScale={2}
              darkThreshold={-2}
              lightThreshold={16}
            />
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
        </Canvas>
      </Suspense>
    </div>
  );
}

useGLTF.preload("./assets/models/pixel_planet_1.glb");
useGLTF.preload("./assets/models/pixel_planet_2.glb");
useGLTF.preload("./assets/models/pixel_planet_3.glb");
useGLTF.preload("./assets/models/pixel_planet_4.glb");
useGLTF.preload("./assets/models/pixel_planet_5.glb");
useGLTF.preload("./assets/models/pixel_planet_6.glb");
useGLTF.preload("./assets/models/pixel_planet_7.glb");
useGLTF.preload("./assets/models/pixel_planet_8.glb");
useGLTF.preload("./assets/models/pixel_planet_9.glb");
useGLTF.preload("./assets/models/pixel_spaceship.glb");
