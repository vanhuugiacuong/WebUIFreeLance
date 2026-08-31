"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/container";
import { NutMuiTen } from "@/components/nut-mui-ten";
import { BadgeGiaoVi } from "@/components/home/badge-giao-vi";

/* Cỡ chữ & căn lề chuẩn theo Figma 1446px */
const CHU_LON =
  "font-display font-bold uppercase leading-[1.14] text-[clamp(1.75rem,3.87vw,3.5rem)] text-kem";
const CHU_NHO =
  "text-[clamp(0.875rem,1.8vw,1.625rem)] leading-[1.65] text-kem font-normal";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-top"
      />

      <h1 className="sr-only">
        Rượu Miên — thưởng vị đậm đà, giao vị, trao men gắn kết
      </h1>

      <Container className="flex flex-col items-center pt-[clamp(18rem,33vw,30rem)] pb-[clamp(3rem,7vw,6.5rem)]">
        <div className="grid w-full grid-cols-2 items-center gap-x-6 gap-y-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-x-10">
          {/* Badge: trên mobile ở hàng đầu, desktop ở vị trí giữa */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-2 flex justify-center lg:order-2 lg:col-span-1"
          >
            <BadgeGiaoVi />
          </motion.div>

          {/* Cột Trái: THƯỞNG VỊ ĐẬM ĐÀ (4 dòng) & Ngày giờ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between gap-y-[clamp(2.5rem,8vw,7rem)] lg:order-1"
          >
            <p className={CHU_LON}>
              Thưởng
              <br />
              vị
              <br />
              đậm
              <br />
              đà
            </p>
            <p className={CHU_NHO}>
              03-06.09.2026
              <br />
              09:00 &ndash; 17:00
            </p>
          </motion.div>

          {/* Cột Phải: Địa chỉ & TRAO MEN GẮN KẾT (4 dòng) */}
          <motion.address
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between gap-y-[clamp(2.5rem,8vw,7rem)] text-right not-italic lg:order-3"
          >
            <p className={CHU_NHO}>
              412 Điện Biên Phủ
              <br />
              P. Võ Thị Sáu, TP. HCM
            </p>
            <p className={CHU_LON}>
              Trao
              <br />
              men
              <br />
              gắn
              <br />
              kết
            </p>
          </motion.address>
        </div>

        {/* Nút Đăng ký ngay màu kem, dời vị trí xuống dưới */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 sm:mt-8 lg:mt-10 z-10"
        >
          <NutMuiTen href="/mua-hang" mau="kem">
            Đăng ký ngay
          </NutMuiTen>
        </motion.div>
      </Container>
    </section>
  );
}
