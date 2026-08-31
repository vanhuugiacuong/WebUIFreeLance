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
        "relative overflow-hidden rounded-[clamp(1.5rem,3vw,2.5rem)] shadow-xl",
        "p-[clamp(2rem,5vw,4rem)]",
        laCam ? "bg-cam text-kem" : "bg-kem-dam text-den",
        className
      )}
    >
      <KhungVien
        mau={laCam ? "var(--color-kem)" : "var(--color-cam)"}
        className="inset-[clamp(1rem,2.2vw,1.75rem)]"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
