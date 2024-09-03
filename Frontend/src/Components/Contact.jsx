import React from 'react';


const Contact = () => {
    return (
        <div className="mt-[7rem] flex">
            <div>
                {/* Heading */}
                <p className='text-[2.5rem] pl-[5rem] pb-[1rem] leading-[3.5rem] font-montserrat font-black'>CONTACT <span className='text-[2.5rem] font-montserrat font-black opacity-35'>US</span></p>
                {/* line */}
                <div className="w-[12rem] mx-[5rem] mb-[1rem]  h-[0.1rem] bg-black"></div>
                {/* subheading */}
                <p className='font-montserrat pl-[5rem] w-[35rem] tracking-tigh'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis minima pariatur quibusdam id aliquid nulla natus eos ullam reiciendis laborum.</p>
            </div>

            <form className='pl-[5rem] py-[2rem]'>
                <div className='pb-7 gap-1 flex flex-col'>
                    <p className='font-montserrat font-bold text-opacity-85'>Name</p>
                    <input className='bg-[#EAE7E7] w-[32rem] opacity-65 pr-12 pl-4 py-3 rounded-lg' type="text" name="Enter your name" placeholder='Enter your name' id="" />
                </div>
 
                <div className='pb-7 gap-1 flex flex-col'>
                    <p className='font-montserrat font-bold text-opacity-85'>Email</p>
                    <input className='bg-[#EAE7E7] w-[32rem] opacity-65 pr-12 pl-4 py-3 rounded-lg' type="email" name="Enter your email" placeholder='Enter your mail' id="" />
                </div>

                <div className='gap-1 flex flex-col '>
                    <p className='font-montserrat font-bold text-opacity-85'>Message</p>
                    <input className='bg-[#EAE7E7] w-[32rem] h-[10rem] opacity-65 pr-12 pl-4  rounded-lg' type="text" name="Enter your message" placeholder='Enter your message' id="" />
                </div>

                <button className=" bg-[#2229D8] opacity-75 font-bold text-[1rem] mt-[3rem]  text-center px-[3.5rem] py-[0.9rem] rounded-[0.4rem] text-white">Submit</button>  
            </form>

            
        </div>
    );
}

export default Contact;
