const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { _id, name, price, count, product } = action.payload;
      // console.log("cart action.payloaf",action.payload)

      const existingProducts = state.cart.find(
        (element) => element._id === _id
      );
      // console.log("existing products----", existingProducts);

      if (existingProducts) {
        let updateProduct = state.cart.map((ele) => {
          if (ele._id === _id) {
            let updatedCount = ele.count + count;
            console.log("---new count----", updatedCount);
            return {
              ...ele,
              count: updatedCount,
            };
          } else return ele;
        });
        return {
          ...state,
          cart: updateProduct,
        };
      } else {
        const cartProduct = {
          _id,
          name,
          price,
          image: product.image,
          count,
        };
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }
    }

    case "DELETE_PRODUCT_FROM_CART": {
      console.log("DELETE_PRODUCT_FROM_CART");
      let updateCart;
      updateCart = state.cart.filter((ele) => ele._id !== action.payload);
      return {
        ...state,
        cart: updateCart,
      };
    }
    case "INCREASE_PRODUCT_COUNT": {
      //  console.log("payload",action.payload)
      let updatedCount = state.cart.map((ele) => {
        if (ele._id === action.payload) {
          console.log("ele--", ele);
          let incCount = ele.count + 1;
          if (incCount >= 5) {
            incCount = 5;
          }
          return {
            ...ele,
            count: incCount,
          };
        } else return ele;
      });

      return {
        ...state,
        cart: updatedCount,
      };
    }

    case "DECREASE_PRODUCT_COUNT": {
      let updatedCount = state.cart.map((ele) => {
        if (ele._id === action.payload) {
          console.log("ele--", ele);
          let decCount = ele.count - 1;
          if (decCount <= 1) {
            decCount = 1;
          }
          return {
            ...ele,
            count: decCount,
          };
        } else return ele;
      });
      return {
        ...state,
        cart: updatedCount,
      };
    }
    case "CLEAR_CART":
      {
        return {
          ...state,
          cart: [],
        };
      }
    // case "TOTAL_ITEMS_IN_CART":{
    //   let totalItems=state.cart.reduce((acc,ele)=>acc+=ele.count,0)
    //   // console.log("items in cart--", totalItems)
    // return{
    //   ...state,
    //   total_item:totalItems
    // }
    // }
    // case "CALCULATE_CART_TOTAL":{
    //   let cartTotal=state.cart.reduce((acc,element)=>acc+(element.price*element.count),0)
    //   console.log("total price of cart",cartTotal)
    //   return{
    //     ...state,
    //     total_amount:cartTotal
    //   }
    // }

//combining reducers for calculating cart total  and total items in cart
case"CALCULATE_CART_ITMES_AND_TOTAL":{
  let {total_item, total_amount}= state.cart.reduce((acc,currEle)=>{
    let {price,count}=currEle;
    acc.total_item+=count;
    acc.total_amount+=(price*count);
    
    return acc;
  },{
    total_item:0,
    total_amount:0
  })
  return{
    ...state,
    total_item,
    total_amount
  }
}

    default:
      break;
  }
};
export default CartReducer;
