import React, { useState } from 'react';
import SkillCard from './SkillCard';
import Skillimg from './Skillimg';
import SkillCard1 from './Skill_Card_1';


const Skill = (props) => {
    const [show1,setshow1]=useState(true);
    const [show2,setshow2]=useState(true);
    const [show3,setshow3]=useState(true);
    const [show4,setshow4]=useState(true);

    //To view skills
    function handleclick1(){
        setshow1(!show1);
        
    }

     const handleclick2=async()=>{
        setshow2(!show2);
    }

    function handleclick3(){
        setshow3(!show3);
    }

    function handleclick4(){
        setshow4(!show4);
    }
    return (
        <div className='mt-[7rem]'>

            <div>
                {/* Heading */}
                <p className='text-[2.5rem] pl-[5rem] pb-[1rem] leading-[3.5rem] font-montserrat font-black opacity-80'>DIFFERENT <span className='text-[2.5rem] font-montserrat font-black opacity-30'>SKILLS</span></p>
                {/* line */}
                <div className="w-[12rem] mx-[5rem] mb-[1rem]  h-[0.1rem] bg-black"></div>
                {/* subheading */}
                <p className='font-montserrat opacity-65 pl-[5rem] w-[35rem] tracking-tigh'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis minima pariatur quibusdam id aliquid nulla natus eos ullam reiciendis laborum.</p>
            </div>

            {/* Categories */}

            <div className='flex justify-between'>

            <div className='ml-[4rem] mt-[3rem]'>
                <SkillCard 
                buttonicon={show1?'./right.svg':'./left.svg'}
                heading='FRONT END DEV'
                button={show1?"View":"Hide"}
                handleclick={handleclick1}/>
                <SkillCard 
                heading='BACK END DEV' 
                buttonicon={show2?'./right.svg':'./left.svg'}
                button={show2?"View":"Hide"}
                handleclick={handleclick2} />
                <SkillCard 
                heading='SOFTWARE DEV' 
                buttonicon={show3?'./right.svg':'./left.svg'}
                button={show3?"View":"Hide"}
                handleclick={handleclick3} />
                <SkillCard 
                heading='DATA ANALYSIS'
                button={show4?"View":"Hide"} 
                buttonicon={show4?'./right.svg':'./left.svg'}
                handleclick={handleclick4} />
            </div>

            {/* images */}
            <div className=' w-[35rem] bg-[#ffff] h-[30rem] mr-[6rem] justify-center overflow-y-scroll scroll-smooth mt-[1.6rem] '>

                {!show1?(
                    <SkillCard1 image1="./logo1.svg" image2="./logo1.svg" image3="./logo1.svg" image4="./logo1.svg"/>
                ):null}

               {!show2?(
                    <SkillCard1/>
                ):null}

                {!show3?(
                    <SkillCard1/>
                ):null}
                
                {!show4?(
                    <SkillCard1/>
                ):null} 
            </div>

            </div>

        </div>
    );
}

export default Skill;
