import React from 'react';
import BungalowCard from './BungalowCard';
import { bungalows } from './bungalowData';

export default function BungalowList() {
  return (
    <section id="bungalows" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Bungalovlarımız</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bungalows.map((bungalow) => (
            <BungalowCard key={bungalow.id} {...bungalow} />
          ))}
        </div>
      </div>
    </section>
  );
}