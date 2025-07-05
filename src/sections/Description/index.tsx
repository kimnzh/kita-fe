import React from "react";

const Description: React.FC = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#9900FF] text-center mb-12">
          Hak Kesehatan Seksual dan Reproduksi
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: Sex Education */}
          <div className="border-8 border-[#9900FF] p-8 text-white">
            <div className="max-w-lg mx-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
                Pendidikan seks itu buat semua orang! Dengan pendekatan yang
                inklusif dan seks-positif, kita bisa belajar banyak hal — dari
                anatomi sampai cara melindungi diri.
              </h3>

              <p className="text-base md:text-lg mb-6 text-center">
                Kenapa penting? Karena ini bukan cuma soal info, tapi juga cara
                ngelawan tabu, bikin obrolan soal kesehatan seksual jadi biasa
                aja, dan ngurangin stigma buat berbagai komunitas.
              </p>

              <p className="text-base md:text-lg text-center">
                Intinya, pendidikan seks itu bikin kita lebih ngerti tubuh
                sendiri, tahu hak kita, dan lebih percaya diri dalam
                mengeksplorasi diri dengan cara yang sehat!
              </p>
            </div>
          </div>

          {/* Card 2: Mental Health */}
          <div className="border-8 border-[#9900FF] p-8 text-white">
            <div className="max-w-lg mx-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
                Kesehatan mental itu bukan cuma soal nggak stres atau nggak
                sedih. Ini tentang gimana kita mikir, ngerasain, dan ngadepin
                hidup setiap hari.
              </h3>

              <p className="text-base md:text-lg mb-6 text-center">
                Kalau mental health kita oke, kita bisa lebih mudah ngontrol
                stres tanpa overthinking, ngobrol & nyambung sama orang lain
                dengan nyaman, dan juga bisa bikin keputusan yang lebih sehat
                buat diri sendiri
              </p>

              <p className="text-base md:text-lg text-center">
                Mental health itu penting di semua fase hidup, dari kecil,
                remaja, sampai dewasa. Jadi, jangan tunggu sampai burnout atau
                overwhelmed dulu baru peduli! Kamu nggak sendirian, dan mental
                health kamu itu penting!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
