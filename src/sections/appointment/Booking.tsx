'use client';

import { useState } from 'react';
import { BookingIcon } from '../../components/Icons'; // Reusing BookingIcon for calendar in date view

type BookingTab = 'date' | 'doctor' | 'pharmacy';
type PharmacyViewMode = 'grid' | 'list'; // New state for pharmacy view

interface DoctorInfo {
  name: string;
  img: string;
  description: string; // New field for hover info
}

const Booking = () => {
  const [activeTab, setActiveTab] = useState<BookingTab>('date');
  const [pharmacyViewMode, setPharmacyViewMode] = useState<PharmacyViewMode>('grid');
  const [hoveredDoctor, setHoveredDoctor] = useState<DoctorInfo | null>(null); // State for hover effect

  // Updated doctors data with description
  const doctors: DoctorInfo[] = [
    {
      name: 'Dr. Kierra Korsgaard',
      img: '/avatars/kierra.jpg', // Adjusted path
      description: 'Lorem ipsum dolor sit amet consectetur. Dictum et sed rhoncus tincidunt, id pharetra orci ut dignissim non elit in eget nec. Gravida sed eget felis lectus nulla amet nec id moroi. Placerat dui bibendum convallis.',
    },
    {
      name: 'Dr. Kaiya Curtis',
      img: '/avatars/kaiya.jpg', // Adjusted path
      description: 'An experienced general practitioner with a focus on holistic health. Dr. Curtis is known for her compassionate approach and patient-centered care.',
    },
    {
      name: 'Dr. Martin Westervelt',
      img: '/avatars/martin.jpg', // Adjusted path
      description: 'Specializing in internal medicine, Dr. Westervelt brings years of experience in diagnosing and treating complex adult diseases. He is dedicated to continuous medical education.',
    },
    {
      name: 'Dr. Madelyn Vetrovs',
      img: '/avatars/madelyn.jpg', // Adjusted path
      description: 'A dedicated pediatrician committed to the health and well-being of children. Dr. Vetrovs provides comprehensive care from infancy through adolescence.',
    },
  ];

  // Updated dentalHygienists data with description
  const dentalHygienists: DoctorInfo[] = [
    {
      name: 'Haylie Septimus',
      img: '/avatars/haylie.jpg', // Adjusted path
      description: 'Haylie is a meticulous dental hygienist, passionate about preventive oral care. She educates patients on proper hygiene techniques for lasting dental health.',
    },
    {
      name: 'Jocelyn Mango',
      img: '/avatars/jocelyn.jpg', // Adjusted path
      description: 'Jocelyn provides gentle yet thorough cleanings and oral health assessments. Her friendly demeanor puts patients at ease during their dental visits.',
    },
    {
      name: 'Terry Botosh',
      img: '/avatars/terry.jpg', // Adjusted path
      description: 'Terry focuses on patient comfort and comprehensive dental hygiene. He is skilled in various cleaning techniques and periodontal care.',
    },
    {
      name: 'Carla Kenter',
      img: '/avatars/carla.jpg', // Adjusted path
      description: 'Carla is committed to helping patients achieve optimal oral health. She provides personalized hygiene plans and is an expert in stain removal.',
    },
    {
      name: 'Tiana Levin',
      img: '/avatars/tiana.jpg', // Adjusted path
      description: 'Tiana specializes in advanced dental hygiene procedures and patient education. She ensures every patient receives the highest standard of preventive care.',
    },
    {
      name: 'Abram Aminoff',
      img: '/avatars/abram.jpg', // Adjusted path
      description: 'Abram is a skilled dental hygienist with a strong focus on patient well-being. He provides thorough cleanings and valuable advice for maintaining healthy gums and teeth.',
    },
  ];

  const pharmacies = [
    {
      id: 1,
      name: 'Pharmacy A',
      hours: 'Mon - Sat: 8am - 7pm',
      phone: '123-456-7890',
      address: 'xxx building, xxx street, xxx city',
      mapImage: '/map_placeholder.png', // Adjusted path
    },
    {
      id: 2,
      name: 'Pharmacy B',
      hours: 'Mon - Sat: 8am - 7pm',
      phone: '123-456-7890',
      address: 'xxx building, xxx street, xxx city',
      mapImage: '/map_placeholder.png', // Adjusted path
    },
    {
      id: 3,
      name: 'Pharmacy C',
      hours: 'Mon - Sat: 8am - 7pm',
      phone: '123-456-7890',
      address: 'xxx building, xxx street, xxx city',
      mapImage: '/map_placeholder.png', // Adjusted path
    },
    {
      id: 4,
      name: 'Pharmacy D',
      hours: 'Mon - Sat: 8am - 7pm',
      phone: '123-456-7890',
      address: 'xxx building, xxx street, xxx city',
      mapImage: '/map_placeholder.png', // Adjusted path
    },
    {
      id: 5,
      name: 'Pharmacy E',
      hours: 'Mon - Sat: 8am - 7pm',
      phone: '123-456-7890',
      address: 'xxx building, xxx street, xxx city',
      mapImage: '/map_placeholder.png', // Adjusted path
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'date':
        return (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                Previous 7 days
              </button>
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                Sun Jul 16 - Sat Jul 22
                <BookingIcon /> {/* Reusing the icon, assuming it's for calendar */}
              </h3>
              <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                Next 7 days
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {['Sun Jul 16', 'Mon Jul 17', 'Tue Jul 18', 'Wed Jul 19', 'Thu Jul 20', 'Fri Jul 21', 'Sat Jul 22'].map((day, index) => (
                <div key={index} className="flex flex-col border border-gray-200 min-h-[400px]">
                  <div className="bg-gray-50 py-2 font-medium text-gray-700 border-b border-gray-200">{day}</div>
                  <div className="flex-1 p-1">
                    {/* Time Slots */}
                    <div className="text-gray-500 text-xs text-left mb-2 pl-1">7am</div>
                    <div className="bg-blue-600 text-white rounded-md p-1 mb-1 cursor-pointer hover:bg-blue-700 text-xs">8:00am <br/> Dr. Devon Miles</div>
                    <div className="bg-blue-600 text-white rounded-md p-1 mb-1 cursor-pointer hover:bg-blue-700 text-xs">9:00am <br/> Dr. Devon Miles</div>
                    <div className="text-gray-500 text-xs text-left mb-2 pl-1">10am</div>
                    <div className="text-gray-500 text-xs text-left mb-2 pl-1">11am</div>
                    <div className="text-gray-500 text-xs text-left mb-2 pl-1">12pm</div>
                    <div className="text-gray-500 text-xs text-left mb-2 pl-1">1pm</div>
                    <div className="bg-gray-200 text-gray-500 rounded-md p-1 mb-1 text-xs">Booked</div>
                    <div className="text-gray-500 text-xs text-left mb-2 pl-1">2pm</div>
                    <div className="bg-gray-200 text-gray-500 rounded-md p-1 mb-1 text-xs">Booked</div>
                    <div className="bg-blue-600 text-white rounded-md p-1 mb-1 cursor-pointer hover:bg-blue-700 text-xs">3:00pm <br/> Dr. Bonnie Barstow</div>
                    <div className="bg-blue-600 text-white rounded-md p-1 mb-1 cursor-pointer hover:bg-blue-700 text-xs">4:00pm <br/> Dr. Bonnie Barstow</div>
                    <div className="text-gray-500 text-xs text-left mb-2 pl-1">5pm</div>
                    <div className="text-gray-500 text-xs text-left mb-2 pl-1">6pm</div>
                    <div className="text-gray-500 text-xs text-left mb-2 pl-1">7pm</div>
                    <div className="text-gray-500 text-xs text-left mb-2 pl-1">8pm</div>
                    <div className="text-gray-500 text-xs text-left mb-2 pl-1">9pm</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'doctor':
        return (
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Doctor</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8 relative"> {/* Added relative for hover card positioning */}
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm overflow-hidden text-center p-3 cursor-pointer hover:shadow-md transition-shadow relative"
                  onMouseEnter={() => setHoveredDoctor(doctor)}
                  onMouseLeave={() => setHoveredDoctor(null)}
                >
                  <img
                    src={doctor.img}
                    alt={doctor.name}
                    className="w-full h-32 object-cover mb-2 rounded-md" // Changed rounded-full to rounded-md and w-24 h-24 to w-full h-32
                  />
                  <p className="font-medium text-gray-800 text-sm">{doctor.name}</p>

                  {/* Hover Info Box for Doctors */}
                  {hoveredDoctor === doctor && (
                    <div className="absolute top-1/2 left-full transform -translate-y-1/2 ml-4 w-64 bg-white rounded-lg shadow-lg p-4 z-10 border border-gray-200 text-left">
                        <img
                            src={hoveredDoctor.img}
                            alt={hoveredDoctor.name}
                            className="w-16 h-16 object-cover rounded-md float-left mr-3 mb-2"
                        />
                      <h3 className="font-bold text-gray-900 text-md -mt-1">{hoveredDoctor.name}</h3>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-3"> {/* Added line-clamp-3 */}
                        {hoveredDoctor.description}
                      </p>
                      <button className="text-blue-600 hover:underline text-sm mt-2 block">
                        Read More
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">Dental Hygienist</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 relative"> {/* Added relative for hover card positioning */}
              {dentalHygienists.map((hygienist, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm overflow-hidden text-center p-3 cursor-pointer hover:shadow-md transition-shadow relative"
                  onMouseEnter={() => setHoveredDoctor(hygienist)}
                  onMouseLeave={() => setHoveredDoctor(null)}
                >
                  <img
                    src={hygienist.img}
                    alt={hygienist.name}
                    className="w-full h-32 object-cover mb-2 rounded-md" // Changed rounded-full to rounded-md and w-24 h-24 to w-full h-32
                  />
                  <p className="font-medium text-gray-800 text-sm">{hygienist.name}</p>

                  {/* Hover Info Box for Dental Hygienists */}
                  {hoveredDoctor === hygienist && (
                    <div className="absolute top-1/2 left-full transform -translate-y-1/2 ml-4 w-64 bg-white rounded-lg shadow-lg p-4 z-10 border border-gray-200 text-left">
                        <img
                            src={hoveredDoctor.img}
                            alt={hoveredDoctor.name}
                            className="w-16 h-16 object-cover rounded-md float-left mr-3 mb-2"
                        />
                      <h3 className="font-bold text-gray-900 text-md -mt-1">{hoveredDoctor.name}</h3>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                        {hoveredDoctor.description}
                      </p>
                      <button className="text-blue-600 hover:underline text-sm mt-2 block">
                        Read More
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case 'pharmacy':
        return (
          <div className="p-6">
            <div className="flex justify-end mb-4">
              <div className="flex space-x-2">
                <button onClick={() => setPharmacyViewMode('grid')}
                  className={`p-2 rounded-md ${pharmacyViewMode === 'grid' ? 'bg-gray-200 text-blue-600' : 'text-gray-400 hover:bg-gray-100'}`}>
                  {/* Grid Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button onClick={() => setPharmacyViewMode('list')}
                  className={`p-2 rounded-md ${pharmacyViewMode === 'list' ? 'bg-gray-200 text-blue-600' : 'text-gray-400 hover:bg-gray-100'}`}>
                  {/* List Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {pharmacyViewMode === 'grid' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {pharmacies.map((pharmacy) => (
                  <div key={pharmacy.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{pharmacy.name}</h3>
                      <p className="text-gray-600 text-sm mb-1 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {pharmacy.hours}
                      </p>
                      <p className="text-gray-600 text-sm mb-1 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        {pharmacy.phone}
                      </p>
                      <p className="text-gray-600 text-sm mb-2 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {pharmacy.address}
                      </p>
                      <img src={pharmacy.mapImage} alt={`Map of ${pharmacy.name}`} className="w-full h-32 object-cover rounded-md mt-3" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {pharmacyViewMode === 'list' && (
              <div className="space-y-4">
                {pharmacies.map((pharmacy) => (
                  <div key={pharmacy.id} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between border border-gray-200">
                    <div className="flex items-center">
                      <img src={pharmacy.mapImage} alt={`Map of ${pharmacy.name}`} className="w-24 h-24 object-cover rounded-md mr-4" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{pharmacy.name}</h3>
                        <p className="text-gray-600 text-sm mt-1 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {pharmacy.hours}
                        </p>
                        <p className="text-gray-600 text-sm flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                          {pharmacy.phone}
                        </p>
                        <p className="text-gray-600 text-sm flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                          {pharmacy.address}
                        </p>
                      </div>
                    </div>
                    {/* Add a 'Book Now' button here if needed for list view, or keep it central */}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col flex-1 p-8">
      <div className="bg-white rounded-lg shadow-md flex-1 overflow-auto">
        {/* Tabs */}
        <div className="border-b border-gray-200 px-6 pt-4">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('date')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg ${
                activeTab === 'date'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Date
            </button>
            <button
              onClick={() => setActiveTab('doctor')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg ${
                activeTab === 'doctor'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Doctor
            </button>
            <button
              onClick={() => setActiveTab('pharmacy')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg ${
                activeTab === 'pharmacy'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Pharmacy
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="relative pb-20">
          {renderTabContent()}
        </div>
      </div>

      {/* Fixed Book Now button at bottom-right */}
      <div className="absolute bottom-8 right-8">
        <button
          onClick={() => alert('Book Now clicked!')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-200"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Booking;