import { Container } from "@/components/container";
import { gocKhuyet } from "@/components/goc-khuyet";

const DAC_DIEM = [
  { tieuDe: "Màu sắc", moTa: "Trắng trong suốt, tinh khiết và sáng" },
  {
    tieuDe: "Mùi hương",
    moTa: "Hương thơm dịu nhẹ, phảng phất mùi gạo lên men, không quá nồng gắt",
  },
  {
    tieuDe: "Hương vị",
    moTa: "Vị êm dịu, nồng vừa, có chút ngọt thanh và để lại hậu vị ấm sau khi uống",
  },
];

/** Ba thẻ cam góc khuyết mô tả đặc điểm sản phẩm. */
export function DacDiem() {
  return (
    <section className="py-[clamp(2.5rem,5vw,4rem)]">
      <Container narrow className="flex flex-col items-center">
        <h2 className="text-center font-display text-d2 font-bold uppercase leading-tight text-cam">
          Đặc điểm nổi bật
        </h2>
        <div className="mt-10 grid w-full gap-6 sm:grid-cols-3">
          {DAC_DIEM.map((d) => (
            <div
              key={d.tieuDe}
              className="grid aspect-square place-items-center bg-cam px-6 text-center text-kem"
              style={gocKhuyet("22px")}
            >
              <div>
                <p className="text-lg font-medium uppercase">{d.tieuDe}</p>
                <p className="mt-3 text-base leading-relaxed">{d.moTa}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
