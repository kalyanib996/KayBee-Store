import { createContext, useContext, useEffect,useReducer } from "react";
import axios from "axios";
import ProductReducer  from "../reducer/productReducer";

const StoreContext = createContext();
const productAPI = "https://kaybee-store-productsapi-prod.up.railway.app/api/products";
const initialState={
    isLoading:true,
    isError:false,
    products:[],
    featuredProducts:[]
}

const StoreProvider = ({ children }) => {

const [state, dispatch] = useReducer(ProductReducer,initialState)
  const fetchData = async () => {
    dispatch({type:"SET_LOADING"})
    try {
      const response = await axios.get(productAPI);
      const products = await response.data.prodData;
    //   console.log("products data--", products);
      dispatch({type:"PRODUCT_DATA", payload: products})
    //   console.log("dispatchhhh")
    } catch (error) {
      console.log("Something went wrong", error);
    dispatch({type:"API_ERROR "})

    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StoreContext.Provider value={{...state}}>{children}</StoreContext.Provider>
  );
};

// customHook
const useProductContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useProductContext };
