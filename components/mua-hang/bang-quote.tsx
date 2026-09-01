"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/container";

/**
 * Băng trích dẫn đầu trang cho luồng đặt hàng:
 * Thêm hiệu ứng Framer Motion mượt mà xuất hiện ấn tượng.
 */
export function BangQuote() {
  return (
    <>
      <div className="h-[66px] sm:h-[70px]" aria-hidden />
      <section className="relative isolate flex min-h-[clamp(12rem,26vw,22rem)] w-full items-center justify-center overflow-hidden bg-cam">
        {/* Background Image với hiệu ứng Scale Zoom mượt từ 1.2 xuống 1.05 */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0.8 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 -z-10 w-full h-full"
        >
          <Image
            src="/images/mua-hang/quote-bg.webp"
            alt="Thưởng vị đậm đà, trao men gắn kết"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center w-full h-full"
          />
        </motion.div>

        <span aria-hidden className="absolute inset-0 -z-10 bg-den/15" />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h1 className="text-center font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-bold uppercase leading-[1.15] text-kem drop-shadow-md tracking-wide">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                &ldquo;Thưởng vị đậm đà,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="block mt-1 sm:mt-2"
              >
                trao men gắn kết&rdquo;
              </motion.span>
            </h1>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
