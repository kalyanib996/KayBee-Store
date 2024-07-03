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

  const addToCart = (_id, name, price,  count, product) => {
  
    // console.log(`is--${_id} name ${name} price ${price} count ${count} `)
    // console.log("product-->", product);
   
    dispatch({ type: "ADD_TO_CART", payload: { _id, name, price, count, product } });
  };

  const deleteProduct=(_id)=>{
      console.log("remove prod", _id)
    dispatch({type:"DELETE_PRODUCT_FROM_CART", payload:_id})
  } 

  return (
    <CartContext.Provider value={{ ...state, addToCart,deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

//custom hook for cart dta
const useCartContext = () => {
 return useContext(CartContext);
};

export { CartProvider, useCartContext };
