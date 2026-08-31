import { KhungVien } from "@/components/khung-vien";
import { cn } from "@/lib/utils";

/**
 * Thẻ bo tròn kèm đường viền góc khuyết bên trong — khung "vé" dùng cho các
 * bước đặt hàng, chi tiết đơn và thông báo. `mau`: nền kem (mặc định) hoặc cam.
 */
export function TheKhung({
  mau = "kem",
  className,
  children,
}: {
  mau?: "kem" | "cam";
  className?: string;
  children: React.ReactNode;
}) {
  const laCam = mau === "cam";
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] sm:rounded-[36px] shadow-sm transition-all duration-300",
        "py-5 sm:py-7 lg:py-8 px-6 sm:px-10 lg:px-12",
        laCam ? "bg-cam text-kem" : "bg-[#fbf4ea] text-den",
        className
      )}
    >
      <KhungVien
        mau={laCam ? "var(--color-kem)" : "var(--color-cam)"}
        doNet={1}
        className="inset-2.5 sm:inset-3 lg:inset-3.5"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
