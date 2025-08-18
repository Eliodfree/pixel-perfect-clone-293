import React from 'react';

const Conference: React.FC = () => {
  const benefitItems = [
    "Build – Create real blockchain solutions in our hackathon.",
    "Learn – Hear from global & African tech leaders.",
    "Connect – Network with developers, founders, and investors.",
    "Experience – Explore Uganda's culture and the Nile.",
    "Grow – Gain skills, mentorship, and new opportunities.",
    "Collaborate – Team up with innovators across industries.",
    "Access – Get exclusive resources, tools, and partner offers."
  ];

  const attendeeTypes = [
    ["Blockchain engineers", "Tech entrepreneurs", "Blockchain engineers", "startup founders"],
    ["Policy makers & regulators", "Policy makers & Researchers", "Tech enthusiasts & students"],
    ["Academics in technology", "Investors & venture capitalists", "Designers & product managers"]
  ];

  return (
    <section className="box-border flex flex-col items-start gap-9 w-full m-0 p-0">
      <article className="box-border flex flex-col items-start gap-[60px] w-full border bg-[#FFEEA1] m-0 p-[60px] rounded-[20px] border-solid border-black max-md:gap-10 max-md:px-[30px] max-md:py-10 max-sm:gap-[30px] max-sm:px-5 max-sm:py-[30px]" style={{position: 'relative', overflow: 'hidden'}}>
  <img src="/backkkimage.png" alt="Conference Background" style={{position: 'absolute', right: 0, bottom: 0, width: '600px', height: 'auto', opacity: 0.25, zIndex: 0, pointerEvents: 'none'}} />
        <div className="box-border flex flex-col items-start gap-10 w-full m-0 p-0">
          <h2 className="box-border text-[51px] font-normal leading-[51px] tracking-[0.51px] bg-clip-text m-0 p-0 max-md:text-4xl max-sm:text-[28px]">
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
        <p className="box-border text-black text-xl font-normal leading-[30px] m-0 p-0 max-sm:text-base">
          The EthNile 2025 Conference is the highlight of the
          event—bringing together leading voices in blockchain,
          technology, and innovation to share insights, trends, and
          strategies shaping Africa's digital future. It will feature a
          dynamic mix of keynotes, panel discussions, and breakout
          sessions designed to inspire action and spark collaboration.
        </p>
        
        <div className="box-border flex flex-col items-start gap-9 w-full border bg-[#FFF5C8] m-0 p-9 rounded-lg border-solid border-[#483B00] max-md:p-6 max-sm:p-5">
          <h3 className="box-border text-[#483B00] text-[35px] font-semibold leading-[43.75px] m-0 p-0 max-md:text-[28px] max-sm:text-2xl">
            Who Should Attend?
          </h3>
          <div className="box-border flex flex-col items-start gap-[21px] w-full m-0 p-0">
            {attendeeTypes.map((row, rowIndex) => (
              <div key={rowIndex} className="box-border flex items-center gap-3 w-full m-0 p-0 max-md:flex-col max-md:items-stretch">
                {row.map((type, index) => (
                  <span key={index} className="box-border gap-2.5 flex-1 text-[#141100] text-xl font-medium leading-[25px] m-0 px-5 py-1.5 rounded-[500px] border-[0.5px] border-solid border-[#7C6600] max-md:text-base max-sm:text-sm max-sm:px-[15px] max-sm:py-1">
                    {type}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <div className="box-border flex flex-col items-start gap-12 w-full border m-0 p-9 rounded-lg border-solid border-[#483B00] max-md:p-6 max-sm:p-5">
          <h3 className="box-border text-[#483B00] text-[35px] font-semibold leading-[43.75px] m-0 p-0 max-md:text-[28px] max-sm:text-2xl">
            What you Stand to Benefit.
          </h3>
          <div className="box-border flex flex-col items-start gap-2.5 w-full m-0 p-0">
            {benefitItems.map((benefit, index) => (
              <div key={index} className="box-border flex items-center gap-[7px] w-full m-0 p-0">
                <div>
                  <svg width="24" height="25" viewBox="0 0 1024 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="benefit-icon" style={{margin: 0, padding: 0, boxSizing: 'border-box', width: '24px', height: '25px'}}>
                    <path d="M0.920898 12.6297C3.12216 11.6966 3.86711 11.5476 4.81707 11.4165C7.46604 11.051 8.45783 11.6574 9.30081 11.9749C10.4731 12.4166 11.4466 12.8515 12.028 13.0957C12.7782 13.4109 13.6893 13.5998 14.3794 13.6564C15.884 13.7798 17.8342 13.6021 18.6548 13.4145C19.2215 13.2849 19.7386 13.1159 20.5592 12.6689C21.084 12.3687 21.457 12.1828 21.6996 11.9593C21.7942 11.8467 21.8312 11.7358 21.9813 11.6215" stroke="#55513F" strokeLinecap="round"></path>
                    <path d="M0.920898 9.19833C3.12216 8.26517 3.86711 8.11618 4.81707 7.98512C7.46604 7.61963 8.45783 8.22597 9.30081 8.54355C10.4731 8.98522 11.4466 9.42014 12.028 9.66435C12.7782 9.97947 13.6893 10.1685 14.3794 10.225C15.884 10.3484 17.8342 10.1707 18.6548 9.98305C19.2215 9.85346 19.7386 9.68451 20.5592 9.23754C21.084 8.93732 21.457 8.75136 21.6996 8.52787C21.7942 8.41529 21.8312 8.30438 21.9813 8.19012" stroke="#55513F" strokeLinecap="round"></path>
                    <path d="M0.920898 16.0611C3.12216 15.128 3.86711 14.979 4.81707 14.8479C7.46604 14.4824 8.45783 15.0888 9.30081 15.4063C10.4731 15.848 11.4466 16.2829 12.028 16.5271C12.7782 16.8423 13.6893 17.0312 14.3794 17.0878C15.884 17.2112 17.8342 17.0335 18.6548 16.8458C19.2215 16.7163 19.7386 16.5473 20.5592 16.1003C21.084 15.8001 21.457 15.6141 21.6996 15.3907C21.7942 15.2781 21.8312 15.1672 21.9813 15.0529" stroke="#55513F" strokeLinecap="round"></path>
                  </svg>
                </div>
                <p className="box-border text-[#141100] text-xl font-normal leading-[25px] m-0 p-0 max-md:text-base max-sm:text-sm">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <button className="box-border gap-2.5 border text-black text-lg font-medium leading-[18px] cursor-pointer self-center bg-[#FFD51A] m-0 px-[100px] py-[30px] rounded-[500px] border-solid border-[#483B00] max-md:text-base max-md:px-[60px] max-md:py-5 max-sm:text-sm max-sm:px-10 max-sm:py-[15px] hover:bg-[#FFD000] transition-colors">
          Register to Attend
        </button>
      </article>
    </section>
  );
};

export default Conference;
