import React, { useState } from 'react';

const Sponsorship: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage('Please enter your email address');
      setMessageType('error');
      return;
    }

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address');
      setMessageType('error');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Subscribing email:', email);
      setEmail('');
      setMessage('Thank you for subscribing! We\'ll keep you updated.');
      setMessageType('success');
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
      // Clear message after 5 seconds
      setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 5000);
    }
  };

  return (
  <section id="sponsorship" className="box-border flex w-full flex-col items-start gap-8 border bg-[#FFF5CA] m-0 p-[40px] rounded-[20px] border-solid border-black max-md:px-[20px] max-md:py-8 max-sm:px-4 max-sm:py-6">
    {/* Sponsors Section */}
    <div className="box-border flex flex-col items-center gap-12 w-full border bg-white m-0 p-12 rounded-[20px] border-solid border-black max-md:p-8 max-sm:p-6">
      {/* Main Sponsors */}
      <div className="box-border flex flex-col items-center gap-8 w-full m-0 p-0">
        <h3 className="box-border text-[#483B00] text-[28px] font-semibold leading-[32px] m-0 p-0 max-md:text-2xl max-sm:text-xl text-center">
          Main Sponsors
        </h3>
        <div className="box-border flex items-center justify-center gap-12 w-full m-0 p-0 flex-wrap max-md:gap-8 max-sm:gap-6">
          {/* Base */}
          <img src="/base.png" alt="Base" className="h-12" />
          
          {/* STARKNET */}
          <img src="/startknet.png" alt="STARKNET" className="h-12" />
          
          {/* Ethereum Foundation */}
          <img src="/ethereum.png" alt="Ethereum Foundation" className="h-12" />
        </div>
      </div>
      
      {/* Sponsors */}
      <div className="box-border flex flex-col items-center gap-8 w-full m-0 p-0">
        <h3 className="box-border text-[#483B00] text-[28px] font-semibold leading-[32px] m-0 p-0 max-md:text-2xl max-sm:text-xl text-center">
          Sponsors
        </h3>
        <div className="box-border flex items-center justify-center gap-12 w-full m-0 p-0 flex-wrap max-md:gap-8 max-sm:gap-6">
          {/* Scroll */}
          <img src="/scroll.png" alt="Scroll" className="h-12" />
          
          {/* CELO */}
          <img src="/celo.png" alt="CELO" className="h-12" />
          
          {/* Tether */}
          <img src="/tether.png" alt="Tether" className="h-12" />
        </div>
      </div>
    </div>

    {/* Sponsorship Opportunity */}
    <article className="box-border flex flex-col items-start gap-12 w-full border bg-[#FFD82A] m-0 p-[40px] rounded-[20px] border-solid border-black max-md:px-[20px] max-md:py-8 max-sm:px-4 max-sm:py-6" style={{backgroundImage: 'url(/backkkimage.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <h2 className="box-border text-[40px] font-semibold leading-[40px] tracking-[0.40px] bg-clip-text m-0 p-0 max-md:text-3xl max-sm:text-2xl">
          Sponsorship Opportunity
        </h2>
        <p className="box-border text-[#141100] text-xl font-normal leading-[25px] m-0 p-0 max-sm:text-base">
          Showcase your brand at Africa's premier blockchain & tech event. Connect with innovators, investors, and decision-makers, gain media exposure, and position your company as a leader in Africa's digital future.
        </p>
        <a href="https://tinyurl.com/ethniledeck" target="_blank" rel="noopener noreferrer">
          <button className="box-border flex justify-start items-center gap-2.5 border text-[#141100] text-lg font-medium leading-[18px] cursor-pointer bg-[#FFFDF4] m-0 px-[100px] py-[30px] rounded-[500px] border-solid border-[#483B00] max-sm:text-sm max-sm:px-10 max-sm:py-[15px] hover:bg-[#FFF8E1] transition-colors self-start">
            Explore
            <div>
              <svg width="18" height="18" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon" style={{margin: 0, padding: 0, boxSizing: 'border-box', width: '18px', height: '18px'}}>
                <path d="M15.6147 3.45361L15.6147 11.5828L13.9889 11.5828L13.9889 6.21755L4.55899 15.6475L3.4209 14.5094L12.8508 5.07946L7.48551 5.07946L7.48551 3.45361L15.6147 3.45361Z" fill="#7C6600"></path>
              </svg>
            </div>
          </button>
        </a>
      </article>
      
      <article className="box-border flex flex-col items-start gap-6 w-full border bg-[#FFFDF4] m-0 p-[40px] rounded-[20px] border-solid border-black max-md:px-[20px] max-md:py-8 max-sm:px-4 max-sm:py-6">
        <h2 className="box-border text-[40px] font-semibold leading-[40px] tracking-[0.40px] bg-clip-text m-0 p-0 max-md:text-3xl max-sm:text-2xl">
          Stay in the Loop
        </h2>
        <p className="box-border text-black text-xl font-normal leading-[30px] m-0 p-0 max-sm:text-base">
          Be the first to know about EthNile 2025 announcements, speaker
          reveals, ticket sales, and special offers.. Subscribe now and get
          updates delivered straight to your inbox.
        </p>
        <a href="https://lu.ma/fajfyrbi" target="_blank" rel="noopener noreferrer">
          <button className="box-border gap-2.5 border text-black text-lg font-medium leading-[18px] cursor-pointer self-start bg-[#FFD51A] m-0 px-[100px] py-[30px] rounded-[500px] border-solid border-[#483B00] max-md:text-base max-md:px-[60px] max-md:py-5 max-sm:text-sm max-sm:px-10 max-sm:py-[15px] hover:bg-[#FFD000] transition-colors">
            Register to Attend
          </button>
        </a>
      </article>
      
      <div className="box-border flex flex-col items-start gap-1 w-full m-0 p-0">
        <h2 className="box-border text-[#141100] text-[40px] font-semibold leading-[40px] tracking-[0.40px] m-0 p-0 max-md:text-3xl max-sm:text-2xl">
          Stay Connected
        </h2>
        <div className="box-border flex items-end gap-[105px] w-full m-0 p-0 max-md:flex-col max-md:gap-[30px]">
          <p className="box-border w-[651px] text-black text-xl font-normal leading-[30px] m-0 p-0 max-md:w-full max-sm:text-base">
            Be part of the conversation before, during, and after EthNile
            2025. Join our community to network with innovators, share
            ideas, and collaborate on blockchain projects.
          </p>
          <div className="box-border flex justify-center items-center gap-[22px] m-0 p-0 max-sm:gap-[15px]">
            {/* <div>
              <svg width="78" height="80" viewBox="0 0 78 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="social-icon" style={{margin: 0, padding: '10px', boxSizing: 'border-box', display: 'flex', width: '77px', height: '79px', justifyContent: 'center', alignItems: 'center', gap: '10px', borderRadius: '900px', background: '#EFC400'}}>
                <rect x="0.92334" y="0.550781" width="77" height="79" rx="38.5" fill="#FFD51A"></rect>
                <path d="M27.8369 55.795V39.2088L18.1421 31.8501V52.2909C18.1421 54.627 19.3244 55.795 21.689 55.795" fill="#4285F4"></path>
                <path d="M27.3638 39.0919L39.4231 48.0858L51.4825 39.0919V27.645L39.4231 36.639L27.3638 27.645" fill="#EA4335"></path>
                <path d="M51.0098 55.795V39.2088L60.7045 31.8501V52.2909C60.7045 54.627 59.5223 55.795 57.1577 55.795" fill="#34A853"></path>
                <path d="M18.1421 32.0837L27.8369 39.4423V27.9955L24.29 25.309C21.0978 22.8561 18.1421 25.309 18.1421 28.3459" fill="#C5221F"></path>
                <path d="M60.7045 32.0837L51.0098 39.4423V27.9955L54.5566 25.309C57.7488 22.8561 60.7045 25.309 60.7045 28.3459" fill="#FBBC04"></path>
              </svg>
            </div> */}
            <a href="https://x.com/ETHNile_" target="_blank" rel="noopener noreferrer">
              <button className="box-border flex w-[77px] h-[79px] justify-center items-center gap-2.5 bg-[#EFC400] m-0 p-2.5 rounded-[900px] max-sm:w-[60px] max-sm:h-[60px] hover:bg-[#E6B800] transition-colors">
                <div>
                  <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="twitter-svg" style={{margin: 0, padding: 0, boxSizing: 'border-box', width: '35px', height: '37px'}}>
                    <path d="M27.4724 4.01953H32.2966L21.7572 16.7537L34.1559 34.082H24.4464L16.8426 23.5725L8.14219 34.082H3.3151L14.588 20.4614L2.69531 4.01953H12.6484L19.5216 13.6257L27.4724 4.01953ZM25.7793 31.0295H28.4524L11.1974 6.9117H8.32885L25.7793 31.0295Z" fill="#141100"></path>
                  </svg>
                </div>
              </button>
            </a>
            <a href="https://t.me/+b4uEboGC5sg3NjNk" target="_blank" rel="noopener noreferrer">
              <button className="box-border flex w-[77px] h-[79px] justify-center items-center gap-2.5 bg-[#EFC400] m-0 p-2.5 rounded-[900px] max-sm:w-[60px] max-sm:h-[60px] hover:bg-[#E6B800] transition-colors">
                <div>
                  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="telegram-svg" style={{margin: 0, padding: 0, boxSizing: 'border-box', width: '41px', height: '41px'}}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M34.709 8.11864C35.1312 7.94096 35.5933 7.87967 36.0471 7.94117C36.501 8.00267 36.9301 8.1847 37.2898 8.46831C37.6494 8.75192 37.9265 9.12675 38.0922 9.55378C38.2578 9.98081 38.306 10.4444 38.2316 10.8964L34.3571 34.3979C33.9813 36.6649 31.4939 37.9649 29.4149 36.8357C27.6758 35.891 25.0928 34.4355 22.7695 32.9168C21.6078 32.1566 18.0494 29.7222 18.4867 27.99C18.8625 26.5088 24.8417 20.9431 28.2584 17.6341C29.5994 16.334 28.9878 15.5841 27.4042 16.7799C23.4716 19.749 17.1576 24.2641 15.07 25.5351C13.2284 26.6558 12.2684 26.8471 11.1204 26.6558C9.02594 26.3073 7.08357 25.7674 5.49823 25.1097C3.35598 24.2214 3.46019 21.2762 5.49653 20.4186L34.709 8.11864Z" fill="#141100"></path>
                  </svg>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
