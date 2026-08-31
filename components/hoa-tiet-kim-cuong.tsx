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
  mauHo = "bg-kem",
}: {
  className?: string;
  mauHo?: string;
}) {
  return (
    <span aria-hidden className={cn("relative grid aspect-square place-items-center", className)}>
      <span
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--color-cam) 0%, color-mix(in srgb, var(--color-cam) 88%, transparent) 42%, transparent 74%)",
        }}
      />
      <span className={cn("absolute size-[45%]", mauHo)} style={THOI} />
      <span className="absolute size-[38%] bg-cam" style={THOI} />
      <span className={cn("absolute size-[32%]", mauHo)} style={THOI} />
    </span>
  );
}
