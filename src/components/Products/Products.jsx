import React from 'react';
import styled from "styled-components";
import FilterSection from './FilterSection';
import Sort from './Sort';
import ProductList from './ProductList';
import { useFilterContext } from '../../appContext/FilterContext';

const Products = () => {
  const filter_products_data=useFilterContext();
  // console.log("inside products getting filter prod data--",filter_products_data);
  return (
    <>{filter_products_data?<Container>
        <div className="container grid grid-filter-column">
          <div>
            <FilterSection/>
        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort/>
          </div>
          <div className="main-product">
            <ProductList/>
          </div>

          </section>  
          
          </div>
        
        
        </div>

    </Container>:
    
    
    
    
    
    
    <div>No Products found</div>
    
    }</>
    
  )
}
const Container=styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;
export default Products;