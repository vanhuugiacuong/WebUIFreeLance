import { cn } from "@/lib/utils";

/**
 * Đường viền trang trí góc khuyết (concave) — mô-típ khung "vé" của Miên, thấy
 * trong các thẻ đơn hàng. Vẽ bằng SVG kéo giãn theo khung cha (preserveAspectRatio
 * none); bán kính góc nhỏ nên độ méo cung không đáng kể.
 */
export function KhungVien({
  mau = "var(--color-cam)",
  doNet = 1.25,
  className,
}: {
  mau?: string;
  doNet?: number;
  className?: string;
}) {
  const r = 26;
  const W = 400;
  const H = 300;
  const d = [
    `M ${r} 0`,
    `L ${W - r} 0`,
    `A ${r} ${r} 0 0 0 ${W} ${r}`,
    `L ${W} ${H - r}`,
    `A ${r} ${r} 0 0 0 ${W - r} ${H}`,
    `L ${r} ${H}`,
    `A ${r} ${r} 0 0 0 0 ${H - r}`,
    `L 0 ${r}`,
    `A ${r} ${r} 0 0 0 ${r} 0`,
    "Z",
  ].join(" ");
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
      className={cn("pointer-events-none absolute", className)}
    >
      <path d={d} stroke={mau} strokeWidth={doNet} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
