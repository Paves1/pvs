import React from 'react';

interface BungalowProps {
  name: string;
  price: string;
  image: string;
  features: string[];
}

export default function BungalowCard({ name, price, image, features }: BungalowProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-emerald-600 font-bold mb-4">{price} TL / Gece</p>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
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
  );
}