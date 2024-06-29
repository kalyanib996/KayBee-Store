import React, { useState } from "react";
import styled from "styled-components";

const SingleProductImg = ({ image }) => {


  if (image) {
    return (
               <Container>
            <div >
              <figure>
                <img
                  src={image}
                  alt="featured product image"
                  className="box-image-style"
                 
                />
              </figure>
            </div>
         
          </Container>
        
    
    );
  } else return <div>Loading</div>;
};
const Container = styled.section`
  

    img {
      max-width: 100%;
      max-height: 100%;
      margin-top:25%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    
  }
`;

export default SingleProductImg;
