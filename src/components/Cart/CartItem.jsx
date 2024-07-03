import React from "react";
import CartCountToggle from "./CartCountToggle";
import PriceFormat from "../../helpers/PriceFormat";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../appContext/cartContext";


const CartItem = ({ _id,image, name, price, count }) => {

    const {deleteProduct}= useCartContext();
    const setIncrease = () => {
        // count < 5 ? setCount(count + 1) : setCount(5);
      };
      const setDecrease = () => {
        // count > 1 ? setCount(count - 1) : setCount(1);
      };

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={"product img in cart"} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
        </div>
      </div>

      <div className="cart-hide">
        <p>
          <PriceFormat price={price} />
        </p>
      </div>

     
      <CartCountToggle
        count={count}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <PriceFormat price={price * count} />
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => deleteProduct(_id)} />
      </div>
    </div>
  );
};

export default CartItem;
