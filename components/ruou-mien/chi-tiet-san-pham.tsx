"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Container } from "@/components/container";

const SAN_PHAM = [
  {
    ten: "Rượu Hồng Đào",
    moTa: "Rượu Hồng Đào là thức rượu đặc trưng của xứ Quảng, có hương thơm nhẹ, vị êm dịu, nồng vừa và hậu vị ấm. Rượu mang nét mộc mạc nhưng tinh tế, thể hiện rõ dấu ấn của men rượu truyền thống miền Trung.",
    dungTich: "500ml",
    nongDo: "40%",
    gia: "400.000 VND",
    anh1: "/images/ruou-mien/hong-dao-1.webp",
    anh2: "/images/ruou-mien/hong-dao-2.webp",
  },
  {
    ten: "Rượu Bàu Đá",
    moTa: "Rượu Bàu Đá Bình Định nổi tiếng với vị cay nồng, đậm đà nhưng êm dịu, chắt lọc tinh tuý từ nguồn nước ngầm thiên nhiên và hạt gạo ngon miền Trung.",
    dungTich: "500ml",
    nongDo: "50%",
    gia: "450.000 VND",
    anh1: "/images/ruou-mien/hong-dao-1.webp",
    anh2: "/images/ruou-mien/hong-dao-2.webp",
  },
  {
    ten: "Rượu Làng Chuồn",
    moTa: "Rượu Làng Chuồn xứ Huế mang hương vị thanh tao, dịu nhẹ, lên men từ công thức truyền thống lâu đời của người dân cố đô.",
    dungTich: "500ml",
    nongDo: "38%",
    gia: "420.000 VND",
    anh1: "/images/ruou-mien/hong-dao-1.webp",
    anh2: "/images/ruou-mien/hong-dao-2.webp",
  },
];

import { motion, AnimatePresence } from "framer-motion";

export function ChiTietSanPham() {
  const [index, setIndex] = useState(0);
  const [soLuong, setSoLuong] = useState(1);

  const sp = SAN_PHAM[index];
  const giam = () => setSoLuong((n) => Math.max(1, n - 1));
  const tang = () => setSoLuong((n) => n + 1);
  const truoc = () => setIndex((i) => (i === 0 ? SAN_PHAM.length - 1 : i - 1));
  const sau = () => setIndex((i) => (i === SAN_PHAM.length - 1 ? 0 : i + 1));

  return (
    <section className="py-[clamp(2.5rem,5vw,4rem)]">
      <Container className="relative">
        <button
          type="button"
          onClick={truoc}
          aria-label="Sản phẩm trước"
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 text-cam-nhat transition-colors hover:text-cam cursor-pointer p-2 rounded-full hover:bg-cam/10"
        >
          <ChevronLeft className="size-8" strokeWidth={2.5} />
        </button>
        <button
          type="button"
          onClick={sau}
          aria-label="Sản phẩm sau"
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 text-cam-nhat transition-colors hover:text-cam cursor-pointer p-2 rounded-full hover:bg-cam/10"
        >
          <ChevronRight className="size-8" strokeWidth={2.5} />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={sp.ten}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="grid gap-x-12 gap-y-10 px-8 sm:px-12 lg:grid-cols-2"
          >
            {/* Trái: tên + mô tả + ảnh ngang */}
            <div>
              <h2 className="font-display text-d2 font-bold uppercase leading-tight text-cam">
                {sp.ten}
              </h2>
              <p className="mt-6 max-w-[420px] text-base leading-relaxed">
                {sp.moTa}
              </p>
              <Image
                src={sp.anh1}
                alt={sp.ten}
                width={662}
                height={405}
                sizes="(max-width: 1024px) 92vw, 560px"
                className="mt-8 aspect-[662/405] w-full rounded-[15px] object-cover"
              />
            </div>

            {/* Phải: thông tin + ảnh chai + bộ chọn số lượng */}
            <div className="grid grid-cols-[1fr_auto] gap-x-8 gap-y-6">
              <div className="flex flex-col">
                <h2 className="font-display text-d2 font-bold uppercase leading-tight text-cam">
                  Thông tin
                </h2>
                <dl className="mt-6 space-y-5 text-base">
                  <div>
                    <dt className="font-semibold">Dung tích</dt>
                    <dd>{sp.dungTich}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Nồng độ</dt>
                    <dd>{sp.nongDo}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Giá thành</dt>
                    <dd>{sp.gia}</dd>
                  </div>
                </dl>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={giam}
                      aria-label="Giảm số lượng"
                      className="grid size-[35px] place-items-center rounded-md border border-den transition-colors hover:bg-den/5 cursor-pointer"
                    >
                      &minus;
                    </button>
                    <span className="w-8 text-center text-base" aria-live="polite">
                      {soLuong}
                    </span>
                    <button
                      type="button"
                      onClick={tang}
                      aria-label="Tăng số lượng"
                      className="grid size-[35px] place-items-center rounded-md border border-den transition-colors hover:bg-den/5 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <Link
                    href="/mua-hang"
                    className="inline-flex h-10 items-center rounded-[20px] bg-cam px-5 text-base text-trang transition-opacity hover:opacity-90"
                  >
                    Thêm vào giỏ
                  </Link>
                </div>
              </div>

              <Image
                src={sp.anh2}
                alt={`Chai ${sp.ten}`}
                width={318}
                height={542}
                sizes="(max-width: 1024px) 40vw, 260px"
                className="aspect-[318/542] h-full w-[clamp(7rem,22vw,16rem)] rounded-[15px] object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
