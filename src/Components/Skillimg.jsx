import React from 'react';

const Skillimg = (props) => {
    return (
        <>
        <div className='pb-3 text-center items-center flex flex-col justify-center'>
        <img src={props.imgicon} className='w-[15rem] h-[10rem] md:w-[30rem] md:h-[15rem] mb-[-0.5rem]' alt="" />
        <p className='font-montserrat font-semibold text-center'>ReactJS</p>
        </div>
        
        </>
        
    );
}

export default Skillimg;
