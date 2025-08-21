import React, { useState } from 'react';

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[rgba(255,251,234,1)] flex flex-col overflow-hidden items-stretch">
      <div className="flex flex-col relative min-h-screen w-full items-center pt-6 pb-[20px] px-20 max-md:max-w-full max-md:pb-[15px] max-md:px-5 max-sm:px-3 max-sm:pb-[10px] max-sm:min-h-screen">
        {/* Background Image for Big Screens */}
        <img
          src="https://api.builder.io/api/v1/image/assets/e30a9ed2d282417f852404d6b0366525/ef6b920fe92d9deddf2c3c9af82c1d10ee8ef613?placeholderIfAbsent=true"
          className={`absolute h-full w-full object-cover inset-0 max-sm:hidden ${isMobileMenuOpen ? 'max-sm:blur-sm' : ''}`}
          alt="Background"
        />
        {/* Background Image for Small Screens */}
        <img
          src="/smallsizeback.png"
          className={`absolute h-full w-full object-cover inset-0 hidden max-sm:block ${isMobileMenuOpen ? 'max-sm:blur-sm' : ''}`}
          alt="Mobile Background"
        />
        
        {/* Navigation */}
         <nav className="box-border absolute z-50 m-0 p-0 top-6 inset-x-[90px] max-md:inset-x-5 max-sm:inset-x-2.5 max-sm:top-3">
        <div className="box-border flex w-full h-[65px] justify-between items-center backdrop-blur-[5px] bg-[rgba(255,247,213,0.50)] m-0 px-[25px] py-2 rounded-[500px] border-2 border-solid border-[#FEEC96] max-md:h-auto max-md:px-4 max-md:py-2 max-sm:flex-col max-sm:gap-2 max-sm:h-auto max-sm:px-3 max-sm:py-2 max-sm:rounded-[20px]">
          <div className="box-border flex items-center gap-[30px] m-0 p-0 max-sm:gap-[15px] max-sm:w-full max-sm:justify-between">
            <div className="max-sm:scale-75">
              <svg width="29" height="51" viewBox="0 0 29 51" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo" style={{margin: 0, padding: 0, boxSizing: 'border-box', width: '28.067px', height: '49.352px'}}>
                <path d="M13.8052 0.824089V21.6792L13.7945 21.6685L0.668457 28.6865L13.8052 0.824089Z" fill="#FFD30F" stroke="#231F20" strokeWidth="0.25" strokeMiterlimit="10"></path>
                <path d="M27.6915 28.9128L13.8052 21.6792V0.824089L27.6915 28.9128Z" fill="#FFD30F" stroke="#231F20" strokeWidth="0.25" strokeMiterlimit="10"></path>
                <path d="M0.520996 30.41L13.788 23.3173L27.8003 30.6235L13.788 38.6901L0.520996 30.41Z" fill="#1A1917"></path>
                <path d="M15.4903 47.1133C15.0183 47.4379 14.5292 47.7284 14.0273 47.9697C13.3695 48.2943 12.6947 48.5442 12.0112 48.7257L13.0577 50.1759C13.3909 50.0328 13.7112 49.8641 14.0273 49.6825C14.3434 49.4924 14.651 49.2853 14.9436 49.0589C15.2639 48.809 15.6184 48.5912 15.9132 48.4716C16.0605 48.4075 16.2079 48.3456 16.3595 48.29L18.0083 46.0091C17.8524 46.0347 17.7007 46.0646 17.5491 46.101C16.7568 46.2782 16.0477 46.6285 15.4903 47.1133Z" fill="#1A1917"></path>
                <path d="M17.5487 42.9422C16.7564 43.1152 16.0473 43.4655 15.4899 43.9503C15.0179 44.2749 14.5288 44.5654 14.0269 44.8067C12.8416 45.3898 11.5922 45.7464 10.3365 45.8489C10.2104 45.8575 10.0759 45.866 9.94775 45.866L11.2057 47.6088C12.1838 47.4101 13.1492 47.0385 14.0269 46.5195C14.343 46.3295 14.6506 46.1223 14.9432 45.8959C15.2635 45.646 15.618 45.4325 15.9128 45.3086C16.8568 44.8836 17.9161 44.6594 18.9796 44.6594L20.2739 42.8718C19.8894 42.7992 19.4858 42.7628 19.0843 42.7628C18.5696 42.7628 18.0506 42.8226 17.5487 42.9401V42.9422Z" fill="#1A1917"></path>
                <path d="M17.5492 39.7814C16.7569 39.9587 16.0479 40.3089 15.4904 40.7937C15.0184 41.1184 14.5294 41.4088 14.0275 41.6502C12.8422 42.2332 11.5928 42.5856 10.337 42.6881C10.1213 42.7095 9.8949 42.718 9.67065 42.718C8.9082 42.718 8.15217 42.6048 7.43457 42.3934L9.04275 44.6124V44.6166C9.20293 44.6252 9.36311 44.6295 9.52755 44.6295C11.0546 44.6295 12.6457 44.1703 14.0275 43.3566C14.3436 43.1708 14.6511 42.9636 14.9437 42.7372C15.2641 42.4874 15.6186 42.2695 15.9133 42.1499C16.8573 41.7249 17.9166 41.5007 18.9802 41.5007C19.6935 41.5007 20.3897 41.601 21.0561 41.7911L22.0898 40.3602C21.1992 39.8626 20.1612 39.6042 19.0827 39.6042C18.568 39.6042 18.049 39.664 17.5471 39.7814H17.5492Z" fill="#1A1917"></path>
                <path d="M20.3577 36.5672H20.3535L16.6929 38.6922C17.4233 38.4637 18.2028 38.3419 18.9823 38.3419C20.3236 38.3419 21.6178 38.6922 22.7198 39.35C22.7454 39.3628 22.7711 39.3756 22.7924 39.3927L23.5591 38.3291C23.1085 37.8956 22.6557 37.5026 22.1282 37.2164C21.5836 36.9089 20.9899 36.6932 20.3599 36.5672H20.3577Z" fill="#1A1917"></path>
                <path d="M23.2556 34.8842L21.7969 35.7321C22.1172 35.8581 22.4248 36.0098 22.7174 36.187C23.3004 36.5117 23.7809 36.9473 24.2316 37.4022L24.9235 36.4412C24.5733 36.1507 24.2444 35.8304 23.924 35.5207C23.6998 35.3007 23.4777 35.0871 23.2534 34.8842H23.2556Z" fill="#1A1917"></path>
                <path d="M25.402 33.637L24.2808 34.2905C24.4153 34.4251 24.5499 34.5682 24.678 34.7048C24.9685 35.0081 25.2482 35.3071 25.5472 35.5783L26.5168 34.2329C26.4036 34.1859 26.2969 34.1325 26.1879 34.0769C25.906 33.9552 25.6476 33.8078 25.3999 33.6349L25.402 33.637Z" fill="#1A1917"></path>
                <path d="M26.4058 33.0582C26.4826 33.1052 26.5659 33.1501 26.6471 33.1928C26.7945 33.2803 26.9461 33.3572 27.102 33.4256L28.0673 32.0929L26.4058 33.0582Z" fill="#1A1917"></path>
                <path d="M0.493346 32.7763C0.674881 32.7421 0.860685 32.7122 1.04222 32.6994L0 32.0929L0.493346 32.7763Z" fill="#1A1917"></path>
                <path d="M9.52927 38.3056C9.87953 38.3056 10.2298 38.2843 10.58 38.233L2.96626 33.8164C2.95345 33.8121 2.93637 33.8078 2.92355 33.8036C2.41312 33.6349 1.89414 33.5516 1.36235 33.5516C1.26197 33.5516 1.15946 33.5558 1.05908 33.5601L2.75483 35.9094C3.77569 36.0824 4.7752 36.5074 5.69569 37.1588C6.78062 37.9105 8.10476 38.3056 9.52927 38.3056Z" fill="#1A1917"></path>
                <path d="M10.3386 39.5294C10.1229 39.5465 9.89655 39.555 9.6723 39.555C8.01073 39.555 6.3705 39.0275 5.05705 38.0622C4.63845 37.7888 4.20918 37.509 3.75 37.2869L6.13771 40.5972L6.14199 40.6015C7.13295 41.1675 8.29691 41.4665 9.52921 41.4665C11.0477 41.4665 12.6217 41.0201 13.9971 40.2171L12.2202 39.1834C11.6008 39.3607 10.9708 39.4781 10.3386 39.5294Z" fill="#1A1917"></path>
                <path d="M14.9458 39.5764C14.6425 39.8092 14.3265 40.0227 13.9976 40.2171L14.0275 40.2342V40.2384L16.6928 38.6901C16.4237 38.7776 16.1653 38.8759 15.9133 38.9891C15.6186 39.1151 15.264 39.3265 14.9437 39.5764H14.9458Z" fill="#1A1917"></path>
              </svg>
            </div>
            <div className="box-border flex items-center gap-0.5 m-0 p-0 max-md:hidden">
              <button className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-4 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                About Event
              </button>
              <button className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-4 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                Schedule
              </button>
              <button className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-4 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                Hackathon
              </button>
              <button className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-4 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                Speakers
              </button>
            </div>
            {/* Mobile Hamburger Menu */}
            <button 
              className="hidden max-sm:block" 
              onClick={toggleMobileMenu}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="#141100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6H21" stroke="#141100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 18H21" stroke="#141100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          {/* Mobile Dropdown Menu */}
          <div className={`${isMobileMenuOpen ? 'max-sm:flex' : 'max-sm:hidden'} hidden max-sm:absolute max-sm:top-full max-sm:right-0 max-sm:mt-2 max-sm:w-64 max-sm:bg-[rgba(255,247,213,0.95)] max-sm:backdrop-blur-[10px] max-sm:border-2 max-sm:border-solid max-sm:border-[#FEEC96] max-sm:rounded-[15px] max-sm:p-3 max-sm:flex-col max-sm:gap-2 max-sm:shadow-lg max-sm:z-50`}>
            <button className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-3 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors text-left">
              About Event
            </button>
            <button className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-3 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors text-left">
              Schedule
            </button>
            <button className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-3 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors text-left">
              Hackathon
            </button>
            <button className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-3 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors text-left">
              Speakers
            </button>
            <div className="max-sm:flex max-sm:flex-col max-sm:gap-2 max-sm:mt-2 max-sm:pt-2 max-sm:border-t max-sm:border-[rgba(255,255,255,0.2)]">
              <button className="box-border gap-2 text-neutral-800 text-sm font-semibold leading-5 cursor-pointer bg-[#FFE677] m-0 px-3 py-2 rounded-[500px] hover:bg-[#FFE055] transition-colors">
                Become a Sponsor
              </button>
              <button className="box-border gap-2 text-neutral-800 text-sm font-semibold leading-5 cursor-pointer bg-[#F9CC00] m-0 px-3 py-2 rounded-[500px] hover:bg-[#E6B800] transition-colors">
                Apply to Speak
              </button>
            </div>
          </div>
          
          <div className="box-border flex items-center gap-4 m-0 p-0 max-sm:hidden max-md:gap-2">
            <button className="box-border gap-2 text-neutral-800 text-sm font-semibold leading-5 cursor-pointer bg-[#FFE677] m-0 px-4 py-2 rounded-[500px] max-md:text-xs max-md:px-3 max-md:py-1.5 hover:bg-[#FFE055] transition-colors">
              Become a Sponsor
            </button>
            <button className="box-border gap-2 text-neutral-800 text-sm font-semibold leading-5 cursor-pointer w-[130px] bg-[#F9CC00] m-0 px-4 py-2 rounded-[200px] max-md:text-xs max-md:w-auto max-md:px-3 max-md:py-1.5 hover:bg-[#E6B800] transition-colors">
              Apply to Speak
            </button>
          </div>
        </div>
      </nav>


        {/* Small Screen Layout - Order: Image, Logo, Button, Badges */}
        <div className={`hidden max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:relative max-sm:z-30 max-sm:mt-20 max-sm:px-4 ${isMobileMenuOpen ? 'max-sm:blur-sm' : ''}`}>
          {/* Image First on Small Screens */}
          <div className="mb-4">
            <img
              src="https://api.builder.io/api/v1/image/assets/e30a9ed2d282417f852404d6b0366525/9d140c56cb33016a2fc17547b33b0480be56f453?placeholderIfAbsent=true"
              className="aspect-[0.57] object-contain w-[70px] shrink-0 max-w-full"
              alt="EthNile Logo"
            />
          </div>
          
          {/* ETHNile Logo - Small Screen Version */}
          <div className="mb-3">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "<svg id=\"5003:4531\" width=\"240\" height=\"56\" viewBox=\"0 0 696 159\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"ethnile-logo\" style=\"box-sizing: border-box; margin: 0; padding: 0; width: 240px; height: 56px; margin: 0 auto; display: block;\"> <path d=\"M76.0498 130.978V155.658H0.0498047V37.1076H75.0798V61.7876H29.2798V83.0676H72.6398V107.748H29.2798V130.978H76.0498Z\" fill=\"#FEDB39\"></path> <path d=\"M183.33 37.1076V63.4176H150.85V155.658H120.65V63.4176H88.1699V37.1076H183.33Z\" fill=\"#FEDB39\"></path> <path d=\"M301.01 37.1076V155.658H270.8V109.048H225.66V155.658H195.45V37.1076H225.66V82.7376H270.8V37.1076H301.01Z\" fill=\"#FEDB39\"></path> <path d=\"M416.58 37.1076V155.658H390.27L330.02 51.3976H328.07V155.658H313.13V37.1076H339.11L399.36 141.368H401.31V37.1076H416.58Z\" fill=\"#FEDB39\"></path> <path d=\"M454.11 38.2476C452.4 36.3776 449.85 35.4876 446.36 35.4876C442.87 35.4876 440.35 36.3776 438.65 38.2476C436.98 40.0776 436.13 42.3876 436.13 45.2276C436.13 48.0676 436.98 50.3476 438.65 52.2076C440.35 54.0376 442.91 54.9676 446.36 54.9676C449.81 54.9676 452.41 54.0376 454.11 52.2076C455.77 50.3376 456.59 48.0276 456.59 45.2276C456.59 42.4276 455.78 40.0676 454.11 38.2476Z\" fill=\"#FEDB39\"></path> <path d=\"M457.6 68.9376V155.658H442.01V81.2776H428.69V68.9376H457.6Z\" fill=\"#FEDB39\"></path> <path d=\"M497.33 37.1076V155.658H481.74V49.4476H469.72V37.1076H497.33Z\" fill=\"#FEDB39\"></path> <path d=\"M593.28 108.238C593.28 100.968 591.78 94.1476 588.77 87.7776C585.81 81.3676 581.26 76.1676 575.13 72.1076C569.04 68.0476 561.25 66.0176 551.83 66.0176C544.6 66.0176 538.31 67.2776 532.91 69.8376C527.55 72.3576 523.17 75.7676 519.67 80.0676C516.22 84.3276 513.66 89.1176 512 94.4376C510.29 99.7176 509.44 105.198 509.44 110.838V113.758C509.44 119.278 510.29 124.678 512 129.998C513.66 135.278 516.22 140.068 519.67 144.368C523.16 148.628 527.63 152.078 533.15 154.678C538.67 157.278 545.25 158.578 552.8 158.578C559.62 158.578 565.75 157.438 571.15 155.168C576.59 152.898 581.1 149.568 584.63 145.258C588.2 140.918 590.6 135.758 591.78 129.828H577.16C576.31 133.808 573.75 137.338 569.45 140.388C565.19 143.388 559.62 144.938 552.8 144.938C546.34 144.938 540.95 143.478 536.72 140.638C532.5 137.758 529.41 133.858 527.38 128.948C525.72 124.808 524.74 120.258 524.46 115.228H593.28V108.248V108.238ZM525.12 103.528C525.61 100.608 526.38 97.9276 527.39 95.4076C529.42 90.5376 532.46 86.6776 536.52 83.8776C540.58 81.0376 545.65 79.6576 551.83 79.6576C558.01 79.6576 562.75 80.8776 566.65 83.3976C570.51 85.8776 573.43 89.3676 575.38 93.8676C576.64 96.7076 577.49 99.9576 577.94 103.528H525.12Z\" fill=\"#FEDB39\"></path> <path d=\"M76.0498 125.538V150.217H0.0498047V31.6675H75.0798V56.3475H29.2798V77.6275H72.6398V102.307H29.2798V125.538H76.0498Z\" fill=\"#292200\"></path> <path d=\"M183.33 31.6675V57.9775H150.85V150.217H120.65V57.9775H88.1699V31.6675H183.33Z\" fill=\"#292200\"></path> <path d=\"M301.01 31.6675V150.217H270.8V103.608H225.66V150.217H195.45V31.6675H225.66V77.2975H270.8V31.6675H301.01Z\" fill=\"#292200\"></path> <path d=\"M416.58 31.6675V150.217H390.27L330.02 45.9575H328.07V150.217H313.13V31.6675H339.11L399.36 135.927H401.31V31.6675H416.58Z\" fill=\"#292200\"></path> <path d=\"M454.11 32.8075C452.4 30.9375 449.85 30.0475 446.36 30.0475C442.87 30.0475 440.35 30.9375 438.65 32.8075C436.98 34.6375 436.13 36.9475 436.13 39.7875C436.13 42.6275 436.98 44.9075 438.65 46.7675C440.35 48.5975 442.91 49.5275 446.36 49.5275C449.81 49.5275 452.41 48.5975 454.11 46.7675C455.77 44.8975 456.59 42.5875 456.59 39.7875C456.59 36.9875 455.78 34.6275 454.11 32.8075Z\" fill=\"#292200\"></path> <path d=\"M457.6 63.4975V150.217H442.01V75.8375H428.69V63.4975H457.6Z\" fill=\"#292200\"></path> <path d=\"M497.33 31.6675V150.217H481.74V44.0075H469.72V31.6675H497.33Z\" fill=\"#292200\"></path> <path d=\"M593.28 102.798C593.28 95.5275 591.78 88.7075 588.77 82.3375C585.81 75.9275 581.26 70.7275 575.13 66.6675C569.04 62.6075 561.25 60.5775 551.83 60.5775C544.6 60.5775 538.31 61.8375 532.91 64.3975C527.55 66.9175 523.17 70.3275 519.67 74.6275C516.22 78.8875 513.66 83.6775 512 88.9975C510.29 94.2775 509.44 99.7575 509.44 105.397V108.318C509.44 113.838 510.29 119.237 512 124.557C513.66 129.837 516.22 134.627 519.67 138.927C523.16 143.187 527.63 146.638 533.15 149.238C538.67 151.838 545.25 153.138 552.8 153.138C559.62 153.138 565.75 151.998 571.15 149.728C576.59 147.458 581.1 144.128 584.63 139.818C588.2 135.478 590.6 130.318 591.78 124.388H577.16C576.31 128.368 573.75 131.898 569.45 134.948C565.19 137.948 559.62 139.497 552.8 139.497C546.34 139.497 540.95 138.038 536.72 135.198C532.5 132.318 529.41 128.418 527.38 123.508C525.72 119.368 524.74 114.818 524.46 109.788H593.28V102.807V102.798ZM525.12 98.0875C525.61 95.1675 526.38 92.4875 527.39 89.9675C529.42 85.0975 532.46 81.2375 536.52 78.4375C540.58 75.5975 545.65 74.2175 551.83 74.2175C558.01 74.2175 562.75 75.4375 566.65 77.9575C570.51 80.4375 573.43 83.9275 575.38 88.4275C576.64 91.2675 577.49 94.5175 577.94 98.0875H525.12Z\" fill=\"#292200\"></path> <g clip-path=\"url(#clip0_5003_4531)\"> <path d=\"M628.94 86.7526C652.782 86.7526 672.11 67.4247 672.11 43.5826C672.11 19.7404 652.782 0.412567 628.94 0.412567C605.098 0.412567 585.77 19.7404 585.77 43.5826C585.77 67.4247 605.098 86.7526 628.94 86.7526Z\" fill=\"#B09100\"></path> <path d=\"M639.27 90.0326C662.582 90.0326 681.48 71.1345 681.48 47.8226C681.48 24.5106 662.582 5.61258 639.27 5.61258C615.958 5.61258 597.06 24.5106 597.06 47.8226C597.06 71.1345 615.958 90.0326 639.27 90.0326Z\" fill=\"#FEDB39\"></path> <text fill=\"#725D00\" xml:space=\"preserve\" style=\"white-space: pre\" font-family=\"Sora\" font-size=\"42\" font-weight=\"bold\" letter-spacing=\"0em\"><tspan x=\"606.77\" y=\"67.2141\">'25</tspan></text> </g> <defs> <clipPath id=\"clip0_5003_4531\"> <rect width=\"110.23\" height=\"89.63\" fill=\"white\" transform=\"translate(585.77 0.412567)\"></rect> </clipPath> </defs> </svg>",
              }}
            />
          </div>
          
          {/* Call to Action Button - Small Screen Version */}
          <div className="mb-4">
            <a href="https://lu.ma/fajfyrbi" target="_blank" rel="noopener noreferrer">
              <button className="box-border gap-2 border text-black text-sm font-medium cursor-pointer bg-[#FFD51A] px-8 py-[12px] rounded-[500px] border-solid border-[#483B00] hover:bg-[#FFD000] transition-colors">
                Register to Attend
              </button>
            </a>
          </div>
        </div>

        {/* Large Screen Layout - Images in Original Badge Positions */}
        <div className={`relative w-[900px] max-w-full ml-[31px] mt-[100px] max-md:mt-[90px] max-sm:hidden max-sm:ml-0 max-sm:px-4 ${isMobileMenuOpen ? 'max-sm:blur-sm' : ''}`}>
          <div className="gap-8 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[40%] max-md:w-full max-md:ml-0">
              <img
                src="/sidetwo.png"
                className="w-full max-w-[500px] h-auto object-contain mt-[8px] max-md:mt-4"
                alt="Conference"
              />
            </div>
            <div className="w-[20%] ml-4 max-md:w-full max-md:ml-0 flex justify-center">
              <img
                src="https://api.builder.io/api/v1/image/assets/e30a9ed2d282417f852404d6b0366525/9d140c56cb33016a2fc17547b33b0480be56f453?placeholderIfAbsent=true"
                className="aspect-[0.57] object-contain w-[80px] shrink-0 max-w-full max-md:mt-4"
                alt="EthNile Logo"
              />
            </div>
            <div className="w-[40%] ml-4 max-md:w-full max-md:ml-0">
              <img
                src="/sideone.png"
                className="w-full max-w-[500px] h-auto object-contain mt-2 max-md:mt-4"
                alt="Hackathon"
              />
            </div>
          </div>
        </div>

        {/* ETHNile Logo - Only on Large Screens - Reduced Size */}
        <div className={`relative z-10 mt-[1px] mb-[10px] max-md:hidden max-sm:hidden ${isMobileMenuOpen ? 'max-sm:blur-sm' : ''}`}>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=\"5003:4531\" width=\"240\" height=\"56\" viewBox=\"0 0 696 159\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"ethnile-logo\" style=\"box-sizing: border-box; margin: 0; padding: 0; width: 240px; height: 56px; margin: 0 auto; display: block;\"> <path d=\"M76.0498 130.978V155.658H0.0498047V37.1076H75.0798V61.7876H29.2798V83.0676H72.6398V107.748H29.2798V130.978H76.0498Z\" fill=\"#FEDB39\"></path> <path d=\"M183.33 37.1076V63.4176H150.85V155.658H120.65V63.4176H88.1699V37.1076H183.33Z\" fill=\"#FEDB39\"></path> <path d=\"M301.01 37.1076V155.658H270.8V109.048H225.66V155.658H195.45V37.1076H225.66V82.7376H270.8V37.1076H301.01Z\" fill=\"#FEDB39\"></path> <path d=\"M416.58 37.1076V155.658H390.27L330.02 51.3976H328.07V155.658H313.13V37.1076H339.11L399.36 141.368H401.31V37.1076H416.58Z\" fill=\"#FEDB39\"></path> <path d=\"M454.11 38.2476C452.4 36.3776 449.85 35.4876 446.36 35.4876C442.87 35.4876 440.35 36.3776 438.65 38.2476C436.98 40.0776 436.13 42.3876 436.13 45.2276C436.13 48.0676 436.98 50.3476 438.65 52.2076C440.35 54.0376 442.91 54.9676 446.36 54.9676C449.81 54.9676 452.41 54.0376 454.11 52.2076C455.77 50.3376 456.59 48.0276 456.59 45.2276C456.59 42.4276 455.78 40.0676 454.11 38.2476Z\" fill=\"#FEDB39\"></path> <path d=\"M457.6 68.9376V155.658H442.01V81.2776H428.69V68.9376H457.6Z\" fill=\"#FEDB39\"></path> <path d=\"M497.33 37.1076V155.658H481.74V49.4476H469.72V37.1076H497.33Z\" fill=\"#FEDB39\"></path> <path d=\"M593.28 108.238C593.28 100.968 591.78 94.1476 588.77 87.7776C585.81 81.3676 581.26 76.1676 575.13 72.1076C569.04 68.0476 561.25 66.0176 551.83 66.0176C544.6 66.0176 538.31 67.2776 532.91 69.8376C527.55 72.3576 523.17 75.7676 519.67 80.0676C516.22 84.3276 513.66 89.1176 512 94.4376C510.29 99.7176 509.44 105.198 509.44 110.838V113.758C509.44 119.278 510.29 124.678 512 129.998C513.66 135.278 516.22 140.068 519.67 144.368C523.16 148.628 527.63 152.078 533.15 154.678C538.67 157.278 545.25 158.578 552.8 158.578C559.62 158.578 565.75 157.438 571.15 155.168C576.59 152.898 581.1 149.568 584.63 145.258C588.2 140.918 590.6 135.758 591.78 129.828H577.16C576.31 133.808 573.75 137.338 569.45 140.388C565.19 143.388 559.62 144.938 552.8 144.938C546.34 144.938 540.95 143.478 536.72 140.638C532.5 137.758 529.41 133.858 527.38 128.948C525.72 124.808 524.74 120.258 524.46 115.228H593.28V108.248V108.238ZM525.12 103.528C525.61 100.608 526.38 97.9276 527.39 95.4076C529.42 90.5376 532.46 86.6776 536.52 83.8776C540.58 81.0376 545.65 79.6576 551.83 79.6576C558.01 79.6576 562.75 80.8776 566.65 83.3976C570.51 85.8776 573.43 89.3676 575.38 93.8676C576.64 96.7076 577.49 99.9576 577.94 103.528H525.12Z\" fill=\"#FEDB39\"></path> <path d=\"M76.0498 125.538V150.217H0.0498047V31.6675H75.0798V56.3475H29.2798V77.6275H72.6398V102.307H29.2798V125.538H76.0498Z\" fill=\"#292200\"></path> <path d=\"M183.33 31.6675V57.9775H150.85V150.217H120.65V57.9775H88.1699V31.6675H183.33Z\" fill=\"#292200\"></path> <path d=\"M301.01 31.6675V150.217H270.8V103.608H225.66V150.217H195.45V31.6675H225.66V77.2975H270.8V31.6675H301.01Z\" fill=\"#292200\"></path> <path d=\"M416.58 31.6675V150.217H390.27L330.02 45.9575H328.07V150.217H313.13V31.6675H339.11L399.36 135.927H401.31V31.6675H416.58Z\" fill=\"#292200\"></path> <path d=\"M454.11 32.8075C452.4 30.9375 449.85 30.0475 446.36 30.0475C442.87 30.0475 440.35 30.9375 438.65 32.8075C436.98 34.6375 436.13 36.9475 436.13 39.7875C436.13 42.6275 436.98 44.9075 438.65 46.7675C440.35 48.5975 442.91 49.5275 446.36 49.5275C449.81 49.5275 452.41 48.5975 454.11 46.7675C455.77 44.8975 456.59 42.5875 456.59 39.7875C456.59 36.9875 455.78 34.6275 454.11 32.8075Z\" fill=\"#292200\"></path> <path d=\"M457.6 63.4975V150.217H442.01V75.8375H428.69V63.4975H457.6Z\" fill=\"#292200\"></path> <path d=\"M497.33 31.6675V150.217H481.74V44.0075H469.72V31.6675H497.33Z\" fill=\"#292200\"></path> <path d=\"M593.28 102.798C593.28 95.5275 591.78 88.7075 588.77 82.3375C585.81 75.9275 581.26 70.7275 575.13 66.6675C569.04 62.6075 561.25 60.5775 551.83 60.5775C544.6 60.5775 538.31 61.8375 532.91 64.3975C527.55 66.9175 523.17 70.3275 519.67 74.6275C516.22 78.8875 513.66 83.6775 512 88.9975C510.29 94.2775 509.44 99.7575 509.44 105.397V108.318C509.44 113.838 510.29 119.237 512 124.557C513.66 129.837 516.22 134.627 519.67 138.927C523.16 143.187 527.63 146.638 533.15 149.238C538.67 151.838 545.25 153.138 552.8 153.138C559.62 153.138 565.75 151.998 571.15 149.728C576.59 147.458 581.1 144.128 584.63 139.818C588.2 135.478 590.6 130.318 591.78 124.388H577.16C576.31 128.368 573.75 131.898 569.45 134.948C565.19 137.948 559.62 139.497 552.8 139.497C546.34 139.497 540.95 138.038 536.72 135.198C532.5 132.318 529.41 128.418 527.38 123.508C525.72 119.368 524.74 114.818 524.46 109.788H593.28V102.807V102.798ZM525.12 98.0875C525.61 95.1675 526.38 92.4875 527.39 89.9675C529.42 85.0975 532.46 81.2375 536.52 78.4375C540.58 75.5975 545.65 74.2175 551.83 74.2175C558.01 74.2175 562.75 75.4375 566.65 77.9575C570.51 80.4375 573.43 83.9275 575.38 88.4275C576.64 91.2675 577.49 94.5175 577.94 98.0875H525.12Z\" fill=\"#292200\"></path> <g clip-path=\"url(#clip0_5003_4531)\"> <path d=\"M628.94 86.7526C652.782 86.7526 672.11 67.4247 672.11 43.5826C672.11 19.7404 652.782 0.412567 628.94 0.412567C605.098 0.412567 585.77 19.7404 585.77 43.5826C585.77 67.4247 605.098 86.7526 628.94 86.7526Z\" fill=\"#B09100\"></path> <path d=\"M639.27 90.0326C662.582 90.0326 681.48 71.1345 681.48 47.8226C681.48 24.5106 662.582 5.61258 639.27 5.61258C615.958 5.61258 597.06 24.5106 597.06 47.8226C597.06 71.1345 615.958 90.0326 639.27 90.0326Z\" fill=\"#FEDB39\"></path> <text fill=\"#725D00\" xml:space=\"preserve\" style=\"white-space: pre\" font-family=\"Sora\" font-size=\"42\" font-weight=\"bold\" letter-spacing=\"0em\"><tspan x=\"606.77\" y=\"67.2141\">'25</tspan></text> </g> <defs> <clipPath id=\"clip0_5003_4531\"> <rect width=\"110.23\" height=\"89.63\" fill=\"white\" transform=\"translate(585.77 0.412567)\"></rect> </clipPath> </defs> </svg>",
            }}
          />
        </div>
        
        {/* Event Tagline and CTA Section - Only on Large Screens */}
        <div className={`relative z-20 flex flex-col items-center mt-[5px] max-md:mt-[12px] max-sm:hidden ${isMobileMenuOpen ? 'max-sm:blur-sm' : ''}`}>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7f185eac98f20cc1d777075f8dcf9968e627c771?width=865"
            alt="Event Tagline"
            className="box-border w-[433px] h-12 mb-[10px] m-0 p-0 max-md:w-[350px] max-md:h-[38px] max-sm:w-[280px] max-sm:h-[30px]"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ee654e4ade0d6252b1129f5e139d847ea0904678?width=895"
            alt="Hero Side Decoration"
            className="box-border absolute w-[447px] h-[196px] m-0 p-0 right-[100px] top-[244px] max-md:hidden"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/5ee749183733d76746256aa0bb96e147429d779b?width=819"
            alt="Hero Left Decoration"
            className="box-border absolute w-[410px] h-[212px] m-0 p-0 left-[120px] top-[322px] max-md:hidden"
          />
          <div className="box-border flex items-center gap-1 mt-[5px] m-0 p-0 max-md:flex-col max-md:gap-4">
            <button className="box-border w-[273px] h-[73px] cursor-pointer m-0 p-0 hover:opacity-90 transition-opacity">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0d9f813680454b1805d95919f25b1ee6fb13d727?width=546"
                alt="Register Now"
                className="w-full h-full"
              />
            </button>
            <button className="box-border w-[273px] h-[73px] cursor-pointer m-0 p-0 hover:opacity-90 transition-opacity">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/270c9ed92aacec67f3ba59cf99a75f76154310f7?width=546"
                alt="Become a Sponsor"
                className="w-full h-full"
              />
            </button>
          </div>
        </div>

        {/* Small Screen Event Info Badges - Compact Layout */}
        <div className={`hidden max-sm:block max-sm:mt-8 max-sm:mb-8 ${isMobileMenuOpen ? 'max-sm:blur-sm' : ''}`}>
          <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-6">
            <div className="max-sm:flex max-sm:gap-6 max-sm:justify-center max-sm:items-start">
              <div>
                <div className="rotate-[0.2617993898945194rad] bg-[rgba(199,164,5,1)] flex items-center gap-2 text-sm text-white font-extrabold whitespace-nowrap tracking-[2.2px] leading-5 justify-center px-6 py-3 rounded-[500px] border-[rgba(255,242,184,1)] border-solid border-[8px]">
                  <span className="self-stretch my-auto">CONFERENCE</span>
                </div>
              </div>
              <div className="max-sm:flex max-sm:flex-col max-sm:gap-3">
                <div>
                  <div className="rotate-[-0.2617993898945194rad] bg-[rgba(184,152,9,1)] flex items-center gap-2 text-sm text-white font-extrabold whitespace-nowrap tracking-[2.2px] leading-5 justify-center px-6 py-3 rounded-[500px] border-[rgba(255,242,184,1)] border-solid border-[8px]">
                    <span className="self-stretch my-auto">HACKATHON</span>
                  </div>
                </div>
                <div>
                  <div className="rotate-[-0.2617993898945194rad] bg-[rgba(255,234,139,1)] flex items-center gap-2 text-sm text-black font-extrabold uppercase tracking-[2.2px] leading-5 justify-center px-6 py-3 rounded-[500px] border-[rgba(255,240,169,1)] border-solid border-[8px]">
                    <span className="self-stretch my-auto">Kampala</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-sm:flex max-sm:justify-center">
              <div className="max-sm:flex max-sm:gap-6">
                <div className="rotate-[0.2617993898945194rad] bg-[rgba(255,234,139,1)] flex items-center gap-2 text-sm text-black font-extrabold uppercase tracking-[2.2px] leading-5 justify-center px-6 py-3 rounded-[500px] border-[rgba(255,240,169,1)] border-solid border-[8px]">
                  <span className="self-stretch my-auto">16-19 OCT.</span>
                </div>
                <div className="max-sm:mt-12">
                  <div className="rotate-[0.2617993898945194rad] bg-[rgba(255,224,88,1)] flex items-center gap-2 text-sm text-black font-extrabold whitespace-nowrap tracking-[2.2px] leading-5 justify-center px-6 py-3 rounded-[500px] border-[rgba(255,240,174,1)] border-solid border-[8px]">
                    <span className="self-stretch my-auto">HYBRID</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
 