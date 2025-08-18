import React from 'react';

const About: React.FC = () => {
  return (
    <section className="box-border flex flex-col items-center gap-9 m-0 p-0">
      <div className="box-border flex flex-col items-center gap-12 text-center m-0 p-0">
        <h2 className="box-border text-[51px] font-extrabold leading-[51px] tracking-[0.51px] bg-clip-text m-0 p-0 max-md:text-4xl max-sm:text-[28px]">
          About EthNile'25
        </h2>
        <p className="box-border text-black text-xl font-normal leading-[30px] m-0 p-0 max-md:text-lg max-sm:text-base">
          Get ready for history in the making. EthNile is the very first
          Ethereum-focused event in Kampala, a landmark moment for Uganda's
          tech visionaries and Web3 community. Inspired by the legendary
          River Nile, the longest river in the world that begins just an
          hour away in Jinja, EthNile channels that same sense of flow,
          connection, and boundless reach into the blockchain ecosystem.
        </p>
      </div>
  <div className="box-border flex w-full items-stretch gap-6 m-0 p-0 flex-row flex-nowrap justify-between">
        <article className="box-border flex flex-col items-start gap-12 flex-1 border bg-[#FFF7D5] m-0 p-9 rounded-lg border-solid border-[rgba(72,59,0,0.50)] max-md:p-6 max-sm:p-5">
          <div className="box-border flex flex-col items-start gap-6 m-0 p-0">
            <h3 className="box-border w-[216px] h-[58px] text-[#141100] text-[23px] font-bold leading-[28.75px] m-0 p-0 max-md:w-auto max-md:h-auto max-md:text-xl max-sm:text-lg">
              City Tour to Jinja,
              <br className="box-border m-0 p-0" />
              Exclusive
            </h3>
            <time className="box-border text-[#141100] text-base font-medium leading-5 m-0 p-0 max-sm:text-sm">
              Oct. 16, 2025
            </time>
          </div>
        </article>
        <article className="box-border flex flex-col items-start gap-12 flex-1 border bg-[#FFF7D5] m-0 p-9 rounded-lg border-solid border-[rgba(72,59,0,0.50)] max-md:p-6 max-sm:p-5">
          <div className="box-border flex flex-col items-start gap-6 m-0 p-0">
            <h3 className="box-border w-[216px] h-[58px] text-[#141100] text-[23px] font-bold leading-[28.75px] m-0 p-0 max-md:w-auto max-md:h-auto max-md:text-xl max-sm:text-lg">
              Hackathon Final Day Submission
            </h3>
            <time className="box-border text-[#141100] text-base font-medium leading-5 m-0 p-0 max-sm:text-sm">
              Oct. 17, 2025
            </time>
          </div>
        </article>
        <article className="box-border flex flex-col items-start gap-12 flex-1 border bg-[#FFF7D5] m-0 p-9 rounded-lg border-solid border-[rgba(72,59,0,0.50)] max-md:p-6 max-sm:p-5">
          <div className="box-border flex flex-col items-start gap-6 m-0 p-0">
            <h3 className="box-border w-[216px] h-[58px] text-[#141100] text-[23px] font-bold leading-[28.75px] m-0 p-0 max-md:w-auto max-md:h-auto max-md:text-xl max-sm:text-lg">
              Event
              <br className="box-border m-0 p-0" />
              Conference
            </h3>
            <time className="box-border text-[#141100] text-base font-medium leading-5 m-0 p-0 max-sm:text-sm">
              Oct. 19, 2025
            </time>
          </div>
        </article>
        <article className="box-border flex flex-col items-start gap-12 flex-1 border bg-[#FFF7D5] m-0 p-9 rounded-lg border-solid border-[rgba(72,59,0,0.50)] max-md:p-6 max-sm:p-5">
          <div className="box-border flex flex-col items-start gap-6 m-0 p-0">
            <h3 className="box-border w-[216px] h-[58px] text-[#141100] text-[23px] font-bold leading-[28.75px] m-0 p-0 max-md:w-auto max-md:h-auto max-md:text-xl max-sm:text-lg">
              Ndere Cultural
              <br className="box-border m-0 p-0" />
              Centre, Kampala
            </h3>
            <div className="box-border text-[#141100] text-base font-medium leading-5 m-0 p-0 max-sm:text-sm">
              Venue
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
