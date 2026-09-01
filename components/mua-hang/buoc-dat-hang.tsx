import { Fragment } from "react";
import { cn } from "@/lib/utils";

const BUOC = [
  { n: 1, nhan: "Chọn sản phẩm" },
  { n: 2, nhan: "Điền thông tin" },
  { n: 3, nhan: "Xác nhận đơn" },
];

/** Thanh tiến trình 3 bước đặt hàng; `buoc` là bước hiện tại (1–3). */
export function BuocDatHang({ buoc }: { buoc: number }) {
  return (
    <div className="mx-auto flex w-full max-w-[580px] items-start justify-between px-2">
      {BUOC.map((b, i) => (
        <Fragment key={b.n}>
          <div className="flex flex-col items-center gap-2.5 shrink-0 group">
            <span
              className={cn(
                "grid size-10 sm:size-11 place-items-center rounded-full text-base font-semibold text-trang transition-all duration-300 shadow-sm",
                b.n === buoc
                  ? "bg-cam scale-110 ring-4 ring-cam/25 shadow-md"
                  : b.n < buoc
                  ? "bg-cam"
                  : "bg-cam-nhat"
              )}
            >
              {b.n}
            </span>
            <span
              className={cn(
                "text-center text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-300",
                b.n <= buoc ? "text-den font-semibold" : "text-xam"
              )}
            >
              {b.nhan}
            </span>
          </div>
          {i < BUOC.length - 1 && (
            <span
              aria-hidden
              className={cn(
                "mt-5 sm:mt-5.5 h-0.5 min-w-[1.5rem] flex-1 transition-colors duration-500 rounded-full mx-2 sm:mx-4",
                BUOC[i + 1].n <= buoc ? "bg-cam" : "bg-cam-nhat/60"
              )}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
