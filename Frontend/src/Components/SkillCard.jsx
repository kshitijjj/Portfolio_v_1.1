import React from 'react';

const SkillCard = (props) => {
    return (
        <div className='bg-[#EAE7E7] bg-opacity-35 p-6 flex mb-[2rem] w-[35rem] rounded-md justify-between border-2 text-center items-center'  >
            <p className=' font-montserrat  font-extrabold text-2xl tracking-tight '>{props.heading}</p>
            <button onClick={props.handleclick}  className=" bg-[#2229D8] opacity-75 font-bold text-[1rem]  text-center px-[2rem] py-[0.6rem] rounded-[0.4rem] text-white">{props.button} <span><img className=" inline-block w-100% h-6 mb-[0.2rem]" src={props.buttonicon} alt="" /></span></button>
        </div>
    );
}

export default SkillCard;
