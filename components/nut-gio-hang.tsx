import Link from "next/link";
import { ShoppingCart } from "lucide-react";

/** Nút giỏ hàng nổi — Figma đặt ở mép phải, cách đáy khung nhìn. */
export function NutGioHang() {
  return (
    <Link
      href="/mua-hang"
      aria-label="Giỏ hàng"
      className="fixed bottom-8 right-8 z-40 grid size-[62px] place-items-center rounded-full bg-cam text-trang shadow-lg transition-transform hover:scale-105"
    >
      <ShoppingCart className="size-8" strokeWidth={1.75} />
    </Link>
  );
}
