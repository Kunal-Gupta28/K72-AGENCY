import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import Montreal from '../components/Montreal'

const Home = () => {
  return (
    <main className='w-[100dvw] h-[100dvh] p-3 text-white overflow-hidden relative selection:bg-[#d3fd50] selection:text-black'>

        {/* logo and hamburger */}
        <section className='flex z-10'>

            {/* logo */}
            <Link to="/">
                <Logo/> 
            </Link>

            {/* hamburger */}
            <div  className="h-16 w-72 bg-black p-5 flex justify-end items-center absolute top-0 right-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="24" viewBox="0 0 100 24">
                <line x1="20" y1="8" x2="75" y2="8" stroke="white" strokeWidth="1" />
                <line x1="50" y1="16" x2="75" y2="16" stroke="white" strokeWidth="1" />
              </svg>
            </div>
        </section>

        {/* text part */}
        <section className='h-[100%] w-[100%] flex justify-center'>

            {/* centeral part */}
            <div className='text-[9vw] leading-[9vw] text-center absolute top-3'>
                THE SPARK FOR <br /> 
                ALL <span className='w-70 h-36 rounded-full overflow-hidden bg-amber-200 inline-block'>
                        <video 
                            autoPlay 
                            muted 
                            loop 
                            className='object-cover w-70 h-36 '
                            src="/k72_home.mp4"> 
                        </video>
                    </span> THINGS <br />
                <span className='select-none'>CREATIVE</span>
            </div>

            {/* left para */}
            <div className='w-[15%] absolute top-[55%] right-0'>
                <p className='indent-28'>
                    K72 is an agency that builds brands from every angle. 
                    Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, 
                    brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.
                </p>
            </div>

            {/* bottom links */}
           <div className='p-2 absolute bottom-0 left-0 flex justify-between items-end gap-4 text-white text-xl font-mono'>

                {/* montreal */}
                <Montreal/>

                {/* work page navigation */}
                <Link to='/work'>
                    <span className='border rounded-full text-8xl hover:text-[#d3fd50] select-none'>WORK</span>
                </Link>

                {/* work ( AGENCY ) page navigation */}
                <Link to='/about'>
                    <span className='border rounded-full text-8xl hover:text-[#d3fd50] select-none'>AGENCY</span>
                </Link>
            </div>
        </section>


        {/* background video */}
        <video 
            autoPlay 
            muted 
            loop 
            className='w-[100%] h-[100%] top-0 left-0 z-[-10] object-cover fixed' 
            src="/k72_home.mp4">    
        </video>

    </main>
  )
}

export default Home
