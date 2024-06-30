import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../../appContext/FilterContext";
const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView,setSortingValue } =
    useFilterContext();

  return (
    <Conatiner className="sort-section">
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button
          className={!grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>
      <div className="products-data">
        <p>
         
          <span className="span-availabelProducts">
            {filter_products.length}
          </span>
          Products available
        </p>
      </div>
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="#sort">
            <select name="sort" id="sort" className="sort-selection--style"
            onClick={setSortingValue}>
              <option value="lowest">Price:Low to High</option>
              <option value="highest">Price:High to Low</option>
              <option value="a-z">Sort by name:a-z</option>
              <option value="z-a">Sort by name:z-a</option>
            </select>
          </label>
        </form>
      </div>
    </Conatiner>
  );
};
const Conatiner = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .span-availabelProducts {
    font-weight: 800;
  }

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;
export default Sort;
