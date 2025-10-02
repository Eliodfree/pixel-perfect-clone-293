import React from 'react';

const CityTour: React.FC = () => {
  const tourImages = [
    "/River-Nile4.jpg",
    "/RNILE1.jpeg",
    "/RNILE2.jpg",
    "/RNILE3.jpg"
  ];

  return (
    <section className="box-border flex flex-col items-start gap-20 w-full border bg-[#FFFDF4] m-0 p-[60px] rounded-[20px] border-solid border-black max-md:px-[30px] max-md:py-10 max-sm:px-5 max-sm:py-[30px]">
      <div className="box-border flex flex-col items-start gap-10 w-full m-0 p-0">
        <div className="box-border flex flex-col items-start gap-5 w-full m-0 p-0">
          <h2 className="box-border text-[40px] font-normal leading-[40px] tracking-[0.40px] bg-clip-text m-0 p-0 max-md:text-3xl max-sm:text-2xl">
            City Tour at River Nile, Exclusive Oct 21st
          </h2>
          <div className="box-border flex items-center gap-3 flex-wrap m-0 p-0 max-md:flex-col max-md:items-start">
            <span className="box-border gap-2.5 text-black text-lg font-medium leading-[18px] bg-[#FEF3C0] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              Source of the Nile
            </span>
            <span className="box-border gap-2.5 text-black text-lg font-medium leading-[18px] bg-[#FEDF4E] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              Adventure & Sightseeing
            </span>
            <span className="box-border gap-2.5 text-black text-lg font-medium leading-[18px] bg-[#FFEEA1] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              Networking in a Scenic Setting
            </span>
            <span className="box-border gap-2.5 text-[#FFFDF4] text-lg font-medium leading-[18px] bg-[#C5A200] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              Local Cuisine & Culture
            </span>
          </div>
          <div className="box-border flex items-start gap-5 m-0 p-0 max-md:flex-col max-md:items-start max-md:gap-3">
            <span className="box-border gap-2.5 text-[#FFFDF4] text-lg font-medium leading-[18px] bg-[#C5A200] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              Photo Opportunities
            </span>
            <span className="box-border gap-2.5 text-black text-lg font-medium leading-[18px] bg-[#FFEEA1] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              City Tour & Vibes
            </span>
          </div>
        </div>
        <p className="box-border text-black text-xl font-normal leading-[30px] m-0 p-0 max-sm:text-base">
          As part of EthNile 2025, Exclusive participants will embark on a scenic and
          cultural City Tour to Jinja, the legendary birthplace of the River
          Nile. This tour is the perfect blend of exploration, networking,
          and relaxation giving attendees a chance to connect outside the
          conference and hackathon environment.
        </p>
        <div 
          className="box-border flex items-start gap-5 w-full m-0 p-0 overflow-x-auto overflow-y-hidden"
          style={{
            /* Cross-browser scrollbar styling */
            scrollbarWidth: 'thin',
            scrollbarColor: '#D1D5DB #F3F4F6',
            /* Force scrollbar to always show on WebKit browsers */
            '&::-webkit-scrollbar': {
              height: '8px',
              display: 'block'
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#F3F4F6',
              borderRadius: '4px'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#D1D5DB',
              borderRadius: '4px',
              border: '1px solid #F3F4F6'
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#9CA3AF'
            }
          } as React.CSSProperties}
        >
          {tourImages.map((image, index) => (
            <div key={index} className="box-border flex items-center gap-0.5 bg-[#FFF7D5] m-0 p-5 flex-shrink-0 max-md:p-[15px]">
              <img
                src={image}
                alt={`River Nile Tour Image ${index + 1}`}
                className="box-border w-[250px] h-[250px] object-cover m-0 p-0 max-md:w-[200px] max-md:h-[200px] max-sm:w-[150px] max-sm:h-[150px]"
              />
            </div>
          ))}
        </div>
      </div>
      <a href="https://lu.ma/fajfyrbi" target="_blank" rel="noopener noreferrer">
        <button className="box-border flex justify-start items-center gap-2.5 border text-[#141100] text-lg font-medium leading-[18px] cursor-pointer self-start bg-[#FFD51A] m-0 px-[100px] py-[30px] rounded-[500px] border-solid border-[#483B00] max-sm:text-sm max-sm:px-10 max-sm:py-[15px] hover:bg-[#FFD000] transition-colors">
          Register to participate
          <div>
            <svg width="18" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon" style={{margin: 0, padding: 0, boxSizing: 'border-box', width: '18px', height: '18px'}}>
              <path d="M16.0181 2.90283L16.0181 11.0321L14.3922 11.0321L14.3922 5.66677L4.96231 15.0967L3.82422 13.9586L13.2541 4.52868L7.88883 4.52868L7.88884 2.90283L16.0181 2.90283Z" fill="#7C6600"></path>
            </svg>
          </div>
        </button>
      </a>
    </section>
  );
};

export default CityTour;