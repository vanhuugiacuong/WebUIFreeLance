"use client";

import { useState } from "react";
import { Star, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/container";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

const DANH_GIA_MAU = {
  ten: "Lê Duy Lê",
  ngay: "2026-08-15",
  sao: 5,
  noi_dung:
    "Dịch vụ ở Miên rất chu đáo, nhân viên thân thiện và luôn sẵn sàng hỗ trợ, khiến trải nghiệm mua sắm trở nên thoải mái và dễ chịu.",
};

const TAB = [
  { id: "danh-gia", nhan: "Chia sẻ đánh giá" },
  { id: "cau-hoi", nhan: "Đặt câu hỏi" },
] as const;

function TheDanhGia() {
  return (
    <article className="group flex flex-col gap-6 rounded-[28px] bg-cam p-7 text-trang sm:flex-row sm:items-center sm:gap-8 sm:p-8 shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer">
      {/* Cột trái: Avatar + Tên + Ngày */}
      <div className="flex shrink-0 flex-col items-center justify-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-trang shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
          <User className="size-11 text-cam fill-cam/20" />
        </div>
        <p className="mt-2.5 text-sm font-bold leading-tight text-trang">
          {DANH_GIA_MAU.ten}
        </p>
        <time
          className="mt-0.5 text-xs text-trang/90"
          dateTime={DANH_GIA_MAU.ngay}
        >
          {DANH_GIA_MAU.ngay}
        </time>
      </div>

      {/* Cột phải: Nội dung đánh giá + 5 Sao */}
      <div className="flex flex-1 flex-col justify-between self-stretch">
        <p className="text-sm leading-relaxed text-trang sm:text-[15px]">
          {DANH_GIA_MAU.noi_dung}
        </p>
        <div
          className="mt-4 flex gap-1 sm:mt-6"
          role="img"
          aria-label={`${DANH_GIA_MAU.sao} trên 5 sao`}
        >
          {Array.from({ length: DANH_GIA_MAU.sao }).map((_, i) => (
            <Star key={i} className="size-6 fill-trang text-trang transition-transform duration-300 hover:scale-125 hover:rotate-12 cursor-pointer" />
          ))}
        </div>
      </div>
    </article>
  );
}

const O_NHAP =
  "h-11 w-full rounded-full border border-cam bg-trang/30 px-6 text-sm text-den placeholder:text-den/60 transition-all duration-300 hover:border-cam/80 hover:bg-trang/50 focus:scale-[1.01] focus:bg-trang/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cam";

export function DanhGia() {
  const [tab, setTab] = useState<(typeof TAB)[number]["id"]>("danh-gia");
  const [daGui, setDaGui] = useState(false);
  const laDanhGia = tab === "danh-gia";

  return (
    <section className="relative bg-kem py-[clamp(3rem,6vw,5.5rem)]">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-[72px]">
        <FadeIn direction="right">
          <h2 className="font-display text-d3 font-bold text-cam">
            ĐÁNH GIÁ
            <br />
            TẠI RƯỢU MIÊN
          </h2>
          <p className="mt-6 text-base font-normal text-cam text-balance">
            Miên luôn trân trọng từng lời đánh giá tận tâm từ những vị khách quý.
          </p>
          <div className="mt-8">
            <TheDanhGia />
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.2} className="flex flex-col justify-end">
          <p className="text-base font-normal text-cam text-balance mb-6">
            Hãy để chúng tôi biết những cảm xúc của bạn sau khi trải nghiệm tại
            Miên nhé!
          </p>

          <div
            className="flex gap-4"
            role="tablist"
            aria-label="Loại phản hồi"
          >
            {TAB.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => {
                  setTab(t.id);
                  setDaGui(false);
                }}
                className={cn(
                  "h-11 px-7 text-sm font-normal transition-colors cursor-pointer rounded-full",
                  tab === t.id
                    ? "bg-[#fcae84] text-den"
                    : "bg-[#fcd7c2]/60 text-den/80 hover:bg-[#fcd7c2]"
                )}
              >
                {t.nhan}
              </button>
            ))}
          </div>

          <form
            className="mt-4 flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              setDaGui(true);
              setTimeout(() => setDaGui(false), 4000);
            }}
          >
            <label className="sr-only" htmlFor="ho-ten">
              Họ và tên
            </label>
            <input
              id="ho-ten"
              name="hoTen"
              required
              placeholder="Họ và tên"
              className={O_NHAP}
            />

            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email"
              className={O_NHAP}
            />

            <label className="sr-only" htmlFor="noi-dung">
              {laDanhGia ? "Đánh giá" : "Câu hỏi"}
            </label>
            <input
              id="noi-dung"
              name="noiDung"
              required
              placeholder={laDanhGia ? "Đánh giá" : "Câu hỏi"}
              className={O_NHAP}
            />

            <label className="mt-2 flex items-center gap-2 text-xs text-den cursor-pointer group">
              <input
                type="checkbox"
                name="dongY"
                required
                className="size-4 rounded border border-cam text-cam accent-cam cursor-pointer transition-transform duration-200 hover:scale-110"
              />
              <span className="transition-colors duration-200 group-hover:text-cam">
                Tôi đồng ý với các Điều khoản riêng tư
              </span>
            </label>

            <button
              type="submit"
              className="mt-3 h-11 w-full rounded-full bg-cam text-base font-normal text-trang transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-95 cursor-pointer"
            >
              {daGui ? "Đã gửi phản hồi!" : "Gửi"}
            </button>
          </form>
        </FadeIn>
      </Container>

      <AnimatePresence>
        {daGui && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="toast toast-end toast-bottom z-[100] p-6"
          >
            <div className="alert alert-success bg-cam text-kem font-medium shadow-xl border border-cam/20 flex items-center gap-3 px-5 py-3.5 rounded-2xl">
              <CheckCircle2 className="size-6 text-kem" />
              <span>Cảm ơn phản hồi của bạn dành cho Miên!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
