import Image from "next/image";

import { Container } from "@/components/container";
import { NutMuiTen } from "@/components/nut-mui-ten";
import { FadeIn } from "@/components/ui/fade-in";

export function VeChungToi() {
  return (
    <section className="py-[clamp(3rem,7vw,7.5rem)]">
      <Container
        narrow
        className="grid items-start gap-10 md:grid-cols-[239fr_559fr] md:gap-[100px] lg:gap-[159px]"
      >
        <FadeIn direction="right">
          <h2 className="font-display text-d2 font-bold text-cam">
            VỀ CHÚNG TÔI
          </h2>
          <p className="mt-6 text-base text-den leading-relaxed">
            Việt Nam có một kho tàng hương vị rượu say đắm lòng người, được chắt
            chiu từ hạt gạo thơm và men lá ngàn năm. Thương hiệu Miên ra đời với
            sứ mệnh khơi dậy niềm tự hào đó. Chúng tôi mang dòng chảy truyền
            thống hòa vào dòng sống hiện đại.
          </p>
          <NutMuiTen href="/ve-chung-toi" className="mt-6">
            Xem thêm
          </NutMuiTen>
        </FadeIn>

        <FadeIn direction="left" delay={0.2} className="flex items-center">
          <div className="group overflow-hidden rounded-[24px] shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl cursor-pointer w-full">
            <Image
              src="/images/about-illustration.webp"
              alt="Nghệ nhân ủ men truyền thống"
              width={559}
              height={279}
              sizes="(max-width: 768px) 92vw, 559px"
              className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
