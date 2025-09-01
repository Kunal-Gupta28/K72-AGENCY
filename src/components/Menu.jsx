import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import Montreal from './Montreal'

const Menu = () => {
  return (
    <section className='w-[100%] h-[100vh] bg-black text-white flex flex-col justify-between'>

        {/* logo and close button */}
        <div className='flex justify-between'>

            {/* logo */}
            <Link to="/"><Logo/></Link>

            {/* close button */}
            <div>
                <svg
                    width="150"
                    height="150"
                    className='stroke-white hover:stroke-[#d3fd50]'
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke-width="2" stroke-linecap="round">
                    <line x1="10" y1="10" x2="90" y2="90" />
                    <line x1="90" y1="10" x2="10" y2="90" />
                  </g>
                </svg>
            </div>
        </div>

        {/* navigation options */}
        <div className='text-9xl text-center'>
            <div className='border-t border-b'>WORK</div>
            <div className='border-t border-b'>AGENCY</div>
            <div className='border-t border-b'>CONTACT</div>
            <div className='border-t border-b'>BLOG</div>
        </div>

        {/* menu footer */}
        <div  className='px-5 flex justify-between'>
            <Montreal/>
            <div className='w-[28%] flex justify-between'>
                <span  className='hover:text-[#d3fd50]'>Privacy Policy</span>
                <span  className='hover:text-[#d3fd50]'>Privacy Notice</span>
                <span  className='hover:text-[#d3fd50]'>Ethics Report</span>
                <span  className='hover:text-[#d3fd50] select-none'>CONSENT CHOICE</span>
            </div>
            <div className='w-[15%] flex justify-between'>
                <span className='w-[24%] px-2 text-center hover:text-[#d3fd50] border rounded-full text-2xl'>FB</span>
                <span className='w-[24%] px-2 text-center hover:text-[#d3fd50] border rounded-full text-2xl'>IG</span>
                <span className='w-[24%] px-2 text-center hover:text-[#d3fd50] border rounded-full text-2xl'>IN</span>
                <span className='w-[24%] px-2 text-center hover:text-[#d3fd50] border rounded-full text-2xl'>BE</span>
            </div>
        </div>

    </section>
  )
}

export default Menu