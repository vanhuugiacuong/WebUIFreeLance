import type { Metadata } from "next";

import { BangQuote } from "@/components/mua-hang/bang-quote";
import { LuongDatHang } from "@/components/mua-hang/luong-dat-hang";
import { PatternDivider } from "@/components/pattern-divider";
import { NutGioHang } from "@/components/nut-gio-hang";

export const metadata: Metadata = {
  title: "Mua hàng",
  description:
    "Đặt rượu Miên: chọn sản phẩm, điền thông tin giao hàng và xác nhận đơn — thưởng vị đậm đà, trao men gắn kết.",
};

export default function MuaHang() {
  return (
    <>
      <BangQuote />
      <PatternDivider />
      <LuongDatHang />
      <PatternDivider />
      <NutGioHang />
    </>
  );
}
