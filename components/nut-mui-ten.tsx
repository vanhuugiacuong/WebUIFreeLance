"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Nút bo tròn góc kem/cam kèm mũi tên tròn — dùng cho "Đăng ký ngay", "Xem thêm". */
export function NutMuiTen({
  href,
  mau = "cam",
  children,
  className,
}: {
  href: string;
  mau?: "cam" | "kem";
  children: React.ReactNode;
  className?: string;
}) {
  const laKem = mau === "kem";
  return (
    <Link
      href={href}
      scroll={true}
      onClick={() => {
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
      }}
      className={cn(
        "group inline-flex h-11 items-center gap-3.5 rounded-xl pl-6 pr-2.5 text-sm sm:text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer",
        laKem
          ? "bg-[#fff5ea] text-cam hover:bg-trang"
          : "bg-cam text-trang hover:bg-cam/90",
        className,
      )}
    >
      <span>{children}</span>
      <span
        className={cn(
          "grid size-6 sm:size-7 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5",
          laKem ? "bg-cam text-trang" : "bg-trang text-cam",
        )}
      >
        <ArrowRight className="size-3.5 sm:size-4" strokeWidth={2.5} />
      </span>
    </Link>
  );
}
