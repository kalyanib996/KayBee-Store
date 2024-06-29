import {createContext,useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/filterReducer";
const FilterContext=createContext();
const initialState={
    filter_products:[],
    all_products:[],
    grid_view:true,
    
}


const FilterContextProvider = ({ children }) => {
    const {products}=useProductContext();
    // console.log("products in filter context--",products)
    const [state, dispatch] = useReducer(reducer,initialState)

    //setting grid view
    const setGridView=()=>{
        return dispatch({type:"SET_GRIDVIEW"})
    }

    const setListView=()=>{
        return dispatch({type:"SET_LISTVIEW"})
    }

    useEffect(()=>{
    dispatch({type:"LOAD_FILTER_PRODUCT_DATA",payload:products})
    },[products])  //products added as dependency to re update/add the data to the filter products


return (
    <FilterContext.Provider value={{...state,setGridView,setListView}}>
        {children}
    </FilterContext.Provider>
)
};

const useFilterContext=()=>{
return useContext(FilterContext)
}


export {FilterContextProvider, useFilterContext}