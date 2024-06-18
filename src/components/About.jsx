import React from 'react';
import HeroComponent from './HeroComponent';

const About = () => {
  const data={
    name:"Online Shopping App --by Kalyani Bedre"
  }
  return (
    <HeroComponent pageName={data}/>

  )
}

export default About