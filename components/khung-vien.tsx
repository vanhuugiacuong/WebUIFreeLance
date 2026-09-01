import { cn } from "@/lib/utils";

/**
 * Đường viền trang trí góc khuyết (concave) — mô-típ khung "vé" đặc trưng của Miên.
 * Tất cả 4 góc khuyết đều lõm vào trong (concave) tỉ lệ 1:1 chuẩn xác không bị dãn.
 */
export function KhungVien({
  mau = "var(--color-cam)",
  doNet = 2.2,
  banKinhGoc = 42,
  className,
}: {
  mau?: string;
  doNet?: number;
  banKinhGoc?: number;
  className?: string;
}) {
  const r = banKinhGoc;
  const off = doNet / 2;
  const size = r + doNet;

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute", className)}
    >
      {/* 4 Đường viền thẳng nối vừa khít giữa các góc */}
      <div
        className="absolute top-0"
        style={{ left: r + off, right: r + off, height: doNet, backgroundColor: mau }}
      />
      <div
        className="absolute bottom-0"
        style={{ left: r + off, right: r + off, height: doNet, backgroundColor: mau }}
      />
      <div
        className="absolute left-0"
        style={{ top: r + off, bottom: r + off, width: doNet, backgroundColor: mau }}
      />
      <div
        className="absolute right-0"
        style={{ top: r + off, bottom: r + off, width: doNet, backgroundColor: mau }}
      />

      {/* 4 Góc khuyết LÕM VÀO TRONG (Concave) nối khớp 100% tròn trịa mượt mà */}
      {/* Top-Left Corner */}
      <svg
        className="absolute top-0 left-0 overflow-visible"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d={`M ${off} ${r + off} A ${r} ${r} 0 0 0 ${r + off} ${off}`}
          stroke={mau}
          strokeWidth={doNet}
          strokeLinecap="square"
        />
      </svg>

      {/* Top-Right Corner */}
      <svg
        className="absolute top-0 right-0 overflow-visible"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d={`M ${off} ${off} A ${r} ${r} 0 0 0 ${r + off} ${r + off}`}
          stroke={mau}
          strokeWidth={doNet}
          strokeLinecap="square"
        />
      </svg>

      {/* Bottom-Right Corner */}
      <svg
        className="absolute bottom-0 right-0 overflow-visible"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d={`M ${r + off} ${off} A ${r} ${r} 0 0 0 ${off} ${r + off}`}
          stroke={mau}
          strokeWidth={doNet}
          strokeLinecap="square"
        />
      </svg>

      {/* Bottom-Left Corner */}
      <svg
        className="absolute bottom-0 left-0 overflow-visible"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <path
          d={`M ${r + off} ${r + off} A ${r} ${r} 0 0 0 ${off} ${off}`}
          stroke={mau}
          strokeWidth={doNet}
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
}
