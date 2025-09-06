import { useRef, useState } from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Menu from './Menu';

const Navbar = (props) => {
  
  const [isMenuOpen,setIsMenuOpen] = useState(false);

  // use ref
  const container = useRef(null);
  const timeline = useRef();


  // useGSAP to set up the animation timeline
  useGSAP(() => {
    timeline.current = gsap.timeline({ paused: true });

    timeline.current
      .to('.reveal-box', {
        y: '100%',
        duration: 0.4,
        ease: 'power2.inOut',
      })
      .to(
        '#hamburger-svg line',
        {
          stroke: 'black',
          duration: 0.2,
        },
        '<' 
      );
  }, { scope: container });

  // Event handlers to play and reverse the timeline
  const handleMouseEnter = () => {
    timeline.current.play();
  };

  const handleMouseLeave = () => {
    timeline.current.reverse();
  };

  return (
    <>
       { isMenuOpen && <Menu menuOff={setIsMenuOpen}/> }

      <nav className='flex z-40 justify-between'>
        {/* logo */}
        <Link to="/" className='ps-3 pt-3'>
          <Logo color={props.logo_color} />
        </Link>

        {/* hamburger */}
        <div
          onClick={()=> setIsMenuOpen(true) }
          ref={container}
          className="h-[2.7vw] w-72 bg-black p-5 flex justify-end items-center cursor-pointer relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className='reveal-box h-full w-full bg-[#d3fd50] absolute top-[-100%] right-0 z-20'
            id="reveal-box"
          ></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="24"
            viewBox="0 0 100 24"
            className='z-30 relative'
            id="hamburger-svg"
          >
            <line x1="20" y1="8" x2="75" y2="8" stroke="white" strokeWidth="2" />
            <line x1="50" y1="16" x2="75" y2="16" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </nav>
    </>
  );
}

export default Navbar;