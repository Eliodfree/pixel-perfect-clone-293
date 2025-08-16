import React, { useState } from 'react';

const Sponsorship: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribing email:', email);
      setEmail('');
      alert('Thank you for subscribing!');
    }
  };

  return (
    <section className="box-border flex w-full flex-col items-start gap-11 border bg-[#FFF5CA] m-0 p-[60px] rounded-[20px] border-solid border-black max-md:px-[30px] max-md:py-10 max-sm:px-5 max-sm:py-[30px]">
      <article className="box-border flex flex-col items-start gap-20 w-full border bg-[#FFD82A] m-0 p-[60px] rounded-[20px] border-solid border-black max-md:px-[30px] max-md:py-10 max-sm:px-5 max-sm:py-[30px]">
        <h2 className="box-border text-[51px] font-semibold leading-[51px] tracking-[0.51px] bg-clip-text m-0 p-0 max-md:text-4xl max-sm:text-[28px]">
          Sponsorship Opportunity
        </h2>
        <p className="box-border text-[#141100] text-xl font-normal leading-[25px] m-0 p-0 max-sm:text-base">
          Showcase your brand at Africa's premier blockchain & tech
          event. Connect with innovators, investors, and decision-makers,
          gain media exposure, and position your company as a leader in
          Africa's digital future.
        </p>
        <button className="box-border flex justify-center items-center gap-2.5 border text-[#141100] text-lg font-medium leading-[18px] cursor-pointer bg-[#FFFDF4] m-0 px-[100px] py-[30px] rounded-[500px] border-solid border-[#483B00] max-sm:text-sm max-sm:px-10 max-sm:py-[15px] hover:bg-[#FFF8E1] transition-colors">
          Explore
          <div>
            <svg width="18" height="18" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon" style={{margin: 0, padding: 0, boxSizing: 'border-box', width: '18px', height: '18px'}}>
              <path d="M15.6147 3.45361L15.6147 11.5828L13.9889 11.5828L13.9889 6.21755L4.55899 15.6475L3.4209 14.5094L12.8508 5.07946L7.48551 5.07946L7.48551 3.45361L15.6147 3.45361Z" fill="#7C6600"></path>
            </svg>
          </div>
        </button>
      </article>
      
      <article className="box-border flex flex-col items-start gap-20 w-full border bg-[#FFFDF4] m-0 p-[60px] rounded-[20px] border-solid border-black max-md:px-[30px] max-md:py-10 max-sm:px-5 max-sm:py-[30px]">
        <h2 className="box-border text-[51px] font-semibold leading-[51px] tracking-[0.51px] bg-clip-text m-0 p-0 max-md:text-4xl max-sm:text-[28px]">
          Stay in the Loop
        </h2>
        <p className="box-border text-black text-xl font-normal leading-[30px] m-0 p-0 max-sm:text-base">
          Be the first to know about EthNile 2025 announcements, speaker
          reveals, ticket sales, and special offers.. Subscribe now and get
          updates delivered straight to your inbox.
        </p>
        <form onSubmit={handleSubscribe} className="box-border flex justify-between items-center w-full border bg-[#FFF6CC] m-0 pl-[30px] pr-[15px] py-[15px] rounded-[500px] border-solid border-[#483B00] max-md:flex-col max-md:gap-[15px] max-md:p-5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="box-border text-[rgba(20,17,0,0.50)] text-lg font-medium leading-[18px] bg-transparent border-none outline-none flex-1 m-0 p-0 max-sm:text-base placeholder:text-[rgba(20,17,0,0.50)]"
            required
          />
          <button
            type="submit"
            className="box-border gap-2.5 border text-[#141100] text-lg font-medium leading-[18px] cursor-pointer bg-[#FFD51A] m-0 px-[50px] py-5 rounded-[500px] border-solid border-[#483B00] max-md:w-full max-sm:text-base max-sm:px-[30px] max-sm:py-[15px] hover:bg-[#FFD000] transition-colors"
          >
            Subscribe
          </button>
        </form>
      </article>
      
      <div className="box-border flex flex-col items-start gap-1 w-full m-0 p-0">
        <h2 className="box-border text-[#141100] text-[51px] font-semibold leading-[51px] tracking-[0.51px] m-0 p-0 max-md:text-4xl max-sm:text-[28px]">
          Stay Connected
        </h2>
        <div className="box-border flex items-end gap-[105px] w-full m-0 p-0 max-md:flex-col max-md:gap-[30px]">
          <p className="box-border w-[651px] text-[#535353] text-xl font-medium leading-[25px] m-0 p-0 max-md:w-full max-sm:text-base">
            Be part of the conversation before, during, and after EthNile
            2025. Join our community to network with innovators, share
            ideas, and collaborate on blockchain projects.
          </p>
          <div className="box-border flex justify-center items-center gap-[22px] m-0 p-0 max-sm:gap-[15px]">
            <div>
              <svg width="78" height="80" viewBox="0 0 78 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-icon" style={{margin: 0, padding: '10px', boxSizing: 'border-box', display: 'flex', width: '77px', height: '79px', justifyContent: 'center', alignItems: 'center', gap: '10px', borderRadius: '900px', background: '#EFC400'}}>
                <rect x="0.92334" y="0.550781" width="77" height="79" rx="38.5" fill="#FFD51A"></rect>
                <path d="M27.8369 55.795V39.2088L18.1421 31.8501V52.2909C18.1421 54.627 19.3244 55.795 21.689 55.795" fill="#4285F4"></path>
                <path d="M27.3638 39.0919L39.4231 48.0858L51.4825 39.0919V27.645L39.4231 36.639L27.3638 27.645" fill="#EA4335"></path>
                <path d="M51.0098 55.795V39.2088L60.7045 31.8501V52.2909C60.7045 54.627 59.5223 55.795 57.1577 55.795" fill="#34A853"></path>
                <path d="M18.1421 32.0837L27.8369 39.4423V27.9955L24.29 25.309C21.0978 22.8561 18.1421 25.309 18.1421 28.3459" fill="#C5221F"></path>
                <path d="M60.7045 32.0837L51.0098 39.4423V27.9955L54.5566 25.309C57.7488 22.8561 60.7045 25.309 60.7045 28.3459" fill="#FBBC04"></path>
              </svg>
            </div>
            <button className="box-border flex w-[77px] h-[79px] justify-center items-center gap-2.5 bg-[#EFC400] m-0 p-2.5 rounded-[900px] max-sm:w-[60px] max-sm:h-[60px] hover:bg-[#E6B800] transition-colors">
              <div>
                <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="twitter-svg" style={{margin: 0, padding: 0, boxSizing: 'border-box', width: '35px', height: '37px'}}>
                  <path d="M27.4724 4.01953H32.2966L21.7572 16.7537L34.1559 34.082H24.4464L16.8426 23.5725L8.14219 34.082H3.3151L14.588 20.4614L2.69531 4.01953H12.6484L19.5216 13.6257L27.4724 4.01953ZM25.7793 31.0295H28.4524L11.1974 6.9117H8.32885L25.7793 31.0295Z" fill="#141100"></path>
                </svg>
              </div>
            </button>
            <button className="box-border flex w-[77px] h-[79px] justify-center items-center gap-2.5 bg-[#EFC400] m-0 p-2.5 rounded-[900px] max-sm:w-[60px] max-sm:h-[60px] hover:bg-[#E6B800] transition-colors">
              <div>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="telegram-svg" style={{margin: 0, padding: 0, boxSizing: 'border-box', width: '41px', height: '41px'}}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M34.709 8.11864C35.1312 7.94096 35.5933 7.87967 36.0471 7.94117C36.501 8.00267 36.9301 8.1847 37.2898 8.46831C37.6494 8.75192 37.9265 9.12675 38.0922 9.55378C38.2578 9.98081 38.306 10.4444 38.2316 10.8964L34.3571 34.3979C33.9813 36.6649 31.4939 37.9649 29.4149 36.8357C27.6758 35.891 25.0928 34.4355 22.7695 32.9168C21.6078 32.1566 18.0494 29.7222 18.4867 27.99C18.8625 26.5088 24.8417 20.9431 28.2584 17.6341C29.5994 16.334 28.9878 15.5841 27.4042 16.7799C23.4716 19.749 17.1576 24.2641 15.07 25.5351C13.2284 26.6558 12.2684 26.8471 11.1204 26.6558C9.02594 26.3073 7.08357 25.7674 5.49823 25.1097C3.35598 24.2214 3.46019 21.2762 5.49653 20.4186L34.709 8.11864Z" fill="#141100"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
