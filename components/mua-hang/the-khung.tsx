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
  className,
  children,
}: {
  mau?: "kem" | "cam";
  doNet?: number;
  banKinhGoc?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const laCam = mau === "cam";
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[32px] sm:rounded-[44px] lg:rounded-[52px] shadow-sm transition-all duration-300",
        "w-full max-w-[950px] min-h-[580px] sm:min-h-[680px] lg:min-h-[746px]",
        "py-10 sm:py-16 lg:py-20 px-8 sm:px-14 lg:px-20 flex flex-col justify-between",
        laCam ? "bg-cam text-kem" : "bg-[#fbf4ea] text-den",
        className
      )}
    >
      <KhungVien
        mau={laCam ? "var(--color-kem)" : "var(--color-cam)"}
        doNet={doNet}
        banKinhGoc={banKinhGoc}
        className="inset-4.5 sm:inset-6.5 lg:inset-8"
      />
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center">{children}</div>
    </div>
  );
}