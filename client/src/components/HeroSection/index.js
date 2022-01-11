import React from 'react'
import Video from './comp1.mp4'
import Video2 from '../HeroSection/images/hvAnim2.mp4'
import Island from '../HeroSection/images/island.png'
/* import Poster from './images/bg7.jpg' */
import {HeroContainer} from './HeroElements';
import './HeroSection.scss';

import {MainLogo, AnimVid} from './HeroElements';

import TypeAnimation from 'react-type-animation';
import {motion} from 'framer-motion';
import {FaCode} from 'react-icons/fa'

import {SiDevdotto} from 'react-icons/si'
import Wave from 'react-wavify'



import ReactAnimatedWeather from 'react-animated-weather';


const defaults = {
  icon: 'CLEAR_DAY',
  color: 'goldenrod',
  size: 60,
  animate: true,
  fill:'goldenrod'
};

const HeroSection = () => {
    return (
        <HeroContainer className= 'hero-container'>
            
          <ReactAnimatedWeather 
            className="weather"
            icon={defaults.icon}
            color={defaults.color}
            size={defaults.size}
            animate={defaults.animate}
            fill={defaults.fill}
  /> 
           
              <h2 className="name">SOFTWARE ENGINEER PORTFOLIO</h2>
              <FaCode className="pencil"/>
              <video className="vid" src = {Video2} style={{height:280}} autoPlay  muted />
              <SiDevdotto className="dev"/>

  
  
 <img src={Island} className="island" />

 

 <Wave id="water" fill='url(#gradient)' style={{bottom:0}}
        paused={false}
        options={{
          height: 40,
          amplitude: 22,
          speed: 0.35,
          points: 6
        }}
  >
<defs>
    <linearGradient id="gradient" gradientTransform="rotate(315)">
      <stop offset="0%"  stopColor="#2a2a72" />
      <stop offset="55%" stopColor="#008bfd" />
      <stop offset="100%" stopColor="#00b1fd" />
    </linearGradient>
  </defs>
</Wave>
             {/* <HeroBg style={{ backgroundImage: `url(${Poster})` }}>
               <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>  */}
        </HeroContainer>
    )
}

export default HeroSection;
