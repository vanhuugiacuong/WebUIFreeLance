"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "@/components/container";
import { NutMuiTen } from "@/components/nut-mui-ten";
import { HoaTietKimCuong } from "@/components/hoa-tiet-kim-cuong";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

const TRANG_NGUYEN_LIEU = [
  {
    trangId: 1,
    danhSach: [
      {
        ten: "GẠO GÒ NỔI",
        anh: "/images/gao-go-noi.webp",
        alt: "Gạo Gò Nổi",
      },
      {
        ten: "NẾP BÀ RÉN",
        anh: "/images/nep-ba-ren.webp",
        alt: "Nếp Bà Rén",
      },
      {
        ten: "MEN RƯỢU",
        anh: "/images/men-ruou-nguyen-lieu.webp",
        alt: "Men Rượu Bản Địa",
      },
    ],
  },
  {
    trangId: 2,
    danhSach: [
      {
        ten: "NƯỚC TẠI LÀNG",
        anh: "/images/nuoc-tai-lang.webp",
        alt: "Nước Tại Làng",
      },
      {
        ten: "GẠO LỨT ĐỎ",
        anh: "/images/gao-lut-do.webp",
        alt: "Gạo Lứt Đỏ",
      },
      {
        ten: "MEN RƯỢU",
        anh: "/images/men-ruou-v2.webp",
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
  return (
    <div
      className="group relative aspect-[100/250] w-20 sm:w-28 lg:w-36 transition-transform duration-500 hover:-translate-y-2 cursor-pointer drop-shadow-md mx-auto"
      style={{
        maskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 250"><path d="M 38 0 H 62 V 35 C 62 45 78 55 85 70 V 240 C 85 246 79 250 73 250 H 27 C 21 250 15 246 15 240 V 70 C 22 55 38 45 38 35 Z"/></svg>')`,
        WebkitMaskImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 250"><path d="M 38 0 H 62 V 35 C 62 45 78 55 85 70 V 240 C 85 246 79 250 73 250 H 27 C 21 250 15 246 15 240 V 70 C 22 55 38 45 38 35 Z"/></svg>')`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-115"
        sizes="(max-width: 768px) 100px, 140px"
      />
    </div>
  );
}

function NutGoc({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute z-20 flex size-11 sm:size-13 items-center justify-center rounded-full bg-cam ring-4 ring-[#fbf4ea] shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer",
        className
      )}
    >
      <span className="size-3.5 sm:size-4 rotate-45 bg-kem" />
    </div>
  );
}

function HoatTietThoCam() {
  return (
    <div className="w-full overflow-hidden opacity-90 pt-6 sm:pt-10">
      <svg
        className="h-10 sm:h-14 w-full text-trang"
        viewBox="0 0 1000 60"
        preserveAspectRatio="none"
      >
        <pattern
          id="tho-cam-pattern"
          width="24"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M12 0 L24 30 L12 60 L0 30 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 10 L18 30 L12 50 L6 30 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </pattern>
        <rect width="1000" height="60" fill="url(#tho-cam-pattern)" />
      </svg>
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
          className="relative overflow-hidden bg-cam pt-8 sm:pt-12 text-trang"
          style={{
            maskImage: `
              radial-gradient(circle 42px at 0 0, transparent 98%, black 100%),
              radial-gradient(circle 42px at 100% 0, transparent 98%, black 100%),
              radial-gradient(circle 42px at 100% 100%, transparent 98%, black 100%),
              radial-gradient(circle 42px at 0 100%, transparent 98%, black 100%)
            `,
            WebkitMaskImage: `
              radial-gradient(circle 42px at 0 0, transparent 98%, black 100%),
              radial-gradient(circle 42px at 100% 0, transparent 98%, black 100%),
              radial-gradient(circle 42px at 100% 100%, transparent 98%, black 100%),
              radial-gradient(circle 42px at 0 100%, transparent 98%, black 100%)
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "destination-in",
          }}
        >
          {/* Nút lướt Trái / Phải */}
          <button
            type="button"
            onClick={doiTrang}
            aria-label="Lướt sang trang trước"
            className="absolute left-2 top-[42%] z-30 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-kem text-cam shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer sm:left-4"
          >
            <ChevronLeft className="size-6" strokeWidth={2.5} />
          </button>

          <button
            type="button"
            onClick={doiTrang}
            aria-label="Lướt sang trang tiếp"
            className="absolute right-2 top-[42%] z-30 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-kem text-cam shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer sm:right-4"
          >
            <ChevronRight className="size-6" strokeWidth={2.5} />
          </button>

          {/* Khung hiển thị ĐÚNG 3 NGUYÊN LIỆU trên 1 hàng */}
          <AnimatePresence mode="wait">
            <motion.div
              key={trangHienTai}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-3 gap-2 px-6 sm:gap-6 sm:px-12"
            >
              {TRANG_NGUYEN_LIEU[trangHienTai].danhSach.map((item) => (
                <div
                  key={item.ten + item.anh}
                  className="flex flex-col items-center justify-between text-center group"
                >
                  <ChaiRuou src={item.anh} alt={item.alt} />
                  <h3 className="mt-4 sm:mt-6 font-display text-xs sm:text-base lg:text-lg font-bold tracking-wider text-trang uppercase transition-transform duration-300 group-hover:scale-105">
                    {item.ten}
                  </h3>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

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
              trangHienTai === idx ? "w-7 bg-cam" : "w-2.5 bg-cam/30 hover:bg-cam/60"
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
          <h2 className="font-display text-d2 font-bold text-cam">vùng nguyên liệu</h2>
          <p className="mx-auto mt-4 max-w-[760px] text-base text-den">
            Nơi những hạt gạo và men truyền thống được chắt lọc từ mỗi vùng đất
            miền Trung. Từ nguyên liệu bản địa đến phương thức ủ men, mỗi yếu tố
            cùng góp phần tạo nên hương vị riêng và câu chuyện vùng miền trong
            từng dòng rượu Miên.
          </p>

          <div className="mt-8 flex justify-center">
            <NutMuiTen href="/ruou-mien">
              Xem thêm
            </NutMuiTen>
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
