import Image from "next/image";

import { Container } from "@/components/container";

/**
 * Băng trích dẫn đầu trang cho luồng đặt hàng: ảnh nền cam + câu "Thưởng vị đậm
 * đà, trao men gắn kết". Kèm khoảng chừa cho header (absolute) — nền kem phía
 * trên hiện ra như thanh nav trong Figma.
 */
export function BangQuote() {
  return (
    <>
      <div className="h-[clamp(4rem,6vw,6.5rem)]" aria-hidden />
      <section className="relative isolate flex min-h-[clamp(12rem,26vw,23rem)] items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-bottom"
        />
        <span aria-hidden className="absolute inset-0 -z-10 bg-den/10" />
        <Container>
          <p className="text-center font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-bold uppercase leading-[1.15] text-kem drop-shadow-sm">
            &ldquo;Thưởng vị đậm đà,
            <br />
            trao men gắn kết&rdquo;
          </p>
        </Container>
      </section>
    </>
  );
}
