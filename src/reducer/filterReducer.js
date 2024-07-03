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
    // search bar text
    case "UPDATE_FILTER_VALUES":{
      const {name, value}=action.payload;
      return{
        ...state,
        filters:{
          ...state.filters,
          [name]:value
         
        }
      }
    }
    //setting products which match searchText
    case "UPDATE_FILTER_PRODUCTS":{
      // let {all_products}=state;
        // console.log("update filter value in REDUCER")
    
      let tempFilterPRoducts=[...state.all_products];
      const {searchText,category,company}=state.filters;

      if(searchText){
      tempFilterPRoducts=tempFilterPRoducts.filter((ele)=>{
        // console.log("search text",searchText);
        return ele.name.toLowerCase().includes(searchText)})
      }
      if(category.toLowerCase()!=="all"){
        // console.log("if block of category")
        tempFilterPRoducts=tempFilterPRoducts.filter((ele)=>{
          return ele.category.toLowerCase()===category})
      }
      if(company.toLowerCase()!=="all"){
        // console.log("if block of category")
        tempFilterPRoducts=tempFilterPRoducts.filter((ele)=>{
          return ele.company.toLowerCase()===company.toLowerCase()})
      }
      // if(category.toLowerCase()=="all"){
      //   console.log("Inside if for category all", category.toLowerCase())
      //   tempFilterPRoducts=[...state.all_products]
      // }
      // console.log("tempfilterprod--",tempFilterPRoducts)
      return{
        ...state,
        filter_products:tempFilterPRoducts
      }
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
    case "CLEAR_PRODUCT_FILTER":{
      const {filters}=state;
    return{
      ...state,
      filters:{
        ...filters,
        searchText: "", category: "all", company: "all"
      },
      filter_products:[...state.all_products]
    }
    }
    default:
      return state;
  }
};

export default filterReducer;
