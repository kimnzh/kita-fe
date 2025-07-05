import React from "react";

const Profile: React.FC = () => {
  return (
    <section className="w-full py-16 bg-[#00072D] border-8 border-[#9900FF]/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left side - Text content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#9900FF]">
              Video COMPANY Profile
            </h2>

            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Lorem Ipsum Has Been Has Lorem Bee
            </h3>

            <p className="text-base text-gray-300">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book
            </p>

            <div className="pt-4">
              <button className="bg-[#4758F7] hover:bg-[#3A48D0] text-white font-bold py-3 px-8 transition duration-300">
                LOREM IPSUM HAS
              </button>
            </div>
          </div>

          {/* Right side - Video */}
          <div className="w-full md:w-1/2 bg-gray-300 aspect-video flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* YouTube play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-red-600 rounded-full flex items-center justify-center cursor-pointer">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
