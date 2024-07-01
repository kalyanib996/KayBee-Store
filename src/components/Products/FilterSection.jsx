import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../../appContext/FilterContext";
import { Button } from "../../Styles/Button";

const FilterSection = () => {
  const {
    filters: { searchText, category,company },
    updateFilterValue,
    all_products,
    setClearFilter
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newCategoryValue = data.map((ele) => {
      return ele[property];
    });
    return ["All", ...new Set(newCategoryValue)];
  };

  const categoryUniqueData = getUniqueData(all_products, "category");
  const companyUniqueData = getUniqueData(all_products, "company");

  return (
    <Container>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="searchText"
            value={searchText}
            onChange={updateFilterValue}
            placeholder="Search Products"
          />
        </form>
      </div>
      {categoryUniqueData && (
        <div className="filter-category">
          <h3>Category</h3>
          <div>
            {categoryUniqueData.map((element, index) => (
              <button
                key={index}
                type="button"
                name="category"
                value={element}
                className={element === category ? "active" : ""}
                onClick={updateFilterValue}
              >
                {element}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="filter-company">
        <h3>Company</h3>
        <select
          name="company"
          id="company"
          className="filter-company--select"
          onChange={updateFilterValue}
          value={company}
        >
          {companyUniqueData.map((element, index) => (
            <option key={index} value={element}>
              {element}
            </option>
          ))}
        </select>
      </div>


    <div className="filter-clear">
      <Button onClick={setClearFilter}>Clear Filter</Button>
    </div>
    </Container>
  );
};

const Container = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-weight: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: max-content;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company {
    position: relative; /* Ensure relative positioning for dropdown */
    margin-bottom: 1rem; /* Optional: Adjust margin as needed */
  }

  .filter-company--select {
    width: 100%; /* Ensures the select takes full width of its container */
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
    border: 1px solid #ccc; /* Add border for dropdown consistency */
    background-color: #fff;
    cursor: pointer;
    appearance: none; /* Remove default arrow in some browsers */
  }

  .filter-company--select::-ms-expand {
    display: none; /* Remove default arrow in IE */
  }

  .filter-company--select option {
    background-color: #fff; /* Optional: Set background color for options */
    color: ${({ theme }) => theme.colors.text};
  }

  .filter-company--select:focus {
    outline: none; /* Remove focus outline */
  }

  .filter-company--select:focus + .dropdown-content {
    display: block; /* Show dropdown content when select is focused */
  }

  .dropdown-content {
    display: none;
    position: absolute;
    top: 100%; /* Position dropdown content below select */
    left: 0;
    width: 100%; /* Optionally set width */
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
`;


export default FilterSection;
