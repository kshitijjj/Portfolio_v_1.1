import React from 'react';
import SkillCard from './SkillCard';
import Skillimg from './Skillimg';
import Carousel from 'react-bootstrap/Carousel';

const SkillCard1 = (props) => {
    return (
                <div className='flex ml-[1rem] gap-4 md:grid md:grid-cols-2 '>            
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
