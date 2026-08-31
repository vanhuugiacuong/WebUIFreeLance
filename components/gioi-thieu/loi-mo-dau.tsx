import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";

export function LoiMoDau() {
  return (
    <section className="relative w-full overflow-hidden bg-cam text-kem">
      <div className="flex flex-col lg:flex-row items-stretch justify-between w-full">
        {/* Cột trái: Ảnh silhouette với lớp phủ Gradient & Blur cả 2 bên trái/phải */}
        <div className="relative w-full lg:w-[48%] min-h-[340px] sm:min-h-[440px] lg:min-h-[520px] shrink-0 overflow-hidden group">
          <Image
            src="/images/gioi-thieu/cau-chuyen.png"
            alt="Silhouette ly và chai rượu Miên"
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="absolute inset-y-0 right-0 w-32 sm:w-48 bg-gradient-to-l from-cam via-cam/80 to-transparent pointer-events-none z-10"
            priority
          />

          {/* Lớp mờ + Gradient hòa màu êm ái ở MÉP TRÁI */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-cam via-cam/70 to-transparent pointer-events-none z-10 backdrop-blur-[2px]" />

          {/* Lớp mờ + Gradient hòa màu êm ái ở MÉP PHẢI */}
          <div className="absolute inset-y-0 right-0 w-32 sm:w-44 bg-gradient-to-l from-cam via-cam/80 to-transparent pointer-events-none z-10 backdrop-blur-[2px]" />
        </div>



        {/* Cột phải: Khối chữ căn giữa tiêu đề, 2 đoạn văn căn lề trái */}
        <div className="flex flex-col items-center justify-center text-center px-6 py-12 lg:py-16 lg:pr-16 lg:pl-4 w-full lg:w-[50%] shrink-0">
          <FadeIn direction="up" delay={0.15}>
            <h2 className="w-full font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-wider text-trang leading-snug text-center max-w-[580px]">
              MỘT HÀNH TRÌNH BẢN ĐỊA ĐƯƠNG ĐẠI
              <br />
              MEN VỊ MIỀN TRUNG
            </h2>

            <p className="mt-8 w-full max-w-[560px] text-sm sm:text-base leading-relaxed text-trang/95 text-left">
              Bị cuốn hút bởi chiều sâu văn hóa và hương vị nồng ấm của những
              dòng rượu truyền thống Việt Nam, chúng tôi khát khao tạo nên một
              thương hiệu rượu bản địa mang tầm vóc đương đại.
            </p>

            <p className="mt-6 w-full max-w-[560px] text-sm sm:text-base leading-relaxed text-trang/95 text-left">
              Hành trình tìm kiếm những nguyên liệu thuần khiết nhất bắt đầu từ
              những cánh đồng nếp đơm bông đẫm sương mai, đưa chúng tôi đi dọc
              dải đất miền Trung nắng gió. Với Miên, rượu không chỉ là thức
              uống. Đó còn là một phần của những cuộc gặp, những lời mời, lời
              chúc và những câu chuyện được mở ra khi mọi người ngồi lại cùng
              nhau.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
