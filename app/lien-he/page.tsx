import type { Metadata } from "next";

import { DaiLienHe } from "@/components/lien-he/dai-lien-he";
import { PatternDivider } from "@/components/pattern-divider";
import { QuatXoeAnimation } from "@/components/gioi-thieu/quat-xoe-animation";
import { NutGioHang } from "@/components/nut-gio-hang";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Có chuyện, ghé Miên giao? Đăng ký để không bỏ lỡ những men vị, trải nghiệm và cuộc hẹn mới nhất từ Miên.",
};

export default function LienHe() {
  return (
    <>
      {/* 1. Chừa chỗ vừa khít cho header (fixed) */}
      <div className="h-[66px] sm:h-[70px]" aria-hidden />

      {/* 2. Khoảng trống nền kem TRÊN banner */}
      <div className="h-[clamp(2rem,4.5vw,4rem)]" aria-hidden />

      {/* 3. Banner chính Liên hệ */}
      <DaiLienHe />

      {/* 4. Họa tiết quạt xòe Bài Chòi đặt trực tiếp đè lên dải hoa văn thổ cẩm sát Footer */}
      <QuatXoeAnimation />
      <PatternDivider />
      <NutGioHang />
    </>
  );
}
