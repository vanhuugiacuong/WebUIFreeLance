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

/** Nút bo tròn cho luồng đặt hàng — dạng nút hoặc liên kết. */
export function Nut({
  bien = "chinh",
  href,
  onClick,
  type = "button",
  className,
  children,
}: Props) {
  const cls = cn(
    "inline-flex h-11 min-w-[180px] items-center justify-center rounded-full px-8 text-base transition-colors",
    bien === "chinh"
      ? "bg-cam text-trang hover:opacity-90"
      : "border border-cam bg-kem text-cam hover:bg-cam hover:text-trang",
    className
  );
  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
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
