import React from 'react';

const CardW = () => {
    return (
        <div className='flex gap-[2.5rem]'>
            
            {/* image */}
            <div className='bg-[#EAE7E7] opacity-65 rounded-[0.6rem] items-center w-[20rem] flex justify-center  '>
                <img className='w-[15rem] h-[15rem]' src="./sample.png" alt="" srcset="" />
            </div>

            {/* Written part */}
            <div className='p-8 w-[45rem] bg-[#EAE7E7] bg-opacity-65 rounded-lg'>
                    <p className='text-[#2229D8] font-montserrat  font-extrabold text-2xl tracking-tight '>SHORTEN LINK</p>
                    <p className='font-montserrat font-normal text-[0.8rem] tracking-tight '>ReactJS  |  NodeJS  |  ExpressJS  |  MongoDB</p>
                    <p className='font-montserrat font-normal text-[0.8rem] pt-[0.8rem] tracking-tight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam illo culpa recusandae ipsum pariatur. Fugiat, totam nobis! Saepe molestiae cumque quisquam, quas delectus amet ratione.</p>
            </div>

        </div>
    );
}

export default CardW;
