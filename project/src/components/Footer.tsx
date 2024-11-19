import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Voynhouse Bungalov</h3>
            <p className="text-gray-400">Doğanın kalbinde unutulmaz bir tatil deneyimi.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone size={18} />
                <span>+90 555 123 4567</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} />
                <span>info@voynhouse.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Doğa Caddesi No:1, Bolu</span>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Sosyal Medya</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Voynhouse Bungalov. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}