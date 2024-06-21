import React, { useContext } from 'react';
import HeroComponent from './HeroComponent';
import {useProductContext} from '../appContext/ProductContext'

const About = () => {
  // const name= useContext(StoreContext); implemented customHook instead of useContext
  // const name= useProductContext();
  const data={
    name:"Online Shopping App --by Kalyani Bedre"
  }
  return (
    <>
    {/* {name} */}
    <HeroComponent pageName={data}/>
    </>
  )
}

export default About