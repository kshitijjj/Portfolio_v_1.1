import React from 'react';

const ProjectCard = () => {
    return (
        <div className='bg-[#EAE7E7] bg-opacity-55 md:p-6 p-8 w-[45rem] rounded-[1rem] ml-[4rem]'> 
            
            {/* Inner object div */}
            <div className='flex'>

                {/* Image */}
                <div className='bg-white rounded-[0.6rem] justify-center items-center w-[25rem] '>
                </div>

                {/* Text */}
                <div className='p-6 w-[30rem]'>
                    <p className='text-[#2229D8] font-montserrat  font-extrabold text-2xl tracking-tight '>SHORTEN LINK</p>
                    <p className='font-montserrat font-normal text-[0.8rem] tracking-tight '>ReactJS  |  NodeJS  |  ExpressJS  |  MongoDB</p>
                    <p className='font-montserrat font-normal text-[0.8rem] pt-[0.8rem] tracking-tight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam illo culpa recusandae ipsum pariatur. Fugiat, totam nobis! Saepe molestiae cumque quisquam, quas delectus amet ratione.</p>
                    <div className='flex gap-8 mt-[1.5rem]'>
                    <button className=" bg-[#2229D8] opacity-75 font-bold text-[1rem]  text-center px-[1rem] py-[0.4rem] rounded-[0.4rem] text-white">Resume <span><img className=" inline-block w-100% h-6" src="./download_icon.png" alt="" /></span></button>
                    <button className=" border-2 border-[#2229D8] text-[#2229D8]  opacity-75 font-bold text-[1rem] text-center px-[1rem] py-[0.4rem] rounded-[0.4rem]">Resume <span><img className=" inline-block w-100% h-6" src="./download_icon.png" alt="" /></span></button>
                    </div>

                </div>


            </div>

        </div>
    );
}

export default ProjectCard;
