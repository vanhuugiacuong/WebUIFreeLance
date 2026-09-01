import Image from "next/image";
import { cn } from "@/lib/utils";

export function BannerGiaoVi({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[933px] aspect-[933.45/214.47] @container group cursor-pointer transition-transform duration-500 hover:scale-[1.03]",
        className,
      )}
    >
      {/* Khung banner SVG gốc */}
      <Image
        src={encodeURI("/svg/slogan (7).svg")}
        alt="GIAO VỊ - GIAO HÒA"
        fill
        className="object-contain drop-shadow-md transition-shadow duration-500 group-hover:drop-shadow-xl"
        priority
        unoptimized
      />

      {/* Quầng sáng trắng ở giữa chính xác 50% */}
      <span
        aria-hidden
        className="absolute top-1/2 left-1/2 size-[14cqw] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-500 group-hover:scale-125 pointer-events-none z-10"
        style={{
          background:
            "radial-gradient(circle, #ffffff 0%, #ffffff 25%, rgba(255, 255, 255, 0.8) 45%, transparent 70%)",
        }}
      />

      {/* Viên kim cương viền kép màu cam ở giữa chính xác 50% */}
      <span
        aria-hidden
        className="absolute top-1/2 left-1/2 size-[4.2cqw] -translate-x-1/2 -translate-y-1/2 rotate-45 border-[0.18cqw] border-kem bg-cam p-[0.35cqw] transition-transform duration-700 group-hover:rotate-[225deg] z-20"
      >
        <span className="block w-full h-full bg-cam border-[0.18cqw] border-kem" />
      </span>
    </div>
  );
}
