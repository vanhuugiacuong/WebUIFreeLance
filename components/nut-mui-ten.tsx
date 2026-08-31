import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

/** Nút bo tròn nền cam kèm mũi tên — dùng cho "Đăng ký ngay", "Xem thêm". */
export function NutMuiTen({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex h-10 items-center gap-3 rounded-full bg-cam pl-6 pr-5 text-base text-trang transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer",
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
