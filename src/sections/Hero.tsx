import React from "react";
import logo from "../assets/logo.webp"; // Import the logo properly

const Hero: React.FC = () => {
  return (
    <section className="text-white w-full pt-32 pb-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2 space-y-6 md:pr-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white">KITA</h1>

            <div className="space-y-4">
              <p className="text-lg md:text-2xl font-medium">
                KITA — Kesehatan Inklusif, Terbuka, Aman. Ini bukan hanya sebuah
                nama, ini adalah gerakan untuk kita semua!
              </p>

              <p className="text-base md:text-lg text-gray-200">
                Kami adalah portal digital revolusioner, dirancang khusus untuk
                setiap remaja dan perempuan di seluruh Indonesia. Bayangkan
                sebuah tempat di mana pemahamanmu tentang kesehatan seksual dan
                reproduksi bisa tumbuh, sejelas peta dunia di logo kami,
                menjangkau setiap sudut kebutuhanmu.
              </p>

              <p className="text-base md:text-lg text-gray-200">
                Didukung sepenuhnya oleh Kecerdasan Buatan yang cerdas
              </p>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Circular background */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-purple/20 flex items-center justify-center">
                {/* Placeholder for globe with medical symbols */}
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-purple/30 flex items-center justify-center relative overflow-hidden">
                  {/* Male/female symbol overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src={logo}
                      alt="KITA Logo"
                      className="w-3/4 h-3/4 object-contain"
                    />
                  </div>

                  {/* Medical icons */}
                  <div className="absolute top-1/4 left-1/4 bg-light-blue/70 w-12 h-6 rounded-lg transform rotate-45"></div>
                  <div className="absolute bottom-1/4 right-1/4 bg-light-blue/70 w-16 h-4 rounded-lg transform -rotate-12"></div>
                  <div className="absolute bottom-1/3 left-1/3 bg-light-blue/70 w-4 h-12 rounded-lg transform rotate-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome message section with purple border - full width */}
        <div className="mt-16 md:mt-24 border-8 border-[#9900FF]/50 p-6 md:p-10 w-full">
          <h2 className="text-[#9900FF] text-3xl md:text-4xl font-bold text-purple mb-6 text-center">
            SELAMAT DATANG !
          </h2>

          <div className="space-y-6 text-center max-w-4xl mx-auto">
            <p className="text-lg">
              Di Indonesia, topik soal seks dan HIV masih sering dianggap hal
              yang "nggak pantas" buat dibahas. Padahal, info yang beredar tuh
              kadang simpang siur, susah dicerna, atau malah bikin bingung.
              Nggak heran kalau banyak anak muda akhirnya cari tahu sendiri
              lewat internet.
            </p>

            <p className="text-lg">
              Kami hadir untuk menyediakan informasi kesehatan seksual dan
              reproduksi yang akurat, mudah diakses, dan bebas stigma, didukung
              oleh kecerdasan buatan. Dengan begitu, kamu bisa lebih percaya
              diri dan bertanggung jawab atas kesehatanmu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
