import { Container } from "@/components/container";
import { PatternDivider } from "@/components/pattern-divider";
import { KhungAnh } from "@/components/khung-anh";
import { FadeIn } from "@/components/ui/fade-in";

const GIA_TRI = [
  {
    anh: "/images/gia-tri-nong-am.webp",
    ten: "Nồng ấm",
    mo_ta:
      "Mỗi giọt rượu là sự giao hòa giữa đất, người và văn hóa. Mộc mạc nhưng tinh tế, đậm đà nhưng không cũ kỹ.",
  },
  {
    anh: "/images/gia-tri-ban-dia.webp",
    ten: "Bản địa",
    mo_ta:
      "Miên đưa tinh thần Bài Chòi vào nhận diện, chắt lọc nét đặc trưng để kể câu chuyện văn hóa miền Trung theo cách riêng.",
  },
  {
    anh: "/images/gia-tri-hien-dai.webp",
    ten: "Hiện đại",
    mo_ta:
      "Miên chuyển hóa giá trị truyền thống bằng ngôn ngữ thiết kế đương đại, tối giản và linh hoạt, tạo nên cách tiếp cận gần gũi.",
  },
];

export function GiaTri() {
  return (
    <section className="py-[clamp(2.5rem,6vw,5rem)]">
      <Container>
        <FadeIn direction="up">
          <h2 className="mx-auto max-w-[860px] text-center font-display text-d2 font-bold text-cam">
            NHỮNG GIÁ TRỊ ĐỊNH HÌNH NÊN
            <br />
            Thương hiệu Miên
          </h2>
        </FadeIn>
      </Container>

      <PatternDivider className="mt-[clamp(2rem,5.5vw,4.5rem)]" />

      {/* Dải cam mang 3 ảnh giá trị */}
      <div className="bg-cam">
        <Container className="grid grid-cols-3 gap-x-8 sm:gap-x-16 lg:gap-x-28">
          {GIA_TRI.map((g, index) => (
            <FadeIn key={g.ten} direction="up" delay={index * 0.15}>
              <div className="group cursor-pointer transition-all duration-500 hover:-translate-y-2">
                <KhungAnh
                  src={g.anh}
                  alt={g.ten}
                  sizes="(max-width: 768px) 30vw, 262px"
                />
              </div>
            </FadeIn>
          ))}
        </Container>
      </div>

      <PatternDivider />

      <Container className="mt-[clamp(1.5rem,2.5vw,2.5rem)] grid grid-cols-1 gap-x-8 sm:gap-x-16 lg:gap-x-28 gap-y-8 sm:grid-cols-3">
        {GIA_TRI.map((g, index) => (
          <FadeIn key={g.ten} direction="up" delay={index * 0.15}>
            <div className="group flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-1">
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-wider text-cam transition-colors duration-300 group-hover:text-cam-hero">
                {g.ten}
              </h3>
              <p className="mt-3 sm:mt-4 max-w-[320px] text-sm sm:text-base leading-relaxed text-den text-balance transition-colors duration-300 group-hover:text-den/80">
                {g.mo_ta}
              </p>
            </div>
          </FadeIn>
        ))}
      </Container>
    </section>
  );
}
