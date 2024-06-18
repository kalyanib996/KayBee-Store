import React from 'react';
import styled from 'styled-components';
import HeroComponent from './HeroComponent';
import Services from './Services';
import Trusted from './Trusted';
import Footer from './Footer';

const Home = () => {
  const data={
    name:"KayBee Store"
  }
  return (
    <>
      <HeroComponent pageName={data}/>
      <Trusted/>
    <Services/>
    <Footer/>
    </>
  
    
  )
}

const Container=styled.section`
background-color: ${({theme})=>theme.colors.bg};

height:100vh;
`;
export default Home