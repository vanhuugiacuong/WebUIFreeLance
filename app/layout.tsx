import type { Metadata } from "next";
import Script from "next/script";
import { Phudu, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { AgeProvider } from "@/components/providers/age-provider";
import { MainLayout } from "@/components/main-layout";

const phudu = Phudu({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-phudu",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rượu Miên — Men vị miền Trung",
    template: "%s | Rượu Miên",
  },
  description:
    "Thương hiệu Miên chắt chiu hạt gạo thơm và men lá ngàn năm, mang dòng chảy truyền thống hòa vào dòng sống hiện đại.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={cn(phudu.variable, montserrat.variable)} suppressHydrationWarning>
      <head>
        <Script
          id="age-check"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('mien-du-tuoi')==='1'){document.documentElement.classList.add('du-tuoi');}}catch(e){}})()`,
          }}
        />
      </head>
      {/* suppressHydrationWarning: một số extension (ColorZilla…) thêm thuộc tính
          như cz-shortcut-listen vào <body> trước khi React hydrate */}
      <body className="antialiased" suppressHydrationWarning>
        <LenisProvider>
          <AgeProvider>
            <MainLayout>{children}</MainLayout>
          </AgeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
