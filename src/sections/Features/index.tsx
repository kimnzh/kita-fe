import React from "react";

const Features: React.FC = () => {
  return (
    <section className="w-full py-16 border-purple/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Title with Lines */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px bg-purple w-24 md:w-60 lg:w-80"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#9900FF] whitespace-nowrap">
            Details & Features
          </h2>
          <div className="h-px bg-purple w-24 md:w-60 lg:w-80"></div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Forum */}
          <div className="bg-gradient-to-b from-gray-800/60 to-gray-900/60 rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-blue-200 relative">
              <img
                src="/images/forum-illustration.png"
                alt="Forum Discussion"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Crect fill='%23add8e6' width='800' height='400'/%3E%3Cg fill='%23000'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' font-family='sans-serif' font-size='24px'%3EForum Illustration%3C/text%3E%3C/g%3E%3C/svg%3E";
                }}
              />
            </div>
            <div className="p-5 bg-gray-900/80">
              <h3 className="text-xl font-bold text-white text-center py-3 bg-black">
                Forum
              </h3>
              <p className="mt-4 text-center text-white">
                Diskusi mengenai masalah seksualmu secara anonim
              </p>
            </div>
          </div>

          {/* Card 2: Appointment */}
          <div className="bg-gradient-to-b from-gray-800/60 to-gray-900/60 rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-blue-200 relative">
              <img
                src="/images/appointment-illustration.png"
                alt="Medical Appointment"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Crect fill='%23add8e6' width='800' height='400'/%3E%3Cg fill='%23000'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' font-family='sans-serif' font-size='24px'%3EAppointment Illustration%3C/text%3E%3C/g%3E%3C/svg%3E";
                }}
              />
            </div>
            <div className="p-5 bg-gray-900/80">
              <h3 className="text-xl font-bold text-white text-center py-3 bg-black">
                Appointment
              </h3>
              <p className="mt-4 text-center text-white">
                Buat janji dengan psikolog untuk menangani kesehatan mentalmu
              </p>
            </div>
          </div>

          {/* Card 3: Screening */}
          <div className="bg-gradient-to-b from-gray-800/60 to-gray-900/60 rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-blue-200 relative">
              <img
                src="/images/screening-illustration.png"
                alt="Medical Screening"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Crect fill='%23add8e6' width='800' height='400'/%3E%3Cg fill='%23000'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' font-family='sans-serif' font-size='24px'%3EScreening Illustration%3C/text%3E%3C/g%3E%3C/svg%3E";
                }}
              />
            </div>
            <div className="p-5 bg-gray-900/80">
              <h3 className="text-xl font-bold text-white text-center py-3 bg-black">
                Screening
              </h3>
              <p className="mt-4 text-center text-white">
                Lakukan screening awal untuk penanganan dini penyakit menular
                seksual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
