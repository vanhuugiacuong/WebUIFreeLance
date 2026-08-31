import Image from "next/image";
import { cn } from "@/lib/utils";
import { ThanhPhanItem } from "./san-pham-data";

interface ThanhThanhPhanProps {
  thanhPhan: ThanhPhanItem[];
  className?: string;
}

/**
 * 4 Nút góc khuyết kim cương đặc trưng thiết kế Figma Miên
 */
function NutGoc({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute z-20 flex size-9 sm:size-10 items-center justify-center rounded-full bg-cam ring-4 ring-[#fbf4ea] shadow-md transition-transform duration-300 hover:scale-110 cursor-pointer",
        className
      )}
    >
      <span className="size-3 sm:size-3.5 rotate-45 bg-kem" />
    </div>
  );
}

/**
 * Họa tiết thổ cẩm nan tre viền chân thẻ màu cam
 */
function HoatTietThoCam() {
  return (
    <div className="w-full overflow-hidden opacity-90 pt-4 sm:pt-6">
      <svg
        className="h-9 sm:h-12 w-full text-trang"
        viewBox="0 0 1000 60"
        preserveAspectRatio="none"
      >
        <pattern
          id="tho-cam-pattern-san-pham"
          width="24"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M12 0 L24 30 L12 60 L0 30 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 10 L18 30 L12 50 L6 30 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </pattern>
        <rect width="1000" height="60" fill="url(#tho-cam-pattern-san-pham)" />
      </svg>
    </div>
  );
}

/**
 * Bảng thành phần nguyên liệu 3 chai silhouette:
 * Styled 100% bằng CSS & JSX code chuẩn hệt như phần "VÙNG NGUYÊN LIỆU" ở trang Home.
 */
export function ThanhThanhPhan({ thanhPhan, className = "" }: ThanhThanhPhanProps) {
  return (
    <div className={cn("relative w-full max-w-[500px] p-2", className)}>
      {/* Wrapper bọc khít thẻ màu cam để định vị 4 nút góc khuyết chuẩn xác 100% */}
      <div className="relative">
        {/* 4 Nút góc khuyết kim cương đặt chính xác tại 4 tâm góc khuyết tròn */}
        <NutGoc className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
        <NutGoc className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
        <NutGoc className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
        <NutGoc className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />

        {/* Thẻ chính màu cam với 4 góc khuyết tròn âm (Inverted Rounded Notches) */}
        <div
          className="relative overflow-hidden bg-cam pt-6 sm:pt-8 text-trang flex flex-col justify-between"
          style={{
            maskImage: `
              radial-gradient(circle 32px at 0 0, transparent 98%, black 100%),
              radial-gradient(circle 32px at 100% 0, transparent 98%, black 100%),
              radial-gradient(circle 32px at 100% 100%, transparent 98%, black 100%),
              radial-gradient(circle 32px at 0 100%, transparent 98%, black 100%)
            `,
            WebkitMaskImage: `
              radial-gradient(circle 32px at 0 0, transparent 98%, black 100%),
              radial-gradient(circle 32px at 100% 0, transparent 98%, black 100%),
              radial-gradient(circle 32px at 100% 100%, transparent 98%, black 100%),
              radial-gradient(circle 32px at 0 100%, transparent 98%, black 100%)
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "destination-in",
          }}
        >
          {/* 3 Chai nguyên liệu dạng silhouette đi kèm nhãn chữ bên dưới với hiệu ứng hover float */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 items-end justify-center pt-2 px-4 sm:px-6">
            {thanhPhan.map((item, idx) => (
              <div key={`${item.ten}-${idx}`} className="flex flex-col items-center group cursor-pointer">
                <div className="relative h-[135px] sm:h-[165px] lg:h-[185px] w-full flex items-end justify-center">
                  <Image
                    src={item.anh}
                    alt={item.ten}
                    width={120}
                    height={280}
                    priority
                    className="h-full w-auto object-contain block transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-sm group-hover:drop-shadow-lg"
                  />
                </div>
                <p className="mt-3 text-center font-display text-[11px] sm:text-xs font-bold uppercase tracking-wider text-trang leading-tight transition-transform duration-300 group-hover:scale-105">
                  {item.ten}
                </p>
              </div>
            ))}
          </div>

          {/* Họa tiết nan tre / thổ cẩm viền đáy */}
          <HoatTietThoCam />
        </div>
      </div>
    </div>
  );
}
