import Image from "next/image";
import { TheKhung } from "@/components/mua-hang/the-khung";

/**
 * Thẻ thông báo (đặt hàng / hủy đơn thành công): khung góc khuyết cam rực rỡ
 * gắn trực tiếp hoạ tiết đính kèm từ thiết kế Figma (Top & Bottom Chevron Glow Asset).
 */
export function TheThongBao({
  mau = "cam",
  tieuDe = "BẠN ĐÃ ĐẶT HÀNG THÀNH CÔNG",
  moTa = "Chúng tôi sẽ thông báo đến bạn thông tin đặt hàng qua số điện thoại đã cung cấp trong thời gian sớm nhất",
}: {
  mau?: "cam" | "kem";
  tieuDe?: string;
  moTa?: string;
}) {
  const laCam = mau === "cam";
  const tieuDeMau = laCam ? "text-trang" : "text-cam";
  const moTaMau = laCam ? "text-trang/95" : "text-den/80";

  const anhTren = laCam
    ? "/images/dong-tien-cat-nua-duoi.png"
    : "/images/NỬA TIỀN CAM-30 1.png";
  const anhDuoi = laCam
    ? "/images/dong-tien-cat-nua-tren.png"
    : "/images/NỬA TIỀN CAM-30 2.png";

  return (
    <TheKhung mau={mau} className="w-full max-w-[950px] min-h-[580px] sm:min-h-[660px] lg:min-h-[720px]">
      {/* Hoạ tiết đính kèm mép Trên (Top Edge Asset) - Sát chính xác viền KhungVien */}
      <div aria-hidden className="absolute -top-[22px] sm:-top-[38px] lg:-top-[48px] left-1/2 -translate-x-1/2 pointer-events-none z-10 w-full max-w-[420px] flex justify-center">
        <Image
          src={anhTren}
          alt="Hoạ tiết thành công trên"
          width={420}
          height={210}
          priority
          className="w-[280px] sm:w-[360px] lg:w-[420px] h-auto object-contain"
        />
      </div>

      {/* Tiêu đề & Mô tả ở trung tâm - Căn giữa chuẩn UI */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-8 my-auto max-w-[580px] mx-auto space-y-4">
        <h1 className={`font-display text-2xl sm:text-3xl lg:text-[38px] font-bold uppercase tracking-wider leading-tight ${tieuDeMau}`}>
          {tieuDe}
        </h1>
        <p className={`text-base sm:text-lg leading-relaxed ${moTaMau}`}>
          {moTa}
        </p>
      </div>

      {/* Hoạ tiết đính kèm mép Dưới (Bottom Edge Asset) - Sát chính xác viền KhungVien */}
      <div aria-hidden className="absolute -bottom-[22px] sm:-bottom-[38px] lg:-bottom-[48px] left-1/2 -translate-x-1/2 pointer-events-none z-10 w-full max-w-[420px] flex justify-center">
        <Image
          src={anhDuoi}
          alt="Hoạ tiết thành công dưới"
          width={420}
          height={210}
          priority
          className="w-[280px] sm:w-[360px] lg:w-[420px] h-auto object-contain"
        />
      </div>
    </TheKhung>
  );
}
