import React from 'react';
import SkillCard from './SkillCard';
import Skillimg from './Skillimg';

const SkillCard1 = (props) => {
    return (
                <div className='grid grid-cols-2 '>
                <Skillimg 
                imgicon={props.image1}/>
                <Skillimg 
                imgicon={props.image2}/>
                <Skillimg 
                imgicon={props.image3}/>
                <Skillimg 
                imgicon={props.image4}/>
                </div>
    );
}

export default SkillCard1;
