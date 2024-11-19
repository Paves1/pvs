import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BungalowList from './components/bungalows/BungalowList';
import ReservationForm from './components/form/ReservationForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <BungalowList />
        <ReservationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;