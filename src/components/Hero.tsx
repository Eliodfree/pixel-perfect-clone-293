import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="box-border w-full h-[100vh] relative overflow-hidden m-0 p-0 bg-gradient-to-br from-[#FFF4C4] via-[#FFE066] to-[#F4C430]">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-gradient-to-b from-[#FFD700] to-[#FFA500] transform rotate-45 opacity-60 max-md:w-[200px] max-md:h-[200px]"></div>
        <div className="absolute bottom-[15%] left-[5%] w-[300px] h-[300px] bg-gradient-to-t from-[#FF8C00] to-[#FFD700] transform rotate-12 opacity-40 max-md:w-[150px] max-md:h-[150px]"></div>
        <div className="absolute top-[30%] left-[20%] w-[200px] h-[200px] bg-gradient-to-br from-[#FFED4E] to-[#FFC107] transform -rotate-30 opacity-50 max-md:w-[100px] max-md:h-[100px]"></div>
      </div>

      <nav className="box-border absolute z-20 m-0 p-0 top-6 inset-x-[60px] max-md:inset-x-5 max-sm:inset-x-2.5">
        <div className="box-border flex w-full h-[60px] justify-between items-center backdrop-blur-sm bg-white/20 m-0 px-[30px] py-3 rounded-full border border-white/30 max-md:h-auto max-md:px-5 max-md:py-2 max-sm:flex-col max-sm:gap-2.5 max-sm:h-auto max-sm:px-[15px] max-sm:py-1.5">
          <div className="box-border flex items-center gap-[30px] m-0 p-0 max-sm:gap-[15px]">
            <div>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo">
                <path d="M16 2L24 14L16 18L8 14L16 2Z" fill="#FFD700" stroke="#000" strokeWidth="1"/>
                <path d="M8 16L16 20L24 16L16 30L8 16Z" fill="#000"/>
              </svg>
            </div>
            <div className="box-border flex items-center gap-0.5 m-0 p-0 max-md:hidden">
              <button className="box-border gap-2.5 text-[#000] text-sm font-medium leading-6 cursor-pointer m-0 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                About Event
              </button>
              <button className="box-border gap-2.5 text-[#000] text-sm font-medium leading-6 cursor-pointer m-0 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                Schedule
              </button>
              <button className="box-border gap-2.5 text-[#000] text-sm font-medium leading-6 cursor-pointer m-0 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                Hackathon
              </button>
              <button className="box-border gap-2.5 text-[#000] text-sm font-medium leading-6 cursor-pointer m-0 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                Speakers
              </button>
            </div>
          </div>
          <div className="box-border flex items-center gap-3 m-0 p-0 max-sm:gap-2.5">
            <button className="box-border gap-2.5 text-[#000] text-sm font-medium leading-6 cursor-pointer bg-[#FFE066] m-0 px-5 py-2.5 rounded-full max-md:text-xs max-md:px-4 max-md:py-2 max-sm:text-[11px] max-sm:px-3 max-sm:py-1.5 hover:bg-[#FFD700] transition-colors">
              Become a Sponsor
            </button>
            <button className="box-border gap-2.5 text-[#000] text-sm font-medium leading-6 cursor-pointer bg-[#F4C430] m-0 px-5 py-2.5 rounded-full max-md:text-xs max-md:px-4 max-md:py-2 max-sm:text-[11px] max-sm:px-3 max-sm:py-1.5 hover:bg-[#DAA520] transition-colors">
              Apply to Speak
            </button>
          </div>
        </div>
      </nav>

      <div className="box-border absolute -translate-x-2/4 flex flex-col items-center gap-8 m-0 p-0 left-2/4 top-[45%] -translate-y-2/4 z-10 max-md:gap-6 max-sm:gap-4">
        {/* Ethereum Logo */}
        <div className="relative">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="ethereum-logo">
            <path d="M60 10L90 55L60 70L30 55L60 10Z" fill="#FFD700" stroke="#000" strokeWidth="2"/>
            <path d="M30 62L60 77L90 62L60 110L30 62Z" fill="#000"/>
          </svg>
        </div>

        {/* Main Title */}
        <div className="text-center">
          <h1 className="text-[80px] font-bold text-[#000] leading-[0.9] mb-2 max-md:text-[60px] max-sm:text-[40px]">
            ETHNile
          </h1>
          <div className="inline-flex items-center bg-[#FFE066] px-4 py-2 rounded-full">
            <span className="text-[24px] font-bold text-[#000] max-md:text-[20px] max-sm:text-[16px]">'25</span>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center max-w-[600px] px-4">
          <p className="text-[24px] font-medium text-[#000] leading-[1.2] max-md:text-[20px] max-sm:text-[16px]">
            Decentralizing Possibilities -
          </p>
          <p className="text-[24px] font-medium text-[#000] leading-[1.2] max-md:text-[20px] max-sm:text-[16px]">
            Unlocking Innovation at the Source
          </p>
        </div>

        {/* Floating badges */}
        <div className="absolute inset-0 pointer-events-none max-md:hidden">
          <div className="absolute top-[-100px] left-[-200px] bg-[#C7A405] text-white px-6 py-3 rounded-full transform rotate-12 text-sm font-bold tracking-wider">
            CONFERENCE
          </div>
          <div className="absolute top-[-80px] right-[-180px] bg-[#B89809] text-white px-6 py-3 rounded-full transform -rotate-12 text-sm font-bold tracking-wider">
            HACKATHON
          </div>
          <div className="absolute bottom-[-120px] left-[-150px] bg-[#FFE058] text-black px-6 py-3 rounded-full transform -rotate-15 text-sm font-bold tracking-wider">
            HYBRID
          </div>
          <div className="absolute bottom-[-100px] right-[-160px] bg-[#FEEFAB] text-black px-6 py-3 rounded-full transform rotate-15 text-sm font-bold tracking-wider">
            16TH - 19TH OCT.
          </div>
          <div className="absolute top-[50px] right-[-250px] bg-[#FFEA8B] text-black px-6 py-3 rounded-full transform -rotate-12 text-sm font-bold tracking-wider">
            KAMPALA, UGANDA
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
