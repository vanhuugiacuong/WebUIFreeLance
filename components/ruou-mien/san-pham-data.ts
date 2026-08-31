export interface ThanhPhanItem {
  ten: string;
  anh: string;
}

export interface SanPham {
  id: string;
  ten: string;
  moTa: string;
  dungTich: string;
  nongDo: string;
  gia: string;
  anhChai: string;
  thanhPhan: ThanhPhanItem[];
  dacDiem: {
    mauSac: string;
    muiHuong: string;
    huongVi: string;
  };
}

export const DANH_SACH_SAN_PHAM: SanPham[] = [
  {
    id: "hong-dao",
    ten: "RƯỢU HỒNG ĐÀO",
    moTa: "Rượu Hồng Đào là thức rượu đặc trưng của xứ Quảng, có hương thơm nhẹ, vị êm dịu, nồng vừa và hậu vị ấm. Rượu mang nét mộc mạc nhưng tinh tế, thể hiện rõ dấu ấn của men rượu truyền thống miền Trung.",
    dungTich: "500ml",
    nongDo: "40%",
    gia: "450.000 VND",
    anhChai: "/images/ruou-mien/chai-hong-dao.webp",
    thanhPhan: [
      { ten: "GẠO GÒ NỔI", anh: "/images/ruou-mien/ingredients/gao-go-noi.webp" },
      { ten: "NẾP BÀ RÉN", anh: "/images/ruou-mien/ingredients/nep-ba-ren.webp" },
      { ten: "MEN RƯỢU", anh: "/images/ruou-mien/ingredients/men-ruou-new.webp" },
    ],
    dacDiem: {
      mauSac: "Trắng trong suốt, tinh khiết và sáng",
      muiHuong: "Hương thơm dịu nhẹ, phảng phất mùi gạo lên men, không quá nồng gắt",
      huongVi: "Vị êm dịu, nồng vừa, có chút ngọt thanh và để lại hậu vị ấm sau khi uống",
    },
  },
  {
    id: "bau-da",
    ten: "RƯỢU BÀU ĐÁ",
    moTa: "Rượu Bàu Đá là đặc sản nổi tiếng của Bình Định, được biết đến với độ rượu cao, vị mạnh và hậu vị ấm kéo dài. Rượu mang nét mộc mạc, đậm đà, thể hiện rõ đặc trưng của dòng rượu thủ công miền Trung.",
    dungTich: "500ml",
    nongDo: "40%",
    gia: "400.000 VND",
    anhChai: "/images/ruou-mien/chai-bau-da.webp",
    thanhPhan: [
      { ten: "NƯỚC TẠI LÀNG", anh: "/images/ruou-mien/ingredients/nuoc-tai-lang.webp" },
      { ten: "GẠO TẺ", anh: "/images/ruou-mien/ingredients/gao-te.webp" },
      { ten: "MEN RƯỢU", anh: "/images/ruou-mien/ingredients/men-ruou-new.webp" },
    ],
    dacDiem: {
      mauSac: "Trắng trong suốt, tinh khiết và sáng",
      muiHuong: "Hương thơm đặc trưng của gạo và men rượu, rõ nhưng không quá gắt.",
      huongVi: "Khi uống, vị rượu đậm, mạnh và nồng, sau đó để lại cảm giác ấm và dư vị kéo dài.",
    },
  },
  {
    id: "lang-chuon",
    ten: "RƯỢU LÀNG CHUỒN",
    moTa: "Rượu Làng Chuồn gạo lứt đỏ mang nét đặc trưng của vùng đất Huế, được làm từ gạo lứt đỏ kết hợp phương pháp nấu rượu truyền thống. Hương vị vừa giữ nét mộc mạc của rượu quê, vừa có dấu ấn riêng từ nguyên liệu gạo lứt.",
    dungTich: "500ml",
    nongDo: "40%",
    gia: "450.000 VND",
    anhChai: "/images/ruou-mien/chai-lang-chuon.webp",
    thanhPhan: [
      { ten: "NƯỚC TẠI LÀNG", anh: "/images/ruou-mien/ingredients/nuoc-tai-lang.webp" },
      { ten: "GẠO LỨT ĐỎ", anh: "/images/ruou-mien/ingredients/gao-lut-do.webp" },
      { ten: "MEN RƯỢU", anh: "/images/ruou-mien/ingredients/men-ruou-new.webp" },
    ],
    dacDiem: {
      mauSac: "Rượu có sắc vàng nâu đến nâu đỏ nhẹ",
      muiHuong: "Hương gạo lứt dịu hòa cùng mùi men rượu.",
      huongVi: "Vị rượu êm, đậm vừa phải, có vị ngọt nhẹ của gạo, khi uống để lại hậu vị ấm và dễ chịu.",
    },
  },
];
