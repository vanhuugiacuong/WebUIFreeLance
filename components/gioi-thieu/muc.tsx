import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

/** Một mục nội dung trang giới thiệu: tiêu đề cam canh giữa + phần thân. */
export function Muc({
  tieuDe,
  children,
  className,
}: {
  tieuDe: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-[clamp(2.5rem,5vw,4rem)]", className)}>
      <Container narrow className="flex flex-col items-center">
        <h2 className="text-center font-display text-d3 font-semibold uppercase leading-tight text-cam">
          {tieuDe}
        </h2>
        {children}
      </Container>
    </section>
  );
}
