
const Home = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome 👋</h1>

      {/* Upcoming Appointment Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Upcoming appointment</h2>
          <div className="text-gray-700 space-y-1">
            <div className="flex items-center text-lg font-medium">
              Pharmacy A
              <span className="ml-3 text-sm text-gray-500 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Mon - Sat: 8am - 7pm
              </span>
            </div>
            <p className="flex items-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              123-456-7890
            </p>
            <p className="flex items-center text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              xxx building, xxx street, xxx city
            </p>
          </div>
        </div>
        <img src="/location.png" alt="Map Placeholder" className="w-32 h-32 object-cover rounded-md" />
      </div>

      {/* Booking Section - Doctors */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Booking</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {[
          { name: 'Dr. Kierra Korsgaard', img: '/KierraKorsgaard.jpg' },
          { name: 'Dr. Kaiya Curtis', img: '/KaiyaCurtis.jpg' },
          { name: 'Dr. Martin Westervelt', img: '/MartinWestervelt.jpg' },
          { name: 'Dr. Madelyn Vetrovs', img: '/MadelynVetrovs.jpg' },
          { name: 'Haylie Septimus', img: '/HaylieSeptimus.jpg' },
          { name: 'Jocelyn Mango', img: '/JocelynMango.jpg' },
          { name: 'Terry Botosh', img: '/TerryBotosh.jpg' },
          { name: 'Carla Kenter', img: '/CarlaKenter.jpg' },
          { name: 'Tiana Levin', img: '/TianaLevin.jpg' },
          { name: 'Abram Aminoff', img: '/AbramAminoff.jpg' },
        ].map((person, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden text-center p-3">
            <img
              src={person.img}
              alt={person.name}
              className="w-24 h-24 rounded-full mx-auto object-cover mb-2 border border-gray-200"
            />
            <p className="font-medium text-gray-800 text-sm">{person.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;