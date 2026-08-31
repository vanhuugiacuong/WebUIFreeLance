import type { Metadata } from "next";

import { DaiBoSuuTap } from "@/components/ruou-mien/dai-bo-suu-tap";
import { PhanSanPhamRieng } from "@/components/ruou-mien/phan-san-pham-rieng";
import { MixVi } from "@/components/ruou-mien/mix-vi";
import { PatternDivider } from "@/components/pattern-divider";
import { HoaTietKimCuong } from "@/components/hoa-tiet-kim-cuong";
import { NutGioHang } from "@/components/nut-gio-hang";

export const metadata: Metadata = {
  title: "Rượu Miên",
  description:
    "Bộ sưu tập Miên — Hồng Đào xứ Quảng, Bàu Đá Bình Định, Làng Chuồn xứ Huế — cùng những công thức mix vị điệu nghệ.",
};

export default function RuouMien() {
  return (
    <>
      {/* Chừa chỗ vừa khít cho header (fixed) */}
      <div className="h-[66px] sm:h-[70px]" aria-hidden />
      <DaiBoSuuTap />
      <PatternDivider />
      <PhanSanPhamRieng />
      <HoaTietKimCuong className="mx-auto my-[clamp(1.5rem,4vw,3rem)] size-[88px]" />
      <MixVi />
      <PatternDivider />
      <NutGioHang />
    </>
  );
}
