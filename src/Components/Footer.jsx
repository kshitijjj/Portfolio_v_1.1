import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className='flex justify-between p-6 items-center bg-[#EAE7E7] bg-opacity-30 border-2 backdrop-blur-lg '>
            {/* Heading */}
            <div>
                <Link to='home' smooth={true} duration={800} className=' font-[950] tracking-tight  text-[0.9rem] md:text-[1.25rem] font-montserrat hover:cursor-pointer'>_MAYANK_UPPAL_</Link>
            </div>

            {/* Navbar icons big screen */}
            <div className="hidden md:block ">
            <Link

              to="about"
              smooth={true}
              duration={800}
              className="relative text-[0.9rem] font-[500] px-7 tracking-tight font-montserrat group hover:text-blue-500 hover:cursor-pointer"
            >
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link

              to="project"
              smooth={true}
              duration={800}
              className="relative text-[0.9rem] font-[500] px-7 tracking-tight font-montserrat group hover:text-blue-500 hover:cursor-pointer"
            >

            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link

              to="skills"
              smooth={true}
              duration={800}
              className="relative text-[0.9rem] font-[500] px-7 tracking-tight font-montserrat group hover:text-blue-500 hover:cursor-pointer"
            >

            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link

              to="work"
              smooth={true}
              duration={800}
              className="relative text-[0.9rem] font-[500] px-7 tracking-tight font-montserrat group hover:text-blue-500 hover:cursor-pointer"
            >
        
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link

              to="contact"
              smooth={true}
              duration={800}
              className="relative text-[0.9rem] font-[500] px-7 tracking-tight font-montserrat group hover:text-blue-500 hover:cursor-pointer"
            >
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            </div>

            {/* Navbar icons small */}
            <div className='hidden'>
                
            </div>


        </div>
    );
}

export default Footer;
