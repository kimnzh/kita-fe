'use client';

import React, { useState } from 'react';
import { HomeIcon, BookingIcon, AppointmentsIcon, MessagesIcon, SettingsIcon} from '../../components/Icons';
import HomeContent from './Home';
import BookingContent from './Booking';
import AppointmentsContent from './Appointments';
import MessagesContent from './Messages';

type ActiveView = 'home' | 'booking' | 'appointments' | 'messages' | 'settings';

export default function AppointmentPage() {
  const [activeView, setActiveView] = useState<ActiveView>('home');

  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return <HomeContent />;
      case 'booking':
        return <BookingContent />;
      case 'appointments':
        return <AppointmentsContent />;
      case 'messages':
        return <MessagesContent />;
      case 'settings':
        return (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Settings</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600">Settings content will go here.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0A1931] text-white flex flex-col p-4 shadow-lg">
        <div className="flex items-center pl-4 mb-8">
          <img src="/logo.webp" alt="LOGO" className="h-8 w-auto mr-3" />
          <span className="text-2xl font-bold text-white">KITA</span>
        </div>
        <nav className="space-y-2 flex-1">
          <SidebarNavItem
            icon={<HomeIcon />}
            label="Home"
            isActive={activeView === 'home'}
            onClick={() => setActiveView('home')}
          />
          <SidebarNavItem
            icon={<BookingIcon />}
            label="Booking"
            isActive={activeView === 'booking'}
            onClick={() => setActiveView('booking')}
          />
          <SidebarNavItem
            icon={<AppointmentsIcon />}
            label="Appointments"
            isActive={activeView === 'appointments'}
            onClick={() => setActiveView('appointments')}
          />
          <SidebarNavItem
            icon={<MessagesIcon />}
            label="Messages"
            isActive={activeView === 'messages'}
            onClick={() => setActiveView('messages')}
          />
          <SidebarNavItem
            icon={<SettingsIcon />}
            label="Settings"
            isActive={activeView === 'settings'}
            onClick={() => setActiveView('settings')}
          />
        </nav>
        {/* Placeholder for future bottom nav items or user info */}
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="flex justify-end items-center h-16 bg-white shadow-sm px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2 cursor-pointer">
            <span className="text-gray-800 font-medium">Sign in or sign up</span>
            {/* The provided image only shows "Sign in or sign up", not an avatar here */}
            {/* <img
              src="/avatar.png" // Assuming avatar.png is in public folder
              alt="User Avatar"
              className="w-8 h-8 rounded-full border-2 border-gray-300 object-cover"
            />
            <span className="text-gray-800 font-medium">AR. Jakir</span>
            <ChevronDownIcon /> */}
          </div>
        </header>

        {/* Dynamic Content Area */}
        <div className="flex-1 overflow-y-auto bg-gray-100">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

interface SidebarNavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full text-left space-x-3 p-3 rounded-lg transition-colors duration-200
                ${isActive ? 'bg-[#1F4287] text-white' : 'hover:bg-[#1F4287]/70 text-gray-300'}`}
  >
    {icon}
    <span>{label}</span>
  </button>
);