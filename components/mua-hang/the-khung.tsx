import { KhungVien } from "@/components/khung-vien";
import { cn } from "@/lib/utils";

/**
 * Thẻ bo tròn kèm đường viền góc khuyết bên trong — khung "vé" dùng cho các
 * bước đặt hàng, chi tiết đơn và thông báo. `mau`: nền kem (mặc định) hoặc cam.
 */
export function TheKhung({
  mau = "kem",
  doNet = 2.2,
  banKinhGoc = 42,
  insetClassName = "inset-6 sm:inset-9 lg:inset-12",
  className,
  children,
}: {
  mau?: "kem" | "cam";
  doNet?: number;
  banKinhGoc?: number;
  insetClassName?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const laCam = mau === "cam";
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[32px] sm:rounded-[44px] lg:rounded-[52px] shadow-sm transition-all duration-300",
        "w-full max-w-[1040px] min-h-[580px] sm:min-h-[680px] lg:min-h-[746px]",
        "py-12 sm:py-18 lg:py-24 px-10 sm:px-20 lg:px-28 flex flex-col justify-between",
        laCam ? "bg-cam text-kem" : "bg-[#fbf4ea] text-den",
        className
      )}
    >
      <KhungVien
        mau={laCam ? "var(--color-kem)" : "var(--color-cam)"}
        doNet={doNet}
        banKinhGoc={banKinhGoc}
        className={cn("inset-4.5 sm:inset-6.5 lg:inset-8", insetClassName)}
      />
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center">{children}</div>
    </div>
  );
}