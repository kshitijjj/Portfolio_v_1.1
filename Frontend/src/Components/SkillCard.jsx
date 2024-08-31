import React from 'react';

const SkillCard = (props) => {
    return (
        <div className='bg-[#EAE7E7] bg-opacity-65 p-6 flex mb-[2rem] w-[35rem] rounded-md justify-between'  >
            <p className=' font-montserrat  font-extrabold text-2xl tracking-tight '>{props.heading}</p>
            <button className=" bg-[#2229D8] opacity-75 font-bold text-[1rem]  text-center px-[2rem] py-[0.6rem] rounded-[0.4rem] text-white">View <span><img className=" inline-block w-100% h-6" src="./download_icon.png" alt="" /></span></button>
        </div>
    );
}

export default SkillCard;
