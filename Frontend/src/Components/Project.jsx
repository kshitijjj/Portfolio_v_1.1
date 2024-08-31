import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import Carousel from 'react-bootstrap/Carousel';


const Project = () => {
    
    return (
        <div className='py-[3rem] md:pt-[7rem]'>

            {/* heading div */}
            <div>
                {/* Heading */}
                <p className='w-[30rem] text-[2.2rem] md:w-[60rem] md:text-[2.5rem] pl-[3.3rem] md:pl-[5rem] pb-[1.2rem] md:pb-[1rem] leading-[3.5rem] font-montserrat font-black'>CREATIVE <span className='text-[2.2rem] md:text-[2.5rem] font-montserrat font-black opacity-35'>PROJECTS</span></p>
                {/* line */}
                <div className="w-[12rem] ml-[3.9rem] md:mx-[5rem] mb-[1.4rem]   h-[0.1rem] bg-black"></div>
                {/* subheading */}
                <p className='font-montserrat pl-[3.9rem] md:pl-[5rem] w-[35rem] tracking-tigh'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis minima pariatur quibusdam id aliquid nulla natus eos ullam reiciendis laborum.</p>
            </div>

            <div id='carousel' className='flex mt-[3.5rem] overflow-x-scroll scroll-smooth scrollbar-hide '>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            </div>
            
        </div>
    );
}

export default Project;
