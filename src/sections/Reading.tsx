import React from "react";
import reading1 from "../assets/reading-1.webp";
import reading2 from "../assets/reading-2.webp";
import reading3 from "../assets/reading-3.webp";
import reading4 from "../assets/reading-4.webp";
import reading5 from "../assets/reading-5.webp";
import reading6 from "../assets/reading-6.webp";

// Article data structure
interface Article {
  id: number;
  title: string;
  image: string;
  alt: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Pentingnya Edukasi Kespro Dini",
    image: reading1,
    alt: "Edukasi Kespro",
  },
  {
    id: 2,
    title: "Memahami HIV/AIDS: Fakta vs Mitos",
    image: reading2,
    alt: "HIV AIDS Facts",
  },
  {
    id: 3,
    title: "Jenis-jenis Infeksi Menular Seksual (IMS) yang Perlu Diketahui",
    image: reading3,
    alt: "Infeksi Menular Seksual",
  },
  {
    id: 4,
    title: "Kontrasepsi: Pilihan Tepat untukmu",
    image: reading4,
    alt: "Kontrasepsi",
  },
  {
    id: 5,
    title: "Kencan Sehat",
    image: reading5,
    alt: "Kencan Sehat",
  },
  {
    id: 6,
    title: "Sepertinya Aku Aseksual",
    image: reading6,
    alt: "Aseksual",
  },
];

const Reading: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[#00072D]">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Title with Lines */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-2 bg-[#9900FF] w-24 md:w-60 lg:w-80"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#9900FF] whitespace-nowrap">
            New READING
          </h2>
          <div className="h-2 bg-[#9900FF] w-24 md:w-60 lg:w-80"></div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-6xl mx-auto">
          {articles.map((article) => (
            <div key={article.id} className="flex flex-col items-center">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-4 border-4 border-purple hover:border-light-blue transition-colors duration-300 cursor-pointer relative group">
                <img src={article.image} alt={article.alt} />
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium">
                    Baca
                  </span>
                </div>
              </div>
              <h3 className="text-white text-center font-medium text-sm md:text-base max-w-[220px]">
                {article.title}
              </h3>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 border-2 border-[#9900FF] text-[#9900FF] hover:bg-[#9900FF] hover:text-white transition-colors duration-300 font-medium rounded-lg">
            Lihat Semua Artikel
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reading;
