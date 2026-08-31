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
    <div className="mx-auto flex w-full max-w-[560px] items-start justify-between">
      {BUOC.map((b, i) => (
        <Fragment key={b.n}>
          <div className="flex w-28 flex-col items-center gap-3">
            <span
              className={cn(
                "grid size-10 place-items-center rounded-full text-base font-semibold text-trang",
                b.n <= buoc ? "bg-cam" : "bg-cam-nhat"
              )}
            >
              {b.n}
            </span>
            <span
              className={cn(
                "text-center text-sm",
                b.n <= buoc ? "text-den" : "text-xam"
              )}
            >
              {b.nhan}
            </span>
          </div>
          {i < BUOC.length - 1 && (
            <span
              aria-hidden
              className={cn(
                "mt-5 h-0.5 flex-1",
                BUOC[i + 1].n <= buoc ? "bg-cam" : "bg-cam-nhat"
              )}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
