import React from 'react';
import { Link } from 'react-scroll';
import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [commoncheck,setcheck]=useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    function handleclick(){
      setNav(true);
    }

    function handleclose(){
      setNav(false)  ;  
    }

    function handlecheck(){
      setNav(false);
    }
    return (

        <div className='flex md:justify-between items-center justify-between pr-[2rem] md:p-6 md:items-center md:bg-[#EAE7E7] md:bg-opacity-30 border-2 backdrop-blur-lg '>
            {/* Heading */}
            <div className='p-3 md:p-0'>
                <Link to='home' smooth={true} duration={800} className=' font-[950] tracking-tight  text-[0.9rem] md:text-[1.25rem] font-montserrat hover:cursor-pointer'>_MAYANK UPPAL_</Link>
            </div>

            {/* Navbar icons big screen */}
            <div className="hidden md:block ">
            <Link

              to="about"
              smooth={true}
              duration={800}
              className="relative text-[0.9rem] font-[500] px-7 tracking-tight font-montserrat group hover:text-blue-500 hover:cursor-pointer"
            >
            ABOUT
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link

              to="project"
              smooth={true}
              duration={800}
              className="relative text-[0.9rem] font-[500] px-7 tracking-tight font-montserrat group hover:text-blue-500 hover:cursor-pointer"
            >
            PROJECT
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link

              to="skills"
              smooth={true}
              duration={800}
              className="relative text-[0.9rem] font-[500] px-7 tracking-tight font-montserrat group hover:text-blue-500 hover:cursor-pointer"
            >
            SKILLS
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link

              to="work"
              smooth={true}
              duration={800}
              className="relative text-[0.9rem] font-[500] px-7 tracking-tight font-montserrat group hover:text-blue-500 hover:cursor-pointer"
            >
            WORK EXPERIENCE
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link

              to="contact"
              smooth={true}
              duration={800}
              className="relative text-[0.9rem] font-[500] px-7 tracking-tight font-montserrat group hover:text-blue-500 hover:cursor-pointer"
            >
            CONTACT
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            </div>





            {/* Navbar icons small */}

            {nav?
            (
            <div className="block md:hidden absolute min-h-[40vh] left-0 top-[4rem] w-full " >
              <div className='flex flex-col gap-[4vw] items-center p-4 bg-white'>
            <Link

              to="about"
              onClick={handlecheck}
              smooth={true}
              duration={800}
              className="relative text-[0.9rem] font-[500] px-7 tracking-tight font-montserrat group hover:text-blue-500 hover:cursor-pointer"
            >
            ABOUT
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link

              to="project"
              onClick={handlecheck}
              smooth={true}
              duration={800}
              className="relative text-[0.9rem] font-[500] px-7 tracking-tight font-montserrat group hover:text-blue-500 hover:cursor-pointer"
            >
            PROJECT
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link

              to="skills"
              onClick={handlecheck}
              smooth={true}
              duration={800}
              className="relative text-[0.9rem] font-[500] px-7 tracking-tight font-montserrat group hover:text-blue-500 hover:cursor-pointer"
            >
            SKILLS
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link

              to="work"
              onClick={handlecheck}
              smooth={true}
              duration={800}
              className="relative text-[0.9rem] font-[500] px-7 tracking-tight font-montserrat group hover:text-blue-500 hover:cursor-pointer"
            >
            WORK EXPERIENCE
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link
              onClick={handlecheck}
              to="contact"
              smooth={true}
              duration={800}
              className="relative text-[0.9rem] font-[500] px-7 tracking-tight font-montserrat group hover:text-blue-500 hover:cursor-pointer"
            >
            CONTACT
            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            </div>
          
            
            </div>
            ):null}

            <div className='md:hidden flex flex-row'>
              {!nav?
              (
              <img onClick={handleclick} src="./menu.svg" alt="" />
              ):null}

              {nav?
              (
              <img onClick={handleclose} src="./x.svg" alt="" />
              ):null}
            </div>
            



        </div>
    );
}

export default Navbar;
