import React from 'react';
import { Menu, Phone, Mail, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-emerald-800">Voynhouse</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-emerald-700">Ana Sayfa</a>
            <a href="#bungalows" className="text-gray-700 hover:text-emerald-700">Bungalovlar</a>
            <a href="#reservation" className="text-gray-700 hover:text-emerald-700">Rezervasyon</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-700">İletişim</a>
          </div>

          <div className="md:hidden">
            <button className="text-gray-700 hover:text-emerald-700">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}