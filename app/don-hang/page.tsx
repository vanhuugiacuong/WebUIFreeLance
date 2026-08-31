import type { Metadata } from "next";

import { BangQuote } from "@/components/mua-hang/bang-quote";
import { ChiTietDon } from "@/components/mua-hang/chi-tiet-don";
import { PatternDivider } from "@/components/pattern-divider";
import { NutGioHang } from "@/components/nut-gio-hang";

export const metadata: Metadata = {
  title: "Theo dõi đơn hàng",
  description: "Chi tiết đơn hàng của bạn tại Miên.",
};

export default function DonHang() {
  return (
    <>
      <BangQuote />
      <PatternDivider />
      <ChiTietDon />
      <PatternDivider />
      <NutGioHang />
    </>
  );
}
