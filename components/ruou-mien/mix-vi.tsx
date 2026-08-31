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
        "size-3.5 rounded-full border border-cam",
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
      className="fixed inset-0 z-[60] grid place-items-center bg-den/60 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Công thức ${c.ten}`}
      onClick={dong}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[1040px] rounded-[clamp(1.25rem,2.5vw,2rem)] bg-cam p-5 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={dong}
          aria-label="Đóng"
          className="absolute -right-3 -top-3 z-10 grid size-9 place-items-center rounded-full bg-kem text-cam shadow-md transition-transform hover:scale-110 cursor-pointer"
        >
          <X className="size-5" />
        </button>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src={`/images/ruou-mien/${c.anh}.webp`}
              alt={`Cocktail ${c.ten}`}
              fill
              sizes="(max-width: 1024px) 92vw, 460px"
              className="object-cover"
            />
          </div>

          {/* Thẻ công thức kiểu "vé" Bài Chòi */}
          <div className="rounded-2xl bg-kem-dam p-5 sm:p-6">
            <Image
              src="/images/logo-header.webp"
              alt="Miên"
              width={72}
              height={24}
              className="mx-auto h-6 w-auto"
            />

            <div className="relative mt-4 p-4">
              <KhungVien mau="var(--color-cam)" className="inset-0" />
              <div className="relative text-cam">
                <div className="flex items-stretch gap-4 border-b-2 border-cam pb-2">
                  <h3 className="flex-1 font-display text-2xl font-bold uppercase leading-none">
                    {c.ten}
                  </h3>
                  <span className="border-l-2 border-cam" />
                  <span className="font-display text-2xl font-bold uppercase leading-none">
                    {c.do}
                  </span>
                </div>

                <div className="grid grid-cols-[1fr_auto] gap-4 border-b-2 border-cam py-3">
                  <dl className="space-y-1.5 text-sm">
                    {c.nguyenLieu.map((n) => (
                      <div key={n.ten} className="flex items-baseline justify-between gap-3">
                        <dt>{n.ten}</dt>
                        <dd className="shrink-0 tabular-nums">{n.luong}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="max-w-[130px] border-l-2 border-cam pl-4 text-xs leading-relaxed">
                    {c.cachLam}
                  </p>
                </div>

                <ul className="space-y-2 pt-3 text-sm">
                  {c.vi.map(([nhan, diem]) => (
                    <li key={nhan} className="flex items-center justify-between gap-4">
                      <span>{nhan}</span>
                      <span className="flex gap-1.5">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Diem key={i} day={i <= diem} />
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
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
                  <div className="overflow-hidden rounded-[15px] w-full shrink-0">
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
                    className="inline-flex h-10 items-center rounded-full border border-cam bg-kem px-6 text-base text-cam transition-colors hover:bg-cam hover:text-trang cursor-pointer shadow-sm"
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
