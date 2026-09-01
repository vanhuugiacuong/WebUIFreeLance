"use client";

import { motion } from "framer-motion";
import { BannerGiaoVi } from "@/components/home/banner-giao-vi";
import { HoaTietKimCuong } from "@/components/hoa-tiet-kim-cuong";

/** Dải "GIAO VỊ — GIAO HÒA" với hai hoạ tiết đồng tiền thu nhỏ, so lê và có hiệu ứng xuất hiện. */
export function DaiSanPham() {
  return (
    <section className="relative overflow-x-clip py-[clamp(4rem,9vw,7.5rem)]">
      {/* Họa tiết bên trái: So lê ở dưới bên trái, cắt 50% ở rìa trái màn hình */}
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: "-50%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -bottom-6 left-0 w-[clamp(6rem,16vw,220px)] z-10"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <HoaTietKimCuong className="w-full" />
        </motion.div>
      </motion.div>

      {/* Họa tiết bên phải: So lê ở trên bên phải, cắt 50% ở rìa phải màn hình */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: "50%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -top-6 right-0 w-[clamp(6rem,16vw,220px)] z-10"
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
