import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

// const getLocalCartData=()=>{
//   let cartData=localStorage.getItem("ShoppingCart");
//   if(cartData==[] || cartData==undefined){
//     return [];
//   }else {return JSON.parse(cartData)}
// }

const initialState = {
  cart: [],
  // cart: getLocalCartData(),
  total_item:0,
  total_amount:0,
  shipping_fee: 5,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (_id, name, price, count, product) => {
    // console.log(`is--${_id} name ${name} price ${price} count ${count} `)
    // console.log("product-->", product);

    dispatch({
      type: "ADD_TO_CART",
      payload: { _id, name, price, count, product },
    });
  };

  const deleteProduct = (_id) => {
    console.log("remove prod", _id);
    dispatch({ type: "DELETE_PRODUCT_FROM_CART", payload: _id });
  };
  //adding cart to localStorage
  useEffect(() => {
    // localStorage.setItem("ShoppingCart", JSON.stringify(state.cart));
    // dispatch({type:"TOTAL_ITEMS_IN_CART"})
    // dispatch({type:"CALCULATE_CART_TOTAL"})
    dispatch({type:"CALCULATE_CART_ITMES_AND_TOTAL"})
    
  }, [state.cart]);

  const setProductIncrease = (_id) => {
    console.log("in increase context", _id);
    dispatch({ type: "INCREASE_PRODUCT_COUNT", payload: _id });
  };
  const setProductDecrease = (_id) => {
    dispatch({ type: "DECREASE_PRODUCT_COUNT", payload: _id });
  };
  const clearCart=()=>{
    dispatch({type:"CLEAR_CART"})
  }
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        deleteProduct,
        setProductIncrease,
        setProductDecrease,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

//custom hook for cart dta
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
