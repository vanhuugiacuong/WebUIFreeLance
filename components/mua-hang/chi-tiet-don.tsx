"use client";

import { useState } from "react";

import { Container } from "@/components/container";
import { TheKhung } from "@/components/mua-hang/the-khung";
import { TheThongBao } from "@/components/mua-hang/the-thong-bao";
import { Nut } from "@/components/mua-hang/nut";

const THONG_TIN: [string, string][] = [
  ["Họ và tên:", "Nguyễn Minh A"],
  ["Số điện thoại:", "0905 678 999"],
  ["Email:", "nguyenminha@gmail.com"],
  ["Địa chỉ:", "120 Đường số 65, Tân Hưng, TP.HCM"],
  ["Ghi chú:", "Liên hệ trước khi giao"],
  ["Tên sản phẩm:", "Rượu Hồng Đào"],
  ["Dung tích:", "500ml"],
  ["Tổng giá tiền:", "400.000 VND"],
];

/** Chi tiết đơn hàng + thao tác huỷ (chuyển sang thẻ thông báo huỷ thành công). */
export function ChiTietDon() {
  const [daHuy, setDaHuy] = useState(false);

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
            <TheKhung className="w-full max-w-[960px]">
              <p className="text-base">
                Trạng thái: <span className="font-medium text-cam">Đã duyệt</span>
              </p>
              <hr className="my-6 border-cam/30" />
              <h1 className="font-display text-d3 font-bold uppercase text-cam">
                Thông tin đơn hàng
              </h1>
              <dl className="mt-6 grid grid-cols-1 gap-y-4 text-base sm:grid-cols-[minmax(0,200px)_1fr] sm:gap-x-10">
                {THONG_TIN.map(([k, v]) => (
                  <div key={k} className="contents">
                    <dt className="text-den/80">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
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
