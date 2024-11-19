import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[600px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">Voynhouse Bungalov</h1>
          <p className="text-xl mb-8">Doğanın kalbinde üçgen bungalovlarımızda unutulmaz bir konaklama deneyimi yaşayın.</p>
          <a 
            href="#reservation" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg inline-block transition-colors"
          >
            Hemen Rezervasyon Yap
          </a>
        </div>
      </div>
    </div>
  );
}