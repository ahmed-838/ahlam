import React from 'react';
import { Phone, Calendar, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="text-blue-600 font-bold text-2xl flex items-center">
              <span className="text-3xl">+</span>MediCare
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#doctors" className="text-gray-700 hover:text-blue-600">Doctors</a>
            <a href="#appointments" className="text-gray-700 hover:text-blue-600">Appointments</a>
            <a href="#resources" className="text-gray-700 hover:text-blue-600">Patient Resources</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="text-blue-600 font-semibold">1-800-MEDICARE</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition-colors">
              <Calendar className="h-5 w-5" />
              <span>Book Appointment</span>
            </button>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}