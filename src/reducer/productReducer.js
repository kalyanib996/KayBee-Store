const ProductReducer = (state, action) => {
    // console.log("inside reducer",action)
  switch (action.type) {
    case "SET_LOADING":{
        return {
            ...state,
            isLoading:true
        }
    }
    case "API_ERROR":{
        return{
            ...state,
            isError:true
        }
    }
    case "PRODUCT_DATA":{
       
        return{
            ...state,
            products:action.payload,
           
            featuredProducts: action.payload.filter((curEle,inx)=>curEle.featured==true),
            isLoading:false
        }
    }
    case "SET_SINGLE_PRODUCT":{
        // console.log("payload--",action.payload)
        return{
            ...state,
            isSingleLoading:false,
            singleProduct:action.payload
        }
    }
case "SET_SINGLE_LOADING":{
    return{
        ...state,
        isSingleLoading:true
    }
}
    default: return state;
  }

  return state;
};
export default ProductReducer;
