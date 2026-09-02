import { cn } from "@/lib/utils";

const THOI = { clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" };

/**
 * Hoạ tiết đồng tiền: quầng cam toả dần, giữa là hình thoi lồng viền.
 * Tỉ lệ đo từ hai ảnh gốc (88px và 264px) — cùng một mô-típ ở hai cỡ, nên
 * mọi kích thước đều tính theo phần trăm để dùng lại ở bất kỳ khổ nào.
 *
 * Phần "hở" tô bằng màu nền (mặc định kem) thay vì khoét thủng — hoạ tiết này
 * chỉ nằm trên nền kem trong toàn bộ thiết kế.
 */
export function HoaTietKimCuong({
  className,
  mauHo = "bg-trang",
  mauVien = "bg-trang",
}: {
  className?: string;
  mauHo?: string;
  mauVien?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "relative grid aspect-square place-items-center shrink-0",
        className,
      )}
    >
      {/* Glow ngoài */}
      <span
        className="absolute inset-[-25%] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255, 70, 35, 0.55) 0%, rgba(255, 70, 35, 0.25) 45%, transparent 75%)",
          filter: "blur(22px)",
        }}
      />

      {/* Glow trong */}
      <span
        className="absolute inset-[-8%] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at center, #ff3b16 0%, #ff4b25 35%, rgba(255, 75, 37, 0.5) 65%, transparent 100%)",
          filter: "blur(10px)",
        }}
      />

      {/* Thoi ngoài */}
      <span
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[46%] z-10",
          mauVien || mauHo,
        )}
        style={THOI}
      />

      {/* Rãnh cam */}
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[39%] bg-cam z-10"
        style={THOI}
      />

      {/* Lõi trắng */}
      <span
        className={cn(
          "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[32%] z-10",
          mauHo,
        )}
        style={THOI}
      />
    </span>
  );
}
