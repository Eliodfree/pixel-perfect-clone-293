import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGenerateDPAOpen, setIsGenerateDPAOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Handle smooth scroll to section
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // Scroll to section with smooth animation
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleGenerateDPA = () => {
    setIsGenerateDPAOpen(!isGenerateDPAOpen);
  };

  const closeGenerateDPA = () => {
    setIsGenerateDPAOpen(false);
  };

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsGenerateDPAOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="box-border absolute z-50 m-0 p-0 top-6 inset-x-[90px] max-md:inset-x-5 max-sm:inset-x-2.5 max-sm:top-3">
      <div className="box-border flex w-full h-[65px] justify-between items-center backdrop-blur-[5px] bg-[rgba(255,247,213,0.50)] m-0 px-[25px] py-2 rounded-[500px] border-2 border-solid border-[#FEEC96] max-md:h-auto max-md:px-4 max-md:py-2 max-sm:flex-col max-sm:gap-2 max-sm:h-auto max-sm:px-3 max-sm:py-2 max-sm:rounded-[20px]">
        <div className="box-border flex items-center gap-[30px] m-0 p-0 max-sm:gap-[15px] max-sm:w-full max-sm:justify-between">
          <Link to="/" className="max-sm:scale-75">
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
          </Link>
          <div className="box-border flex items-center gap-0.5 m-0 p-0 max-md:hidden">
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-4 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors">
              About Event
            </a>
            <a href="#conference" onClick={(e) => handleNavClick(e, 'conference')} className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-4 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors">
              Schedule
            </a>
            <a href="#hackathon" onClick={(e) => handleNavClick(e, 'hackathon')} className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-4 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors">
              Hackathon
            </a>
            <a href="#speaking" onClick={(e) => handleNavClick(e, 'speaking')} className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-4 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors">
              Speakers
            </a>
            <div 
              className="relative flex-shrink-0" 
              ref={dropdownRef}
              onMouseEnter={() => setIsGenerateDPAOpen(true)}
              onMouseLeave={() => setTimeout(closeGenerateDPA, 150)}
            >
              <button 
                onClick={toggleGenerateDPA}
                className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-4 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors flex items-center whitespace-nowrap"
              >
                Generate DP
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`ml-1 transition-transform duration-200 ${isGenerateDPAOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {/* Invisible bridge to prevent dropdown from closing when moving mouse to dropdown */}
              <div className={`absolute top-full left-0 w-full h-2 ${isGenerateDPAOpen ? 'block' : 'hidden'}`}></div>
              <div 
                className={`absolute top-full left-0 mt-1 w-44 bg-[rgba(255,247,213,0.95)] backdrop-blur-[10px] border-2 border-solid border-[#FEEC96] rounded-[15px] p-3 shadow-lg z-[60] transition-all duration-200 ${
                  isGenerateDPAOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2 pointer-events-none'
                }`}
              >
                <Link 
                  to="/generate-dpa" 
                  className="block px-3 py-2 text-sm text-[#141100] hover:bg-[rgba(255,255,255,0.1)] rounded-sm transition-colors font-medium"
                  onClick={closeGenerateDPA}
                >
                  Conference Day
                </Link>
              </div>
            </div>
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
        <div 
          ref={mobileMenuRef}
          className={`${isMobileMenuOpen ? 'max-sm:flex' : 'max-sm:hidden'} hidden max-sm:absolute max-sm:top-full max-sm:right-0 max-sm:mt-2 max-sm:w-64 max-sm:bg-[rgba(255,247,213,0.95)] max-sm:backdrop-blur-[10px] max-sm:border-2 max-sm:border-solid max-sm:border-[#FEEC96] max-sm:rounded-[15px] max-sm:p-3 max-sm:flex-col max-sm:gap-2 max-sm:shadow-lg max-sm:z-[60]`}
        >
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-3 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors text-left">
            About Event
          </a>
          <a href="#conference" onClick={(e) => handleNavClick(e, 'conference')} className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-3 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors text-left">
            Schedule
          </a>
          <a href="#hackathon" onClick={(e) => handleNavClick(e, 'hackathon')} className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-3 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors text-left">
            Hackathon
          </a>
          <a href="#speaking" onClick={(e) => handleNavClick(e, 'speaking')} className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-3 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors text-left">
            Speakers
          </a>
          <div className="border-t border-[rgba(255,255,255,0.2)] pt-2 mt-2">
            <div className="text-xs font-medium text-[#141100] opacity-70 px-3 py-1 uppercase tracking-wide">
              Generate DPA
            </div>
            <Link to="/generate-dpa" className="block px-3 py-2 text-sm text-[#141100] hover:bg-[rgba(255,255,255,0.1)] rounded-sm transition-colors">
              Conference Day
            </Link>
          </div>
          <div className="max-sm:flex max-sm:flex-col max-sm:gap-2 max-sm:mt-2 max-sm:pt-2 max-sm:border-t max-sm:border-[rgba(255,255,255,0.2)]">
            <a href="#sponsorship" onClick={(e) => handleNavClick(e, 'sponsorship')} className="box-border gap-2 text-neutral-800 text-sm font-semibold leading-5 cursor-pointer bg-[#FFE677] m-0 px-3 py-2 rounded-[500px] hover:bg-[#FFE055] transition-colors">
              Become a Sponsor
            </a>
            <a href="#speaking" onClick={(e) => handleNavClick(e, 'speaking')} className="box-border gap-2 text-neutral-800 text-sm font-semibold leading-5 cursor-pointer bg-[#FFE677] m-0 px-3 py-2 rounded-[500px] hover:bg-[#FFE055] transition-colors">
              Apply to Speak
            </a>
          </div>
        </div>
        
        <div className="box-border flex items-center gap-4 m-0 p-0 max-sm:hidden max-md:gap-2">
          <a href="#sponsorship" onClick={(e) => handleNavClick(e, 'sponsorship')} className="box-border gap-2 text-neutral-800 text-sm font-semibold leading-5 cursor-pointer bg-[#FFE677] m-0 px-4 py-2 rounded-[500px] max-md:text-xs max-md:px-3 max-md:py-1.5 hover:bg-[#FFE055] transition-colors">
            Become a Sponsor
          </a>
          <a href="#speaking" onClick={(e) => handleNavClick(e, 'speaking')} className="box-border gap-2 text-neutral-800 text-sm font-semibold leading-5 cursor-pointer bg-[#FFE677] m-0 px-4 py-2 rounded-[500px] max-md:text-xs max-md:px-3 max-md:py-1.5 hover:bg-[#FFE055] transition-colors">
            Apply to Speak
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;