import React from 'react';

const CardW = (props) => {
    return (
        <div className='flex flex-col md:flex-row md:gap-[2.5rem] gap-[1.5rem] '>
            
            {/* image */}
            <div className='md:bg-[#EAE7E7] mt-2 md:mt-0 opacity-35 rounded-[0.6rem] items-center  md:w-[20rem] flex justify-center border-2  '>
                <img className='w-[12rem] h-[12rem] md:w-[15rem] md:h-[15rem]' src="./sample.png" alt="" srcset="" />
            </div>

            {/* Written part */}
            <div className='p-4  md:p-8 md:w-[50rem] md:bg-[#EAE7E7] md:bg-opacity-35 border-2  rounded-lg'>

                    <div className='flex justify-between'>
                    <p className='font-montserrat  text-[1.1rem] font-extrabold md:text-2xl tracking-tight '>{props.workplace}</p>
                    <p className='font-montserrat opacity-65 text-[0.75rem] md:text-[0.8rem] tracking-tight w-[10rem] whitespace-nowrap'>
                    {props.date}
                    </p>

                    </div>
                    
                    <p className='font-montserrat opacity-65 text-[0.8rem] tracking-tight '>{props.workrole}</p>
                    
                    <ul className='mt-[1rem] mb-[2rem] list-disc pl-5'> 
                      <li className='font-montserrat opacity-65 text-[0.75rem] md:text-[0.8rem]  pt-[0.8rem] tracking-tight'>{props.li1}</li>
                      <li className='font-montserrat opacity-65 text-[0.75rem] md:text-[0.8rem]  pt-[0.8rem] tracking-tight'>{props.li2}</li>
                      <li className='font-montserrat opacity-65 text-[0.75rem] md:text-[0.8rem]  pt-[0.8rem] tracking-tight'>{props.li3}</li>
                      <li className='font-montserrat opacity-65 text-[0.75rem] md:text-[0.8rem]  pt-[0.8rem] tracking-tight'>{props.li4}</li>
                    </ul>

                    <div className='flex gap-4 md:gap-8 mt-[1.5rem] justify-center md:justify-start w-full'>
                        <button className="bg-[#2229D8]  text-white border-2 hover:border-[#2229D8] opacity-75 font-bold text-[1rem] text-center px-[2rem] py-[0.5rem] rounded-[0.4rem] flex justify-center items-center">
                        LinkedIn
                            <span>
                                <img className="inline-block w-[15px] h-[15px] mb-[0.2rem] ml-[0.5rem]" src="./redirect.svg" alt="" />
                            </span>
                        </button>
                    </div>
            </div>

        </div>
    );
}

export default CardW;
