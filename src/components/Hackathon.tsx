import React from 'react';

const Hackathon: React.FC = () => {
  return (
    <section id="hackathon" className="box-border flex flex-col items-start gap-12 w-full border bg-[#FFF7D5] m-0 p-[40px] rounded-[20px] border-solid border-black max-md:px-[20px] max-md:py-8 max-sm:px-4 max-sm:py-6">
      <div className="box-border flex flex-col items-start gap-6 w-full m-0 p-0">
        <div className="box-border flex flex-col items-start gap-5 w-full m-0 p-0">
          <h2 className="box-border text-[40px] font-normal leading-[40px] tracking-[0.40px] bg-clip-text m-0 p-0 max-md:text-3xl max-sm:text-2xl">
            Hackthon, Oct. 24th
          </h2>
          <div className="box-border flex items-center gap-3 flex-wrap m-0 p-0 max-md:flex-col max-md:items-start">
            <span className="box-border gap-2.5 text-black text-lg font-medium leading-[18px] bg-[#FEF3C0] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              DeFi & Financial Inclusion
            </span>
            <span className="box-border gap-2.5 text-black text-lg font-medium leading-[18px] bg-[#FEDF4E] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              NFTs & Digital Assets
            </span>
            <span className="box-border gap-2.5 text-black text-lg font-medium leading-[18px] bg-[#FFEEA1] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              StableCoins & Payments
            </span>
            <span className="box-border gap-2.5 text-[#FFFDF4] text-lg font-medium leading-[18px] bg-[#7C6600] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              AI Agents & Automation
            </span>
          </div>
          <div className="box-border flex items-start gap-5 m-0 p-0 max-md:flex-col max-md:items-start max-md:gap-3">
            <span className="box-border gap-2.5 text-[#FFFDF4] text-lg font-medium leading-[18px] bg-[#C5A200] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              MiniApps
            </span>
            <span className="box-border gap-2.5 text-black text-lg font-medium leading-[18px] bg-[#FFEEA1] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              Supply Chain & Logistics
            </span>
            <span className="box-border gap-2.5 text-black text-lg font-medium leading-[18px] bg-[#FEDF4E] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              Decentralised Identity & Privacy
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
  <a 
        href="https://www.notion.so/ETHNILE-2025-Hackathon-Tracks-Bounties-2655fe4bf98281f8b13cf9bf11a4ccf9#dcae420ca712486f8a7fffed10afaae4"
        target="_blank"
        rel="noopener noreferrer"
        className="box-border flex justify-start items-center gap-2.5 border text-[#141100] text-lg font-medium leading-[18px] cursor-pointer self-start bg-[#FFD51A] m-0 px-[100px] py-[30px] rounded-[500px] border-solid border-[#483B00] max-sm:text-sm max-sm:px-10 max-sm:py-[15px] hover:bg-[#FFD000] transition-colors"
      >
        Know more
        <div>
          <svg width="18" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon" style={{margin: 0, padding: 0, boxSizing: 'border-box', width: '18px', height: '18px'}}>
            <path d="M16.0181 2.90308L16.0181 11.0323L14.3922 11.0323L14.3922 5.66701L4.96231 15.0969L3.82422 13.9588L13.2541 4.52892L7.88883 4.52892L7.88884 2.90308L16.0181 2.90308Z" fill="#7C6600"></path>
          </svg>
        </div>
      </a>
    </section>
  );
};

export default Hackathon;
