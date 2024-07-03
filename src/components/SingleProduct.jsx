import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../appContext/ProductContext";
import styled from "styled-components";
import PageNavigation from "./PageNavigation";
import SingleProductImg from "./SingleProductImg";
import PriceFormat from "../helpers/PriceFormat";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "./Star";
import AddToCart from "../components/Cart/AddToCart";

const SingleProduct = () => {
  const { id } = useParams();
  const { fetchSingleProductData, isSingleLoading, singleProduct } =
    useProductContext();
  const {
    _id: alias,
    name,
    image,
    company,
    price,
    description,
    category,
    stock,
    rating,
    reviews,
  } = singleProduct;


  // console.log("Single Product---",singleProduct)
  useEffect(() => {
    fetchSingleProductData(`?_id=${id}`);
    
  }, []);

  if (isSingleLoading) {
    return <div> Loading</div>;
  }
  
  return (
    <Container>
      <PageNavigation title={name} />
      <div className="container">
        <div className="grid grid-two-column">
          <div className="product_images">
            <SingleProductImg image={image} />
          </div>

          <div className="product-data">
          <div className="product-data">
            <h2>{name}</h2>
            {/* <p>{stars}</p> */}
            <Star stars={rating} />
            {/* <p>{reviews} reviews</p> */}
            <p className="product-data-price">
              Price:
              <del>
                <PriceFormat price={price + 250} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <PriceFormat price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Secure Delivery </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>

            <div className="product-data-info">
              
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
            </div>

            <div> 
              <AddToCart product={singleProduct} />
            </div>
          </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.section`
  .container {
    padding: 9rem 0;
    width: 100%;
    padding: 0rem 12rem;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 85%;
          width: 4rem;
          height: 4rem;
          margin:10%
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;
export default SingleProduct;
