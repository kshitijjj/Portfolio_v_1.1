import React from 'react';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className='py-[3rem] md:pt-[2.8rem]'>
            {/* Heading */}
            <div className=' px-[3rem] md:px-[5rem] pb-[2rem] mt-[2rem]'>
                <p className='w-[35rem] text-[2.2rem] md:w-[50rem] md:text-[2.5rem] leading-[2.9rem]  md:leading-[3.5rem] font-montserrat font-black'>SOFTWARE <span className="text-[2.2rem] md:text-[2.5rem] font-montserrat font-black opacity-35">DEVELOPMENT</span></p>
                <p className='w-[35rem] text-[2.3rem] md:w-[50rem] md:text-[2.5rem]  leading-[2.9rem]  md:leading-[3.5rem] font-montserrat font-black'>DATA ANALYSIS</p>
                <p className='w-[45rem] text-[2.2rem] md:w-[60rem] md:text-[2.5rem]  leading-[2.9rem]  md:leading-[3.5rem] font-montserrat font-black'>MERN STACK <span className="text-[2.2rem] md:text-[2.5rem] font-montserrat font-black opacity-35">DEVELOPMENT</span></p>
            </div>

            {/* line */}
            <div className="w-[22rem] mx-[3.3rem] md:mx-[5rem]  h-[0.1rem] bg-black"></div>

            {/* Sub Heading */}
            <div className=' pl-[3.3rem] md:pl-[5rem] pt-[2rem] w-[35rem] md:w-[45rem] '>
                <p className='font-montserrat tracking-tight'>Hey ! my name is Mayank Uppal</p>
                <p className="font-montserrat tracking-tight">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aliquam hic tempora enim labore adipisci illo porro, maiores quidem quibusdam.</p>
            </div>

            {/* Button */}
            <button className=" bg-[#2229D8] opacity-75 font-bold text-[1.2rem] text-center px-[2.2rem] py-[0.9rem] md:px-10 md:py-[0.65rem] rounded-[0.4rem] ml-[3.3rem] md:ml-[5rem] mt-[2.2rem] md:mt-[2rem] text-white">Resume <span><img className=" inline-block w-100% h-6" src="./download_icon.png" alt="" /></span></button>
        </div>
    );
}

export default Home;
