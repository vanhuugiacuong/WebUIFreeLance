"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "@/components/container";
import { NutMuiTen } from "@/components/nut-mui-ten";
import { HoaTietKimCuong } from "@/components/hoa-tiet-kim-cuong";
import { FadeIn } from "@/components/ui/fade-in";
import { cn, noWidow } from "@/lib/utils";

const TRANG_NGUYEN_LIEU = [
  {
    trangId: 1,
    danhSach: [
      {
        ten: "GẠO GÒ NỔI",
        anh: "/svg/chai rượu-33.svg",
        alt: "Gạo Gò Nổi",
      },
      {
        ten: "NẾP BÀ RÉN",
        anh: "/svg/chai rượu-34.svg",
        alt: "Nếp Bà Rén",
      },
      {
        ten: "MEN RƯỢU",
        anh: "/svg/chai rượu-35.svg",
        alt: "Men Rượu Bản Địa",
      },
    ],
  },
  {
    trangId: 2,
    danhSach: [
      {
        ten: "NƯỚC TẠI LÀNG",
        anh: "/svg/chai rượu-36.svg",
        alt: "Nước Tại Làng",
      },
      {
        ten: "GẠO LỨT ĐỎ",
        anh: "/svg/chai rượu-37.svg",
        alt: "Gạo Lứt Đỏ",
      },
      {
        ten: "MEN RƯỢU",
        anh: "/svg/chai rượu-35.svg",
        alt: "Men Rượu Truyền Thống",
      },
    ],
  },
];

function DongTien() {
  return (
    <HoaTietKimCuong className="mx-auto w-[clamp(3rem,6vw,88px)] transition-transform duration-500 hover:rotate-45 hover:scale-125 cursor-pointer" />
  );
}

function ChaiRuou({ src, alt }: { src: string; alt: string }) {
  const bottleMaskSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 204.1 541.15"><path d="M203.58,163.12c-0.04-1.62-0.33-3.93-1.59-6.24c-2.91-5.34-8.98-7.07-15.38-8.69c-18.02-4.57-34.11-7.3-39.73-8.27c-5.42-0.94-9.81-1.75-12.54-2.26l0,0V48.44c0-2.43-1.12-4.59-2.87-6.01v-4.4h2.2c2.48,0,4.49-2.01,4.49-4.49c0-2.48-2.01-4.49-4.49-4.49h-2.2v-3.06h3.44c2.43,0,4.39-1.97,4.39-4.39V4.39c0-2.43-1.97-4.39-4.39-4.39H69.19c-2.43,0-4.39,1.97-4.39,4.39v17.2c0,2.43,1.97,4.39,4.39,4.39h3.44v3.06h-2.2c-2.48,0-4.49,2.01-4.49-4.49v0c0-2.48,2.01-4.49,4.49,4.49h2.2v4.4c-1.75,1.42-2.87,3.58-2.87,6.01v89.44c-4.13,0.75-8.26,1.5-12.38,2.25c-21.57,3.41-38,6.74-46.15,8.85c-2.47,0.64-7.35,1.99-9.77,6.12c-1.71,2.91-1.45,5.95-1.44,6.59c0.16,7.62,0.1,155.24,0,358.52c0,11.56,9.37,20.92,20.92,20.92h162.23c0.51,0.02,1.26,0.02,2.17-0.03c1.95-0.12,11.57-0.71,16.03-7.72c2.31-3.64,2.66-8.1,2.68-8.9c0.02-0.69,0.03-1.65,0.03-1.65c0.01-0.94,0.02-1.68,0.02-2.61c0.01-1.79,0.01-3.17,0.01-3.41c0-1.93,0-3.22,0-4.39C204.11,462.1,204.15,185.04,203.58,163.12z" fill="black"/></svg>`;

  return (
    <div
      className="group relative aspect-[204.1/541.15] w-16 sm:w-24 lg:w-28 transition-transform duration-500 hover:-translate-y-2 cursor-pointer drop-shadow-md mx-auto"
      style={{
        maskImage: `url('${bottleMaskSvg}')`,
        WebkitMaskImage: `url('${bottleMaskSvg}')`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    >
      <Image
        src={encodeURI(src)}
        alt={alt}
        fill
        className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100px, 140px"
        unoptimized={src.endsWith(".svg")}
      />
    </div>
  );
}

function NutGoc({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute z-20 flex size-11 sm:size-13 items-center justify-center rounded-full bg-cam ring-4 ring-[#fbf4ea] shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer",
        className,
      )}
    >
      <span className="size-3.5 sm:size-4 rotate-45 bg-kem" />
    </div>
  );
}

function HoatTietThoCam() {
  return (
    <div className="w-full overflow-hidden mt-4 sm:mt-6 pt-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={encodeURI("/svg/khung nguyên liệu (2).svg")}
        alt="Họa tiết thổ cẩm"
        className="w-full h-auto block opacity-95"
      />
    </div>
  );
}

function KhungNguyenLieu() {
  const [trangHienTai, setTrangHienTai] = useState(0);

  const doiTrang = () => {
    setTrangHienTai((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="relative mx-auto w-full max-w-[960px] rounded-[28px] bg-[#fbf4ea] p-4 sm:p-6 lg:p-7">
      {/* Wrapper bọc khít thẻ màu cam để định vị 4 nút góc khuyết chuẩn xác 100% */}
      <div className="relative">
        {/* 4 Nút góc khuyết kim cương đặt chính xác tại 4 tâm góc khuyết tròn */}
        <NutGoc className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
        <NutGoc className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
        <NutGoc className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
        <NutGoc className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />

        {/* Thẻ chính màu cam với 4 góc khuyết tròn âm (Inverted Rounded Notches) */}
        <div
          className="relative overflow-hidden bg-cam pt-6 sm:pt-10 text-trang"
          style={{
            maskImage: `
              radial-gradient(circle clamp(36px,5.69vw,52px) at 0 0, transparent 98%, black 100%),
              radial-gradient(circle clamp(36px,5.69vw,52px) at 100% 0, transparent 98%, black 100%),
              radial-gradient(circle clamp(36px,5.69vw,52px) at 100% 100%, transparent 98%, black 100%),
              radial-gradient(circle clamp(36px,5.69vw,52px) at 0 100%, transparent 98%, black 100%)
            `,
            WebkitMaskImage: `
              radial-gradient(circle clamp(36px,5.69vw,52px) at 0 0, transparent 98%, black 100%),
              radial-gradient(circle clamp(36px,5.69vw,52px) at 100% 0, transparent 98%, black 100%),
              radial-gradient(circle clamp(36px,5.69vw,52px) at 100% 100%, transparent 98%, black 100%),
              radial-gradient(circle clamp(36px,5.69vw,52px) at 0 100%, transparent 98%, black 100%)
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "destination-in",
          }}
        >
          {/* Khung hiển thị 3 NGUYÊN LIỆU kèm 2 nút lướt căn giữa tuyệt đối 100% */}
          <div className="relative px-6 sm:px-12">
            <button
              type="button"
              onClick={doiTrang}
              aria-label="Lướt sang trang trước"
              className="absolute left-2 sm:left-4 top-1/2 z-30 grid size-10 sm:size-11 -translate-y-1/2 place-items-center rounded-full bg-kem text-cam shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="size-6" strokeWidth={2.5} />
            </button>

            <button
              type="button"
              onClick={doiTrang}
              aria-label="Lướt sang trang tiếp"
              className="absolute right-2 sm:right-4 top-1/2 z-30 grid size-10 sm:size-11 -translate-y-1/2 place-items-center rounded-full bg-kem text-cam shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="size-6" strokeWidth={2.5} />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={trangHienTai}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid grid-cols-3 gap-2 sm:gap-6"
              >
                {TRANG_NGUYEN_LIEU[trangHienTai].danhSach.map((item) => (
                  <div
                    key={item.ten + item.anh}
                    className="flex flex-col items-center justify-between text-center group"
                  >
                    <ChaiRuou src={item.anh} alt={item.alt} />
                    <h3 className="mt-3 sm:mt-4 font-display text-xs sm:text-base lg:text-lg font-bold tracking-wider text-trang uppercase transition-transform duration-300 group-hover:scale-105">
                      {item.ten}
                    </h3>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Họa tiết nan tre / thổ cẩm viền đáy */}
          <HoatTietThoCam />
        </div>
      </div>

      {/* Chỉ mục chấm lướt bên dưới */}
      <div className="mt-4 flex justify-center gap-2">
        {TRANG_NGUYEN_LIEU.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setTrangHienTai(idx)}
            aria-label={`Trang ${idx + 1}`}
            className={cn(
              "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
              trangHienTai === idx
                ? "w-7 bg-cam"
                : "w-2.5 bg-cam/30 hover:bg-cam/60",
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function NguyenLieu() {
  return (
    <section className="py-[clamp(2.5rem,6vw,5rem)]">
      <DongTien />

      <Container narrow className="mt-[clamp(2rem,5vw,3.5rem)] text-center">
        <FadeIn direction="up">
          <h2 className="font-display text-d2 font-bold text-cam">
            vùng nguyên liệu
          </h2>
          <p className="mx-auto mt-4 max-w-[760px] text-base text-den">
            {noWidow(
              "Nơi những hạt gạo và men truyền thống được chắt lọc từ mỗi vùng đất miền Trung. Từ nguyên liệu bản địa đến phương thức ủ men, mỗi yếu tố cùng góp phần tạo nên hương vị riêng và câu chuyện vùng miền trong từng dòng rượu Miên.",
              3,
            )}
          </p>

          <div className="mt-8 flex justify-center">
            <NutMuiTen href="/ruou-mien">Xem thêm</NutMuiTen>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.2} className="mt-10">
          <KhungNguyenLieu />
        </FadeIn>
      </Container>

      <div className="mt-[clamp(2.5rem,6vw,5rem)]">
        <DongTien />
      </div>
    </section>
  );
}
