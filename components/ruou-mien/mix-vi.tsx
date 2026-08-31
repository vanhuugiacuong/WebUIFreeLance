"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "@/components/container";
import { KhungVien } from "@/components/khung-vien";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

type Cocktail = {
  ten: string;
  anh: string;
  do: string;
  nguyenLieu: { ten: string; luong: string }[];
  cachLam: string;
  vi: [string, number][];
};

// Táo quế: số liệu & vị giác lấy đúng từ thiết kế. 5 vị còn lại là ước lượng
// hợp lý dựa trên nguyên liệu (Figma chỉ chi tiết một công thức).
const COCKTAIL: Cocktail[] = [
  {
    ten: "Táo quế",
    anh: "cocktail-tao-que",
    do: "Vừa",
    nguyenLieu: [
      { ten: "Rượu Làng Chuồn", luong: "20 ml" },
      { ten: "Nước táo", luong: "35 ml" },
      { ten: "Syrup quế", luong: "5 ml" },
      { ten: "Táo cắt lát", luong: "2 lát" },
    ],
    cachLam: "Cho rượu, nước táo và đá vào ly. Khuấy nhẹ, thêm thanh quế và lát táo.",
    vi: [["Ngọt dịu", 4], ["Chua", 1], ["Cay/Nồng", 3], ["Đắng", 1], ["Thanh mát", 2]],
  },
  {
    ten: "Gừng mật",
    anh: "cocktail-gung-mat",
    do: "Mạnh",
    nguyenLieu: [
      { ten: "Rượu Bàu Đá", luong: "20 ml" },
      { ten: "Mật ong", luong: "15 ml" },
      { ten: "Gừng tươi", luong: "3 lát" },
      { ten: "Chanh tươi", luong: "½ quả" },
    ],
    cachLam:
      "Cho rượu, mật ong và gừng vào shaker cùng đá. Lắc đều, lọc vào ly và trang trí với lát gừng.",
    vi: [["Ngọt dịu", 3], ["Chua", 2], ["Cay/Nồng", 4], ["Đắng", 1], ["Thanh mát", 2]],
  },
  {
    ten: "Thanh mộc",
    anh: "cocktail-thanh-moc",
    do: "Nhẹ",
    nguyenLieu: [
      { ten: "Rượu Bàu Đá", luong: "20 ml" },
      { ten: "Tonic", luong: "60 ml" },
      { ten: "Vỏ bưởi", luong: "1 miếng" },
      { ten: "Hương thảo", luong: "1 nhánh" },
    ],
    cachLam:
      "Cho rượu và đá vào ly. Thêm tonic sau cùng, khuấy nhẹ và trang trí với vỏ bưởi.",
    vi: [["Ngọt dịu", 2], ["Chua", 2], ["Cay/Nồng", 2], ["Đắng", 3], ["Thanh mát", 4]],
  },
  {
    ten: "Cà phê đêm",
    anh: "cocktail-ca-phe-dem",
    do: "Mạnh",
    nguyenLieu: [
      { ten: "Rượu Bàu Đá", luong: "20 ml" },
      { ten: "Cold brew", luong: "40 ml" },
      { ten: "Syrup đường nâu", luong: "10 ml" },
    ],
    cachLam: "Cho rượu, cà phê vào shaker cùng đá. Lắc lạnh, lọc vào ly đã ướp lạnh.",
    vi: [["Ngọt dịu", 3], ["Chua", 1], ["Cay/Nồng", 3], ["Đắng", 4], ["Thanh mát", 1]],
  },
  {
    ten: "Dứa nhiệt đới",
    anh: "cocktail-dua-nhiet-doi",
    do: "Nhẹ",
    nguyenLieu: [
      { ten: "Rượu Hồng Đào", luong: "20 ml" },
      { ten: "Nước dứa", luong: "40 ml" },
      { ten: "Chanh", luong: "10 ml" },
      { ten: "Syrup đường", luong: "5 ml" },
    ],
    cachLam:
      "Cho tất cả nguyên liệu vào shaker cùng đá. Lắc đều, lọc vào ly và thêm bạc hà.",
    vi: [["Ngọt dịu", 4], ["Chua", 3], ["Cay/Nồng", 2], ["Đắng", 1], ["Thanh mát", 4]],
  },
  {
    ten: "Cam quế",
    anh: "cocktail-cam-que",
    do: "Vừa",
    nguyenLieu: [
      { ten: "Rượu Hồng Đào", luong: "20 ml" },
      { ten: "Nước cam", luong: "40 ml" },
      { ten: "Syrup mật ong", luong: "10 ml" },
      { ten: "Quế", luong: "1 thanh" },
    ],
    cachLam:
      "Cho tất cả nguyên liệu vào shaker cùng đá. Lắc đến khi lạnh, lọc vào ly và thêm cam.",
    vi: [["Ngọt dịu", 4], ["Chua", 2], ["Cay/Nồng", 3], ["Đắng", 1], ["Thanh mát", 2]],
  },
];

function Diem({ day }: { day: boolean }) {
  return (
    <span
      className={cn(
        "size-3.5 sm:size-4 rounded-full border-2 border-cam transition-colors",
        day ? "bg-cam" : "bg-transparent"
      )}
    />
  );
}

function CongThuc({ c, dong }: { c: Cocktail; dong: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && dong();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [dong]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] grid place-items-center bg-den/60 backdrop-blur-sm p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Công thức ${c.ten}`}
      onClick={dong}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[1120px] rounded-[28px] sm:rounded-[36px] bg-cam p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Nút đóng tròn màu trắng với biểu tượng X màu cam góc trên bên phải INSIDE modal */}
        <button
          type="button"
          onClick={dong}
          aria-label="Đóng"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 size-8 sm:size-9 rounded-full bg-trang text-cam flex items-center justify-center transition-transform hover:scale-110 shadow-sm cursor-pointer"
        >
          <X className="size-5" strokeWidth={3} />
        </button>

        <div className="grid gap-6 lg:grid-cols-2 items-stretch">
          {/* Bức ảnh Cocktail hình vuông góc bo tròn mịn */}
          <div className="relative aspect-square w-full overflow-hidden rounded-[24px] shadow-sm">
            <Image
              src={`/images/ruou-mien/${c.anh}.webp`}
              alt={`Cocktail ${c.ten}`}
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 520px"
              className="object-cover"
            />
          </div>

          {/* Thẻ vé công thức màu kem (Cream Ticket Card) */}
          <div className="rounded-[24px] bg-[#fbf4ea] p-4 sm:p-6 lg:p-7 flex flex-col justify-between shadow-sm relative">
            {/* Logo Miên ở chính giữa trên cùng */}
            <Image
              src="/images/logo-header.webp"
              alt="Miên"
              width={96}
              height={32}
              priority
              className="mx-auto h-6 sm:h-7 w-auto object-contain mb-3 sm:mb-4"
            />

            {/* Khung viền góc khuyết bài chòi bọc TOÀN BỘ nội dung 100% Full Height */}
            <div className="relative p-5 sm:p-7 flex-1 flex flex-col justify-between min-h-[380px] sm:min-h-[420px]">
              <KhungVien mau="var(--color-cam)" doNet={2} className="inset-0 w-full h-full" />

              <div className="relative text-cam grid grid-cols-[1.35fr_1fr] h-full gap-0 z-10">
                {/* Cột trái: Tiêu đề + Khối nguyên liệu cam chữ trắng + 5 vị giác */}
                <div className="flex flex-col border-r-2 border-cam pr-5 sm:pr-7 justify-between">
                  <div>
                    {/* Dòng Tiêu đề */}
                    <div className="h-9 sm:h-11 flex items-center mb-1">
                      <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase text-cam tracking-wider leading-none">
                        {c.ten}
                      </h3>
                    </div>

                    {/* Khối Nguyên Liệu Cam Chữ Trắng - Nền cam tràn ra chạm viền Trái và Phải */}
                    <dl className="bg-cam text-trang -ml-5 sm:-ml-7 -mr-5 sm:-mr-7 px-5 sm:px-7 py-3.5 sm:py-4 space-y-2 text-xs sm:text-sm font-medium mb-4 shadow-xs">
                      {c.nguyenLieu.map((n) => (
                        <div key={n.ten} className="flex items-baseline justify-between gap-3">
                          <dt className="text-trang/95 font-medium">{n.ten}</dt>
                          <dd className="shrink-0 tabular-nums font-bold text-trang">{n.luong}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  {/* Danh sách 5 thang đo Đặc điểm Vị giác */}
                  <ul className="space-y-2 pt-2 text-xs sm:text-sm text-cam font-medium">
                    {c.vi.map(([nhan, diem]) => (
                      <li key={nhan} className="flex items-center justify-between gap-3">
                        <span className="font-semibold text-cam">{nhan}</span>
                        <span className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Diem key={i} day={i <= diem} />
                          ))}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cột phải: Độ rượu + Hướng dẫn cách làm */}
                <div className="flex flex-col pl-5 sm:pl-7">
                  {/* Dòng Độ rượu */}
                  <div className="h-9 sm:h-11 flex items-center justify-center mb-1 text-center">
                    <span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase text-cam tracking-wider leading-none">
                      {c.do}
                    </span>
                  </div>

                  {/* Đoạn văn Hướng dẫn cách làm */}
                  <div className="text-xs sm:text-sm leading-relaxed text-cam font-medium py-2">
                    <p>{c.cachLam}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/** Lưới 6 công thức "mix vị" — bấm Chi tiết mở modal công thức. */
export function MixVi() {
  const [chon, setChon] = useState<Cocktail | null>(null);

  return (
    <section className="py-[clamp(2.5rem,5vw,4rem)]">
      <Container className="flex flex-col items-center">
        <FadeIn direction="up">
          <h2 className="text-center font-display text-d2 font-bold uppercase leading-tight text-cam">
            Mix vị điệu nghệ
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {COCKTAIL.map((c, index) => (
            <FadeIn key={c.ten} direction="up" delay={index * 0.1} className="h-full flex flex-col">
              <article className="flex flex-col items-center text-center group h-full justify-between">
                <div className="w-full flex flex-col items-center">
                  <div
                    onClick={() => setChon(c)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setChon(c)}
                    aria-label={`Xem chi tiết công thức ${c.ten}`}
                    className="overflow-hidden rounded-[15px] w-full shrink-0 cursor-pointer outline-none focus:outline-none focus:ring-0 focus-visible:outline-none"
                  >
                    <Image
                      src={`/images/ruou-mien/${c.anh}.webp`}
                      alt={`Cocktail ${c.ten}`}
                      width={333}
                      height={385}
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 333px"
                      className="aspect-[333/385] w-full rounded-[15px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-6 font-display text-d3 font-semibold uppercase text-cam">
                    {c.ten}
                  </h3>
                  <div className="mt-3 text-base leading-relaxed text-cam flex-1">
                    <p>
                      <span className="font-semibold">Nguyên liệu:</span>{" "}
                      {c.nguyenLieu.map((n) => n.ten).join(", ")}
                    </p>
                    <p className="mt-1">
                      <span className="font-semibold">Cách làm:</span> {c.cachLam}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <button
                    type="button"
                    onClick={() => setChon(c)}
                    className="inline-flex h-10 items-center rounded-full border border-cam bg-kem px-6 text-base text-cam transition-colors hover:bg-cam hover:text-trang cursor-pointer shadow-sm outline-none focus:outline-none focus:ring-0 focus-visible:outline-none"
                  >
                    Chi tiết
                  </button>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {chon && <CongThuc c={chon} dong={() => setChon(null)} />}
      </AnimatePresence>
    </section>
  );
}
