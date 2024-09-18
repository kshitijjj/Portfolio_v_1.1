import React from 'react';

const SkillCard = (props) => {
    return (
        <div className='md:bg-[#EAE7E7] bg-opacity-35 w-[20rem] p-2 mb-[0.9rem] md:p-6 flex md:mb-[2rem] md:w-[35rem] rounded-md justify-between border-2 text-center items-center'  >
            <p className=' font-montserrat  font-extrabold text-[0.75rem] md:text-2xl tracking-tight '>{props.heading}</p>
            <button onClick={props.handleclick}  className=" bg-[#2229D8] opacity-75 font-bold text-[0.75rem] md:text-[1rem]  text-center px-[1.5rem] py-[0.2rem] md:px-[2rem] md:py-[0.6rem] rounded-[0.4rem] text-white ">{props.button} <span><img className=" inline-block w-100% h-6 mb-[0.2rem]" src={props.buttonicon} alt="" /></span></button>
        </div>
    );
}

export default SkillCard;
