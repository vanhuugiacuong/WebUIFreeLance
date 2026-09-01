"use client";

import { useState, useEffect } from "react";
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
  value,
  onChange,
  icon: Icon,
}: {
  nhan: string;
  batBuoc?: boolean;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}) {
  return (
    <label className="flex flex-col gap-2 group">
      <span className="text-base font-semibold text-cam transition-colors group-hover:text-cam/90">
        {nhan}
        {batBuoc && (
          <span className="ml-1 text-cam" aria-hidden>
            *
          </span>
        )}
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
          value={value}
          onChange={onChange}
          className={cn(
            "h-[52px] w-full rounded-2xl border border-cam/50 bg-trang text-base text-den shadow-xs",
            "placeholder:text-xam-nhat transition-all duration-300",
            "focus:border-cam focus:outline-none focus:ring-2 focus:ring-cam/25 focus:shadow-md",
            Icon ? "pl-11 pr-5" : "px-5",
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
        <span className="font-medium underline hover:text-cam transition-colors">
          chính sách bảo mật
        </span>{" "}
        của Miên
      </span>
    </label>
  );
}

export function LuongDatHang() {
  const [buoc, setBuoc] = useState(1);
  const [sanPham, setSanPham] = useState({
    id: "hong-dao",
    ten: "RƯỢU HỒNG ĐÀO",
    dungTich: "500ml",
    gia: 450000,
    anhChai: "/images/ruou-mien/hong-dao-2.webp",
  });
  const [soLuong, setSoLuong] = useState(1);
  const [dongY, setDongY] = useState(true);

  // Form input state
  const [hoTen, setHoTen] = useState("");
  const [diaChi, setDiaChi] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [thanhToan, setThanhToan] = useState("Tiền mặt");
  const [email, setEmail] = useState("");
  const [ghiChu, setGhiChu] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("mien_san_pham_chon");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setSanPham({
            id: parsed.id || "hong-dao",
            ten: parsed.ten || "RƯỢU HỒNG ĐÀO",
            dungTich: parsed.dungTich || "500ml",
            gia: parsed.gia || 400000,
            anhChai: parsed.anhChai || "/images/ruou-mien/hong-dao-2.webp",
          });
          if (parsed.soLuong) {
            setSoLuong(parsed.soLuong);
          }
        } catch {
          // ignore
        }
      }
    }
  }, []);

  const tong = soLuong * sanPham.gia;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (dongY) {
      const donHangMoi = {
        hoTen: hoTen || "Nguyễn Minh A",
        soDienThoai: soDienThoai || "0905 678 999",
        email: email || "nguyenminha@gmail.com",
        diaChi: diaChi || "120 Đường số 65, Tân Hưng, TP.HCM",
        thanhToan: thanhToan || "Tiền mặt",
        ghiChu: ghiChu || "Liên hệ trước khi giao",
        tenSanPham: sanPham.ten,
        dungTich: sanPham.dungTich,
        soLuong: soLuong,
        tongTien: tong,
        trangThai: "Đã duyệt",
      };
      if (typeof window !== "undefined") {
        localStorage.setItem("mien_don_hang_cuoi", JSON.stringify(donHangMoi));
      }
      setBuoc(3);
    }
  };

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
              <TheKhung className="w-full max-w-[1040px] min-h-[580px] sm:min-h-[660px] lg:min-h-[720px]">
                {/* Part 1: Tiêu đề ở trên cùng */}
                <h2 className="mt-12 text-center font-display text-2xl sm:text-[33px] font-bold uppercase text-cam tracking-wider mb-6 sm:mb-8">
                  THÔNG TIN ĐƠN HÀNG
                </h2>

                {/* Part 2: Dải sản phẩm (Chai rượu + Chi tiết) ở giữa */}
                <div className="pl-20 flex flex-col sm:flex-row items-center sm:items-start justify-center gap-6 sm:gap-10 lg:gap-12 my-auto">
                  <Image
                    src={sanPham.anhChai}
                    alt={sanPham.ten}
                    width={110}
                    height={187}
                    priority
                    className="h-[140px] sm:h-[165px] w-auto object-contain shrink-0 drop-shadow-sm"
                  />

                  <div className="flex-1 text-center sm:text-left max-w-[340px]">
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-cam tracking-wide">
                      {sanPham.ten}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-den/80 font-normal">
                      {sanPham.dungTich}
                    </p>
                    <p className="mt-1 text-sm sm:text-base text-den/90 font-medium">
                      {soLuong} x {vnd(sanPham.gia)} VND
                    </p>

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

                {/* Part 3: Khối thanh toán xuống hàng phía dưới: Số lượng -> Đường hr cam -> Tổng thanh toán */}
                <div className="mb-10 mx-auto w-full max-w-[480px]">
                  <div className="flex items-center justify-between text-sm sm:text-base mb-3">
                    <span className="font-semibold text-cam">Số lượng</span>
                    <span className="font-normal text-den/90">
                      {soLuong} sản phẩm
                    </span>
                  </div>

                  <hr className="my-3 border-t-[1.75px] border-cam/70" />

                  <div className="flex items-center justify-between text-sm sm:text-base mt-3">
                    <span className="font-semibold text-cam">
                      Tổng thanh toán
                    </span>
                    <span className="font-semibold text-cam">
                      {vnd(tong)} VND
                    </span>
                  </div>
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
              onSubmit={handleFormSubmit}
            >
              <TheKhung className="w-full max-w-[1040px] min-h-[580px] sm:min-h-[680px] lg:min-h-[746px]">
                <h2 className="text-center font-display text-2xl sm:text-3xl lg:text-[38px] font-bold uppercase text-cam tracking-wider mb-8 sm:mb-12">
                  THÔNG TIN GIAO HÀNG
                </h2>
                <div className=" pt-10 grid gap-x-12 gap-y-6 md:grid-cols-2">
                  <Truong
                    nhan="Họ tên"
                    batBuoc
                    placeholder="Nguyễn Minh A"
                    value={hoTen}
                    onChange={(e) => setHoTen(e.target.value)}
                    icon={User}
                  />
                  <Truong
                    nhan="Địa chỉ"
                    batBuoc
                    placeholder="120 Đường số 65, Tân Hưng, TP.HCM"
                    value={diaChi}
                    onChange={(e) => setDiaChi(e.target.value)}
                    icon={MapPin}
                  />
                  <Truong
                    nhan="Số điện thoại"
                    batBuoc
                    placeholder="0905 678 999"
                    type="tel"
                    value={soDienThoai}
                    onChange={(e) => setSoDienThoai(e.target.value)}
                    icon={Phone}
                  />
                  <Truong
                    nhan="Thanh toán"
                    batBuoc
                    placeholder="Tiền mặt"
                    value={thanhToan}
                    onChange={(e) => setThanhToan(e.target.value)}
                    icon={CreditCard}
                  />
                  <Truong
                    nhan="Email"
                    batBuoc
                    placeholder="nguyenminha@gmail.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    icon={Mail}
                  />
                  <Truong
                    nhan="Ghi chú"
                    placeholder="Liên hệ trước khi giao"
                    value={ghiChu}
                    onChange={(e) => setGhiChu(e.target.value)}
                    icon={Pencil}
                  />
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
              <div className="w-full max-w-[1040px]">
                <TheThongBao
                  mau="cam"
                  tieuDe="BẠN ĐÃ ĐẶT HÀNG THÀNH CÔNG"
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
