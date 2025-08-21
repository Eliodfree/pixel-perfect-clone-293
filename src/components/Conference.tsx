import React from 'react';

const Conference: React.FC = () => {
  const benefitItems = [
    "Build – Create real blockchain solutions in our hackathon.",
    "Learn – Hear from global & African tech leaders.",
    "Connect – Network with developers, founders, and investors.",
    "Experience – Explore Uganda's culture and the R.Nile ,the Source.",
    "Grow – Gain skills, mentorship, and new opportunities.",
    "Collaborate – Team up with innovators across industries.",
    "Access – Get granted, exclusive resources, tools, and partner offers."
  ];

  const attendeeTypes = [
    ["Blockchain engineers", "Tech entrepreneurs", "Enterprises", " founders"],
    ["Policy makers & regulators", "Bankers & financial experts", "Tech enthusiasts & students"],
    ["Startups", "Investors & venture capitalists", "Designers & product managers"]
  ];

  return (
    <section className="box-border flex flex-col items-start gap-9 w-full m-0 p-0">
      <article className="box-border flex flex-col items-start gap-[40px] w-full border bg-[#FFEEA1] m-0 p-[60px] rounded-[20px] border-solid border-black max-md:gap-6 max-md:px-[30px] max-md:py-10 max-sm:gap-5 max-sm:px-5 max-sm:py-[30px]" style={{position: 'relative', overflow: 'hidden'}}>
        <img src="/backkkimage.png" alt="Conference Background" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4, zIndex: 0, pointerEvents: 'none'}} />
        <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 238, 161, 0.3)', zIndex: 1, pointerEvents: 'none'}} />
        <div className="box-border flex flex-col items-start gap-6 w-full m-0 p-0 relative z-20">
          <h2 className="box-border text-[40px] font-normal leading-[40px] tracking-[0.40px] bg-clip-text m-0 p-0 max-md:text-3xl max-sm:text-2xl">
            Conference Day, Oct. 19th
          </h2>
          <div className="box-border flex items-center gap-3 flex-wrap m-0 p-0 max-md:flex-col max-md:items-start">
            <span className="box-border gap-2.5 text-black text-lg font-medium leading-[18px] bg-[#FEF3C0] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              Keynote
            </span>
            <span className="box-border gap-2.5 text-black text-lg font-medium leading-[18px] bg-[#FEDF4E] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              Panel Discussions
            </span>
            <span className="box-border gap-2.5 text-black text-lg font-medium leading-[18px] bg-[#FFEEA1] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              Networking Breaks
            </span>
            <span className="box-border gap-2.5 text-black text-lg font-medium leading-[18px] bg-[#FFEEA1] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              Workshops
            </span>
            <span className="box-border gap-2.5 text-[#FFFDF4] text-lg font-medium leading-[18px] bg-[#C5A200] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
              Showcase Booths
            </span>
          </div>
        </div>
        <p className="box-border text-black text-xl font-normal leading-[30px] m-0 p-0 max-sm:text-base relative z-20">
          The EthNile 2025 Conference is the highlight of the
          event bringing together leading voices in blockchain,
          technology, and innovation to share insights, trends, and
          strategies shaping Uganda's digital future and Africa at large. It will feature a
          dynamic mix of keynotes, panel discussions, and breakout
          sessions designed to inspire action and spark collaboration.
        </p>
        
        <div className="box-border flex flex-col items-start gap-9 w-full border bg-[rgba(255,245,200,0.8)] m-0 p-9 rounded-lg border-solid border-[#483B00] max-md:p-6 max-sm:p-5 relative z-20">
          <h3 className="box-border text-[#483B00] text-[28px] font-semibold leading-[32px] m-0 p-0 max-md:text-2xl max-sm:text-xl">
            Who Should Attend?
          </h3>
          <div className="box-border flex flex-col items-start gap-[21px] w-full m-0 p-0">
            {attendeeTypes.map((row, rowIndex) => (
              <div key={rowIndex} className="box-border flex items-center gap-3 w-full m-0 p-0 max-md:flex-col max-md:items-stretch">
                {row.map((type, index) => {
                  const specialTypes = [
                    "Tech entrepreneurs",
                    "Tech enthusiasts & students", 
                    "Policy makers & regulators",
                    "Investors & venture capitalists"
                  ];
                  const hasSpecialBg = specialTypes.includes(type);
                  
                  return (
                    <span key={index} className={`box-border gap-2.5 flex-1 text-[#141100] text-xl font-medium leading-[25px] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1 ${hasSpecialBg ? 'bg-[#FFEEA1]' : ''}`}>
                      {type}
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        
        <div className="box-border flex flex-col items-start gap-12 w-full border m-0 p-9 rounded-lg border-solid border-[#483B00] max-md:p-6 max-sm:p-5 relative z-20">
          <h3 className="box-border text-[#483B00] text-[28px] font-semibold leading-[32px] m-0 p-0 max-md:text-2xl max-sm:text-xl">
            What you Stand to Benefit.
          </h3>
          <div className="box-border flex flex-col items-start gap-2.5 w-full m-0 p-0">
            {benefitItems.map((benefit, index) => (
              <div key={index} className="box-border flex items-center gap-[7px] w-full m-0 p-0">
                <div>
                  <img src="/starterr.png" alt="" style={{margin: 0, padding: 0, boxSizing: 'border-box', width: '24px', height: '25px'}} />
                </div>
                <p className="box-border text-[#141100] text-xl font-normal leading-[25px] m-0 p-0 max-md:text-base max-sm:text-sm">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <button className="box-border gap-2.5 border text-black text-lg font-medium leading-[18px] cursor-pointer self-start bg-[#FFD51A] m-0 px-[100px] py-[30px] rounded-[500px] border-solid border-[#483B00] max-md:text-base max-md:px-[60px] max-md:py-5 max-sm:text-sm max-sm:px-10 max-sm:py-[15px] hover:bg-[#FFD000] transition-colors relative z-20">
          Register to Attend
        </button>
      </article>
    </section>
  );
};

export default Conference;