import React from 'react';
import './intro.css';
import image from '../../assets/image.jpg';
import { Link } from "react-scroll";
import WorkIcon from '@mui/icons-material/Work';
import Typed from './Typed';

const Intro = () => {
  return (
    <section id="intro">
        <div className="intro-content">
            <span className='hello'>Hello,</span><br/>
            <span className='introText'>
                I'm <span className='introName'>Jayant</span><br/>
                <Typed/>
                
            </span>
            <p className="introPara">
                Aspiring to become a valuable asset for the industry using skills like time management <br/> and openness to
                experience and challenges.
            </p>
            <Link activeClass='active' to='contact' spy={true}><button className='btn'><WorkIcon className='btnImg'/><p className='btnText'>Hire Me</p></button></Link>
        </div>
        <img src={image}  alt='Image' className='bg'/>
    </section>    
    );
}

export default Intro;