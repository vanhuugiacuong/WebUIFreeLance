"use client";

import { useState } from "react";
import Image from "next/image";
import { User, MapPin, Phone, CreditCard, Mail, Pencil } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Container } from "@/components/container";
import { BuocDatHang } from "@/components/mua-hang/buoc-dat-hang";
import { TheKhung } from "@/components/mua-hang/the-khung";
import { TheThongBao } from "@/components/mua-hang/the-thong-bao";
import { Nut } from "@/components/mua-hang/nut";
import { cn } from "@/lib/utils";

const GIA = 400000;
const vnd = (n: number) => n.toLocaleString("vi-VN");

/** Ô nhập của form giao hàng — nhãn + input bo tròn viền cam, icon tuỳ chọn. */
function Truong({
  nhan,
  batBuoc,
  placeholder,
  type = "text",
  icon: Icon,
}: {
  nhan: string;
  batBuoc?: boolean;
  placeholder: string;
  type?: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}) {
  return (
    <label className="flex flex-col gap-2 group">
      <span className="text-base font-semibold text-cam transition-colors group-hover:text-cam/90">
        {nhan}
        {batBuoc && <span className="ml-1 text-cam" aria-hidden>*</span>}
      </span>
      <span className="relative">
        {Icon && (
          <Icon
            className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-cam transition-colors group-focus-within:text-cam"
            strokeWidth={1.75}
          />
        )}
        <input
          type={type}
          placeholder={placeholder}
          required={batBuoc}
          className={cn(
            "h-[52px] w-full rounded-2xl border border-cam/50 bg-trang text-base text-den shadow-xs",
            "placeholder:text-xam-nhat transition-all duration-300",
            "focus:border-cam focus:outline-none focus:ring-2 focus:ring-cam/25 focus:shadow-md",
            Icon ? "pl-11 pr-5" : "px-5"
          )}
        />
      </span>
    </label>
  );
}

function DongY({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="mx-auto flex max-w-[480px] cursor-pointer items-center justify-center gap-2.5 text-xs sm:text-sm text-den select-none group">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="size-4 shrink-0 accent-den cursor-pointer"
      />
      <span>
        Bạn đã xác nhận và đồng ý với các{" "}
        <span className="font-medium underline hover:text-cam transition-colors">chính sách bảo mật</span> của Miên
      </span>
    </label>
  );
}

export function LuongDatHang() {
  const [buoc, setBuoc] = useState(1);
  const [soLuong, setSoLuong] = useState(1);
  const [dongY, setDongY] = useState(true);
  const tong = soLuong * GIA;

  return (
    <section className="py-10 sm:py-14">
      <Container className="flex flex-col items-center gap-10 sm:gap-12">
        <BuocDatHang buoc={buoc} />

        <AnimatePresence mode="wait">
          {/* Bước 1 — Chọn sản phẩm (Matching Full-Page Figma Screenshot 100%) */}
          {buoc === 1 && (
            <motion.div
              key="buoc-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex w-full flex-col items-center gap-8"
            >
              <TheKhung className="w-full max-w-[760px]">
                <h2 className="text-center font-display text-2xl sm:text-3xl font-bold uppercase text-cam tracking-wider mb-6 sm:mb-8">
                  THÔNG TIN ĐƠN HÀNG
                </h2>

                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-6 sm:gap-10">
                  {/* Bức ảnh chai rượu hiển thị tự nhiên không khung hộp trắng */}
                  <Image
                    src="/images/ruou-mien/hong-dao-2.webp"
                    alt="Rượu Hồng Đào"
                    width={110}
                    height={187}
                    priority
                    className="h-[140px] sm:h-[160px] w-auto object-contain shrink-0 drop-shadow-sm"
                  />

                  <div className="flex-1 text-center sm:text-left max-w-[320px]">
                    <h3 className="font-display text-lg sm:text-xl font-semibold uppercase text-cam tracking-wide">
                      Rượu Hồng Đào
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-den/80 font-normal">500ml</p>
                    <p className="mt-1 text-sm sm:text-base text-den/90 font-medium">
                      {soLuong} x {vnd(GIA)} VND
                    </p>

                    {/* Bộ đếm số lượng 3 ô vuông rời + Nút Xóa viền cam */}
                    <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          aria-label="Giảm"
                          onClick={() => setSoLuong((n) => Math.max(1, n - 1))}
                          className="size-8 sm:size-9 rounded border border-den/40 bg-transparent text-sm font-semibold text-den hover:border-cam hover:text-cam flex items-center justify-center transition-all cursor-pointer active:scale-95"
                        >
                          &minus;
                        </button>
                        <span className="size-8 sm:size-9 rounded border border-den/40 bg-transparent text-sm font-semibold text-den flex items-center justify-center">
                          {soLuong}
                        </span>
                        <button
                          type="button"
                          aria-label="Tăng"
                          onClick={() => setSoLuong((n) => n + 1)}
                          className="size-8 sm:size-9 rounded border border-den/40 bg-transparent text-sm font-semibold text-den hover:border-cam hover:text-cam flex items-center justify-center transition-all cursor-pointer active:scale-95"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSoLuong(0)}
                        className="h-8 sm:h-9 rounded-full border border-cam px-6 text-sm font-medium text-cam hover:bg-cam hover:text-trang transition-colors cursor-pointer"
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                </div>

                {/* Khối tổng thanh toán nằm ở dưới bên phải khớp 100% screenshot Figma */}
                <div className="mt-6 sm:mt-8 ml-auto w-full max-w-[440px]">
                  <hr className="mb-4 border-t-[1.75px] border-cam/70" />

                  <dl className="space-y-3 text-sm sm:text-base">
                    <div className="flex items-center justify-between">
                      <dt className="font-semibold text-cam">Số lượng</dt>
                      <dd className="font-normal text-den/90">{soLuong} sản phẩm</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="font-semibold text-cam">Tổng thanh toán</dt>
                      <dd className="font-semibold text-cam">{vnd(tong)} VND</dd>
                    </div>
                  </dl>
                </div>
              </TheKhung>

              <DongY checked={dongY} onChange={setDongY} />

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2">
                <Nut bien="phu" href="/">
                  Hủy bỏ
                </Nut>
                <Nut
                  bien="chinh"
                  onClick={() => soLuong > 0 && dongY && setBuoc(2)}
                >
                  Xác nhận
                </Nut>
              </div>
            </motion.div>
          )}

          {/* Bước 2 — Điền thông tin */}
          {buoc === 2 && (
            <motion.form
              key="buoc-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex w-full flex-col items-center gap-8"
              onSubmit={(e) => {
                e.preventDefault();
                if (dongY) setBuoc(3);
              }}
            >
              <TheKhung className="w-full max-w-[840px]">
                <h2 className="text-center font-display text-2xl sm:text-3xl lg:text-d3 font-bold uppercase text-cam tracking-wider mb-8 sm:mb-10">
                  THÔNG TIN GIAO HÀNG
                </h2>
                <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
                  <Truong nhan="Họ tên" batBuoc placeholder="Nguyễn Minh A" icon={User} />
                  <Truong nhan="Địa chỉ" batBuoc placeholder="120 Đường số 65, Tân Hưng, TP.HCM" icon={MapPin} />
                  <Truong nhan="Số điện thoại" batBuoc placeholder="0905 678 999" type="tel" icon={Phone} />
                  <Truong nhan="Thanh toán" batBuoc placeholder="Tiền mặt" icon={CreditCard} />
                  <Truong nhan="Email" batBuoc placeholder="nguyenminha@gmail.com" type="email" icon={Mail} />
                  <Truong nhan="Ghi chú" placeholder="Liên hệ trước khi giao" icon={Pencil} />
                </div>
              </TheKhung>

              <DongY checked={dongY} onChange={setDongY} />

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Nut bien="phu" onClick={() => setBuoc(1)}>
                  Hủy bỏ
                </Nut>
                <Nut bien="chinh" type="submit">
                  Xác nhận
                </Nut>
              </div>
            </motion.form>
          )}

          {/* Bước 3 — Xác nhận đơn (thành công) */}
          {buoc === 3 && (
            <motion.div
              key="buoc-3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex w-full flex-col items-center gap-8"
            >
              <div className="w-full max-w-[840px]">
                <TheThongBao
                  mau="cam"
                  tieuDe="Bạn đã đặt hàng thành công"
                  moTa="Chúng tôi sẽ thông báo đến bạn thông tin đặt hàng qua số điện thoại đã cung cấp trong thời gian sớm nhất"
                />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Nut bien="phu" href="/don-hang">
                  Theo dõi đơn hàng
                </Nut>
                <Nut bien="chinh" href="/">
                  Về trang chủ
                </Nut>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
