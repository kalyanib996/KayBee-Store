import React from "react";
import styled from "styled-components";
import { Button } from "../Styles/Button";
import { NavLink } from "react-router-dom";
import homepageImg  from "../assets/shopping img.jpeg";
const HeroComponent = (props) => {
  return (
    <Container>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <div className="intro-data">Welcome to</div>
            {props.pageName?<h1> {props.pageName.name }</h1>: <h1>fetchNAme</h1>}
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.{" "}
            </p>
            <NavLink>
              <Button>Shop Now!</Button>
            </NavLink>
          </div>
          <div className="hero-section-image">
            <figure>
            <img src={homepageImg} alt ="homepage imge" className="image-style"/>
            </figure>
          </div>
        </div>
      </div>
    </Container>
  );
};


const Container = styled.section`
padding: 12rem 0;

img {
  min-width: 30rem;
  height: 30rem;
}

.hero-section-data {
 flex: 50%;
  p {
    margin: 2rem 0;
     
  }

  h1 {
    text-transform: capitalize;
    font-weight: bold;
  }

  .intro-data {
    margin-bottom: 0;
  }
}

.hero-section-image {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
}
figure {
  position: relative;

  &::after {
    content: "";
    width: 60%;
    height: 80%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 50%;
    top: -5rem;
    z-index: -1;
  }
}
.img-style {
  width: 100%;
  height: auto;
}



@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 10rem;
  }

  figure::after {
    content: "";
    width: 50%;
    height: 100%;
    left: 0;
    top: 10%;
    /* bottom: 10%; */
    background-color: rgba(81, 56, 238, 0.4);
  }
}
`;

export default HeroComponent;
