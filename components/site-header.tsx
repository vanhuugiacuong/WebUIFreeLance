"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Container } from "@/components/container";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_TRAI = [
  { href: "/", nhan: "Trang chủ" },
  { href: "/ve-chung-toi", nhan: "Về chúng tôi" },
  { href: "/ruou-mien", nhan: "Rượu Miên" },
];

const NAV_PHAI = [{ href: "/lien-he", nhan: "Liên hệ" }];

function NavLink({
  href,
  nhan,
  active,
  className,
  onClick,
}: {
  href: string;
  nhan: string;
  active: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "text-base whitespace-nowrap shrink-0 transition-colors hover:text-cam",
        active ? "font-semibold text-cam" : "font-normal text-den",
        className
      )}
    >
      {nhan}
    </Link>
  );
}

/**
 * Header cố định khi cuộn (Sticky / Fixed header):
 * - Khi ở đỉnh trang: nền trong suốt / tự nhiên phủ lên hero.
 * - Khi cuộn xuống (scrollY > 20): nền kem mềm + hiệu ứng mờ backdrop-blur và đổ bóng nhẹ.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [daCuon, setDaCuon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setDaCuon(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  const dangO = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        daCuon
          ? "bg-kem/95 py-3 backdrop-blur-md shadow-sm border-b border-cam/15"
          : "bg-transparent py-4"
      )}
    >
      <Container className="flex items-center justify-between lg:justify-center gap-4 sm:gap-6 lg:gap-8 xl:gap-14 2xl:gap-18">
        {/* Trái: Nav links (Desktop) */}
        <nav className="hidden items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-14 2xl:gap-18 lg:flex" aria-label="Điều hướng chính">
          {NAV_TRAI.map((m) => (
            <NavLink
              key={m.href}
              {...m}
              active={dangO(m.href)}
              onClick={m.href === "/" ? handleHomeClick : undefined}
            />
          ))}
        </nav>

        {/* Mobile menu trigger */}
        <Sheet>
          <SheetTrigger
            className="-m-2 p-2 text-den lg:hidden cursor-pointer"
            aria-label="Mở menu"
          >
            <Menu className="size-6" />
          </SheetTrigger>
          <SheetContent side="left" className="w-72 bg-kem">
            <SheetTitle className="sr-only">Điều hướng</SheetTitle>
            <nav className="mt-12 flex flex-col gap-6 px-6">
              {[...NAV_TRAI, ...NAV_PHAI].map((m) => (
                <NavLink
                  key={m.href}
                  {...m}
                  active={dangO(m.href)}
                  className="text-lg"
                  onClick={m.href === "/" ? handleHomeClick : undefined}
                />
              ))}
              <Link
                href="/mua-hang"
                className="mt-2 inline-flex h-10 w-fit items-center rounded-full bg-cam px-6 text-base text-trang"
              >
                Mua hàng
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Giữa: Logo */}
        <Link
          href="/"
          onClick={handleHomeClick}
          aria-label="Rượu Miên — về trang chủ"
          className="shrink-0 flex items-center justify-center"
        >
          <Image
            src="/images/logo-header.webp"
            alt="Rượu Miên"
            width={103}
            height={34}
            priority
            className="h-[34px] w-auto"
          />
        </Link>

        {/* Phải: Mua hàng + Liên hệ + VN/EN (Desktop) */}
        <div className="hidden lg:flex items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-14 2xl:gap-18">
          <Link
            href="/mua-hang"
            className="inline-flex h-9 items-center rounded-full bg-cam px-6 text-sm sm:text-base font-normal text-trang whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
          >
            Mua hàng
          </Link>
          {NAV_PHAI.map((m) => (
            <NavLink key={m.href} {...m} active={dangO(m.href)} />
          ))}
          <button
            type="button"
            className="text-base text-den whitespace-nowrap shrink-0 transition-colors cursor-pointer"
          >
            <span className="text-cam font-semibold">VN</span>
            <span className="text-den/40 mx-0.5">/</span>
            <span className="text-den/80 hover:text-cam">EN</span>
          </button>
        </div>
      </Container>
    </header>
  );
}
