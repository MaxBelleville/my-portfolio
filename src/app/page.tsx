import type { Metadata } from "next";
import BackgroundCanvas from "../components/three/canvas";

export const metadata: Metadata = {
  title: "Home",
  description: "The homepage for my portfolio",
};

export default function Home() {

  return (
    <main>
      <BackgroundCanvas/>
    </main>
  );
  
}
