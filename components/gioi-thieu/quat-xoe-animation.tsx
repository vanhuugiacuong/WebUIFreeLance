"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export function QuatXoeAnimation({ className }: { className?: string }) {
  return (
    <div className={cn("relative z-10 mt-20 flex justify-center", className)}>
      <motion.div
        initial={{
          opacity: 0,
          scaleY: 0.15,
          scaleX: 0.35,
          rotate: -15,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          scaleY: 1,
          scaleX: 1,
          rotate: 0,
          y: 0,
        }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: 1.0,
          ease: [0.16, 1, 0.3, 1], // Smooth fan opening spring curve
        }}
        whileHover={{
          scale: 1.06,
          rotate: [0, -2, 2, 0],
          transition: { duration: 0.5, ease: "easeOut" },
        }}
        style={{ transformOrigin: "bottom center" }}
        className="cursor-pointer"
      >
        <Image
          src="/images/gioi-thieu/web-48.png"
          alt="Họa tiết quạt xòe Bài Chòi"
          width={591}
          height={296}
          className="h-auto w-[280px] sm:w-[420px] lg:w-[480px] object-contain block drop-shadow-sm"
          priority
        />
      </motion.div>
    </div>
  );
}
