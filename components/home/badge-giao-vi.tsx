import { cn } from "@/lib/utils";

const SO_VONG = 7;
const RONG = 461; // bề rộng badge trong Figma
const CAO = 112; // = đường kính mỗi vòng tròn

/**
 * Badge "GIAO VỊ" dựng hoàn toàn bằng CSS: 7 hình tròn chồng nhau tạo viền vỏ sò.
 * Chữ và hai viên kim cương trong Figma là phần khoét rỗng nhìn xuyên xuống nền cam,
 * nên ở đây tô đúng màu nền hero (`cam-hero`) để cho ra cùng kết quả.
 */
export function BadgeGiaoVi({ className }: { className?: string }) {
  const buoc = (RONG - CAO) / (SO_VONG - 1);

  return (
    <div
      className={cn(
        "relative aspect-461/112 w-[clamp(13rem,32vw,28.8125rem)]",
        "text-[clamp(1.05rem,4vw,3.625rem)]",
        className
      )}
    >
      <div aria-hidden className="absolute inset-0">
        {Array.from({ length: SO_VONG }).map((_, i) => (
          <span
            key={i}
            className="absolute top-0 aspect-square h-full -translate-x-1/2 rounded-full bg-kem"
            style={{ left: `${((CAO / 2 + i * buoc) / RONG) * 100}%` }}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center gap-[3.5%] text-cam-hero">
        <span aria-hidden className="aspect-square h-[29%] rotate-45 bg-current" />
        <span className="font-display font-bold leading-none whitespace-nowrap">
          &ldquo;GIAO VỊ&rdquo;
        </span>
        <span aria-hidden className="aspect-square h-[29%] rotate-45 bg-current" />
      </div>
    </div>
  );
}
