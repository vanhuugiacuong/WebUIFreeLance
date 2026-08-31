import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";

export function LoiMoDau() {
  return (
    <section className="relative w-full overflow-hidden bg-cam text-kem">
      <div className="flex flex-col lg:flex-row items-stretch w-full">
        {/* Cột trái (40% width): Ảnh tỉ lệ chuẩn 1:1 theo Figma (579x579), tỉ lệ 4:6 chuẩn xác */}
        <div className="relative w-full lg:w-[40%] aspect-square sm:aspect-auto lg:min-h-[480px] shrink-0 overflow-hidden group">
          <Image
            src="/images/gioi-thieu/cau-chuyen.png"
            alt="Silhouette ly và chai rượu Miên"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-[left_75%] transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Đường blur + Gradient phân cách ranh giới 2 bên (mép 40% và 60%) */}
          <div className="absolute inset-y-0 right-0 w-28 sm:w-40 lg:w-48 bg-gradient-to-l from-cam via-cam/85 to-transparent backdrop-blur-[5px] pointer-events-none z-10" />
        </div>

        {/* Cột phải (60% width): Nội dung căn giữa tiêu đề, 2 đoạn văn canh đều hai bên */}
        <div className="flex flex-col items-center justify-center py-12 lg:py-16 px-6 sm:px-10 lg:px-16 w-full lg:w-[60%] shrink-0">
          <FadeIn direction="up" delay={0.15} className="flex flex-col items-center w-full max-w-[600px]">
            <h2 className="w-full font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-wider text-trang leading-snug text-center">
              MỘT HÀNH TRÌNH BẢN ĐỊA ĐƯƠNG ĐẠI
              <br />
              MEN VỊ MIỀN TRUNG
            </h2>

            <p className="mt-7 sm:mt-8 w-full text-sm sm:text-base leading-relaxed text-trang/95 text-justify">
              Bị cuốn hút bởi chiều sâu văn hóa và hương vị nồng ấm của những
              dòng rượu truyền thống Việt Nam, chúng tôi khát khao tạo nên một
              thương hiệu rượu bản địa mang tầm vóc đương đại.
            </p>

            <p className="mt-5 sm:mt-6 w-full text-sm sm:text-base leading-relaxed text-trang/95 text-justify">
              Hành trình tìm kiếm những nguyên liệu thuần khiết nhất bắt đầu từ
              những cánh đồng nếp đơm bông đẫm sương mai, đưa chúng tôi đi dọc
              dải đất miền Trung nắng gió. Với Miên, rượu không chỉ là thức
              uống. Đó còn là một phần của những cuộc gặp, những lời mời, lời
              chúc và những câu chuyện được mở ra khi mọi người ngồi lại cùng{" "}
              <span className="whitespace-nowrap">nhau.</span>
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}