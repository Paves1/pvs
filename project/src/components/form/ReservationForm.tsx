import React, { useState } from 'react';
import FormInput from './FormInput';

const bungalowOptions = [
  { value: 'orman', label: 'Orman Manzaralı' },
  { value: 'gol', label: 'Göl Manzaralı' },
  { value: 'aile', label: 'Aile Bungalovu' }
];

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    bungalowType: '',
    guests: '2'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Rezervasyon talebiniz alındı. En kısa sürede size dönüş yapacağız.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="reservation" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Rezervasyon</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Ad Soyad"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            
            <FormInput
              label="E-posta"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            <FormInput
              label="Telefon"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            
            <FormInput
              label="Bungalov Tipi"
              type="select"
              name="bungalowType"
              value={formData.bungalowType}
              onChange={handleChange}
              required
              options={bungalowOptions}
            />
            
            <FormInput
              label="Giriş Tarihi"
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
            />
            
            <FormInput
              label="Çıkış Tarihi"
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Rezervasyon Yap
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}