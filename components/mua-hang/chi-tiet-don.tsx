"use client";

import { useEffect, useState } from "react";

import { Container } from "@/components/container";
import { TheKhung } from "@/components/mua-hang/the-khung";
import { TheThongBao } from "@/components/mua-hang/the-thong-bao";
import { Nut } from "@/components/mua-hang/nut";

export interface DonHangData {
  hoTen: string;
  soDienThoai: string;
  email: string;
  diaChi: string;
  thanhToan: string;
  ghiChu: string;
  tenSanPham: string;
  dungTich: string;
  soLuong: number;
  tongTien: number;
  trangThai: string;
}

const DEFAULT_DON_HANG: DonHangData = {
  hoTen: "Nguyễn Minh A",
  soDienThoai: "0905 678 999",
  email: "nguyenminha@gmail.com",
  diaChi: "120 Đường số 65, Tân Hưng, TP.HCM",
  ghiChu: "Liên hệ trước khi giao",
  thanhToan: "Tiền mặt",
  tenSanPham: "Rượu Hồng Đào",
  dungTich: "500ml",
  soLuong: 1,
  tongTien: 400000,
  trangThai: "Đã duyệt",
};

const vnd = (n: number) => n.toLocaleString("vi-VN");

/** Chi tiết đơn hàng + thao tác huỷ (chuyển sang thẻ thông báo huỷ thành công). */
export function ChiTietDon() {
  const [daHuy, setDaHuy] = useState(false);
  const [donHang, setDonHang] = useState<DonHangData>(DEFAULT_DON_HANG);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("mien_don_hang_cuoi");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setDonHang(parsed);
        } catch {
          // ignore parsing error
        }
      }
    }
  }, []);

  const items: [string, string][] = [
    ["Họ và tên:", donHang.hoTen],
    ["Số điện thoại:", donHang.soDienThoai],
    ["Email:", donHang.email],
    ["Địa chỉ:", donHang.diaChi],
    ["Ghi chú:", donHang.ghiChu || "Không có"],
    ["Tên sản phẩm:", donHang.tenSanPham],
    ["Dung tích:", donHang.dungTich],
    ["Tổng giá tiền:", `${vnd(donHang.tongTien)} VND`],
  ];

  return (
    <section className="py-[clamp(2.5rem,6vw,5rem)]">
      <Container className="flex flex-col items-center gap-8">
        {daHuy ? (
          <>
            <div className="w-full max-w-[960px]">
              <TheThongBao
                mau="kem"
                tieuDe="Bạn đã hủy đặt hàng thành công"
                moTa="Chúng tôi sẽ thông báo đến bạn thông tin hủy đặt hàng qua số điện thoại đã cung cấp trong thời gian sớm nhất"
              />
            </div>
            <Nut bien="chinh" href="/">
              Về trang chủ
            </Nut>
          </>
        ) : (
          <>
            <TheKhung
              insetClassName="inset-7 sm:inset-10 lg:inset-12"
              className="w-full max-w-[950px] min-h-[620px] sm:min-h-[700px] lg:min-h-[760px] px-10 sm:px-20 lg:px-28 py-12 sm:py-20 lg:py-24"
            >
              <div className="w-full max-w-[760px] mx-auto">
                <p className="text-base text-den/90">
                  Trạng thái: <span className="font-medium text-cam">{donHang.trangThai || "Đã duyệt"}</span>
                </p>
                <hr className="my-8 sm:my-10 border-t border-cam/30" />
                <h2 className="font-display text-2xl sm:text-3xl lg:text-[36px] font-bold uppercase text-cam tracking-wider mb-8 sm:mb-10">
                  THÔNG TIN ĐƠN HÀNG
                </h2>
                <dl className="grid grid-cols-1 gap-y-5 sm:gap-y-6 lg:gap-y-7 text-base sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-x-12 lg:gap-x-16">
                  {items.map(([k, v]) => (
                    <div key={k} className="contents">
                      <dt className="text-den/80 font-normal">{k}</dt>
                      <dd className="font-normal text-den">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </TheKhung>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Nut bien="phu" onClick={() => setDaHuy(true)}>
                Hủy đặt hàng
              </Nut>
              <Nut bien="chinh" href="/">
                Về trang chủ
              </Nut>
            </div>
          </>
        )}
      </Container>
    </section>
  );
}
