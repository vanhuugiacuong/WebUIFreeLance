import Image from "next/image";
import { Container } from "@/components/container";

/**
 * Băng trích dẫn đầu trang cho luồng đặt hàng:
 * Sử dụng phông nền amber glass hero-bg.webp phủ kín 100% edge-to-edge.
 */
export function BangQuote() {
  return (
    <>
      <div className="h-[66px] sm:h-[70px]" aria-hidden />
      <section className="relative isolate flex min-h-[clamp(12rem,26vw,22rem)] w-full items-center justify-center overflow-hidden bg-cam">
        <Image
          src="/images/mua-hang/quote-bg.webp"
          alt="Thưởng vị đậm đà, trao men gắn kết"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center w-full h-full scale-[1.25]"
        />
        <span aria-hidden className="absolute inset-0 -z-10 bg-den/10" />
        <Container>
          <p className="text-center font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-bold uppercase leading-[1.15] text-kem drop-shadow-md">
            &ldquo;Thưởng vị đậm đà,
            <br />
            trao men gắn kết&rdquo;
          </p>
        </Container>
      </section>
    </>
  );
}
