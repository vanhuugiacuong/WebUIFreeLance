import type { Metadata } from "next";

import { DaiLienHe } from "@/components/lien-he/dai-lien-he";
import { PatternDivider } from "@/components/pattern-divider";
import { NutGioHang } from "@/components/nut-gio-hang";

export const metadata: Metadata = {
  title: "Liên hệ",
  description:
    "Có chuyện, ghé Miên giao? Đăng ký để không bỏ lỡ những men vị, trải nghiệm và cuộc hẹn mới nhất từ Miên.",
};

export default function LienHe() {
  return (
    <>
      {/* Chừa chỗ vừa khít cho header (fixed) */}
      <div className="h-[66px] sm:h-[70px]" aria-hidden />
      <DaiLienHe />
      <PatternDivider />
      <NutGioHang />
    </>
  );
}
