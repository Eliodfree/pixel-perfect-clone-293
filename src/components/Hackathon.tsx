import React from 'react';

const Hackathon: React.FC = () => {
  return (
    <section className="box-border flex flex-col items-start gap-20 w-full border bg-[#FFF7D5] m-0 p-[60px] rounded-[20px] border-solid border-black max-md:px-[30px] max-md:py-10 max-sm:px-5 max-sm:py-[30px]">
      <div className="box-border flex flex-col items-start gap-10 w-full m-0 p-0">
        <div className="box-border flex flex-col items-start gap-5 w-full m-0 p-0">
          <h2 className="box-border text-[51px] font-normal leading-[51px] tracking-[0.51px] bg-clip-text m-0 p-0 max-md:text-4xl max-sm:text-[28px]">
            Hackthon, Oct. 17th
          </h2>
          <div className="box-border flex items-center gap-3 flex-wrap m-0 p-0 max-md:flex-col max-md:items-start">
            <span className="box-border gap-2.5 text-black text-lg font-medium leading-[18px] bg-[#FEF3C0] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              DeFi & Financial Inclusion
            </span>
            <span className="box-border gap-2.5 text-black text-lg font-medium leading-[18px] bg-[#FEDF4E] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              NFTs & Digital Assets
            </span>
            <span className="box-border gap-2.5 text-black text-lg font-medium leading-[18px] bg-[#FFEEA1] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              Web3 & Decentralized Applications
            </span>
            <span className="box-border gap-2.5 text-[#FFFDF4] text-lg font-medium leading-[18px] bg-[#7C6600] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              AI & Social Impact
            </span>
          </div>
          <div className="box-border flex items-start gap-5 m-0 p-0 max-md:flex-col max-md:items-start max-md:gap-3">
            <span className="box-border gap-2.5 text-[#FFFDF4] text-lg font-medium leading-[18px] bg-[#C5A200] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              Gaming & Metaverse Experiences
            </span>
            <span className="box-border gap-2.5 text-black text-lg font-medium leading-[18px] bg-[#FFEEA1] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              Supply Chain & Logistics
            </span>
          </div>
        </div>
        <p className="box-border text-black text-xl font-normal leading-[30px] m-0 p-0 max-sm:text-base">
          The EthNile Hackathon is a high-energy, collaborative coding and
          innovation sprint designed to bring developers, designers, and
          entrepreneurs together to solve real-world problems using
          blockchain technology.
        </p>
      </div>
      <button className="box-border flex justify-center items-center gap-2.5 border text-[#141100] text-lg font-medium leading-[18px] cursor-pointer self-center bg-[#FFD51A] m-0 px-[100px] py-[30px] rounded-[500px] border-solid border-[#483B00] max-sm:text-sm max-sm:px-10 max-sm:py-[15px] hover:bg-[#FFD000] transition-colors">
        Know more
        <div>
          <svg width="18" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon" style={{margin: 0, padding: 0, boxSizing: 'border-box', width: '18px', height: '18px'}}>
            <path d="M16.0181 2.90308L16.0181 11.0323L14.3922 11.0323L14.3922 5.66701L4.96231 15.0969L3.82422 13.9588L13.2541 4.52892L7.88883 4.52892L7.88884 2.90308L16.0181 2.90308Z" fill="#7C6600"></path>
          </svg>
        </div>
      </button>
    </section>
  );
};

export default Hackathon;
