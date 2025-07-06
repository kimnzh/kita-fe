import React from "react";
import { Link } from "react-router-dom";
import forum from "../assets/forum.webp";
import appointment from "../assets/appointment.webp";
import screening from "../assets/screening.webp";

const Features: React.FC = () => {
  return (
    <section className="w-full py-16 border-8 border-[#9900FF]/50">
      <div className="container mx-auto px-4 lg:px-4">
        {/* Section Title with Lines */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-2 bg-[#9900FF] w-24 md:w-60 lg:w-80"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#9900FF] whitespace-nowrap">
            Details & Features
          </h2>
          <div className="h-2 bg-[#9900FF] w-24 md:w-60 lg:w-80"></div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Forum */}
          <Link to="/forum" className="bg-gradient-to-b from-gray-800/60 to-gray-900/60 rounded-lg overflow-hidden shadow-lg transition-opacity hover:opacity-80">
            <div className="h-48 bg-blue-200 relative">
              <img
                src={forum}
                alt="Forum Discussion"
                className="w-full h-full object-cover"
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
          </Link>

          {/* Card 2: Appointment */}
          <div className="bg-gradient-to-b from-gray-800/60 to-gray-900/60 rounded-lg overflow-hidden shadow-lg">
          <Link to="/appointment" className="bg-gradient-to-b from-gray-800/60 to-gray-900/60 rounded-lg overflow-hidden shadow-lg transition-opacity hover:opacity-80">
            <div className="h-48 bg-blue-200 relative">
              <img
                src={appointment}
                alt="Medical Appointment"
                className="w-full h-full object-cover"
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
          </Link>
          </div>

          {/* Card 3: Screening */}
          <Link
            to="/screening"
            className="bg-gradient-to-b from-gray-800/60 to-gray-900/60 rounded-lg overflow-hidden shadow-lg transition-opacity hover:opacity-80"
          >
            <div className="h-48 bg-blue-200 relative">
              <img
                src={screening}
                alt="Medical Screening"
                className="w-full h-full object-cover"
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
