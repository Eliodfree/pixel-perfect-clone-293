import React from 'react';

const Speaking: React.FC = () => {
  return (
  <section id="speaking" className="box-border flex w-full flex-col justify-center items-center gap-12 bg-[#FFEEA1] m-0 mt-[80px] mb-[80px] py-[40px] max-md:py-8 max-sm:py-5">
      <div className="box-border flex w-full max-w-[1082px] flex-col justify-center items-center gap-6 m-0 px-[60px] max-md:px-[30px] max-sm:px-5">
        <h2 className="box-border text-[40px] font-semibold leading-[40px] tracking-[0.40px] bg-clip-text text-center m-0 p-0 max-md:text-3xl max-sm:text-2xl">
          Interested in Speaking?
        </h2>
        <p className="box-border text-black text-center text-xl font-normal leading-[30px] m-0 p-0 max-md:text-lg max-sm:text-base">
          Are you a blockchain pioneer, tech innovator, or thought leader
          with insights to share? EthNile 2025 offers a unique platform to
          showcase your expertise, inspire a community, and influence the
          future of technology in Africa.
        </p>
      </div>
      <div className="box-border flex justify-center items-center w-full px-[60px] max-md:px-[30px] max-sm:px-5">
        <button className="box-border flex justify-center items-center gap-2.5 border text-[#141100] text-lg font-medium leading-[18px] cursor-pointer bg-[#FFD51A] m-0 px-[100px] py-[30px] rounded-[500px] border-solid border-[#483B00] max-sm:text-sm max-sm:px-10 max-sm:py-[15px] hover:bg-[#FFD000] transition-colors">
          Get in touch
          <div>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon" style={{margin: 0, padding: 0, boxSizing: 'border-box', width: '18px', height: '18px'}}>
              <path d="M15.0972 2.90283L15.0972 11.0321L13.4713 11.0321L13.4713 5.66677L4.04141 15.0967L2.90332 13.9586L12.3332 4.52868L6.96794 4.52868L6.96794 2.90283L15.0972 2.90283Z" fill="#7C6600"></path>
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Speaking;
