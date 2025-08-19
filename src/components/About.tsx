import React from 'react';

const About: React.FC = () => {
  return (
    <section className="box-border flex flex-col items-center gap-6 m-0 p-0 ">
      <div className="box-border flex flex-col items-center gap-8 text-center m-0 p-0 ">
        <h2 className="box-border text-[42px] font-extrabold leading-[42px] tracking-[0.42px] m-0 p-0 max-md:text-3xl max-sm:text-[24px]">
          <span className="text-yellow-800">About </span>
          <span className="bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-700 bg-clip-text text-transparent">EthNile'25</span>
        </h2>
        <p className="box-border text-black text-lg font-normal leading-[26px] m-0 p-0 max-md:text-base max-sm:text-sm">
          Get ready for history in the making. EthNile is the very first
          Ethereum-focused event in Kampala, a landmark moment for Uganda's
          tech visionaries and Web3 community. Inspired by the legendary
          River Nile, the longest river in the world that begins just an
          hour away in Jinja, EthNile channels that same sense of flow,
          connection, and boundless reach into the blockchain ecosystem.
        </p>
      </div>
      <div className="box-border flex w-full items-stretch gap-4 m-0 p-0 flex-row flex-nowrap justify-between max-lg:gap-3 max-md:flex-col max-md:gap-4">
        <article className="box-border flex flex-col items-start gap-6 flex-1 border bg-[#FFF7D5] m-0 p-6 rounded-lg border-solid border-[rgba(72,59,0,0.50)] max-lg:p-5 max-md:p-5 max-sm:p-4">
          <div className="box-border flex flex-col items-start gap-4 m-0 p-0">
            <h3 className="box-border text-[#141100] text-[20px] font-bold leading-[24px] m-0 p-0 max-lg:text-lg max-md:text-lg max-sm:text-base">
              City Tour to Jinja,
              <br className="box-border m-0 p-0" />
              Exclusive
            </h3>
            <time className="box-border text-[#141100] text-sm font-medium leading-4 m-0 p-0 max-sm:text-xs">
              Oct. 16, 2025
            </time>
          </div>
        </article>
        <article className="box-border flex flex-col items-start gap-6 flex-1 border bg-[#FFF7D5] m-0 p-6 rounded-lg border-solid border-[rgba(72,59,0,0.50)] max-lg:p-5 max-md:p-5 max-sm:p-4">
          <div className="box-border flex flex-col items-start gap-4 m-0 p-0">
            <h3 className="box-border text-[#141100] text-[20px] font-bold leading-[24px] m-0 p-0 max-lg:text-lg max-md:text-lg max-sm:text-base">
              Hackathon Final Day Submission
            </h3>
            <time className="box-border text-[#141100] text-sm font-medium leading-4 m-0 p-0 max-sm:text-xs">
              Oct. 17, 2025
            </time>
          </div>
        </article>
        <article className="box-border flex flex-col items-start gap-6 flex-1 border bg-[#FFF7D5] m-0 p-6 rounded-lg border-solid border-[rgba(72,59,0,0.50)] max-lg:p-5 max-md:p-5 max-sm:p-4">
          <div className="box-border flex flex-col items-start gap-4 m-0 p-0">
            <h3 className="box-border text-[#141100] text-[20px] font-bold leading-[24px] m-0 p-0 max-lg:text-lg max-md:text-lg max-sm:text-base">
              Event
              <br className="box-border m-0 p-0" />
              Conference
            </h3>
            <time className="box-border text-[#141100] text-sm font-medium leading-4 m-0 p-0 max-sm:text-xs">
              Oct. 19, 2025
            </time>
          </div>
        </article>
        <article className="box-border flex flex-col items-start gap-6 flex-1 border bg-[#FFF7D5] m-0 p-6 rounded-lg border-solid border-[rgba(72,59,0,0.50)] max-lg:p-5 max-md:p-5 max-sm:p-4">
          <div className="box-border flex flex-col items-start gap-4 m-0 p-0">
            <h3 className="box-border text-[#141100] text-[20px] font-bold leading-[24px] m-0 p-0 max-lg:text-lg max-md:text-lg max-sm:text-base">
              Ndere Cultural
              <br className="box-border m-0 p-0" />
              Centre, Kampala
            </h3>
            <div className="box-border text-[#141100] text-sm font-medium leading-4 m-0 p-0 max-sm:text-xs">
              Venue
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;