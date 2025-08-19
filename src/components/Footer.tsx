import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full relative bg-[#141100] mt-[100px]">
      {/* Background Image */}
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/f45237c200a6bc62b38bff9883fcec4d466fe2a0?width=3024"
        alt=""
        className="w-full h-full absolute mix-blend-overlay left-0 top-0"
        style={{objectFit: 'cover', zIndex: 0}}
      />
      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1165px] mx-auto px-6 flex flex-col justify-between py-4 max-md:px-4 max-sm:px-3">
        {/* Top Section */}
        <div className="flex items-center justify-between pt-2 max-md:flex-col max-md:gap-6 max-sm:gap-4">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/273d52adef34c77394969b64d0690a53a9b6a793?width=1120"
            alt="Frame 37374"
            className="flex items-center gap-[43px] max-md:w-full max-md:max-w-[300px] max-sm:max-w-[250px]"
          />
          <div className="flex items-center gap-[75px] max-md:gap-10 max-sm:gap-6 max-sm:flex-col">
            <nav className="flex flex-col items-start gap-3 opacity-70 max-sm:items-center">
              <a href="#sponsor" className="text-[#FFF7D5] text-base font-medium leading-[20px] cursor-pointer max-sm:text-sm hover:opacity-100 transition-opacity">
                Sponsor
              </a>
              <a href="#speakers" className="text-[#FFF7D5] text-base font-medium leading-[20px] cursor-pointer max-sm:text-sm hover:opacity-100 transition-opacity">
                Speakers
              </a>
              <a href="#schedule" className="text-[#FFF7D5] text-base font-medium leading-[20px] cursor-pointer max-sm:text-sm hover:opacity-100 transition-opacity">
                Schedule
              </a>
            </nav>
            <nav className="flex flex-col items-start gap-3 opacity-70 max-sm:items-center">
              <a href="#subscribe" className="text-[#FFF7D5] text-base font-medium leading-[20px] cursor-pointer max-sm:text-sm hover:opacity-100 transition-opacity">
                subscribe
              </a>
              <a href="#about" className="text-[#FFF7D5] text-base font-medium leading-[20px] cursor-pointer max-sm:text-sm hover:opacity-100 transition-opacity">
                About
              </a>
              <a href="#home" className="text-[#FFF7D5] text-base font-medium leading-[20px] cursor-pointer max-sm:text-sm hover:opacity-100 transition-opacity">
                Home
              </a>
            </nav>
          </div>
        </div>
        
        
        {/* Bottom Section - Separator Line */}
        <div className="w-full h-px bg-[#FEF3C0] my-4"></div>
        
        {/* Bottom Section - Content */}
        <div className="flex justify-between items-center px-6 py-4 mb-8 max-md:flex-col max-md:gap-4 max-md:px-0">
          <nav className="flex items-center gap-8 max-md:flex-col max-md:gap-3">
            <a href="#terms" className="text-[#FFF7D5] text-sm font-medium leading-5 cursor-pointer max-sm:text-xs hover:opacity-80 transition-opacity">
              Terms of use
            </a>
            <a href="#privacy" className="text-[#FFF7D5] text-sm font-medium leading-5 cursor-pointer max-sm:text-xs hover:opacity-80 transition-opacity">
              Privacy policy
            </a>
            <a href="#cookies" className="text-[#FFF7D5] text-sm font-medium leading-5 cursor-pointer max-sm:text-xs hover:opacity-80 transition-opacity">
              Cookies policy
            </a>
          </nav>
          <div className="flex items-center gap-4 max-sm:gap-2">
            <button className="w-10 h-10 bg-[#FFE677] rounded-full flex items-center justify-center hover:bg-[#FFE055] transition-colors max-sm:w-8 max-sm:h-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-sm:w-3 max-sm:h-3">
                <path d="M18.9635 2.4375H22.4094L14.8812 11.3858L23.7375 23.5625H16.8021L11.3708 16.1774L5.15625 23.5625H1.70833L9.76042 13.9913L1.26562 2.4375H8.375L13.2844 9.18775L18.9635 2.4375ZM17.7542 21.4175H19.6635L7.33854 4.46983H5.28958L17.7542 21.4175Z" fill="#141100"/>
              </svg>
            </button>
            <button className="w-10 h-10 bg-[#FFE677] rounded-full flex items-center justify-center hover:bg-[#FFE055] transition-colors max-sm:w-8 max-sm:h-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-sm:w-3 max-sm:h-3">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" fill="#141100"/>
              </svg>
            </button>
            <button className="w-10 h-10 bg-[#FFE677] rounded-full flex items-center justify-center hover:bg-[#FFE055] transition-colors max-sm:w-8 max-sm:h-8">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-sm:w-3 max-sm:h-3">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.7771 4.42997C20.0243 4.32596 20.2947 4.29008 20.5604 4.32608C20.8261 4.36208 21.0773 4.46863 21.2878 4.63465C21.4984 4.80067 21.6606 5.02008 21.7575 5.27005C21.8545 5.52002 21.8827 5.79141 21.8391 6.05597L19.5711 19.813C19.3511 21.14 17.8951 21.901 16.6781 21.24C15.6601 20.687 14.1481 19.835 12.7881 18.946C12.1081 18.501 10.0251 17.076 10.2811 16.062C10.5011 15.195 14.0011 11.937 16.0011 9.99997C16.7861 9.23897 16.4281 8.79997 15.5011 9.49997C13.1991 11.238 9.50314 13.881 8.28114 14.625C7.20314 15.281 6.64114 15.393 5.96914 15.281C4.74314 15.077 3.60614 14.761 2.67814 14.376C1.42414 13.856 1.48514 12.132 2.67714 11.63L19.7771 4.42997Z" fill="#141100"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
