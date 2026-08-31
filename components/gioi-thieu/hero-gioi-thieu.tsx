import Image from "next/image";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/ui/fade-in";

export function HeroGioiThieu() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full aspect-[1446/1024] sm:aspect-[1446/960] overflow-hidden">
        <Image
          src="/images/gioi-thieu/hero.webp"
          alt="Đội ngũ Miên — Vị men nóng"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-[1.02]"
        />
        {/* Khung căn giữa chữ vertically & horizontally trong vùng bàn đá đen (đáy 23%) */}
        <div className="absolute inset-x-0 bottom-0 h-[23%] flex items-center justify-center z-10">
          <Container className="text-center">
            <FadeIn direction="up" duration={0.8} delay={0.2}>
              <h1 className="font-display text-[clamp(1.5rem,4.2vw,3.75rem)] font-black uppercase tracking-[0.12em] pt-12 text-trang leading-none">
                CÂU CHUYỆN CỦA MIÊN
              </h1>
            </FadeIn>
          </Container>
        </div>
      </div>
    </section>
  );
}
