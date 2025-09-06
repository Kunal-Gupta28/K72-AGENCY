import React from 'react'
import { Link } from 'react-router-dom'
import Montreal from '../components/Montreal'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    <main className='w-[100dvw] h-[100dvh] text-white overflow-hidden relative'>

        {/* navbar */}
        <section>
            <Navbar logo_color="white"/>
        </section>

        {/* text part */}
        <section className='h-[100%] w-[100%] flex justify-center'>

            {/* centeral part */}
            <div className='text-[9vw] leading-[9vw] text-center absolute top-3'>
                THE SPARK FOR <br /> 
                ALL<span className='w-70 h-36 rounded-full overflow-hidden bg-amber-200 inline-block'>
                        <video 
                            autoPlay 
                            muted 
                            loop 
                            className='object-cover w-70 h-36 '
                            src="/k72_home.mp4"> 
                        </video>
                    </span>THINGS <br />
                <span className='select-none'>CREATIVE</span>
            </div>

            {/* left para */}
            <div className='w-[15%] pe-1 absolute top-[55%] right-0 text-[0.95rem]'>
                <p className='indent-28'>
                    K72 is an agency that builds brands from every angle. 
                    Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, 
                    brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.
                </p>
            </div>

            {/* bottom links */}
           <div className='w-[85%] p-2 absolute bottom-0 left-0 flex justify-between items-end gap-4 text-white text-xl font-mono'>

                {/* montreal */}
                <Montreal/>

                {/* work page navigation */}
                <Link to='/work' className="flex items-center">
                    <span className='h-[7vw] border-4 rounded-full px-12 text-[7vw] leading-[8vw] text-center hover:text-[#d3fd50] select-none'>
                        WORK
                    </span>
                </Link>

                {/* work ( AGENCY ) page navigation */}
                <Link to='/about' className="flex items-center">
                    <div className='h-[7vw] border-4 rounded-full px-12 text-[7vw] leading-[8vw] text-center hover:text-[#d3fd50] select-none fw-[500]'>
                        AGENCY
                    </div>
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
