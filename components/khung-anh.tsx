import Image from "next/image";

import { cn } from "@/lib/utils";
import { gocKhuyet } from "@/components/goc-khuyet";

/**
 * Khung ảnh viền kem góc khuyết — đo từ ảnh gốc 262×454:
 * viền 9px ngang / 11px dọc, bán kính góc khuyết 37.6px.
 * Quy sang cqw (1cqw = 1% bề rộng khung) nên co giãn vẫn giữ đúng tỉ lệ.
 */
export function KhungAnh({
  src,
  alt,
  className,
  sizes,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={cn("@container w-full", className)}>
      <div
        className="relative aspect-262/454 bg-kem px-[3.44cqw] py-[4.2cqw]"
        style={gocKhuyet("14.35cqw")}
      >
        <div className="relative h-full w-full overflow-hidden" style={gocKhuyet("11cqw")}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
