"use client";
import { useProgress } from "@react-three/drei";
import React from "react";

import Image from "next/image";
import Link from "next/link";

function LoadingScreen() {
  const { progress } = useProgress();
  return <div className="w-full h-screen overflow-hidden relative p-10"></div>;
}

export default LoadingScreen;
