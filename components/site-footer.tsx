import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/container";

const COT_LIEN_KET = [
  [
    { href: "/ho-tro", nhan: "HỖ TRỢ KHÁCH HÀNG" },
    { href: "/chinh-sach", nhan: "CÁC CHÍNH SÁCH" },
  ],
  [
    { href: "/tuyen-dung", nhan: "TUYỂN DỤNG" },
    { href: "/chinh-sach-thanh-vien", nhan: "CHÍNH SÁCH THÀNH VIÊN" },
  ],
];

// Icon export thẳng từ Figma (đã sẵn màu kem #FBF1E8), thứ tự theo trái→phải trong thiết kế
const MANG_XA_HOI = [
  { href: "https://instagram.com", nhan: "Instagram", icon: "/icons/social-3.svg", w: 22, h: 22 },
  { href: "https://threads.net", nhan: "Threads", icon: "/icons/social-1.svg", w: 21, h: 23 },
  { href: "https://facebook.com", nhan: "Facebook", icon: "/icons/social-2.svg", w: 24, h: 22 },
];

export function SiteFooter() {
  return (
    <footer className="bg-cam py-12 text-kem">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
        <Image
          src="/images/logo-footer.webp"
          alt="Rượu Miên"
          width={148}
          height={81}
          className="h-[81px] w-auto"
        />

        {COT_LIEN_KET.map((cot, i) => (
          <nav key={i} className="flex flex-col gap-2 lg:pt-2">
            {cot.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                className="text-base font-medium transition-opacity hover:opacity-70"
              >
                {m.nhan}
              </Link>
            ))}
          </nav>
        ))}

        <div className="lg:pt-2">
          <p className="text-base font-medium">HOTLINE</p>
          <a
            href="tel:19001090"
            className="font-display text-d4 font-medium text-kem-dam transition-opacity hover:opacity-70"
          >
            1900 1090
          </a>
        </div>

        <div className="lg:pt-2">
          <p className="text-base font-medium">MẠNG XÃ HỘI</p>
          <ul className="mt-3 flex items-center gap-6">
            {MANG_XA_HOI.map(({ href, nhan, icon, w, h }) => (
              <li key={nhan}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={nhan}
                  className="block transition-opacity hover:opacity-70"
                >
                  <Image src={icon} alt="" width={w} height={h} className="h-[21px] w-auto" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
