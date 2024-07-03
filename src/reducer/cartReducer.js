const CartReducer=(state, action)=>{
   switch (action.type) {
    case "ADD_TO_CART":{
        const {_id,name, price,count,product}=action.payload;
        // console.log("cart action.payloaf",action.payload)
        return {
            ...state,
            cart:action.payload
        }
    }
        
        break;
   
    default:
        break;
   }
}
export default CartReducer;