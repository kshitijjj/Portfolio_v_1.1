import React from 'react';

const Skillimg = (props) => {
    return (
        <>
        <div className='pb-3'>
        <img src={props.imgicon} className='w-[30rem] h-[15rem] mb-[-0.5rem]' alt="" />
        <p className='font-montserrat font-semibold text-center'>ReactJS</p>
        </div>
        
        </>
        
    );
}

export default Skillimg;
