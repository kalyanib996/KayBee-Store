import React from "react";
import { NavLink } from "react-router-dom";
// import styled from "styled-components";
import PriceFormat from "../helpers/PriceFormat";

const Product = (curr) => {
  const { _id, name, price, category, image } = curr;
  return (
    <NavLink to={`/singleproduct/${_id}`}>
       
      <div className="card">
        <figure>
          <img src={image} alt={"featuredProduct Img"} />
          <figcaption className="caption">{category}</figcaption>
        </figure>
        <div className="card-data">
            <div className="card-data-flex">
                <h3>{name}</h3>
               <p className="card-data--price"><PriceFormat price={price}/> </p>

            
            </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
