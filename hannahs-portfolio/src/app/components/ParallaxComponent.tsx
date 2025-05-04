"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxComponent({
  children,
  offset = 300,
  sectionId,
  id,
}: {
  children: React.ReactNode;
  offset?: number;
  sectionId?: string;
  id?: number;

}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <section id={sectionId}
      ref={ref}
      className="justify-start md:h-screen justify-center relative overflow-hidden"
    >
      <motion.div style={{ y }}>{children}</motion.div>
    </section>
  );
}