import Image from "next/image";

/**
 * Dải cam giới thiệu bộ sưu tập:
 * - Cột trái: Bức ảnh cocktail + bàn tay hiển thị tự nhiên (không dùng position absolute/fill),
 *   tràn sát viền trái 100% không bị vệt lề.
 * - Cột phải: Tiêu đề "Bộ sưu tập Miên" + 2 đoạn văn bản dẫn dắt.
 */
export function DaiBoSuuTap() {
  return (
    <section className="w-full bg-cam text-trang overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        {/* Cột trái: Khối ảnh thu vừa vặn với gradient nhẹ nhàng (subtle blur fade) ở viền mép phải */}
        <div className="relative w-fit shrink-0 flex items-center justify-start">
          <Image
            src="/images/ruou-mien/band.webp"
            alt="Bộ sưu tập rượu Miên"
            width={776}
            height={1160}
            priority
            className="w-auto h-[420px] sm:h-[480px] lg:h-[540px] xl:h-[580px] object-contain object-left block"
          />
          {/* Layer gradient mờ nhẹ nhàng (subtle blur fade) ở đường viền ngoài bức ảnh */}
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-cam via-cam/50 to-transparent pointer-events-none z-10" />
        </div>

        {/* Cột phải: Khối nội dung văn bản được căn giữa hoàn hảo */}
        <div className="flex flex-col items-center justify-center text-center px-6 py-12 lg:py-16 xl:py-20 w-full lg:w-[54%] xl:w-[56%] shrink-0 mx-auto">
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-trang leading-tight">
            Bộ sưu tập Miên
          </h1>
          <p className="mt-8 w-full max-w-[620px] text-left sm:text-justify text-sm sm:text-base leading-relaxed text-trang/95">
            Bộ sưu tập Miên quy tụ những men vị đặc trưng của miền Trung, mỗi dòng
            rượu là một câu chuyện được kể từ vùng đất, nguyên liệu và nét văn hóa
            nơi nó ra đời. Từ Hồng Đào xứ Quảng, Bàu Đá Bình Định đến Làng Chuồn
            xứ Huế, Miên khoác lên những thức rượu quen thuộc một diện mạo đương
            đại, để mỗi chai không chỉ mang một hương vị riêng mà còn là một phần
            bản sắc miền Trung được trao gửi trong mỗi cuộc giao.
          </p>
          <p className="mt-6 w-full max-w-[620px] text-left sm:text-justify text-sm sm:text-base leading-relaxed text-trang/95">
            Mỗi dòng rượu mang một cá tính riêng, nhưng cùng gặp nhau ở tinh thần
            nồng hậu, giao đãi và kết nối. Miên mong rằng mỗi vị men được mở ra
            cũng là lúc một cuộc gặp bắt đầu, một câu chuyện được sẻ chia và những
            khoảng cách dần gần lại.
          </p>
        </div>
      </div>
    </section>
  );
}
