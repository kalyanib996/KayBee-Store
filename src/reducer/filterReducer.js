const filterReducer=(state, action)=>{

    switch (action.type) {
        case "LOAD_FILTER_PRODUCT_DATA":{
            return {...state,
            filter_products:[...action.payload],
            all_products:[...action.payload]
        } //to not mess with the original data in state
        }
        case "SET_GRIDVIEW":{
            return{
                ...state,
                grid_view:true
            }
        }
            
            break;
    
        default:
            return state;
    }
}

export default filterReducer;