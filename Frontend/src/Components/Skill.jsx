import React from 'react';
import SkillCard from './SkillCard';
import Skillimg from './Skillimg';


const Skill = () => {
    return (
        <div className='mt-[7rem]'>

            <div>
                {/* Heading */}
                <p className='text-[2.5rem] pl-[5rem] pb-[1rem] leading-[3.5rem] font-montserrat font-black'>DIFFERENT <span className='text-[2.5rem] font-montserrat font-black opacity-35'>SKILLS</span></p>
                {/* line */}
                <div className="w-[12rem] mx-[5rem] mb-[1rem]  h-[0.1rem] bg-black"></div>
                {/* subheading */}
                <p className='font-montserrat pl-[5rem] w-[35rem] tracking-tigh'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis minima pariatur quibusdam id aliquid nulla natus eos ullam reiciendis laborum.</p>
            </div>

            {/* Categories */}

            <div className='flex justify-between'>

            <div className='ml-[4rem] mt-[3rem]'>
                <SkillCard heading='FRONT END DEV'/>
                <SkillCard heading='BACK END DEV'/>
                <SkillCard heading='SOFTWARE DEV'/>
                <SkillCard heading='DATA ANALYSIS'/>
            </div>

            {/* images */}
            <div className='hidden w-[35rem] h-[30rem] mr-[6rem] justify-center overflow-y-scroll scroll-smooth scrollbar-hide mt-[2.rem] '>
                <div className='grid grid-cols-1 gap-1'>
                <Skillimg/>
                <Skillimg/>
                <Skillimg/>
                <Skillimg/>
                </div>
            </div>

            </div>

        </div>
    );
}

export default Skill;
