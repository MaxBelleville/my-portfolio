import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Image from "next/image";
import Link from "next/link";
import style from "../styles/homepage.module.css";
const variants = {
  hidden: { y: -100, opacity: 0, filter: "blur(8px)" },
  visible: { y: 0, opacity: 1, filter: "blur(0)" },
};
interface HomepageHeaderProps {
  isVisible: boolean;
}

function HomepageHeader(props: HomepageHeaderProps) {
  return (
    <motion.div
      variants={variants}
      initial={"hidden"}
      animate={props.isVisible ? "visible" : "hidden"}
      transition={{
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.6,
        staggerChildren: 0.05,
      }}
      className="navbar bg-neutral-900 shadow-blue-900 shadow-sm fixed top-0 left-0 w-full z-50 justify-center"
    >
      <ul className="menu menu-vertical lg:menu-horizontal px-1 ">
        <li>
          <Link href="/" className="link link-info">
            Home
          </Link>
        </li>
        <li>
          <Link href="/cases" className="link link-info">
            Cases
          </Link>
        </li>
        <li>
          <Link href="/blog" className="link link-info">
            Blog
          </Link>
        </li>
      </ul>
    </motion.div>
  );
}

export default HomepageHeader;
