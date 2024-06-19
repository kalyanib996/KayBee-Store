import React from 'react'
import styled from 'styled-components'
import { Button } from '../Styles/Button';
import { NavLink } from 'react-router-dom';
import { IoMdSad } from "react-icons/io";
const ErrorPage = () => {
  return (
    <Container>
    <h1>Page not Found <IoMdSad/></h1>

    <Button style={{position:"relative", left:"7%"}}> <NavLink to="/home"> Home</NavLink></Button>
    </Container>
  )
}
const Container= styled.section`
position:relative;
left:40%;
padding-top: 8rem;
`;
export default ErrorPage