'use client';

import { useState } from 'react';

import { BookingIcon } from '../../components/Icons'; // Reusing BookingIcon for calendar in reschedule view

// Define types for appointments
interface Appointment {
  id: number;
  doctor: string;
  role: string;
  avatar: string;
  location: string;
  timeRange: string;
  date: string;
  status: 'upcoming' | 'history';
  originalDateTime?: string; // For reschedule context
}

type AppointmentsTab = 'upcoming' | 'history';
type RescheduleState = {
  active: boolean;
  appointmentId: number | null;
  doctorName: string;
  originalDateTime: string;
};

const Appointments = () => {
  const [activeTab, setActiveTab] = useState<AppointmentsTab>('upcoming');
  const [showCancelModal, setShowCancelModal] = useState<boolean>(false);
  const [appointmentToCancel, setAppointmentToCancel] = useState<Appointment | null>(null);
  const [rescheduleState, setRescheduleState] = useState<RescheduleState>({
    active: false,
    appointmentId: null,
    doctorName: '',
    originalDateTime: '',
  });

  // Dummy data for appointments
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: 1,
      doctor: 'Dr. Madelyn Vetrovs',
      role: 'Dentist',
      avatar: '/MadelynVetrovs.jpg',
      location: 'Pharmacy A - xxx building, xxx street, xxx city',
      timeRange: 'Monday 8:00- 9:00 am',
      date: 'July 31, 2025', // Using current year
      status: 'upcoming',
      originalDateTime: '8:00am July 19 2025', // For modal text
    },
    {
      id: 2,
      doctor: 'Dr. Madelyn Vetrovs',
      role: 'Dentist',
      avatar: '/MadelynVetrovs.jpg',
      location: 'Pharmacy A - xxx building, xxx street, xxx city',
      timeRange: 'Monday 8:00- 9:00 am',
      date: 'July 31, 2025', // Using current year
      status: 'upcoming',
      originalDateTime: '8:00am July 19 2025', // For modal text
    },
    {
      id: 3,
      doctor: 'Dr. Kaiya Curtis',
      role: 'Dentist',
      avatar: '/KaiyaCurtis.jpg',
      location: 'Clinic B - yyy building, yyy street, yyy city',
      timeRange: 'Tuesday 10:00- 11:00 am',
      date: 'July 2, 2025', // Past date
      status: 'history',
    },
    {
      id: 4,
      doctor: 'Dr. Martin Westervelt',
      role: 'Surgeon',
      avatar: '/MartinWestervelt.jpg',
      location: 'Hospital C - zzz building, zzz street, zzz city',
      timeRange: 'Wednesday 2:00- 3:00 pm',
      date: 'June 20, 2025', // Past date
      status: 'history',
    },
  ]);

  const upcomingAppointments = appointments.filter((app) => app.status === 'upcoming');
  const historyAppointments = appointments.filter((app) => app.status === 'history');

  const handleCancelClick = (appointment: Appointment) => {
    setAppointmentToCancel(appointment);
    setShowCancelModal(true);
  };

  const confirmCancelAppointment = () => {
    if (appointmentToCancel) {
      setAppointments((prevApps) =>
        prevApps.filter((app) => app.id !== appointmentToCancel.id)
      );
      alert('Appointment cancelled!');
      setShowCancelModal(false);
      setAppointmentToCancel(null);
    }
  };

  const handleRescheduleClick = (appointment: Appointment) => {
    setRescheduleState({
      active: true,
      appointmentId: appointment.id,
      doctorName: appointment.doctor,
      originalDateTime: appointment.originalDateTime || appointment.timeRange + ' ' + appointment.date,
    });
  };

  const handleBackToAppointments = () => {
    setRescheduleState({ active: false, appointmentId: null, doctorName: '', originalDateTime: '' });
  };

  // Dummy time slot data for reschedule calendar
  const timeSlots = {
    'Sun Jul 16': {
      '8:00am': 'Dr. Devon Miles',
      '3:00pm': 'Dr. Bonnie Barstow',
    },
    'Mon Jul 17': {
      '8:00am': 'Dr. Devon Miles',
      '3:00pm': 'Dr. Bonnie Barstow',
    },
    'Tue Jul 18': {
      '8:00am': 'Dr. Devon Miles',
      '3:00pm': 'Dr. Bonnie Barstow',
    },
    'Wed Jul 19': {
      '8:00am': 'Dr. Devon Miles',
      '3:00pm': 'Dr. Bonnie Barstow',
    },
    'Thu Jul 20': {
      '8:00am': 'Dr. Devon Miles',
      '3:00pm': 'Dr. Bonnie Barstow',
    },
    'Fri Jul 21': {
      '8:00am': 'Dr. Devon Miles',
      '3:00pm': 'Dr. Bonnie Barstow',
    },
    'Sat Jul 22': {
      '8:00am': 'Dr. Devon Miles',
      '3:00pm': 'Dr. Bonnie Barstow',
    },
  };

  if (rescheduleState.active) {
    return (
      <div className="p-8 flex flex-col flex-1">
        <div className="bg-white rounded-lg shadow-md flex-1 overflow-auto">
          <div className="border-b border-gray-200 px-6 py-4">
            <button
              onClick={handleBackToAppointments}
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              Reschedule
            </button>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                Previous 7 days
              </button>
              <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                Sun Jul 16 - Sat Jul 22
                <BookingIcon />
              </h3>
              <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                Next 7 days
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {Object.keys(timeSlots).map((day, index) => (
                <div key={index} className="flex flex-col border border-gray-200 min-h-[400px]">
                  <div className="bg-gray-50 py-2 font-medium text-gray-700 border-b border-gray-200">{day.split(' ')[0]} {day.split(' ')[1]}</div>
                  <div className="flex-1 p-1">
                    {/* Render specific time slots or "Booked" */}
                    {Object.entries(timeSlots[day as keyof typeof timeSlots]).map(([time, doctor]) => (
                      <div
                        key={time}
                        className="bg-blue-600 text-white rounded-md p-1 mb-1 cursor-pointer hover:bg-blue-700 text-xs"
                        onClick={() => alert(`Rescheduling appointment ${rescheduleState.appointmentId} with ${rescheduleState.doctorName} from ${rescheduleState.originalDateTime} to ${day} at ${time} with ${doctor}`)}
                      >
                        {time} <br /> {doctor}
                      </div>
                    ))}
                    {/* Placeholder for booked slots or empty times */}
                    <div className="text-gray-500 text-xs text-left mb-2 pl-1 mt-2">7am</div>
                    <div className="bg-gray-200 text-gray-500 rounded-md p-1 mb-1 text-xs">Booked</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8">
            <button
            onClick={() => alert('Book Now for Reschedule clicked!')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-200"
            >
            Book Now
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="bg-white rounded-lg shadow-md flex-1 overflow-auto">
        {/* Tabs */}
        <div className="border-b border-gray-200 px-6 pt-4">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg ${
                activeTab === 'upcoming'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg ${
                activeTab === 'history'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              History
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'upcoming' && (
            <div className="space-y-4">
              {upcomingAppointments.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No upcoming appointments.</p>
              ) : (
                upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-start mb-4 sm:mb-0">
                      <img src={appointment.avatar} alt={appointment.doctor} className="w-16 h-16 rounded-full object-cover mr-4 border border-gray-200" />
                      <div>
                        <h2 className="text-lg font-semibold text-gray-800">{appointment.doctor}</h2>
                        <p className="text-sm text-gray-600">{appointment.role}</p>
                        <p className="text-sm text-gray-600 mt-1">{appointment.location}</p>
                        <p className="text-sm text-gray-500 mt-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {appointment.timeRange} <span className="mx-1 text-gray-400">•</span> {appointment.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2 w-full sm:w-auto justify-end">
                      <button
                        onClick={() => handleCancelClick(appointment)}
                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md font-medium text-sm transition duration-200"
                      >
                        Cancel Appointment
                      </button>
                      <button
                        onClick={() => handleRescheduleClick(appointment)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium text-sm transition duration-200"
                      >
                        Reschedule
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'history' && (
            <div className="space-y-4">
              {historyAppointments.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No past appointments.</p>
              ) : (
                historyAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-start">
                      <img src={appointment.avatar} alt={appointment.doctor} className="w-16 h-16 rounded-full object-cover mr-4 border border-gray-200" />
                      <div>
                        <h2 className="text-lg font-semibold text-gray-800">{appointment.doctor}</h2>
                        <p className="text-sm text-gray-600">{appointment.role}</p>
                        <p className="text-sm text-gray-600 mt-1">{appointment.location}</p>
                        <p className="text-sm text-gray-500 mt-2 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {appointment.timeRange} <span className="mx-1 text-gray-400">•</span> {appointment.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {/* Cancel Appointment Modal */}
      {showCancelModal && appointmentToCancel && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Cancel Appointment</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to cancel this appointment with{' '}
              <span className="font-medium">{appointmentToCancel.doctor}</span> at{' '}
              <span className="font-medium">{appointmentToCancel.originalDateTime}</span>?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowCancelModal(false)}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition duration-200"
              >
                Close
              </button>
              <button
                onClick={confirmCancelAppointment}
                className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition duration-200"
              >
                Cancel Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointments;