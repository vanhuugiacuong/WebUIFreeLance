import { TheKhung } from "@/components/mua-hang/the-khung";

function Chevron({ len = false, mau }: { len?: boolean; mau: string }) {
  return (
    <svg
      width="90"
      height="44"
      viewBox="0 0 90 44"
      fill="none"
      stroke={mau}
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={len ? "M8 36 L45 8 L82 36" : "M8 8 L45 36 L82 8"} />
    </svg>
  );
}

/**
 * Thẻ thông báo (đặt hàng / hủy đơn thành công): khung góc khuyết với hai mũi
 * chevron toả sáng ở trên và dưới, tiêu đề + mô tả canh giữa.
 */
export function TheThongBao({
  mau,
  tieuDe,
  moTa,
}: {
  mau: "cam" | "kem";
  tieuDe: string;
  moTa: string;
}) {
  const laCam = mau === "cam";
  const glow = laCam ? "rgba(255,255,255,0.55)" : "color-mix(in srgb, var(--color-cam) 55%, transparent)";
  const line = laCam ? "var(--color-kem)" : "var(--color-cam)";
  const tieuDeMau = laCam ? "text-kem" : "text-cam";

  return (
    <TheKhung mau={mau}>
      <div className="relative flex min-h-[clamp(16rem,28vw,24rem)] flex-col items-center justify-center gap-4 py-12 text-center">
        <span aria-hidden className="absolute left-1/2 top-0 grid -translate-x-1/2 place-items-center">
          <span
            className="col-start-1 row-start-1 size-40 rounded-full"
            style={{ background: `radial-gradient(circle, ${glow} 0%, transparent 70%)` }}
          />
          <span className="col-start-1 row-start-1">
            <Chevron mau={line} />
          </span>
        </span>

        <h1 className={`font-display text-d3 font-bold uppercase leading-tight ${tieuDeMau}`}>
          {tieuDe}
        </h1>
        <p className="max-w-[440px] text-base leading-relaxed">{moTa}</p>

        <span aria-hidden className="absolute bottom-0 left-1/2 grid -translate-x-1/2 place-items-center">
          <span
            className="col-start-1 row-start-1 size-40 rounded-full"
            style={{ background: `radial-gradient(circle, ${glow} 0%, transparent 70%)` }}
          />
          <span className="col-start-1 row-start-1">
            <Chevron len mau={line} />
          </span>
        </span>
      </div>
    </TheKhung>
  );
}
