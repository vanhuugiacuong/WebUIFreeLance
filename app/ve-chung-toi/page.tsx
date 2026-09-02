import Image from "next/image";
import type { Metadata } from "next";

import { Container } from "@/components/container";
import { HeroGioiThieu } from "@/components/gioi-thieu/hero-gioi-thieu";
import { LoiMoDau } from "@/components/gioi-thieu/loi-mo-dau";
import { KhungAnh } from "@/components/khung-anh";
import { PatternDivider } from "@/components/pattern-divider";
import { HoaTietKimCuong } from "@/components/hoa-tiet-kim-cuong";
import { NutGioHang } from "@/components/nut-gio-hang";
import { FadeIn } from "@/components/ui/fade-in";
import { QuatXoeAnimation } from "@/components/gioi-thieu/quat-xoe-animation";
import { noWidow } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Về chúng tôi",
  description:
    "Câu chuyện của Miên — một hành trình bản địa đương đại, mang men vị miền Trung và tinh thần Bài Chòi hòa vào dòng sống hôm nay.",
};

/** Dải phân cách hình đồng tiền giữa các mục */
function CoinNgan() {
  return (
    <div className="flex justify-center items-center my-[clamp(2.5rem,5vw,4.5rem)]">
      <HoaTietKimCuong className="size-[80px] sm:size-[88px]" />
    </div>
  );
}

export default function VeChungToi() {
  return (
    <>
      {/* 1. Hero Team Photo & Black Marble Bar Title */}
      <HeroGioiThieu />

      {/* 2. Câu Chuyện Của Miên (Solid Orange Banner) */}
      <LoiMoDau />
      <PatternDivider />

      {/* 3. Tầm nhìn & sứ mệnh */}
      <section className="py-[clamp(2.5rem,5vw,4.5rem)] text-center">
        <Container>
          <FadeIn direction="up">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-cam">
              TẦM NHÌN & SỨ MỆNH
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-justify max-w-[840px] mx-auto text-sm sm:text-base leading-relaxed text-den">
              <p>
                Miên hướng đến trở thành một thương hiệu rượu miền Trung mang tinh thần Việt trong diện mạo đương đại, nơi những giá trị bản địa không chỉ được gìn giữ mà còn được kể lại theo cách gần gũi hơn với thế hệ hôm nay.
              </p>
              <p>
                Miên đưa những thức rượu đặc trưng của miền Trung đến gần hơn với khách hàng thông qua sản phẩm chỉn chu, giàu bản sắc. Qua đó, mỗi chai rượu không chỉ mang một hương vị, mà còn mang theo câu chuyện về vùng đất và con người nơi nó được sinh ra.
              </p>
            </div>

            {/* 2 Khung ảnh vuông đồng bộ max-w-[840px] và gap-6/gap-8 */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-[840px] mx-auto">
              <div className="relative aspect-square w-full overflow-hidden group">
                <Image
                  src="/images/gioi-thieu/tam-nhin-1.webp"
                  alt="Đội ngũ Miên tại quầy pha chế"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="relative aspect-square w-full overflow-hidden group">
                <Image
                  src="/images/gioi-thieu/tam-nhin-2.webp"
                  alt="Đội ngũ Miên đồng phục"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <CoinNgan />

      {/* 4. Khi rượu thành sợi dây kết nối */}
      <section className="py-[clamp(1.5rem,3vw,3rem)] text-center">
        <Container>
          <FadeIn direction="up">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-cam">
              KHI RƯỢU THÀNH SỢI DÂY KẾT NỐI
            </h2>
            <p className="mt-8 max-w-[840px] mx-auto text-center text-sm sm:text-base leading-relaxed text-den/90">
              Có những cuộc gặp bắt đầu bằng một lời mời, những câu chuyện được mở ra bên một chén rượu và những tình cảm được trao đi qua một món quà.
            </p>
            <p className="mt-6 max-w-[840px] mx-auto text-left sm:text-justify text-sm sm:text-base leading-relaxed text-den/90">
              Với Miên, rượu không chỉ để thưởng thức. Đó còn là chất xúc tác đưa con người đến gần nhau hơn trong cuộc vui giữa bạn bè, một lần gặp gỡ, một lời chúc hay món quà được trao bằng sự trân trọng. Bởi điều Miên muốn lưu lại sau mỗi vị men không chỉ là dư vị, mà còn là dư âm của một cuộc giao.
            </p>

            {/* 2 Khung ảnh kết nối đồng bộ max-w-[840px] */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-[840px] mx-auto">
              <div className="relative aspect-[640/882] w-full overflow-hidden bg-[#110e0f] group">
                <Image
                  src="/images/gioi-thieu/ket-noi-1.webp"
                  alt="Bàn tay nâng ly 3x3"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="relative aspect-[640/882] w-full overflow-hidden bg-[#110e0f] group">
                <Image
                  src="/images/gioi-thieu/ket-noi-2.webp"
                  alt="Ly và chai rượu Miên trên bàn"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <CoinNgan />

      {/* 5. Bài Chòi cùng Miên */}
      <section className="py-[clamp(1.5rem,3vw,3rem)] text-center">
        <Container>
          <FadeIn direction="up">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-cam">
              BÀI CHÒI CÙNG MIÊN
            </h2>
            <p className="mt-8 max-w-[840px] mx-auto text-center text-sm sm:text-base leading-relaxed text-den/90">
              Bài Chòi được Miên lựa chọn không chỉ bởi đây là một nét văn hóa đặc trưng của miền Trung, mà còn bởi tinh thần gặp gỡ, đối đáp và kết nối cộng đồng ẩn chứa bên trong loại hình nghệ thuật này.
            </p>
            <p className="mt-6 max-w-[840px] mx-auto text-left sm:text-justify text-sm sm:text-base leading-relaxed text-den/90">
              Từ những quân bài, nhịp điệu đến cách mọi người cùng tham gia vào một cuộc chơi, tinh thần Bài Chòi được Miên chuyển hóa thành ngôn ngữ thiết kế và những trải nghiệm tương tác mới. Nhờ đó, văn hóa không chỉ xuất hiện để được nhìn ngắm, trải nghiệm và tiếp tục kết nối trong đời sống.
            </p>

            {/* 2 Khung ảnh Bài Chòi đồng bộ max-w-[840px] */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-[840px] mx-auto">
              <div className="relative aspect-square w-full overflow-hidden group">
                <Image
                  src="/images/gioi-thieu/bai-choi-1.webp"
                  alt="Quẻ bài Bài Chòi"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="relative aspect-square w-full overflow-hidden group">
                <Image
                  src="/images/gioi-thieu/bai-choi-2.webp"
                  alt="Đèn lồng Bài Chòi Hội An"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <CoinNgan />

      {/* 6. Đội ngũ Miên */}
      <section className="py-[clamp(1.5rem,3vw,3rem)] text-center">
        <Container>
          <FadeIn direction="up">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-cam">
              ĐỘI NGŨ MIÊN
            </h2>
            <p className="mt-8 max-w-[840px] mx-auto text-left sm:text-justify text-sm sm:text-base leading-relaxed text-den/90">
              Đằng sau mỗi trải nghiệm tại Miên là những người cùng chung sự trân trọng dành cho men vị và văn hóa miền Trung. Không chỉ am hiểu sản phẩm, đội ngũ Miên luôn đề cao sự nồng hậu, tinh tế và gần gũi trong từng cách đón tiếp, tư vấn và sẻ chia câu chuyện. Bởi với Miên, mỗi vị khách ghé đến không đơn thuần để chọn một chai rượu, mà còn để bắt đầu một cuộc giao.
            </p>

            {/* 2 Khung ảnh đội ngũ đồng bộ max-w-[840px] chuẩn lề không so le */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-[840px] mx-auto">
              <div className="relative aspect-square w-full overflow-hidden group">
                <Image
                  src="/images/gioi-thieu/doi-ngu-1.webp"
                  alt="Đội ngũ vận chuyển thùng rượu Miên"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="relative aspect-square w-full overflow-hidden group">
                <Image
                  src="/images/gioi-thieu/doi-ngu-2.webp"
                  alt="Xưởng chưng cất đóng chai rượu Miên"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 7. Bottom Fan Illustration (Chuyển động quạt xòe chân thực) */}
      <QuatXoeAnimation />

      <NutGioHang />
    </>
  );
}
