import React from 'react';

const SearchBar = (props) => {
  const handleInputChange = (event) => {
    props.filterProducts(event.target.value)
  }


  return (
    <div>
      <form>
        <label htmlFor="search-input">Search</label>
        <input type="text" id="search-input" onChange={handleInputChange} placeholder="Search a product"/>

        <input type="checkbox" in="on-stock" checked={props.checked} onChange={props.stockedProducts}/>
        <label htmlFor="on=stock">Only show products on stock</label>
      </form>
    </div>
  )
}

export default SearchBar;