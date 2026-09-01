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
 * Họa tiết thổ cẩm viền chân thẻ màu cam
 */
function HoatTietThoCam() {
  return (
    <div className="w-full overflow-hidden mt-3 sm:mt-4 pt-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={encodeURI("/svg/khung nguyên liệu (2).svg")}
        alt="Họa tiết thổ cẩm"
        className="w-full h-auto block opacity-95"
      />
    </div>
  );
}

/**
 * Chai rượu nguyên liệu với mặt nạ hình dáng chai chuẩn 100%
 */
function ChaiRuou({ src, alt }: { src: string; alt: string }) {
  const bottleMaskSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 204.1 541.15"><path d="M203.58,163.12c-0.04-1.62-0.33-3.93-1.59-6.24c-2.91-5.34-8.98-7.07-15.38-8.69c-18.02-4.57-34.11-7.3-39.73-8.27c-5.42-0.94-9.81-1.75-12.54-2.26l0,0V48.44c0-2.43-1.12-4.59-2.87-6.01v-4.4h2.2c2.48,0,4.49-2.01,4.49-4.49c0-2.48-2.01-4.49-4.49-4.49h-2.2v-3.06h3.44c2.43,0,4.39-1.97,4.39-4.39V4.39c0-2.43-1.97-4.39-4.39-4.39H69.19c-2.43,0-4.39,1.97-4.39,4.39v17.2c0,2.43,1.97,4.39,4.39,4.39h3.44v3.06h-2.2c-2.48,0-4.49,2.01-4.49-4.49v0c0-2.48,2.01-4.49,4.49,4.49h2.2v4.4c-1.75,1.42-2.87,3.58-2.87,6.01v89.44c-4.13,0.75-8.26,1.5-12.38,2.25c-21.57,3.41-38,6.74-46.15,8.85c-2.47,0.64-7.35,1.99-9.77,6.12c-1.71,2.91-1.45,5.95-1.44,6.59c0.16,7.62,0.1,155.24,0,358.52c0,11.56,9.37,20.92,20.92,20.92h162.23c0.51,0.02,1.26,0.02,2.17-0.03c1.95-0.12,11.57-0.71,16.03-7.72c2.31-3.64,2.66-8.1,2.68-8.9c0.02-0.69,0.03-1.65,0.03-1.65c0.01-0.94,0.02-1.68,0.02-2.61c0.01-1.79,0.01-3.17,0.01-3.41c0-1.93,0-3.22,0-4.39C204.11,462.1,204.15,185.04,203.58,163.12z" fill="black"/></svg>`;

  return (
    <div
      className="group relative aspect-[204.1/541.15] w-14 sm:w-18 lg:w-20 transition-transform duration-500 hover:-translate-y-1.5 cursor-pointer drop-shadow-md mx-auto"
      style={{
        maskImage: `url('${bottleMaskSvg}')`,
        WebkitMaskImage: `url('${bottleMaskSvg}')`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    >
      <Image
        src={encodeURI(src)}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 80px, 120px"
        unoptimized={src.endsWith(".svg")}
      />
    </div>
  );
}

/**
 * Bảng thành phần nguyên liệu 3 chai silhouette:
 * Styled 100% bằng CSS & JSX code chuẩn hệt như phần "VÙNG NGUYÊN LIỆU" ở trang Home.
 */
export function ThanhThanhPhan({ thanhPhan, className = "" }: ThanhThanhPhanProps) {
  return (
    <div className={cn("relative w-full max-w-[500px]", className)}>
      {/* Wrapper bọc khít thẻ màu cam để định vị 4 nút góc khuyết chuẩn xác 100% */}
      <div className="relative">
        {/* 4 Nút góc khuyết kim cương đặt chính xác tại 4 tâm góc khuyết tròn */}
        <NutGoc className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
        <NutGoc className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
        <NutGoc className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
        <NutGoc className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />

        {/* Thẻ chính màu cam với 4 góc khuyết tròn âm (Inverted Rounded Notches) */}
        <div
          className="relative overflow-hidden bg-cam pt-5 sm:pt-7 text-trang flex flex-col justify-between"
          style={{
            maskImage: `
              radial-gradient(circle clamp(30px,5.69vw,48px) at 0 0, transparent 98%, black 100%),
              radial-gradient(circle clamp(30px,5.69vw,48px) at 100% 0, transparent 98%, black 100%),
              radial-gradient(circle clamp(30px,5.69vw,48px) at 100% 100%, transparent 98%, black 100%),
              radial-gradient(circle clamp(30px,5.69vw,48px) at 0 100%, transparent 98%, black 100%)
            `,
            WebkitMaskImage: `
              radial-gradient(circle clamp(30px,5.69vw,48px) at 0 0, transparent 98%, black 100%),
              radial-gradient(circle clamp(30px,5.69vw,48px) at 100% 0, transparent 98%, black 100%),
              radial-gradient(circle clamp(30px,5.69vw,48px) at 100% 100%, transparent 98%, black 100%),
              radial-gradient(circle clamp(30px,5.69vw,48px) at 0 100%, transparent 98%, black 100%)
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "destination-in",
          }}
        >
          {/* 3 Chai nguyên liệu dạng silhouette đi kèm nhãn chữ bên dưới với hiệu ứng hover float */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 items-end justify-center pt-2 px-4 sm:px-6">
            {thanhPhan.map((item, idx) => (
              <div key={`${item.ten}-${idx}`} className="flex flex-col items-center group cursor-pointer text-center">
                <ChaiRuou src={item.anh} alt={item.ten} />
                <p className="mt-2.5 sm:mt-3 font-display text-[11px] sm:text-xs font-bold uppercase tracking-wider text-trang leading-tight transition-transform duration-300 group-hover:scale-105">
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
