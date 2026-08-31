import { cn } from "@/lib/utils";

/**
 * Đường viền trang trí góc khuyết (concave) — mô-típ khung "vé" đặc trưng của Miên.
 * Tất cả 4 góc khuyết đều lõm vào trong (concave) tỉ lệ 1:1 chuẩn xác không bị dãn.
 */
export function KhungVien({
  mau = "var(--color-cam)",
  doNet = 1,
  className,
}: {
  mau?: string;
  doNet?: number;
  className?: string;
}) {
  const r = 24; // Bán kính góc khuyết lõm chuẩn pixel

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute", className)}
    >
      {/* 4 Đường viền thẳng nối giữa các góc */}
      <div
        className="absolute top-0"
        style={{ left: r, right: r, height: doNet, backgroundColor: mau }}
      />
      <div
        className="absolute bottom-0"
        style={{ left: r, right: r, height: doNet, backgroundColor: mau }}
      />
      <div
        className="absolute left-0"
        style={{ top: r, bottom: r, width: doNet, backgroundColor: mau }}
      />
      <div
        className="absolute right-0"
        style={{ top: r, bottom: r, width: doNet, backgroundColor: mau }}
      />

      {/* 4 Góc khuyết LÕM VÀO TRONG (Concave) 1:1 hoàn hảo */}
      {/* Top-Left Corner */}
      <svg
        className="absolute top-0 left-0"
        width={r}
        height={r}
        viewBox={`0 0 ${r} ${r}`}
        fill="none"
      >
        <path
          d={`M 0 ${r} A ${r} ${r} 0 0 0 ${r} 0`}
          stroke={mau}
          strokeWidth={doNet * 2}
        />
      </svg>

      {/* Top-Right Corner */}
      <svg
        className="absolute top-0 right-0"
        width={r}
        height={r}
        viewBox={`0 0 ${r} ${r}`}
        fill="none"
      >
        <path
          d={`M 0 0 A ${r} ${r} 0 0 0 ${r} ${r}`}
          stroke={mau}
          strokeWidth={doNet * 2}
        />
      </svg>

      {/* Bottom-Right Corner */}
      <svg
        className="absolute bottom-0 right-0"
        width={r}
        height={r}
        viewBox={`0 0 ${r} ${r}`}
        fill="none"
      >
        <path
          d={`M ${r} 0 A ${r} ${r} 0 0 0 0 ${r}`}
          stroke={mau}
          strokeWidth={doNet * 2}
        />
      </svg>

      {/* Bottom-Left Corner */}
      <svg
        className="absolute bottom-0 left-0"
        width={r}
        height={r}
        viewBox={`0 0 ${r} ${r}`}
        fill="none"
      >
        <path
          d={`M ${r} ${r} A ${r} ${r} 0 0 0 0 0`}
          stroke={mau}
          strokeWidth={doNet * 2}
        />
      </svg>
    </div>
  );
}
