import { cn } from "@/lib/utils";
import { gocKhuyet } from "@/components/goc-khuyet";

/* Số đo lấy từ ảnh gốc 1000×230: góc khuyết r=33.5, viền trong cách mép 17, dày 1.5.
   Quy sang cqw (1cqw = 1% bề rộng banner) để co giãn mà giữ đúng tỉ lệ. */
export function BannerGiaoVi({ className }: { className?: string }) {
  return (
    <div className={cn("relative @container w-full max-w-[1000px] group cursor-pointer transition-transform duration-500 hover:scale-[1.03]", className)}>
      <div
        className="relative aspect-1000/230 bg-cam text-[6.6cqw] text-kem shadow-md transition-shadow duration-500 group-hover:shadow-2xl"
        style={gocKhuyet("3.35cqw")}
      >
        <div
          className="absolute inset-[1.7cqw] border-[0.15cqw] border-kem transition-colors duration-500 group-hover:border-trang"
          style={gocKhuyet("1.65cqw")}
        />

        <span className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2 font-display font-light whitespace-nowrap transition-transform duration-500 group-hover:scale-105">
          GIAO VỊ
        </span>

        {/* Quầng sáng + viên kim cương ở giữa chính xác 50% */}
        <span
          aria-hidden
          className="absolute top-1/2 left-1/2 size-[18cqw] -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse transition-transform duration-500 group-hover:scale-125 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgb(255 255 255 / 0.92) 0%, rgb(255 250 240 / 0.55) 38%, transparent 70%)",
          }}
        />
        {/* Viên kim cương viền kép chuẩn Figma ở giữa chính xác 50% */}
        <span
          aria-hidden
          className="absolute top-1/2 left-1/2 size-[4.2cqw] -translate-x-1/2 -translate-y-1/2 rotate-45 border-[0.18cqw] border-kem bg-cam p-[0.35cqw] transition-transform duration-700 group-hover:rotate-[225deg]"
        >
          <span className="block w-full h-full bg-cam border-[0.18cqw] border-kem" />
        </span>

        <span className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 font-display font-light whitespace-nowrap transition-transform duration-500 group-hover:scale-105">
          GIAO HÒA
        </span>
      </div>

      {/* ĐỒNG TIỀN NỬA Ở 2 MÉP TRÁI VÀ PHẢI */}
      <span
        aria-hidden
        className="absolute top-1/2 left-0 size-[4cqw] -translate-x-1/2 -translate-y-1/2 rotate-45 border-[0.15cqw] border-kem bg-cam z-10"
      />
      <span
        aria-hidden
        className="absolute top-1/2 right-0 size-[4cqw] translate-x-1/2 -translate-y-1/2 rotate-45 border-[0.15cqw] border-kem bg-cam z-10"
      />
    </div>
  );
}
