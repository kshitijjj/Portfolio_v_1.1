import React from 'react';
import animation from '../animation.json'
import Lottie from 'lottie-react';

const Contact = () => {
    return (
        <div className="md:mt-[7rem] flex md:justify-between mt-[4.5rem] ">

            <div className='flex flex-col'>
            <div>
                {/* Heading */}
                <p className='text-[1.4rem] md:text-[2.5rem] pl-[1.5rem] md:pl-[5rem] md:pb-[1rem] leading-[3.5rem] opacity-80 font-montserrat font-black'>CONTACT <span className='text-[1.4rem] md:text-[2.5rem] font-montserrat font-black opacity-30'>US</span></p>
                {/* line */}
                <div className="w-[12rem] ml-[1.6rem] md:ml-[3.9rem] md:mx-[5rem] mb-[1.4rem] bg-opacity-30 h-[0.01rem] md:h-[0.1rem] bg-black"></div>
                {/* subheading */}
                <p className='font-montserrat opacity-65 text-[0.75rem] pl-[1.5rem] w-[25rem] md:pl-[5rem] md:w-[35rem] tracking-tight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis minima pariatur quibusdam id aliquid nulla natus eos ullam reiciendis laborum.</p>
            </div>


            <form className='pl-[1.5rem] md:pl-[5rem] pt-[3.2rem] pb-[2rem]'>
                <div className='pb-7 gap-1 flex flex-col'>
                    <p className='font-montserrat font-bold text-[0.8rem] md:text-[1rem] text-opacity-85'>Name</p>
                    <input className='bg-[#EAE7E7] w-[20rem] md:w-[32rem] bg-opacity-35 p-[0.4rem] py-2  md:pr-12 md:pl-4 md:py-3 rounded-lg border-2 border-blue-100' type="text" name="Enter your name" placeholder='Enter your name' id=""  />
                </div>
 
                <div className='pb-7 gap-1 flex flex-col'>
                    <p className='font-montserrat font-bold text-[0.8rem] md:text-[1rem] text-opacity-85'>Email</p>
                    <input className='bg-[#EAE7E7] w-[20rem] md:w-[32rem] bg-opacity-35 p-[0.4rem]  py-2  md:pr-12 md:pl-4 md:py-3 rounded-lg border-2 border-blue-100' type="email" name="Enter your email" placeholder='Enter your mail' id="" />
                </div>

                <div className='gap-1 flex flex-col '>
                    <p className='font-montserrat font-bold text-[0.8rem] md:text-[1rem] text-opacity-85'>Message</p>
                    <input className='bg-[#EAE7E7] w-[20rem] md:w-[32rem] bg-opacity-35 p-[0.4rem]  py-2  md:pr-12 md:pl-4 md:py-3 rounded-lg border-2 border-blue-100' type="text" name="Enter your message" placeholder='Enter your message' id="" />
                </div>

                <button className=" bg-[#2229D8] opacity-75 font-bold text-[1rem] mt-[3rem]  text-center px-[3rem] py-[0.7rem] rounded-[0.4rem] text-white">Submit</button>  
            </form>
            </div>


            
            {/* <Lottie className='h-[35rem] pr-[6rem] mt-[7rem]' animationData={animation} loop={true} ></Lottie>   */}          
        </div>

        
    );
}

export default Contact;
