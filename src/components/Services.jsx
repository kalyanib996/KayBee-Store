import React from "react";
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";

const Services = () => {
  return (
    <Container>
    <div className="container">
      <div className="grid grid-three-column">
        <div className="service-1">
          <TbTruckDelivery className="icon" />
          <h3> Free Delivery</h3>
        </div>
        <div className="service-2">
          <div className="service-column-2">
          <MdSecurity className="icon" />
          <h3>Non-Contact Shipping</h3>
          </div>
          <div className="service-column-2">
          <GiReceiveMoney className="icon" />
          <h3>Money-Back Guaranteed</h3>
        </div>
        </div>
        <div className="service-3">
          <RiSecurePaymentFill className="icon" />
          <h3>Secure Payments</h3>
        </div>
      </div>
    </div>
    </Container>
  );
};
const Container = styled.section`
padding: 9rem 0;

.grid {
  gap: 4.8rem;
}

.service-1,
.service-2,
.service-3 {
  width: auto;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background: ${({ theme }) => theme.colors.bg};
  text-align: center;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}

.service-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

  .service-column-2 {
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
}

h3 {
  margin-top: 1.4rem;
  font-size: 2rem;
}

.icon {
  /* font-size: rem; */
  width: 8rem;
  height: 8rem;
  padding: 2rem;
  border-radius: 50%;
  background-color: #fff;
  color: #5138ee;
  position:relative;
  align-self: center;
  
}
`;
export default Services;
