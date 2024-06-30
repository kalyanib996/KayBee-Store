const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCT_DATA": {
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      }; //to not mess with the original data in state
    }
    case "SET_GRIDVIEW": {
      return {
        ...state,
        grid_view: true,
      };
    }
    case "SET_LISTVIEW": {
      return {
        ...state,
        grid_view: false,
      };
    }
    case "SET_SORT_VALUE": {
      return { ...state, sort_value: action.payload };
    }
    case "SORT_BASED_ON_SORT_VALUE": {
      let sortedData;
      const { filter_products } = state;
      let tempSortData = [...filter_products]; //creating a new copy of prod data to not mess it up
      sortedData = tempSortData.sort((a, b) => {
        if (state.sort_value === "a-z") return a.name.localeCompare(b.name);
        if (state.sort_value === "z-a") return b.name.localeCompare(a.name);
        if (state.sort_value === "lowest") return a.price - b.price;
        if (state.sort_value === "highest") return b.price - a.price;
      });

    //   if (state.sort_value === "a-z") {
    //     sortedData = tempSortData.sort((a, b) => a.name.localeCompare(b.name));
    //     // console.log("comparing", a.name.localeCompare(b.name))
    //   }
    //   if (state.sort_value === "z-a") {
    //     sortedData = tempSortData.sort((a, b) => b.name.localeCompare(a.name));
    //   }
    //   if (state.sort_value === "lowest") {
    //     sortedData = tempSortData.sort((a, b) => {
    //       return a.price - b.price;
    //     });
    //   }
    //   if (state.sort_value === "highest") {
    //     sortedData = tempSortData.sort((a, b) => {
    //       return b.price - a.price;
    //     });
    //   }
      return {
        ...state,
        filter_products: sortedData,
      };
    }

    default:
      return state;
  }
};

export default filterReducer;
