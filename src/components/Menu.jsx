import Logo from './Logo'
import { Link, useNavigate } from 'react-router-dom'
import Montreal from './Montreal'
import Menu_marquee from './Menu_marquee'

const Menu = (props) => {
  const navigate = useNavigate();
  return (
    <section className='w-[100%] h-[100vh] bg-black text-white absolute z-50'>

        {/* logo and close button */}
        <div className='flex justify-between'>

            {/* logo */}
            <Link className='pt-3 ps-3' to="/"><Logo color="white"/></Link>

            {/* close button */}
            <div className='cursor-pointer'>
                <svg
                    width="150"
                    height="150"
                    onClick={()=>props.menuOff(false)}
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
        <div className='h-[30.2vw] mt-[1.9vw] mb-[7.5vw] text-[8vw] leading-[9vw] text-center'>
          <Link to='/work'><Menu_marquee onClick={()=> navigate("/work")} page='WORK' marquee='SEE EVERYTHING' image1="marquee_1" image2="marquee_2"/></Link>
          <Link to='/about'><Menu_marquee onClick={()=> navigate("/about")} page='AGENCY' marquee="KNOW US" image1="marquee_3" image2="marquee_4"/></Link>
          <Link to='/contact'><Menu_marquee onClick={()=> navigate("/contact")} page='CONTACT' marquee="SEND US A FAX" image1="marquee_2" image2="marquee_1"/></Link>
          <Link to='/blog'><Menu_marquee onClick={()=> navigate("/blog")} page='BLOG' marquee="READ ARTICLES" image1="marquee_3" image2="marquee_4"/></Link>
        </div>

        {/* menu footer */}
        <div  className='px-5 flex justify-between'>
            <Montreal/>
            <div className='w-[22%] text-[0.7vw] flex justify-between' style={{fontWeight:300}}>
                <span  className='hover:text-[#d3fd50] cursor-pointer'>Privacy Policy</span>
                <span  className='hover:text-[#d3fd50] cursor-pointer'>Privacy Notice</span>
                <span  className='hover:text-[#d3fd50] cursor-pointer'>Ethics Report</span>
                <span  className='hover:text-[#d3fd50] cursor-pointer select-none'>CONSENT CHOICE</span>
            </div>

            <div className='h-[2.5vw] w-[17%] flex justify-between bg-black text-[2.1875rem] text-white'>
                <div className='h-full hover:text-[#d3fd50] border rounded-full cursor-pointer' style={{fontWeight:500, lineHeight: "0.7", padding: "0.22em 0.3em 0 0.3em"}}>FB</div>
                <div className='h-full hover:text-[#d3fd50] border rounded-full cursor-pointer' style={{fontWeight:500, lineHeight: "0.7", padding: "0.22em 0.3em 0 0.3em"}}>IG</div>
                <div className='h-full hover:text-[#d3fd50] border rounded-full cursor-pointer' style={{fontWeight:500, lineHeight: "0.7", padding: "0.22em 0.3em 0 0.3em"}}>IN</div>
                <div className='h-full hover:text-[#d3fd50] border rounded-full cursor-pointer' style={{fontWeight:500, lineHeight: "0.7", padding: "0.22em 0.3em 0 0.3em"}}>BE</div>
            </div>

        </div>

    </section>
  )
}

export default Menu