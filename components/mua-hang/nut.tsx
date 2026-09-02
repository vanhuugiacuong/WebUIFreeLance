"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  /** "chinh" = nền cam chữ trắng; "phu" = viền cam nền kem chữ cam. */
  bien?: "chinh" | "phu";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  children: React.ReactNode;
};

/** Nút bo tròn cho luồng đặt hàng — dạng nút hoặc liên kết với hiệu ứng hover/active 3D. */
export function Nut({
  bien = "chinh",
  href,
  onClick,
  type = "button",
  className,
  children,
}: Props) {
  const cls = cn(
    "inline-flex h-11 min-w-[180px] items-center justify-center rounded-full px-8 text-base font-medium transition-all duration-300 shadow-sm cursor-pointer outline-none focus:outline-none focus:ring-0",
    bien === "chinh"
      ? "bg-cam text-trang hover:bg-cam/90 hover:scale-105 hover:shadow-md active:scale-95"
      : "border border-cam bg-kem text-cam hover:bg-cam hover:text-trang hover:scale-105 hover:shadow-md active:scale-95",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        scroll={true}
        className={cls}
        onClick={(e) => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
          }
          if (onClick) onClick();
        }}
      >
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
