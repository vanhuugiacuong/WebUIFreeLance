import { Hero } from "@/components/home/hero";
import { VeChungToi } from "@/components/home/ve-chung-toi";
import { DaiSanPham } from "@/components/home/dai-san-pham";
import { GiaTri } from "@/components/home/gia-tri";
import { NguyenLieu } from "@/components/home/nguyen-lieu";
import { GheTham } from "@/components/home/ghe-tham";
import { DanhGia } from "@/components/home/danh-gia";
import { PatternDivider } from "@/components/pattern-divider";
import { NutGioHang } from "@/components/nut-gio-hang";
import { ScrollToHero } from "@/components/home/scroll-to-hero";

export default function TrangChu() {
  return (
    <>
      <ScrollToHero />
      <Hero />
      <PatternDivider />
      <VeChungToi />
      <DaiSanPham />
      <GiaTri />
      <NguyenLieu />
      <GheTham />
      <PatternDivider />
      <DanhGia />
      <PatternDivider />
      <NutGioHang />
    </>
  );
}
