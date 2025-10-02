import React from 'react';

const Speaking: React.FC = () => {
  const speakers = [
    { 
      name: 'Awel Uwihanganye', 
      role: 'Community Manager - Gitcoin', 
      image: '/Awel.jpeg',
      profileUrl: 'https://www.linkedin.com/in/awel-uwihanganye-58a96b149'
    },
    { 
      name: 'Daniel Kimotho', 
      role: 'Ecosystem Growth - Celo Africa', 
      image: '/daniel.jpeg',
      profileUrl: 'https://www.linkedin.com/in/daniel-kimotho'
    },
    { 
      name: 'Kashushu Karungi', 
      role: 'Tech Lead - Ethereum Foundation', 
      image: '/kashushu.jpeg',
      profileUrl: 'https://www.linkedin.com/in/kashushu-karungi-160087213'
    },
    { 
      name: 'Solene Daviaud', 
      role: 'Blockchain Developer - Polygon', 
      image: '/solene.jpeg',
      profileUrl: 'https://www.linkedin.com/in/solene-daviaud'
    },
    { 
      name: 'Jordan Muthemba', 
      role: 'DeFi Specialist - Aave', 
      image: '/jordan.jpeg',
      profileUrl: 'https://www.linkedin.com/in/jordan-muthemba'
    },
    { 
      name: 'Nasasira Daniel', 
      role: 'Smart Contract Auditor - OpenZeppelin', 
      image: '/daniell.jpeg',
      profileUrl: 'https://x.com/nasasira_daniel'
    },
    { 
      name: 'Eddie Kago', 
      role: 'Web3 Researcher - ConsenSys', 
      image: '/kargo.jpeg',
      profileUrl: 'https://www.linkedin.com/in/eddiekago'
    },
    { 
      name: 'Jovan Mwesigwa', 
      role: 'NFT Artist & Developer', 
      image: '/jovan.jpeg',
      profileUrl: 'https://www.linkedin.com/in/jovan-mwesigwa'
    },
    { 
      name: 'Mulondo Daniel', 
      role: 'Blockchain Educator - BitHub Africa', 
      image: '/mulondo.jpeg',
      profileUrl: 'https://www.linkedin.com/in/mulondodaniel/'
    },
    { 
      name: 'Ivan Kibuuka', 
      role: 'Protocol Engineer - Chainlink', 
      image: '/ivan.jpeg',
      profileUrl: 'https://www.linkedin.com/in/ivan-kibuuka/'
    },
    { 
      name: 'Elias Hezron', 
      role: 'DAO Governance Expert', 
      image: '/elias.jpeg',
      profileUrl: 'https://www.linkedin.com/in/eliashezron'
    },
    { 
      name: 'Ashirafu Walumu', 
      role: 'Security Researcher - Trail of Bits', 
      image: '/ashiraff.jpeg',
      profileUrl: 'https://www.linkedin.com/in/ashirafu-walumu-125a5a167/?originalSubdomain=ug'
    },
  ];

  return (
    <section id="speaking" className="box-border flex w-full flex-col justify-center items-center gap-12 bg-yellow-100 m-0 mt-[80px] mb-[80px] py-[40px] max-md:py-8 max-sm:py-5">
      {/* Meet our Speakers Section */}
      <div className="box-border flex w-full flex-col justify-center items-center gap-8 m-0 px-[60px] max-md:px-[30px] max-sm:px-5">
        <h2 className="box-border text-[48px] font-semibold leading-[48px] bg-clip-text text-center m-0 p-0 max-md:text-4xl max-sm:text-3xl" style={{color: '#68570E'}}>
          Meet our Speakers
        </h2>
        
        {/* Speaker Cards Grid - 12 speakers */}
        <div className="box-border grid grid-cols-4 gap-4 w-full max-w-[900px] max-lg:grid-cols-2 max-sm:grid-cols-1">
          {speakers.map((speaker, index) => (
            <a
              key={`speaker-${index}`}
              href={speaker.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="box-border flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer bg-white"
            >
              <div className="box-border bg-[#999999] h-[220px] w-full overflow-hidden relative flex-shrink-0">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300"
                  style={{ objectFit: 'cover', objectPosition: 'center center' }}
                  onError={(e) => {
                    e.currentTarget.src = '/daniel.jpeg';
                  }}
                />
                {/* Hover overlay with icon */}
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 3h6v6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 14L21 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="box-border bg-[#FFEEA1] p-3 border-2 border-t-0 border-[#D4C89A] flex-grow">
                <h3 className="box-border text-base font-semibold m-0 mb-1 truncate" style={{color: '#141100'}}>
                  {speaker.name}
                </h3>
                <p className="box-border text-xs m-0 line-clamp-2" style={{color: '#141100'}}>
                  {speaker.role}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Interested in Speaking Section */}
      <div className="box-border flex w-full max-w-[920px] flex-col justify-center items-center gap-8 m-0 mx-[60px] px-[80px] py-[60px] bg-yellow-50 rounded-2xl border-2 border-[#D4C89A] max-md:mx-[30px] max-md:px-[40px] max-md:py-[40px] max-sm:mx-5 max-sm:px-5 max-sm:py-8">
        <h2 className="box-border text-[40px] font-semibold leading-[48px] text-center m-0 p-0 max-md:text-3xl max-sm:text-2xl" style={{color: '#68570E'}}>
          Interested in Speaking?
        </h2>
        <p className="box-border text-black text-center text-[18px] font-normal leading-[28px] m-0 p-0 max-md:text-base max-sm:text-sm">
          Are you a blockchain pioneer, tech innovator, or thought leader
          with insights to share? EthNile 2025 offers a unique platform to
          showcase your expertise, inspire a community, and influence the
          future of technology in Africa.
        </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScHJD-2E-qmxz7eI1lf5TULD4WCYYkD-IdZu5dHim_EIoL1TQ/viewform" target="_blank" rel="noopener noreferrer">
          <button className="box-border flex justify-center items-center gap-2.5 text-[#141100] text-[16px] font-medium cursor-pointer bg-[#FFD51A] m-0 px-[60px] py-[16px] rounded-full border-none max-sm:text-sm max-sm:px-10 max-sm:py-[15px] hover:bg-[#FFD000] transition-colors">
            Get in touch
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{margin: 0, padding: 0, boxSizing: 'border-box', width: '16px', height: '16px'}}>
              <path d="M15.0972 2.90283L15.0972 11.0321L13.4713 11.0321L13.4713 5.66677L4.04141 15.0967L2.90332 13.9586L12.3332 4.52868L6.96794 4.52868L6.96794 2.90283L15.0972 2.90283Z" fill="#7C6600"></path>
            </svg>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Speaking;