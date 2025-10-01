import React, { useState, useRef, useEffect } from 'react';
import QRCode from 'qrcode';

const GenerateDPA = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGenerateDPAOpen, setIsGenerateDPAOpen] = useState(false);
  const [name, setName] = useState('');
  const [debouncedName, setDebouncedName] = useState('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleGenerateDPA = () => {
    setIsGenerateDPAOpen(!isGenerateDPAOpen);
  };

  const closeGenerateDPA = () => {
    setIsGenerateDPAOpen(false);
  };

  const generateShareLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    alert('Share link copied to clipboard!');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const drawDesign = async (canvas: HTMLCanvasElement, imgSrc: string | null = null, displayName = '') => {
    return new Promise<void>((resolve, reject) => {
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }
      
      // Set canvas size to match the design (high resolution for download)
      canvas.width = 1093;
      canvas.height = 1092;

      // Load and draw background image first
      const bgImg = new Image();
      bgImg.onload = () => {
        // Draw background image to cover entire canvas
        ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
        
        // Continue with the rest of the drawing
        continueDrawing();
      };
      bgImg.onerror = () => {
        // If background image fails to load, continue without it
        continueDrawing();
      };
      bgImg.src = '/heroback.png';

      const continueDrawing = () => {
        // Create gradient background overlay (semi-transparent)
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, 'rgba(255, 251, 234, 0.95)');
        gradient.addColorStop(0.82, 'rgba(255, 251, 234, 0.95)');
        gradient.addColorStop(1, 'rgba(255, 199, 0, 0.95)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add subtle decorative circles
      ctx.fillStyle = 'rgba(255, 225, 100, 0.15)';
      ctx.beginPath();
      ctx.arc(350, 200, 180, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = 'rgba(255, 225, 100, 0.2)';
      ctx.beginPath();
      ctx.arc(800, 350, 220, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = 'rgba(255, 225, 100, 0.1)';
      ctx.beginPath();
      ctx.arc(200, 650, 150, 0, Math.PI * 2);
      ctx.fill();

      // Add ETHNile logo text
      ctx.fillStyle = '#141100';
      ctx.font = 'bold 52px Arial, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('ETHNile', 120, 135);
      
      // Add '25 badge
      ctx.fillStyle = '#FFD51A';
      ctx.beginPath();
      ctx.arc(335, 100, 22, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#141100';
      ctx.font = 'bold 18px Arial';
      ctx.fillText("'25", 322, 107);

      // Add tagline
      ctx.font = '15px Arial';
      ctx.fillStyle = '#6B5D4F';
      ctx.fillText('Decentralizing Possibilities -', 120, 155);
      ctx.fillText('Unlocking Innovation at the Source', 120, 172);

      // Add navigation buttons with yellow background
      const navY = 115;
      const navHeight = 50;
      const navX = 580;
      const navWidth = 440;
      
      // Yellow rounded rectangle background
      ctx.fillStyle = '#FFD51A';
      ctx.beginPath();
      ctx.roundRect(navX, navY - 25, navWidth, navHeight, 25);
      ctx.fill();
      
      // Black border
      ctx.strokeStyle = '#141100';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Button text with better spacing
      ctx.fillStyle = '#141100';
      ctx.font = 'bold 16px Arial';
      ctx.textAlign = 'center';
      
      // Calculate positions for even distribution
      const btn1X = navX + navWidth * 0.2;
      const btn2X = navX + navWidth * 0.5;
      const btn3X = navX + navWidth * 0.8;
      const textY = navY + 5;
      
      ctx.fillText('HACKATHON', btn1X, textY);
      ctx.fillText('|', navX + navWidth * 0.35, textY);
      ctx.fillText('CONFERENCE', btn2X, textY);
      ctx.fillText('|', navX + navWidth * 0.65, textY);
      ctx.fillText('CITY TOUR', btn3X, textY);

      // Add main text
      ctx.fillStyle = '#4A4A4A';
      ctx.font = '36px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('I have registered for', canvas.width / 2, 290);
      
      ctx.fillStyle = '#141100';
      ctx.font = 'bold 56px Arial';
      ctx.fillText('ETHNile Conference', canvas.width / 2, 355);

      // Circular image with yellow border
      const centerX = canvas.width / 2;
      const centerY = 550;
      const radius = 180;

      // Draw yellow border/ring
      ctx.strokeStyle = '#FFD51A';
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 4, 0, Math.PI * 2);
      ctx.stroke();

      // Bottom yellow section (drawn early to layer correctly)
      const bottomY = 892;
      ctx.fillStyle = '#FFC700';
      ctx.fillRect(0, bottomY, canvas.width, canvas.height - bottomY);

      // Add registration info (moved left to avoid QR code)
      const leftColumnX = 120;
      ctx.fillStyle = '#141100';
      ctx.font = 'bold 18px Arial';
      ctx.textAlign = 'left';
      ctx.fillText('Register:', leftColumnX, 935);
      ctx.font = '17px Arial';
      ctx.fillText('https://tinyurl.com/EthnileReg', leftColumnX, 960);

      // Add date and location with better spacing
      const dateLocationY = 1005;
      ctx.font = 'bold 32px Arial';
      ctx.fillText('16th - 25th Oct. 2025', leftColumnX, dateLocationY);
      
      ctx.font = 'bold 28px Arial';
      ctx.fillText('Ndere Cultural Centre, Kampala, Uganda', leftColumnX, dateLocationY + 40);

      // Generate real QR code as data URL and draw it (moved to right side)
      const qrX = 880;
      const qrY = 920;
      const qrSize = 130;
      
      // White background for QR code with some padding
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(qrX - 5, qrY - 5, qrSize + 10, qrSize + 10);
      
      // Add border around QR code
      ctx.strokeStyle = '#141100';
      ctx.lineWidth = 2;
      ctx.strokeRect(qrX - 5, qrY - 5, qrSize + 10, qrSize + 10);
      
      QRCode.toDataURL('https://tinyurl.com/EthnileReg', {
        width: qrSize,
        margin: 0,
        color: { dark: '#141100', light: '#FFFFFF' }
      }, (err, qrUrl) => {
        if (err) {
          console.error(err);
          reject(err);
          return;
        }
        
        const qrImg = new Image();
        qrImg.onload = () => {
          ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);
          
          // Label below QR code
          ctx.fillStyle = '#141100';
          ctx.font = 'bold 14px Arial';
          ctx.textAlign = 'center';
          ctx.fillText('Scan to Register', qrX + qrSize/2, qrY + qrSize + 22);

          // Now draw the image if provided (async part)
          if (imgSrc) {
            const img = new Image();
            img.onload = () => {
              ctx.save();
              ctx.beginPath();
              ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
              ctx.clip();

              // Calculate scaling to cover the circle (cover fit)
              const scale = Math.max(
                (radius * 2) / img.width,
                (radius * 2) / img.height
              );
              const scaledWidth = img.width * scale;
              const scaledHeight = img.height * scale;
              const offsetX = centerX - scaledWidth / 2;
              const offsetY = centerY - scaledHeight / 2;

              ctx.drawImage(img, offsetX, offsetY, scaledWidth, scaledHeight);
              ctx.restore();

              // Add orange name bar below the circle
              const barWidth = 405;
              const barHeight = 57;
              const barX = centerX - barWidth / 2;
              const barY = centerY + radius + 10;

              ctx.fillStyle = '#FF8C00';
              ctx.fillRect(barX, barY, barWidth, barHeight);

              // Add name on orange strip
              ctx.fillStyle = '#FFFFFF';
              ctx.font = 'bold 32px Arial';
              ctx.textAlign = 'center';
              ctx.fillText(displayName || '', centerX, barY + 38);

              resolve();
            };
            img.onerror = reject;
            img.src = imgSrc;
          } else {
            // Draw placeholder circle with orange background
            ctx.fillStyle = '#FF8C00';
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.fill();

            // Draw crosshair/guides
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.lineWidth = 2;
            ctx.setLineDash([10, 5]);
            
            // Vertical line
            ctx.beginPath();
            ctx.moveTo(centerX, centerY - radius + 20);
            ctx.lineTo(centerX, centerY + radius - 20);
            ctx.stroke();
            
            // Horizontal line
            ctx.beginPath();
            ctx.moveTo(centerX - radius + 20, centerY);
            ctx.lineTo(centerX + radius - 20, centerY);
            ctx.stroke();
            
            ctx.setLineDash([]);

            // Add orange name bar below the circle
            const barWidth = 405;
            const barHeight = 57;
            const barX = centerX - barWidth / 2;
            const barY = centerY + radius + 10;

            ctx.fillStyle = '#FF8C00';
            ctx.fillRect(barX, barY, barWidth, barHeight);

            // Add placeholder name or actual name
            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 32px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(displayName || '', centerX, barY + 38);

            resolve();
          }
        };
        qrImg.onerror = reject;
        qrImg.src = qrUrl;
      });
      }; // Close continueDrawing function
    });
  };

  // Debounce name input to reduce canvas redraws
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedName(name);
    }, 300);
    return () => clearTimeout(timer);
  }, [name]);

  // Live preview update (lower resolution for performance)
  useEffect(() => {
    const updatePreview = async () => {
      if (previewCanvasRef.current) {
        // Set canvas size only if it hasn't been set yet
        if (previewCanvasRef.current.width !== 1093 / 2 || previewCanvasRef.current.height !== 1092 / 2) {
          previewCanvasRef.current.width = 1093 / 2;
          previewCanvasRef.current.height = 1092 / 2;
        }
        const ctx = previewCanvasRef.current.getContext('2d');
        if (ctx) {
          ctx.save();
          ctx.scale(0.5, 0.5);
          await drawDesign(previewCanvasRef.current, uploadedImage, debouncedName);
          ctx.restore();
        }
      }
    };
    updatePreview();
  }, [debouncedName, uploadedImage]);

  const generateImage = async () => {
    if (!uploadedImage) {
      alert('📸 Upload Required!\n\nPlease upload your photo to create your personalized ETHNile Conference display picture.');
      return false;
    }
    if (!name) {
      alert('✍️ Name Required!\n\nPlease enter your name to complete your ETHNile Conference display picture.');
      return false;
    }

    // Generate on hidden canvas
    if (canvasRef.current) {
      await drawDesign(canvasRef.current, uploadedImage, name);
      
      // Update preview URL for display if needed (but since live preview, optional)
      const generatedUrl = canvasRef.current.toDataURL('image/png');
      setPreviewUrl(generatedUrl);
    }
    return true;
  };

  const downloadImage = async () => {
    const success = await generateImage();
    if (!success || !canvasRef.current) return;

    const link = document.createElement('a');
    link.download = `ethnile-conference-${name.replace(/\s+/g, '-')}.png`;
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  const handleCircleClick = () => {
    document.getElementById('imageUpload')?.click();
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Generate Your ETHNile Conference DP',
      text: 'Create your custom display picture for ETHNile Conference 2025!',
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(shareData.url);
        alert('Link copied to clipboard! Share it with your friends.');
      }
    } catch (err) {
      console.error('Share failed:', err);
      alert('Unable to share. Please copy the URL manually.');
    }
  };


  return (
    <div className="min-h-screen bg-[rgba(255,251,234,1)]">
      {/* Navigation Bar - Same as Hero component */}
      <nav className="box-border absolute z-50 m-0 p-0 top-6 inset-x-[90px] max-md:inset-x-5 max-sm:inset-x-2.5 max-sm:top-3">
        <div className="box-border flex w-full h-[65px] justify-between items-center backdrop-blur-[5px] bg-[rgba(255,247,213,0.50)] m-0 px-[25px] py-2 rounded-[500px] border-2 border-solid border-[#FEEC96] max-md:h-auto max-md:px-4 max-md:py-2 max-sm:flex-col max-sm:gap-2 max-sm:h-auto max-sm:px-3 max-sm:py-2 max-sm:rounded-[20px]">
          <div className="box-border flex items-center gap-[30px] m-0 p-0 max-sm:gap-[15px] max-sm:w-full max-sm:justify-between">
            <div className="max-sm:scale-75">
              <svg width="29" height="51" viewBox="0 0 29 51" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo" style={{margin: 0, padding: 0, boxSizing: 'border-box', width: '28.067px', height: '49.352px'}}>
                <path d="M13.8052 0.824089V21.6792L13.7945 21.6685L0.668457 28.6865L13.8052 0.824089Z" fill="#FFD30F" stroke="#231F20" strokeWidth="0.25" strokeMiterlimit="10"></path>
                <path d="M27.6915 28.9128L13.8052 21.6792V0.824089L27.6915 28.9128Z" fill="#FFD30F" stroke="#231F20" strokeWidth="0.25" strokeMiterlimit="10"></path>
                <path d="M0.520996 30.41L13.788 23.3173L27.8003 30.6235L13.788 38.6901L0.520996 30.41Z" fill="#1A1917"></path>
              </svg>
            </div>
            <div className="box-border flex items-center gap-0.5 m-0 p-0 max-md:hidden">
              <a href="/" className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-4 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                Home
              </a>
              <a href="/#about" className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-4 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                About Event
              </a>
              <a href="/#conference" className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-4 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                Schedule
              </a>
              <a href="/#hackathon" className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-4 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                Hackathon
              </a>
              <a href="/#speaking" className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-4 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                Speakers
              </a>
              <div 
                className="relative flex-shrink-0"
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
                <div className={`absolute top-full left-0 w-full h-2 ${isGenerateDPAOpen ? 'block' : 'hidden'}`}></div>
                <div 
                  className={`absolute top-full left-0 mt-1 w-44 bg-[rgba(255,247,213,0.95)] backdrop-blur-[10px] border-2 border-solid border-[#FEEC96] rounded-[15px] p-3 shadow-lg z-[60] transition-all duration-200 ${
                    isGenerateDPAOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2 pointer-events-none'
                  }`}
                >
                  <a 
                    href="/generate-dpa" 
                    className="block px-3 py-2 text-sm text-[#141100] hover:bg-[rgba(255,255,255,0.1)] rounded-sm transition-colors font-medium"
                    onClick={closeGenerateDPA}
                  >
                    Conference Day
                  </a>
                </div>
              </div>
            </div>
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
          
          <div className={`${isMobileMenuOpen ? 'max-sm:flex' : 'max-sm:hidden'} hidden max-sm:absolute max-sm:top-full max-sm:right-0 max-sm:mt-2 max-sm:w-64 max-sm:bg-[rgba(255,247,213,0.95)] max-sm:backdrop-blur-[10px] max-sm:border-2 max-sm:border-solid max-sm:border-[#FEEC96] max-sm:rounded-[15px] max-sm:p-3 max-sm:flex-col max-sm:gap-2 max-sm:shadow-lg max-sm:z-50`}>
            <a href="/" className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-3 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors text-left">
              Home
            </a>
            <a href="/#about" className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-3 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors text-left">
              About Event
            </a>
            <a href="/#conference" className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-3 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors text-left">
              Schedule
            </a>
            <a href="/#hackathon" className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-3 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors text-left">
              Hackathon
            </a>
            <a href="/#speaking" className="box-border gap-2 text-[#141100] text-sm font-semibold leading-5 cursor-pointer m-0 px-3 py-2 rounded-sm hover:bg-[rgba(255,255,255,0.1)] transition-colors text-left">
              Speakers
            </a>
            <div className="border-t border-[rgba(255,255,255,0.2)] pt-2 mt-2">
              <div className="text-xs font-medium text-[#141100] opacity-70 px-3 py-1 uppercase tracking-wide">
                Generate DPA
              </div>
              <a href="/generate-dpa" className="block px-3 py-2 text-sm text-[#141100] hover:bg-[rgba(255,255,255,0.1)] rounded-sm transition-colors">
                Conference Day
              </a>
            </div>
          </div>
          
          <div className="box-border flex items-center gap-4 m-0 p-0 max-sm:hidden max-md:gap-2">
            <button
              onClick={generateShareLink}
              className="box-border gap-2 text-neutral-800 text-sm font-semibold leading-5 cursor-pointer bg-[#FFE677] m-0 px-4 py-2 rounded-[500px] max-md:text-xs max-md:px-3 max-md:py-1.5 hover:bg-[#FFE055] transition-colors flex items-center"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Share Link
            </button>
            <a href="/" className="box-border gap-2 text-neutral-800 text-sm font-semibold leading-5 cursor-pointer bg-[#FFE677] m-0 px-4 py-2 rounded-[500px] max-md:text-xs max-md:px-3 max-md:py-1.5 hover:bg-[#FFE055] transition-colors">
              Back to Event
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Header with Share */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Generate Your ETHNile Conference DP</h1>
            <button
              onClick={handleShare}
              className="bg-[#FFD51A] hover:bg-[#FFD000] text-[#141100] font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 border-2 border-[#483B00]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8a3 3 0 100-6 3 3 0 000 6zM6 15a3 3 0 100-6 3 3 0 000 6zM18 22a3 3 0 100-6 3 3 0 000 6zM8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Share Generator
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Live Preview */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[546px]">
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    backgroundImage: 'url(/heroback.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 0
                  }}
                />
                <canvas 
                  ref={previewCanvasRef} 
                  className="relative w-full h-auto rounded-2xl shadow-2xl border-4 border-[#FFD51A] bg-transparent"
                  style={{ zIndex: 1 }}
                />
                {/* Circular clickable overlay for upload */}
                <div 
                  className="absolute cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-44 h-44 md:w-52 md:h-52 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/50"
                  onClick={handleCircleClick}
                  style={{ zIndex: 2 }}
                >
                  <div className="text-center">
                    <div className="text-white text-5xl mb-2">📸</div>
                    <p className="text-white text-base font-semibold">{uploadedImage ? 'Change Photo' : 'Upload Photo'}</p>
                  </div>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="imageUpload"
                />
              </div>
            </div>

            {/* Right Column - Input Controls */}
            <div className="space-y-6">
              {/* Name Input Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#FFD51A] rounded-full flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="#141100" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Personalize Your DP</h2>
                </div>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-base font-semibold text-gray-700 mb-3">
                      Enter Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      maxLength={20}
                      className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#FFD51A] focus:border-[#FFD51A] text-lg font-medium placeholder-gray-400 placeholder:text-base"
                      placeholder="Your name"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-sm text-gray-500 flex items-start gap-2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 flex-shrink-0">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Appears on the orange bar
                      </p>
                      <span className="text-xs text-gray-400 font-medium">{name.length}/20</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-base font-semibold text-gray-700 mb-3">
                      Upload Your Photo
                    </label>
                    <button
                      onClick={handleCircleClick}
                      className="w-full px-6 py-4 border-2 border-dashed border-[#FFD51A] rounded-xl hover:bg-[#FFFBEA] transition-all flex items-center justify-center gap-3 text-gray-700 font-medium"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {uploadedImage ? 'Change Photo' : 'Click to Upload Photo'}
                    </button>
                    <p className="text-sm text-gray-500 mt-2 flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 flex-shrink-0">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Choose a clear photo for best results
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons Card */}
              <div className="bg-gradient-to-br from-[#FFFBEA] to-[#FFF4D4] rounded-2xl shadow-xl p-6 border-2 border-[#FFD51A] mt-4">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                    Generate & Download
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={generateImage}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-black font-bold py-5 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 text-lg"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 12a9 9 0 11-6.219-8.56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Generate Preview</span>
                  </button>
                  <button
                    onClick={downloadImage}
                    className="w-full bg-green-700 hover:bg-green-800 text-black font-bold py-5 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 text-lg"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Download Your DP</span>
                  </button>
                </div>
              </div>

              {/* Tips Card */}
              <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-500">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Quick steps
                </h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Use a square photo for best results</li>
                  <li>• Make sure your face is clearly visible</li>
                  <li>• High resolution images work better</li>
                </ul>
              </div>
            </div>
          </div>

          <canvas ref={canvasRef} style={{ display: 'none' }} />

          <div className="text-center mt-10">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#FFD51A] font-semibold transition-colors text-base"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to ETHNile Event
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateDPA;