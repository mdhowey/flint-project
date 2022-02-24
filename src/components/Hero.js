import React from 'react';
import MainHero from '../assets/images/music_header.png';
import { MainImage } from '../styles/Hero.style';

const Hero = () => {
  return (
    <MainImage src={MainHero} alt='Mountains main page with logo'/>
  )
}

export default Hero