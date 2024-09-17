import React from 'react';
import Navbar from './Navbar';
import { TypeAnimation } from 'react-type-animation';
import animation1 from '../home.json'


const Home = () => {
    return (
        <div className='py-[2rem] md:pt-[2.8rem]'>
            {/* Heading */}
            <div className=' pl-[1.5rem] md:px-[5rem] pb-[1.5rem] mt-[2rem]'>
                <p className='text-[1.4rem] md:w-[50rem] md:text-[2.5rem] opacity-80  leading-[2.1rem]  md:leading-[3.5rem] font-montserrat font-black'>SOFTWARE <span  className="text-[1.4rem] md:text-[2.5rem] font-montserrat font-black opacity-30">DEVELOPMENT</span></p>
                <p className='text-[1.4rem] md:w-[50rem] opacity-80 md:text-[2.5rem]  leading-[2.1rem]  md:leading-[3.5rem] font-montserrat font-black'>DATA ANALYSIS</p>
                <p className='text-[1.4rem] md:w-[60rem] opacity-80 md:text-[2.5rem]  leading-[2.1rem]  md:leading-[3.5rem] font-montserrat font-black'>MERN STACK <span className="text-[1.4rem] md:text-[2.5rem] font-montserrat font-black opacity-30">DEVELOPMENT</span></p>
            </div>
          {/* line */}
            <div className="w-[22rem] ml-[1.6rem] md:mx-[5rem]  h-[0.1rem] bg-black">
            </div>

            {/* Sub Heading */}
            <div className=' pl-[1.6rem] w-[25rem] md:pl-[5rem] pt-[1.6rem] md:w-[45rem] '>
                <p className=' text-[0.75rem] md:text-[1rem] font-montserrat tracking-tight opacity-65'>Hey! my name is Mayank Uppal</p>
                <p className=" text-[0.75rem] md:text-[1rem] font-montserrat tracking-tight opacity-65">I am a final year undergraduate student at PEC, Chandigarh persuing B.Tech in Electrical Engineering</p>
            </div>

            {/* Button */}
            <button className=" bg-[#2229D8] opacity-75 font-bold text-[0.8rem] md:text-[1rem] text-center px-[1.5rem] py-[0.6rem] md:px-10 md:py-[0.65rem] rounded-[0.4rem] ml-[1.6rem] md:ml-[5rem] mt-[1.6rem] md:mt-[2rem] text-white">Resume <span><img className=" inline-block w-100% h-6" src="./download_icon.png" alt="" /></span></button>
        </div>
    );
}

export default Home;
