'use client';

import { useState } from 'react';
import { BookingIcon } from '../../components/Icons'; // Reusing BookingIcon for calendar in date view

type BookingTab = 'date' | 'doctor' | 'pharmacy';
type PharmacyViewMode = 'grid' | 'list'; // New state for pharmacy view

interface Doctor {
  name: string;
  img: string;
  description?: string; // Optional description for the tooltip
}

const Booking = () => {
  const [activeTab, setActiveTab] = useState<BookingTab>('date');
  const [pharmacyViewMode, setPharmacyViewMode] = useState<PharmacyViewMode>('grid');
  const [hoveredDoctor, setHoveredDoctor] = useState<Doctor | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null);


  const doctors: Doctor[] = [
    { name: 'Dr. Kierra Korsgaard', img: '/src/assets/KierraKorsgaard.jpg', description: 'Lorem ipsum dolor sit amet consectetur. Dictum et sed rhoncus tincidunt. Id pharetra orci ut dignissim non elit in eget nec nec. Gravida sed eget felis lectus nulla amet nec id morbi. Placerat dui bibendum convallis. Read More' },
    { name: 'Dr. Kaiya Curtis', img: '/src/assets/KaiyaCurtis.jpg', description: 'Dr. Kaiya Curtis specializes in general dentistry and is committed to providing excellent patient care.' },
    { name: 'Dr. Martin Westervelt', img: '/src/assets/MartinWestervelt.jpg', description: 'Dr. Martin Westervelt is an experienced orthodontist with a focus on clear aligner treatments.' },
    { name: 'Dr. Madelyn Vetrovs', img: '/src/assets/MadelynVetrovs.jpg', description: 'Dr. Madelyn Vetrovs offers comprehensive family dental services, from preventative care to restorative procedures.' },
  ];

  const dentalHygienists: Doctor[] = [
    { name: 'Haylie Septimus', img: '/src/assets/HaylieSeptimus.jpg', description: 'Haylie Septimus is dedicated to promoting oral hygiene and educating patients on proper dental care.' },
    { name: 'Jocelyn Mango', img: '/src/assets/JocelynMango.jpg', description: 'Jocelyn Mango provides thorough cleanings and offers advice on maintaining a healthy smile.' },
    { name: 'Terry Botosh', img: '/src/assets/TerryBotosh.jpg', description: 'Terry Botosh focuses on preventative dental care and patient comfort during procedures.' },
    { name: 'Carla Kenter', img: '/src/assets/CarlaKenter.jpg', description: 'Carla Kenter is passionate about helping patients achieve optimal oral health through personalized care.' },
    { name: 'Tiana Levin', img: '/src/assets/TianaLevin.jpg', description: 'Tiana Levin provides professional dental cleanings and assists in various dental procedures.' },
    { name: 'Abram Aminoff', img: '/src/assets/AbramAminoff.jpg', description: 'Abram Aminoff is skilled in providing comprehensive oral hygiene services and patient education.' },
  ];

  const pharmacies = [
    {
      id: 1,
      name: 'Pharmacy A',
      hours: 'Mon - Sat: 8am - 7pm',
      phone: '123-456-7890',
      address: 'xxx building, xxx street, xxx city',
      mapImage: '/src/assets/location.png',
    },
    {
      id: 2,
      name: 'Pharmacy B',
      hours: 'Mon - Sat: 8am - 7pm',
      phone: '123-456-7890',
      address: 'xxx building, xxx street, xxx city',
      mapImage: '/src/assets/location.png',
    },
    {
      id: 3,
      name: 'Pharmacy C',
      hours: 'Mon - Sat: 8am - 7pm',
      phone: '123-456-7890',
      address: 'xxx building, xxx street, xxx city',
      mapImage: '/src/assets/location.png',
    },
    {
      id: 4,
      name: 'Pharmacy D',
      hours: 'Mon - Sat: 8am - 7pm',
      phone: '123-456-7890',
      address: 'xxx building, xxx street, xxx city',
      mapImage: '/src/assets/location.png',
    },
    {
      id: 5,
      name: 'Pharmacy E',
      hours: 'Mon - Sat: 8am - 7pm',
      phone: '123-456-7890',
      address: 'xxx building, xxx street, xxx city',
      mapImage: '/src/assets/location.png',
    },
  ];

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>, doctor: Doctor) => {
    setHoveredDoctor(doctor);
    // Position the tooltip near the cursor, or relative to the hovered element
    const rect = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + window.scrollX + rect.width / 2, // Center of the card
      y: rect.top + window.scrollY - 10, // Slightly above the card
    });
  };

  const handleMouseLeave = () => {
    setHoveredDoctor(null);
    setTooltipPosition(null);
  };

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
                    <div className="bg-blue-600 text-white rounded-md p-1 mb-1 cursor-pointer hover:bg-blue-700 text-xs">8:00am <br /> Dr. Devon Miles</div>
                    <div className="bg-blue-600 text-white rounded-md p-1 mb-1 cursor-pointer hover:bg-blue-700 text-xs">9:00am <br /> Dr. Devon Miles</div>
                    <div className="text-gray-500 text-xs text-left mb-2 pl-1">10am</div>
                    <div className="text-gray-500 text-xs text-left mb-2 pl-1">11am</div>
                    <div className="text-gray-500 text-xs text-left mb-2 pl-1">12pm</div>
                    <div className="text-gray-500 text-xs text-left mb-2 pl-1">1pm</div>
                    <div className="bg-gray-200 text-gray-500 rounded-md p-1 mb-1 text-xs">Booked</div>
                    <div className="text-gray-500 text-xs text-left mb-2 pl-1">2pm</div>
                    <div className="bg-gray-200 text-gray-500 rounded-md p-1 mb-1 text-xs">Booked</div>
                    <div className="bg-blue-600 text-white rounded-md p-1 mb-1 cursor-pointer hover:bg-blue-700 text-xs">3:00pm <br /> Dr. Bonnie Barstow</div>
                    <div className="bg-blue-600 text-white rounded-md p-1 mb-1 cursor-pointer hover:bg-blue-700 text-xs">4:00pm <br /> Dr. Bonnie Barstow</div>
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm overflow-hidden text-center p-3 cursor-pointer hover:shadow-md transition-shadow relative"
                  onMouseEnter={(e) => handleMouseEnter(e, doctor)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-24 h-24 mx-auto mb-2 rounded-lg overflow-hidden border border-gray-200">
                    <img
                      src={doctor.img}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-medium text-gray-800 text-sm">{doctor.name}</p>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-4">Dental Hygienist</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {dentalHygienists.map((hygienist, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm overflow-hidden text-center p-3 cursor-pointer hover:shadow-md transition-shadow relative"
                  onMouseEnter={(e) => handleMouseEnter(e, hygienist)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-24 h-24 mx-auto mb-2 rounded-lg overflow-hidden border border-gray-200">
                    <img
                      src={hygienist.img}
                      alt={hygienist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-medium text-gray-800 text-sm">{hygienist.name}</p>
                </div>
              ))}
            </div>

            {/* Doctor Description Tooltip */}
            {hoveredDoctor && tooltipPosition && (
              <div
                className="fixed absolute bg-white p-4 rounded-lg shadow-lg border border-gray-200 z-50 transform -translate-x-1/2"
                style={{ 
                  top: `${tooltipPosition.y}px`, 
                  left: `${tooltipPosition.x}px`,
                  transform: 'translateX(-50%) translateY(-100%)',
                  marginTop: '-8px'
                }}
              >
                <h4 className="font-semibold text-gray-900 mb-2">{hoveredDoctor.name}</h4>
                <p className="text-gray-700 text-sm" style={{ maxWidth: '300px' }}>
                  {hoveredDoctor.description}
                </p>
                
              </div>
            )}
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
        <div className="relative pb-20"> {/* Added pb-20 for space for Book Now button */}
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