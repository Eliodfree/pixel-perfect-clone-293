import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="box-border w-full h-[339px] relative bg-[#141100] mt-[100px] m-0 p-0 max-sm:h-auto max-sm:px-0 max-sm:py-10">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/f45237c200a6bc62b38bff9883fcec4d466fe2a0?width=3024"
        alt=""
        className="box-border w-full h-[345px] absolute mix-blend-overlay m-0 p-0 left-0 top-0"
      />
      <div className="box-border flex w-full max-w-[1165px] flex-col items-start gap-[51px] absolute -translate-x-2/4 z-[2] m-0 p-0 left-2/4 top-[53px] max-sm:gap-[30px] max-sm:px-5 max-sm:py-0">
        <div className="box-border flex w-full items-center gap-[329px] m-0 p-0 max-md:flex-col max-md:gap-10 max-sm:gap-[30px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/273d52adef34c77394969b64d0690a53a9b6a793?width=1120"
            alt="Frame 37374"
            className="box-border flex items-center gap-[43px] m-0 p-0"
          />
          <div className="box-border flex items-center gap-[75px] m-0 p-0 max-md:gap-10 max-sm:gap-[30px]">
            <nav className="box-border flex flex-col items-start gap-6 opacity-70 m-0 p-0">
              <a href="#sponsor" className="box-border text-[#FFF7D5] text-xl font-medium leading-[25px] cursor-pointer m-0 p-0 max-sm:text-base hover:opacity-100 transition-opacity">
                Sponsor
              </a>
              <a href="#speakers" className="box-border text-[#FFF7D5] text-xl font-medium leading-[25px] cursor-pointer m-0 p-0 max-sm:text-base hover:opacity-100 transition-opacity">
                Speakers
              </a>
              <a href="#schedule" className="box-border text-[#FFF7D5] text-xl font-medium leading-[25px] cursor-pointer m-0 p-0 max-sm:text-base hover:opacity-100 transition-opacity">
                Schedule
              </a>
            </nav>
            <nav className="box-border flex flex-col items-start gap-6 opacity-70 m-0 p-0">
              <a href="#subscribe" className="box-border text-[#FFF7D5] text-xl font-medium leading-[25px] cursor-pointer m-0 p-0 max-sm:text-base hover:opacity-100 transition-opacity">
                subscribe
              </a>
              <a href="#about" className="box-border text-[#FFF7D5] text-xl font-medium leading-[25px] cursor-pointer m-0 p-0 max-sm:text-base hover:opacity-100 transition-opacity">
                About
              </a>
              <a href="#home" className="box-border text-[#FFF7D5] text-xl font-medium leading-[25px] cursor-pointer m-0 p-0 max-sm:text-base hover:opacity-100 transition-opacity">
                Home
              </a>
            </nav>
          </div>
        </div>
        <div className="box-border flex justify-between items-center w-full m-0 px-0 py-5 border-t-[#FEF3C0] border-t border-solid max-md:flex-col max-md:gap-5">
          <nav className="box-border flex items-center gap-6 m-0 p-0 max-md:flex-col max-md:gap-[15px]">
            <a href="#terms" className="box-border text-[#FFF7D5] text-base font-medium leading-5 cursor-pointer m-0 p-0 max-sm:text-sm hover:opacity-80 transition-opacity">
              Terms of use
            </a>
            <a href="#privacy" className="box-border text-[#FFF7D5] text-base font-medium leading-5 cursor-pointer m-0 p-0 max-sm:text-sm hover:opacity-80 transition-opacity">
              Privacy policy
            </a>
            <a href="#cookies" className="box-border text-[#FFF7D5] text-base font-medium leading-5 cursor-pointer m-0 p-0 max-sm:text-sm hover:opacity-80 transition-opacity">
              Cookies policy
            </a>
          </nav>
          <div className="box-border flex items-center gap-[9px] m-0 p-0 max-sm:gap-1.5">
            <button className="box-border flex items-center gap-2.5 border bg-[#FFE677] m-0 p-2.5 rounded-[900px] border-solid border-[#FFEEA1] max-sm:p-2 hover:bg-[#FFE055] transition-colors">
              <div>
                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer-twitter" style={{margin: 0, padding: 0, boxSizing: 'border-box', width: '25px', height: '26px'}}>
                  <path d="M18.9635 2.4375H22.4094L14.8812 11.3858L23.7375 23.5625H16.8021L11.3708 16.1774L5.15625 23.5625H1.70833L9.76042 13.9913L1.26562 2.4375H8.375L13.2844 9.18775L18.9635 2.4375ZM17.7542 21.4175H19.6635L7.33854 4.46983H5.28958L17.7542 21.4175Z" fill="#141100"></path>
                </svg>
              </div>
            </button>
            <div>
              <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer-email" style={{margin: 0, padding: 0, boxSizing: 'border-box', width: '45px', height: '46px', borderRadius: '22px', border: '1px solid #FFEEA1', background: '#FFE677'}}>
                <rect x="0.5" y="0.5" width="44" height="45" rx="22" fill="#FFE677"></rect>
                <rect x="0.5" y="0.5" width="44" height="45" rx="22" stroke="#FFEEA1"></rect>
                <path d="M15.3144 31.6303V22.5382L10 18.5044V29.7095C10 30.99 10.6481 31.6303 11.9443 31.6303" fill="#141100"></path>
                <path d="M15.0552 22.4741L21.6658 27.4043L28.2764 22.4741V16.1992L21.6658 21.1295L15.0552 16.1992" fill="#141100"></path>
                <path d="M28.0171 31.6303V22.5382L33.3315 18.5044V29.7095C33.3315 30.99 32.6834 31.6303 31.3872 31.6303" fill="#141100"></path>
                <path d="M10 18.6325L15.3144 22.6663V16.3915L13.3701 14.9188C11.6202 13.5742 10 14.9188 10 16.5836" fill="#141100"></path>
                <path d="M33.3315 18.6325L28.0171 22.6663V16.3915L29.9614 14.9188C31.7113 13.5742 33.3315 14.9188 33.3315 16.5836" fill="#141100"></path>
              </svg>
            </div>
            <button className="box-border flex items-center gap-2.5 border bg-[#FFE677] m-0 p-2.5 rounded-[900px] border-solid border-[#FFEEA1] max-sm:p-2 hover:bg-[#FFE055] transition-colors">
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer-telegram" style={{margin: 0, padding: 0, boxSizing: 'border-box', width: '24px', height: '24px'}}>
                  <path fillRule="evenodd" clipRule="evenodd" d="M19.7771 4.42997C20.0243 4.32596 20.2947 4.29008 20.5604 4.32608C20.8261 4.36208 21.0773 4.46863 21.2878 4.63465C21.4984 4.80067 21.6606 5.02008 21.7575 5.27005C21.8545 5.52002 21.8827 5.79141 21.8391 6.05597L19.5711 19.813C19.3511 21.14 17.8951 21.901 16.6781 21.24C15.6601 20.687 14.1481 19.835 12.7881 18.946C12.1081 18.501 10.0251 17.076 10.2811 16.062C10.5011 15.195 14.0011 11.937 16.0011 9.99997C16.7861 9.23897 16.4281 8.79997 15.5011 9.49997C13.1991 11.238 9.50314 13.881 8.28114 14.625C7.20314 15.281 6.64114 15.393 5.96914 15.281C4.74314 15.077 3.60614 14.761 2.67814 14.376C1.42414 13.856 1.48514 12.132 2.67714 11.63L19.7771 4.42997Z" fill="black"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
