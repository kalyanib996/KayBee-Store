import React from 'react';
import styled from 'styled-components';
import HeroComponent from './HeroComponent';
import Services from './Services';
import Trusted from './Trusted';
import FeaturedProduct from './FeaturedProduct';

const Home = () => {
  const data={
    name:"KayBee Store"
  }
  return (
    <>
      <HeroComponent pageName={data}/>
      <FeaturedProduct/>
      <Trusted/>
    <Services/>
    
    </>
  
    
  )
}

const Container=styled.section`
background-color: ${({theme})=>theme.colors.bg};

height:100vh;
`;
export default Home