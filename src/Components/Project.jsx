import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import Carousel from 'react-bootstrap/Carousel';


const Project = () => {
    
    return (
        <>
        <div className='py-[1rem] md:py-[3rem] md:pt-[7rem]'>

            {/* heading div */}
            <div>
                {/* Heading */}
                <p className='text-[1.4rem] md:text-[2.5rem] pl-[1.5rem] md:pl-[5rem] md:pb-[1rem] leading-[3.5rem] opacity-80 font-montserrat font-black'>CREATIVE <span className='text-[1.4rem] md:text-[2.5rem] font-montserrat font-black opacity-30'>PROJECTS</span></p>
                {/* line */}
                <div className="w-[12rem] ml-[1.6rem] md:ml-[3.9rem] md:mx-[5rem] mb-[1.4rem] bg-opacity-30 h-[0.01rem] md:h-[0.1rem] bg-black"></div>
                {/* subheading */}
                <p className='font-montserrat opacity-65 text-[0.75rem] pl-[1.5rem] w-[25rem] md:pl-[5rem] md:w-[35rem] tracking-tight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis minima pariatur quibusdam id aliquid nulla natus eos ullam reiciendis laborum.</p>
            </div>

            <div id='carousel' className='flex ml-[1.5rem] gap-4 mt-[3.5rem] overflow-x-scroll scroll-smooth md:scrollbar-hide '>
            <ProjectCard
             buttonname="Github" 
             buttonname2="Live"
             projectname="PORTFOLIO" 
             projecttech="[ Reactjs ]&nbsp; [ CSS ]" 
             mainimg="./portfolio.png" 
             projectdesc="Designed and Developed a ReactJS portfolio website featuring five sections with smooth scrolling and engaging animations. While it's currently optimized for desktop, I plan to make it "
             />
            <ProjectCard 
            buttonname="Github" 
            buttonname2="Live" 
            projectname="QUIZ APP UI DESIGN" 
            projecttech="[ Figma ]" 
            mainimg="./quiz1.png"
            />
            <ProjectCard 
            buttonname="Github" 
            buttonname2="Live"
            projectname="SHORTEN LINK" 
            projecttech="[ Reactjs ]&nbsp; [ NodeJS ]&nbsp; [ MongoDB ]&nbsp; [ ExpressJS ]" 
            mainimg="./shortenlink.png"
            projectdesc="Designed and Developed a link shortening website using the MERN stack with JWT authentication. It tracks the history of shortened links, offers QR code generation, and provides the option to download the QR codes for easy sharing."
            />
            <ProjectCard 
            buttonname="Github" 
            buttonname2="Live" 
            projectname="FITNESS APP UI DESIGN" 
            projecttech="[ Figma ]" 
            mainimg="./fitness (1).png"
            />
            <ProjectCard 
            buttonname="Github" 
            buttonname2="Live" 
            projectname="QUIZ GAME" 
            projecttech="[ Reactjs ]&nbsp; [ CSS ]&nbsp; [ API ]"  
            mainimg="./quiz.png" 
            projectdesc="Developed a quiz website using ReactJS, powered by an API for dynamic questions. It allows users to select the difficulty level and features a 30-second timer for each question to keep the challenge engaging"
            />
            
            
            <ProjectCard 
            buttonname="Github" 
            buttonname2="Live" 
            projectname="CALENDAR APP UI DESIGN"
             projecttech="[ Figma ]"
            mainimg="./calendar.png"
            />

            </div>

            
            
        </div>


</>
    );
}

export default Project;
