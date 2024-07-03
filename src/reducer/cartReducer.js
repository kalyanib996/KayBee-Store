const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      {
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

    case "DELETE_PRODUCT_FROM_CART":{
      console.log("DELETE_PRODUCT_FROM_CART")
        let updateCart;
        updateCart=state.cart.filter((ele)=>ele._id!==action.payload)
      return{
        ...state,
        cart:updateCart
      }
    }

      break;

    default:
      break;
  }
};
export default CartReducer;
