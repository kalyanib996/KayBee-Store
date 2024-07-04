import React, { useState } from "react";
import styled from "styled-components";
import CartCountToggle from "./CartCountToggle";
import { NavLink } from "react-router-dom";
import { Button } from "../../Styles/Button";
import { useCartContext } from "../../appContext/cartContext";

const AddToCart = ({ product }) => {
  const [count, setCount] = useState(0);
  const { addToCart } = useCartContext();

  // console.log("add to cart", product);
  const { _id, name, price} = product;

  const setIncrease = () => {
    count < 5 ? setCount(count + 1) : setCount(5);
  };
  const setDecrease = () => {
    count > 1 ? setCount(count - 1) : setCount(0);
  };
  return (
    <Container>
      <CartCountToggle
        count={count}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink
        to="/cart"
        onClick={() => addToCart(_id, name, price, count, product)}
      >
        {count>0 ? <Button className="btn">Add To Cart</Button> : <Button className="btn-disabled" disabled>Add To Cart</Button>}
        
      </NavLink>
    </Container>
  );
};

const Container = styled.section`
  .btn {
    border-radius: 10 %;
  }
  .btn-disabled{
      border:none;
      cursor: pointer;
      background-color: grey;

      }

  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
      
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddToCart;
