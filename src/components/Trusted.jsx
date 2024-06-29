import React from 'react';
import styled from 'styled-components';
import sliderImg1 from "../assets/image-from-rawpixel-id-6483614-png.png"

const Trusted = () => {
  return (
    <Container className="brand-section">
    <div className='container'>
        <h3> Trusted by 100+ companies</h3>
        <div className='brand-section-slider'> 
            <div className='slide'>
              <img src={sliderImg1} alt="1st sliderimg"/>
            </div>
            <div className='slide'>
              {/* 2st sliderimg */}
              <img src={sliderImg1} alt="2st sliderimg"/>
              </div>
            <div className='slide'>
              {/* 3st sliderimg */}
              <img src={sliderImg1} alt="2st sliderimg"/>
              </div>


        </div>
    </div>
    
    </Container>
  )
}


const Container = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;


export default Trusted