"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "@/components/container";
import { gocKhuyet } from "@/components/goc-khuyet";
import { DANH_SACH_SAN_PHAM } from "./san-pham-data";
import { ThanhThanhPhan } from "./thanh-thanh-phan";

export function PhanSanPhamRieng() {
  const [index, setIndex] = useState(0);
  const [soLuong, setSoLuong] = useState(1);

  const sp = DANH_SACH_SAN_PHAM[index];

  const giam = () => setSoLuong((n) => Math.max(1, n - 1));
  const tang = () => setSoLuong((n) => n + 1);

  const truoc = () => {
    setIndex((i) => (i === 0 ? DANH_SACH_SAN_PHAM.length - 1 : i - 1));
    setSoLuong(1);
  };
  const sau = () => {
    setIndex((i) => (i === DANH_SACH_SAN_PHAM.length - 1 ? 0 : i + 1));
    setSoLuong(1);
  };

  return (
    <section className="py-[clamp(2.5rem,5vw,4.5rem)] relative overflow-hidden">
      <Container className="relative">
        {/* Nút chuyển sản phẩm Trước / Sau */}
        <button
          type="button"
          onClick={truoc}
          aria-label="Sản phẩm trước"
          className="absolute -left-2 sm:-left-6 lg:-left-10 top-[220px] lg:top-[180px] z-20 size-10 sm:size-12 rounded-full bg-cam-nhat/30 text-cam flex items-center justify-center transition-all duration-300 hover:bg-cam hover:text-trang hover:scale-115 active:scale-95 hover:shadow-lg cursor-pointer backdrop-blur-xs outline-none focus:outline-none"
        >
          <ChevronLeft className="size-6 sm:size-7" strokeWidth={2.5} />
        </button>
        <button
          type="button"
          onClick={sau}
          aria-label="Sản phẩm sau"
          className="absolute -right-2 sm:-right-6 lg:-right-10 top-[220px] lg:top-[180px] z-20 size-10 sm:size-12 rounded-full bg-cam-nhat/30 text-cam flex items-center justify-center transition-all duration-300 hover:bg-cam hover:text-trang hover:scale-115 active:scale-95 hover:shadow-lg cursor-pointer backdrop-blur-xs outline-none focus:outline-none"
        >
          <ChevronRight className="size-6 sm:size-7" strokeWidth={2.5} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={sp.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="flex flex-col gap-16"
          >
            {/* Phân đoạn 1: Chi tiết sản phẩm */}
            <div className="grid lg:grid-cols-[1fr_auto_auto] items-start gap-8 lg:gap-12 px-2 sm:px-6">
              {/* Cột trái: Tên + Mô tả + Thẻ thành phần */}
              <div className="flex flex-col">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-cam leading-tight">
                  {sp.ten}
                </h2>
                <p className="mt-4 text-justify text-sm sm:text-base leading-relaxed text-den/80 max-w-[500px]">
                  {sp.moTa}
                </p>
                <ThanhThanhPhan thanhPhan={sp.thanhPhan} className="mt-8" />
              </div>

              {/* Cột giữa: THÔNG TIN sản phẩm + Giá + Nút mua */}
              <div className="flex flex-col justify-start min-w-[220px]">
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-cam leading-tight">
                  THÔNG TIN
                </h3>
                <dl className="mt-6 space-y-4 text-sm sm:text-base text-den/90">
                  <div>
                    <dt className="font-semibold text-den">Dung tích</dt>
                    <dd className="text-den/80">{sp.dungTich}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-den">Nồng độ</dt>
                    <dd className="text-den/80">{sp.nongDo}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-den">Giá thành</dt>
                    <dd className="text-den/80">{sp.gia}</dd>
                  </div>
                </dl>

                {/* Bộ đếm số lượng + Nút Thêm vào giỏ */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <div className="flex items-center rounded-md border border-den/40 px-2 py-1 bg-kem/50 shadow-xs">
                    <button
                      type="button"
                      onClick={giam}
                      aria-label="Giảm số lượng"
                      className="size-7 flex items-center justify-center text-lg font-medium text-den hover:text-cam cursor-pointer transition-transform duration-200 hover:scale-125 active:scale-95 outline-none"
                    >
                      &minus;
                    </button>
                    <span className="w-8 text-center font-medium text-base text-den" aria-live="polite">
                      {soLuong}
                    </span>
                    <button
                      type="button"
                      onClick={tang}
                      aria-label="Tăng số lượng"
                      className="size-7 flex items-center justify-center text-lg font-medium text-den hover:text-cam cursor-pointer transition-transform duration-200 hover:scale-125 active:scale-95 outline-none"
                    >
                      +
                    </button>
                  </div>

                  <Link
                    href="/mua-hang"
                    className="inline-flex h-10 items-center rounded-full bg-cam px-7 text-sm sm:text-base font-normal text-trang transition-all duration-300 hover:bg-cam/90 hover:scale-108 hover:shadow-lg active:scale-95 cursor-pointer outline-none"
                  >
                    Thêm vào giỏ
                  </Link>
                </div>
              </div>

              {/* Cột phải: Bức ảnh chai rượu với hiệu ứng hover float & tilt */}
              <div className="flex justify-center items-center group cursor-pointer">
                <Image
                  src={sp.anhChai}
                  alt={`Chai ${sp.ten}`}
                  width={318}
                  height={542}
                  priority
                  className="h-[360px] sm:h-[420px] lg:h-[480px] w-auto object-contain drop-shadow-md transition-all duration-700 group-hover:scale-108 group-hover:-translate-y-2 group-hover:-rotate-1 group-hover:drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Phân đoạn 2: ĐẶC ĐIỂM NỔI BẬT với hiệu ứng hover lift-up & float */}
            <div className="flex flex-col items-center mt-6">
              <h2 className="text-center font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider leading-tight text-cam">
                Đặc điểm nổi bật
              </h2>
              <div className="mt-10 grid w-full max-w-[1040px] gap-6 sm:grid-cols-3">
                <div
                  className="group flex flex-col items-center justify-center bg-cam p-6 text-center text-kem min-h-[200px] transition-all duration-500 hover:-translate-y-2.5 hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
                  style={gocKhuyet("22px")}
                >
                  <p className="text-base sm:text-lg font-bold uppercase tracking-wider text-trang transition-transform duration-300 group-hover:scale-105">
                    MÀU SẮC
                  </p>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-trang/95 text-balance">
                    {sp.dacDiem.mauSac}
                  </p>
                </div>

                <div
                  className="group flex flex-col items-center justify-center bg-cam p-6 text-center text-kem min-h-[200px] transition-all duration-500 hover:-translate-y-2.5 hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
                  style={gocKhuyet("22px")}
                >
                  <p className="text-base sm:text-lg font-bold uppercase tracking-wider text-trang transition-transform duration-300 group-hover:scale-105">
                    MÙI HƯƠNG
                  </p>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-trang/95 text-balance">
                    {sp.dacDiem.muiHuong}
                  </p>
                </div>

                <div
                  className="group flex flex-col items-center justify-center bg-cam p-6 text-center text-kem min-h-[200px] transition-all duration-500 hover:-translate-y-2.5 hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
                  style={gocKhuyet("22px")}
                >
                  <p className="text-base sm:text-lg font-bold uppercase tracking-wider text-trang transition-transform duration-300 group-hover:scale-105">
                    HƯƠNG VỊ
                  </p>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-trang/95 text-balance">
                    {sp.dacDiem.huongVi}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
