import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import ProductReducer from "../reducer/productReducer";

const StoreContext = createContext();
const productAPI = "https://kaybee-store-productsapi-prod.up.railway.app/api/products";
const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(productAPI);
      const products = await response.data.prodData;
      dispatch({ type: "PRODUCT_DATA", payload: products });
     
    } catch (error) {
      console.log("Something went wrong", error);
      dispatch({ type: "API_ERROR " });
    }
  };

  //api call for single product
  const fetchSingleProductData = async (prodID) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const response = await axios.get(productAPI.concat(prodID));
      const singleProduct = await response.data.prodData;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct[0] });
    } catch (error) {
      console.log("Something went wrong", error);
      dispatch({ type: "API_ERROR " });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StoreContext.Provider value={{ ...state, fetchSingleProductData }}>
      {children}
    </StoreContext.Provider>
  );
};

// customHook
const useProductContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useProductContext };
