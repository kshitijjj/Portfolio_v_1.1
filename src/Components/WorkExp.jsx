import React from 'react';
import CardW from './CardW';

const WorkExp = () => {
    return (
        <div className='mt-[2.5rem] md:mt-[7rem]'>
            <div>
                {/* Heading */}
                <p className='text-[1.4rem] md:text-[2.5rem] pl-[1.5rem] md:pl-[5rem] md:pb-[1rem] leading-[3.5rem] opacity-80 font-montserrat font-black'>WORK <span className='text-[1.4rem] md:text-[2.5rem] font-montserrat font-black opacity-30'>EXPERIENCE</span></p>
                {/* line */}
                <div className="w-[12rem] ml-[1.6rem] md:ml-[3.9rem] md:mx-[5rem] mb-[1.4rem] bg-opacity-30 h-[0.01rem] md:h-[0.1rem] bg-black"></div>
                {/* subheading */}
                <p className='font-montserrat opacity-65 text-[0.75rem] pl-[1.5rem] w-[25rem] md:pl-[5rem] md:w-[35rem] tracking-tight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis minima pariatur quibusdam id aliquid nulla natus eos ullam reiciendis laborum.</p>
            </div>

            <div className='flex flex-col ml-[2rem] mr-[2rem] md:ml-[5rem] md:mt-[4rem] gap-12'>
                <CardW 
                workplace=" ESH VALUE TECHNOLOGIES "
                date="[ Jan 2024 - July 2024 ]"
                workrole="[ Community Manager Intern ]"
                li1="Oversaw more than 3 bootcamps and masterclass operations enhancing the overall performance of Bootcamps"
                li2="Streamlined category-level data management and automated processes with Excel formulas boosting overall efficiency"
                li3="Created marketing and CRM creatives and used SQL to enhance data visualization"
                li4=" Collaborated with over 4 diverse teams such as marketing ,supply, tech product to efficiently complete various tasks"
                />
                <CardW
                workplace=" PADHAKKU PEEK A BOOK PVT LTD "
                date="[ Nov 2022 - Dec 2022 ]"
                workrole="[ Growth Intern ]"
                li1="Managed a dataset of textbooks across semesters on Google Sheets, demonstrating strong data management skills."
                li2=" Established more than 15 valuable LinkedIn connections demonstrating adeptness in professional networking"
                />
            </div>
        </div>
    );
}

export default WorkExp;
