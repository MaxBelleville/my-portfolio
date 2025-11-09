"use client";
import React, { useEffect, useRef, useState } from "react";
import { MotionValue, useScroll, useTransform } from "framer-motion";
interface ParrallaxParams {
  setVal: React.Dispatch<React.SetStateAction<MotionValue<number | string>>>;
  pos: [number | string, number | string];
}

interface ParrallaxProps {
  children: React.JSX.Element;
  params?: ParrallaxParams[];
  className?: string;
}

function ParrallaxDiv(props: ParrallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  if (props.params && props.params.length > 0) {
    for (const param of props.params) {
      param.setVal(useTransform(scrollYProgress, [0, 1], param.pos));
    }
  }
  return (
    <div className={props.className} ref={ref}>
      {props.children}
    </div>
  );
}

export default ParrallaxDiv;
