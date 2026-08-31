"use client";

import { motion } from "framer-motion";
import { BannerGiaoVi } from "@/components/home/banner-giao-vi";
import { HoaTietKimCuong } from "@/components/hoa-tiet-kim-cuong";

/** Dải "GIAO VỊ — GIAO HÒA" với hai hoạ tiết đồng tiền thu nhỏ, so lê và có hiệu ứng xuất hiện. */
export function DaiSanPham() {
  return (
    <section className="relative overflow-hidden py-[clamp(2.5rem,6vw,5.5rem)]">
      {/* Họa tiết bên trái: So lê góc trên bên trái */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -top-2 left-0 w-[clamp(5rem,14vw,190px)] -translate-x-[45%] z-10"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <HoaTietKimCuong className="w-full" />
        </motion.div>
      </motion.div>

      {/* Họa tiết bên phải: So lê góc dưới bên phải */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -bottom-2 right-0 w-[clamp(5rem,14vw,190px)] translate-x-[45%] z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <HoaTietKimCuong className="w-full" />
        </motion.div>
      </motion.div>

      <BannerGiaoVi className="relative mx-auto w-[69%]" />
    </section>
  );
}
