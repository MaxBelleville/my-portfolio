import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";

interface ScrollWatcherProps {
  onScroll: (scroll: number) => void;
}

function ScrollWatcher(props: ScrollWatcherProps) {
  //Only watches the first page lol.
  const data = useScroll();
  var prev = 0;
  useFrame((state) => {
    if (data.offset > 0 && prev != data.range(0, 1 / 12)) {
      prev = data.range(0, 1 / 12);
      props.onScroll(prev);
    }
  });

  return <div></div>;
}

export default ScrollWatcher;
