import React from 'react'
import { useFilterContext } from '../../appContext/FilterContext';
import GridView from './GridView';
import ListView from './ListView'
const ProductList = () => {
  
  const {filter_products, grid_view}=useFilterContext();
  // console.log("filter_products_data",filter_products,grid_view)
  
  if(grid_view===true){
    // console.log("setGridView---",grid_view, filter_products)
  return (
    <GridView products={filter_products}></GridView>
  )
}
if(grid_view===false){
  return (
    <ListView products={filter_products}></ListView>
  )
}

}


export default ProductList