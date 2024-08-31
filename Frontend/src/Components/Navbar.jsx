import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className='flex justify-between p-6 items-center bg-[#EAE7E7] '>
            {/* Heading */}
            <div>
                <Link to='home' smooth={true} duration={800} className=' font-[950] tracking-tight text-[1.25rem] font-montserrat hover:cursor-pointer'>LOREM IPSUM</Link>
            </div>

            {/* Navbar icons big screen */}
            <div className="flex ">
                <Link to='about' smooth={true} duration={800} className='text-[0.9rem] font-[500] px-7 tracking-tight font-montserrat hover:cursor-pointer '>ABOUT</Link>
                <Link to='project' smooth={true} duration={800} className='text-[0.9rem] font-[500] px-7 tracking-tight font-montserrat hover:cursor-pointer '>PROJECTS</Link>
                <Link to='skills' smooth={true} duration={800} className='text-[0.9rem] font-[500] px-7 tracking-tight font-montserrat hover:cursor-pointer'>SKILLS</Link>
                <Link to='work' smooth={true} duration={800} className='text-[0.9rem] font-[500] px-7 tracking-tight font-montserrat hover:cursor-pointer'>WORK EXPERIENCE</Link>
                <Link to='contact' smooth={true} duration={800} className='text-[0.9rem] font-[500] px-7 tracking-tight font-montserrat hover:cursor-pointer'>CONTACT</Link>
            </div>

            {/* Navbar icons small */}
            <div className='hidden'>
                
            </div>


        </div>
    );
}

export default Navbar;
