import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartReducer";
const CartContext = createContext();

const initialState = {
  cart: [],
  total_item: "",
  total_amount: "",
  shipping_fee: 5,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (_id, name, price, count, product) => {
  
    // console.log(`is--${_id} name ${name} price ${price} count ${count} product ${product}`)
    dispatch({ type: "ADD_TO_CART", payload: { _id, price, count, product } });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

//custom hook for cart dta
const useCartContext = () => {
 return useContext(CartContext);
};

export { CartProvider, useCartContext };
