import React from 'react'
import { useProductContext } from '../appContext/ProductContext'
const Products = () => {
  const data=useProductContext();
  console.log(data);
  return (
    <>{data?<div>Products
      {data.products.map((ele)=>{
        return <p>{ele.category}</p>

      })}

    </div>:
    
    
    
    
    
    
    <div>No Products found</div>
    
    }</>
    
  )
}

export default Products