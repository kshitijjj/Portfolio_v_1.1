import React from 'react';

const ProjectCard = (props) => {
    return (
        <div className='bg-[#EAE7E7] bg-opacity-35 md:p-6  w-[45rem] rounded-[1rem] md:ml-[4rem] border-2 mb-[25rem]'> 
            
            {/* Inner object div */}
            <div className='flex flex-col md:flex-row justify-center items-center'>

                {/* Image */}
                <div className='bg-white rounded-[1.6rem] justify-center items-center md:mt-0 mt-4 md:w-[25rem] w-[15rem]'>
                    <img className=' rounded-[0.8rem] border-2 border-white' src={props.mainimg} alt="" srcset="" />
                </div>

                {/* Text */}
                <div className='p-6 pt-3  text-center  md:p-6 md:text-left md:pl-[2.5rem] md:w-[35rem] w-[23rem]'>
                    <p className='opacity-80 font-montserrat text-[1.2rem]  font-extrabold md:text-2xl tracking-tight '>{props.projectname}</p>
                    <p className='font-montserrat text-black font-medium text-[0.75rem] opacity-50 md:text-[0.8rem]  tracking-tight '>{props.projecttech}</p>
                    <p className='font-montserrat opacity-65 font-normal text-[0.75rem] md:text-[0.8rem] pt-[0.8rem] tracking-tight'>{props.projectdesc}</p>
                    <div className='flex gap-8 mt-[1.5rem] md:justify-start justify-center'>
                    <button className=" items-center justify-center text-center bg-[#2229D8] hover:bg-[#2c32db] opacity-75 font-bold text-[0.8rem] md:text-[1rem]text-center px-[1.8rem] py-[0.5rem] rounded-[0.25rem] text-white">{props.buttonname} <span><img className="inline-block mb-[0.2rem] ml-[0.5rem]" src="./github (1).svg"  alt="" /></span></button>
                    <button className=" border-2  border-[#2229D8] text-[#2229D8]  opacity-75 font-bold text-[0.8rem] md:text-[1rem] text-center px-[2rem] py-[0.4rem] rounded-[0.2rem]">{props.buttonname2} <span><img className=" inline-block w-100% h-6" src={props.buttonimg2} alt="" /></span></button>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default ProjectCard;
