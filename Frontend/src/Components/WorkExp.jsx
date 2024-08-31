import React from 'react';
import CardW from './CardW';

const WorkExp = () => {
    return (
        <div className='mt-[7rem]'>
            <div>
                {/* Heading */}
                <p className='text-[2.5rem] pl-[5rem] pb-[1rem] leading-[3.5rem] font-montserrat font-black'>WORK <span className='text-[2.5rem] font-montserrat font-black opacity-35'>EXPERIENCE</span></p>
                {/* line */}
                <div className="w-[12rem] mx-[5rem] mb-[1rem]  h-[0.1rem] bg-black"></div>
                {/* subheading */}
                <p className='font-montserrat pl-[5rem] w-[35rem] tracking-tigh'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis minima pariatur quibusdam id aliquid nulla natus eos ullam reiciendis laborum.</p>
            </div>

            <div className='flex flex-col ml-[5rem] mt-[4rem] gap-12'>
                <CardW/>
                <CardW/>
            </div>
        </div>
    );
}

export default WorkExp;
