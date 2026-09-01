"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Container } from "@/components/container";
import { FadeIn } from "@/components/ui/fade-in";
import { noWidow } from "@/lib/utils";

const ANH_SLIDE = [
  {
    src: "/images/visit-store.webp",
    alt: "Quầy bar & Không gian thưởng rượu Rượu Miên",
    tieuDe: "Không Gian Thưởng Rượu",
  },
  {
    src: "/images/visit-bg-v2.webp",
    alt: "Không gian quầy pha chế đương đại & Vị Giao Hòa",
    tieuDe: "Quầy Pha Chế Đương Đại",
  },
  {
    src: "/images/visit-side.webp",
    alt: "Góc trưng bày & Bảng tên Rượu Miên Vị Men Nồng",
    tieuDe: "Góc Di Sản Rượu Miên",
  },
];

/**
 * Carousel canh giữa bằng scroll-snap gốc trình duyệt thay vì tự đo/đẩy bằng
 * JS: mỗi ảnh rộng bằng % của khung (không phải vw) và khung có padding hai
 * đầu bù đúng phần còn lại — nên trình duyệt luôn canh CHÍNH GIỮA chuẩn xác
 * bất kể bề rộng thật của container, ảnh hai bên ló ra đều nhau, không lệch.
 */
export function GheTham() {
  const [viTri, setViTri] = useState(1);
  const [dangTuDong, setDangTuDong] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const diToi = (i: number, muot: boolean) => {
    const container = containerRef.current;
    const item = itemRefs.current[i];
    if (container && item) {
      const targetScrollLeft =
        item.offsetLeft - (container.clientWidth - item.clientWidth) / 2;
      container.scrollTo({
        left: targetScrollLeft,
        behavior: muot ? "smooth" : "instant",
      });
    }
  };

  // Canh giữa slide mặc định ngay khi mount, không hiệu ứng trượt
  useEffect(() => {
    diToi(viTri, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!dangTuDong) return;
    const timer = setInterval(() => {
      setViTri((cu) => {
        const ke = (cu + 1) % ANH_SLIDE.length;
        diToi(ke, true);
        return ke;
      });
    }, 4500);
    return () => clearInterval(timer);
  }, [dangTuDong]);

  const chonDot = (i: number) => {
    setViTri(i);
    diToi(i, true);
  };

  return (
    <section className="overflow-hidden py-[clamp(2.5rem,5vw,4rem)]">
      <Container narrow className="text-center">
        <FadeIn>
          <h2 className="font-display text-d2 font-bold text-cam">GHÉ THĂM MIÊN</h2>
          <p className="mx-auto mt-[clamp(1rem,2vw,2.5rem)] max-w-[540px] text-base leading-relaxed text-den">
            {noWidow("Không chỉ là nơi tìm thấy những men vị miền Trung, Miên còn là không gian dành cho những cuộc gặp và trải nghiệm. Trong không gian ấm áp mang hơi thở bản địa đương đại, bạn có thể khám phá từng dòng rượu, lắng nghe câu chuyện phía sau mỗi vùng vị, lựa chọn những món quà ý nghĩa hay trực tiếp trải nghiệm pha chế tại quầy. Ghé Miên, thưởng một vị men và mở ra một cuộc giao.", 3)}
          </p>
        </FadeIn>
      </Container>

      <div
        className="mt-[clamp(2rem,4vw,3.5rem)]"
        onMouseEnter={() => setDangTuDong(false)}
        onMouseLeave={() => setDangTuDong(true)}
      >
        {/* Khung cuộn: padding hai đầu = (100% - bề rộng ảnh)/2 để ảnh đầu/cuối
            cũng canh giữa được; overflow-hidden vẫn cho phép cuộn bằng JS/vuốt
            (chỉ ẩn thanh cuộn, không chặn scrollLeft). */}
        <div
          ref={containerRef}
          className="flex snap-x snap-mandatory items-center gap-4 overflow-x-auto px-[4%] [scrollbar-width:none] sm:gap-6 sm:px-[8%] lg:gap-8 lg:px-[11%] [&::-webkit-scrollbar]:hidden"
        >
          {ANH_SLIDE.map((slide, i) => {
            const active = i === viTri;
            return (
              <button
                key={slide.src}
                type="button"
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                onClick={() => chonDot(i)}
                aria-label={slide.tieuDe}
                aria-current={active ? "true" : undefined}
                className={`group relative aspect-[16/8] w-[92%] shrink-0 snap-center overflow-hidden rounded-[clamp(1.25rem,3vw,2.5rem)] shadow-lg transition-all duration-500 sm:w-[84%] lg:w-[78%] ${
                  active
                    ? "cursor-default scale-100 opacity-100 shadow-2xl"
                    : "cursor-pointer scale-95 opacity-75 brightness-90 hover:opacity-95 hover:scale-[0.96]"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 768px) 92vw, (max-width: 1024px) 84vw, 78vw"
                  priority={i === 1}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </button>
            );
          })}
        </div>

        {/* Chấm chỉ mục */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {ANH_SLIDE.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => chonDot(i)}
              aria-label={`Chuyển sang ảnh ${i + 1}`}
              className="grid size-4 shrink-0 place-items-center cursor-pointer transition-transform duration-300 hover:scale-125"
            >
              <span
                className={`size-3 rounded-full transition-all duration-300 ${
                  viTri === i ? "bg-cam scale-110 shadow-md" : "bg-cam/30 hover:bg-cam/60"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
