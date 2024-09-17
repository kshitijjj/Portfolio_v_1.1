import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Project from './Project';
import Skill from './Skill';
import WorkExp from './WorkExp';
import Headroom from "react-headroom";
import { Element } from 'react-scroll';
import Contact from './Contact';
import Footer from './Footer';

const Main = () => {
    return (
        <div>
            <Headroom>
            <Navbar/>
            </Headroom>

            <Element name='home'>
            <Home/>
            </Element>
           
           <Element name='project'>
            <Project/>
            </Element>

           {/*  <Element name='skills'>
            <Skill/>
            </Element> */}

            {/*<Element name='work'>
            <WorkExp/>
            </Element>

            <Element name='contact'>
            <Contact/>
            </Element> 

            <Element name='footer'>
            <Footer/>
            </Element>  */}

        </div>
    );
}

export default Main;
