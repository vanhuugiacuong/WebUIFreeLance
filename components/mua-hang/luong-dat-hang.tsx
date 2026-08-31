"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, Pencil } from "lucide-react";

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
    <label className="flex flex-col gap-2">
      <span className="text-base font-medium text-cam">
        {nhan}
        {batBuoc && <span aria-hidden>*</span>}
      </span>
      <span className="relative">
        {Icon && (
          <Icon
            className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-cam"
            strokeWidth={1.75}
          />
        )}
        <input
          type={type}
          placeholder={placeholder}
          required={batBuoc}
          className={cn(
            "h-[52px] w-full rounded-full border border-cam/60 bg-trang text-base text-den",
            "placeholder:text-xam-nhat focus:border-cam focus:outline-none focus:ring-2 focus:ring-cam/20",
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
    <label className="mx-auto flex max-w-[420px] cursor-pointer items-start gap-3 text-sm text-den">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 size-4 shrink-0 accent-cam cursor-pointer transition-transform duration-200 hover:scale-110"
      />
      <span>
        Bạn đã xác nhận và đồng ý với các{" "}
        <span className="underline">chính sách bảo mật</span> của Miên
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
    <section className="py-[clamp(2.5rem,6vw,5rem)]">
      <Container className="flex flex-col items-center gap-[clamp(2.5rem,6vw,5rem)]">
        <BuocDatHang buoc={buoc} />

        {/* Bước 1 — Chọn sản phẩm */}
        {buoc === 1 && (
          <div className="flex w-full flex-col items-center gap-8">
            <TheKhung className="w-full max-w-[840px]">
              <h2 className="text-center font-display text-d3 font-bold uppercase text-cam">
                Thông tin đơn hàng
              </h2>

              <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                <Image
                  src="/images/ruou-mien/hong-dao-2.webp"
                  alt="Rượu Hồng Đào"
                  width={110}
                  height={187}
                  className="mx-auto h-auto w-[92px] shrink-0 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold uppercase text-cam">
                    Rượu Hồng Đào
                  </h3>
                  <p className="mt-2 text-base">500ml</p>
                  <p className="text-base">
                    {soLuong} x {vnd(GIA)} VND
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label="Giảm"
                        onClick={() => setSoLuong((n) => Math.max(1, n - 1))}
                        className="grid size-9 place-items-center rounded-md border border-den/40 hover:bg-den/5"
                      >
                        &minus;
                      </button>
                      <span className="w-8 text-center">{soLuong}</span>
                      <button
                        type="button"
                        aria-label="Tăng"
                        onClick={() => setSoLuong((n) => n + 1)}
                        className="grid size-9 place-items-center rounded-md border border-den/40 hover:bg-den/5"
                      >
                        +
                      </button>
                    </div>
                    <Nut
                      bien="phu"
                      className="h-9 min-w-0 px-6"
                      onClick={() => setSoLuong(0)}
                    >
                      Xóa
                    </Nut>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-cam/30 pt-6">
                <dl className="space-y-3 text-base">
                  <div className="flex items-center justify-between">
                    <dt className="font-semibold text-cam">Số lượng</dt>
                    <dd>{soLuong} sản phẩm</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="font-semibold text-cam">Tổng thanh toán</dt>
                    <dd>{vnd(tong)} VND</dd>
                  </div>
                </dl>
              </div>
            </TheKhung>

            <DongY checked={dongY} onChange={setDongY} />

            <div className="flex flex-wrap items-center justify-center gap-4">
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
          </div>
        )}

        {/* Bước 2 — Điền thông tin */}
        {buoc === 2 && (
          <form
            className="flex w-full flex-col items-center gap-8"
            onSubmit={(e) => {
              e.preventDefault();
              if (dongY) setBuoc(3);
            }}
          >
            <TheKhung className="w-full max-w-[960px]">
              <h2 className="text-center font-display text-d3 font-bold uppercase text-cam">
                Thông tin giao hàng
              </h2>
              <div className="mt-10 grid gap-x-12 gap-y-7 md:grid-cols-2">
                <Truong nhan="Họ tên" batBuoc placeholder="Nguyễn Minh A" />
                <Truong nhan="Địa chỉ" batBuoc placeholder="120 Đường số 65, Tân Hưng, TP.HCM" />
                <Truong nhan="Số điện thoại" batBuoc placeholder="0905 678 999" type="tel" icon={Phone} />
                <Truong nhan="Thanh toán" batBuoc placeholder="Tiền mặt" />
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
          </form>
        )}

        {/* Bước 3 — Xác nhận đơn (thành công) */}
        {buoc === 3 && (
          <div className="flex w-full flex-col items-center gap-8">
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
          </div>
        )}
      </Container>
    </section>
  );
}
