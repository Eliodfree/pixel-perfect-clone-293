import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Conference from '@/components/Conference';
import Hackathon from '@/components/Hackathon';
import CityTour from '@/components/CityTour';
import Speaking from '@/components/Speaking';
import Sponsorship from '@/components/Sponsorship';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="box-border w-full min-h-screen relative bg-[#FFFBEA] m-0 p-0">
      <Hero />
      
      <main className="box-border w-full max-w-[1215px] flex flex-col gap-20 mt-[100px] mx-auto my-0 px-5 py-0 max-md:gap-[60px] max-md:mt-20 max-md:px-[15px] max-md:py-0 max-sm:gap-10 max-sm:mt-[60px] max-sm:px-2.5 max-sm:py-0">
        <About />
        <Conference />
        <Hackathon />
        <CityTour />
      </main>
      <Speaking />
      <main className="box-border w-full max-w-[1215px] flex flex-col gap-20 mx-auto my-0 px-5 py-0">
        <Sponsorship />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
