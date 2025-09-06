import Montreal from './Montreal'



const Footer = () => {
  const socialLinks = ['FB', 'IG', 'IN', 'BE'];
  const legalLinks = ['PRIVACY POLICY', 'PRIVACY NOTICE', 'ETHICS REPORT', 'CONSENT CHOICES'];

    // SVG Icon for the Globe
  const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
  );

  // SVG Icon for the Heart
  const HeartIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="white"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );


  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-black text-white font-sans flex flex-col justify-between p-3 pb-10" style={{ height: '70dvh' }}>
      {/* Upper part */}
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-2 md:space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="border border-white rounded-full px-4 text-lg md:text-xl font-bold tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
        <a href="#" className="flex items-center border border-white rounded-full px-4 py-2 md:px-6 md:py-3 text-lg md:text-xl font-bold tracking-wider space-x-3 hover:bg-white hover:text-black group transition-colors duration-300">
          <span>CONTACT</span>
          <div className="group-hover:fill-black">
             <HeartIcon />
          </div>
        </a>
      </div>

      {/* Lower part */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full text-xs tracking-wider space-y-4 md:space-y-0">
        <Montreal />
        <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-6 gap-y-2">
          {legalLinks.map((link) => (
            <a key={link} href="#" className="hover:underline">
              {link}
            </a>
          ))}
        </div>
        <button onClick={handleBackToTop} className="hover:underline font-semibold">
          BACK TO TOP
        </button>
      </div>
    </footer>
  );
};

export default Footer;

