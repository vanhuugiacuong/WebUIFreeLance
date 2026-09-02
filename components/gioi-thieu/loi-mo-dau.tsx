import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { noWidow } from "@/lib/utils";

export function LoiMoDau() {
  return (
    <section className="relative w-full overflow-hidden bg-cam text-kem">
      <div className="flex min-h-[600px] flex-col lg:flex-row">
        {/* =========================
            IMAGE
        ========================== */}
        <div
          className="
            relative
            w-full
            h-[320px]
            lg:h-auto
            lg:w-[32%]
            shrink-0
            overflow-hidden
            group
          "
        >
          <Image
            src="/images/gioi-thieu/cau-chuyen.png"
            alt="Silhouette ly và chai rượu Miên"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 32vw"
            className="
              object-cover
              object-[left_center]
              transition-transform
              duration-700
              ease-out
              group-hover:scale-105
            "
          />

          {/* Fade ảnh → nền cam */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              z-10
              w-20
              sm:w-28
              lg:w-36
              bg-gradient-to-l
              from-cam
              via-cam/40
              to-transparent
            "
          />
        </div>

        {/* =========================
            CONTENT
        ========================== */}
        <div
          className="
            flex
            w-full
            flex-1
            items-center
            justify-center
            px-6
            py-12
            sm:px-10
            lg:px-14
            lg:py-14
          "
        >
          <FadeIn direction="up" delay={0.15} className="w-full max-w-[600px]">
            {/* Title */}
            <h2
              className="
                w-full
                text-center
                font-display
                text-xl
                font-bold
                uppercase
                leading-[1.3]
                tracking-wide
                text-trang
                sm:text-2xl
              "
            >
              MỘT HÀNH TRÌNH BẢN ĐỊA ĐƯƠNG ĐẠI
              <br />
              MEN VỊ MIỀN TRUNG
            </h2>

            {/* Paragraph 1 */}
            <p
              className="
                mt-6
                text-justify
                text-sm
                leading-[1.35]
                text-trang/95
                sm:mt-7
                sm:text-[15px]
              "
            >
              {noWidow(
                "Bị cuốn hút bởi chiều sâu văn hóa và hương vị nồng ấm của những dòng rượu truyền thống Việt Nam, chúng tôi khát khao tạo nên một thương hiệu rượu bản địa mang tầm vóc đương đại.",
                3,
              )}
            </p>

            {/* Paragraph 2 */}
            <p
              className="
                mt-4
                text-justify
                text-sm
                leading-[1.35]
                text-trang/95
                sm:mt-5
                sm:text-[15px]
              "
            >
              {noWidow(
                "Hành trình tìm kiếm những nguyên liệu thuần khiết nhất bắt đầu từ những cánh đồng nếp đơm bông đẫm sương mai, đưa chúng tôi đi dọc dải đất miền Trung nắng gió. Với Miên, rượu không chỉ là thức uống. Đó còn là một phần của những cuộc gặp, những lời mời, lời chúc và những câu chuyện được mở ra khi mọi người ngồi lại cùng nhau.",
                3,
              )}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
