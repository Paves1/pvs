import React from 'react';

const bungalows = [
  {
    id: 1,
    name: 'Orman Manzaralı Bungalov',
    price: '750',
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&q=80',
    features: ['2 Kişilik', 'Özel Banyo', 'Mini Mutfak', 'Teras']
  },
  {
    id: 2,
    name: 'Göl Manzaralı Bungalov',
    price: '850',
    image: 'https://images.unsplash.com/photo-1595877244574-e90ce41ce089?auto=format&fit=crop&q=80',
    features: ['2 Kişilik', 'Jakuzi', 'Mini Mutfak', 'Balkon']
  },
  {
    id: 3,
    name: 'Aile Bungalovu',
    price: '1200',
    image: 'https://images.unsplash.com/photo-1587061949875-5d8495566f67?auto=format&fit=crop&q=80',
    features: ['4 Kişilik', 'Tam Mutfak', 'Geniş Teras', '2 Banyo']
  }
];

export default function BungalowList() {
  return (
    <section id="bungalows" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Bungalovlarımız</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bungalows.map((bungalow) => (
            <div key={bungalow.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 relative">
                <img 
                  src={bungalow.image} 
                  alt={bungalow.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{bungalow.name}</h3>
                <p className="text-emerald-600 font-bold mb-4">{bungalow.price} TL / Gece</p>
                
                <ul className="space-y-2">
                  {bungalow.features.map((feature, index) => (
                    <li key={index} className="text-gray-600">• {feature}</li>
                  ))}
                </ul>
                
                <a
                  href="#reservation"
                  className="mt-6 block text-center bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition-colors"
                >
                  Rezervasyon Yap
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}