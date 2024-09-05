import React from 'react';

const CardW = (props) => {
    return (
        <div className='flex gap-[2.5rem]'>
            
            {/* image */}
            <div className='bg-[#EAE7E7] opacity-35 rounded-[0.6rem] items-center w-[20rem] flex justify-center border-2  '>
                <img className='w-[15rem] h-[15rem]' src="./sample.png" alt="" srcset="" />
            </div>

            {/* Written part */}
            <div className='p-8 w-[50rem] bg-[#EAE7E7] bg-opacity-35 border-2  rounded-lg'>

                    <div className='flex justify-between'>
                    <p className='font-montserrat  font-extrabold text-2xl tracking-tight '>{props.workplace}</p>
                    <p className='font-montserrat opacity-65 text-[0.8rem] tracking-tight '>{props.date}</p>
                    </div>
                    <p className='font-montserrat opacity-65 text-[0.8rem] tracking-tight '>{props.workrole}</p>
                    <ol className='mt-[1rem] mb-[2rem]' > 
                        <li className='font-montserrat opacity-65 text-[0.8rem] leading-[0.5rem] pt-[0.8rem] tracking-tight'>{props.li1}</li>
                        <li className='font-montserrat opacity-65 text-[0.8rem] leading-[0.5rem] pt-[0.8rem] tracking-tight'>{props.li2}</li>
                        <li className='font-montserrat opacity-65 text-[0.8rem] leading-[0.5rem] pt-[0.8rem] tracking-tight'>{props.li3}</li>
                        <li className='font-montserrat opacity-65 text-[0.8rem] leading-[0.5rem] pt-[0.8rem] tracking-tight'>{props.li4}</li>
                    </ol> 
                    <button className=" hover:bg-[#2229D8] hover:text-white border-2 hover: border-[#2229D8] text-[#2229D8]  opacity-75 font-bold text-[1rem] text-center px-[2rem] py-[0.4rem] rounded-[0.2rem]">LinkedIn<span><img className=" inline-block w-[15px] h-[15px] mb-[0.2rem] ml-[0.5rem]" src="./redirect.svg" alt="" /></span></button>
            </div>

        </div>
    );
}

export default CardW;
