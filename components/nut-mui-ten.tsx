import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

/** Nút bo tròn nền cam/kem kèm mũi tên — dùng cho "Đăng ký ngay", "Xem thêm". */
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
      className={cn(
        "group inline-flex h-10 items-center gap-3 rounded-full pl-6 pr-5 text-sm sm:text-base font-normal transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer",
        laKem
          ? "bg-[#fbf4ea] text-cam hover:bg-trang"
          : "bg-cam text-trang hover:bg-cam/90",
        className
      )}
    >
      {children}
      <ArrowRight
        className="size-[19px] transition-transform duration-300 group-hover:translate-x-1.5 group-hover:scale-110"
        strokeWidth={2.2}
      />
    </Link>
  );
}
