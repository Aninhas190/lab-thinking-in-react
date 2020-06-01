import React, { Component } from 'react';
import data from './data.json';
import './App.css';

import FilterableProductsTable from './components/FilterableProductTable';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data.data,
      searchInput: '',
      onlyDisplayStockedProducts: true
    }
  }

  filterProducts = (searchInput) => {
    this.setState({
      searchInput: searchInput
    })
  }
    //can be a get method
  filterData = () => {
    const filtered = this.state.data.filter(product => {
      return product.name
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    })
    return filtered;
  }

  

  render() {
    return (
      <div className="App">
        <FilterableProductsTable products={this.filterData()} filterProducts={this.filterProducts} onlyAllowStocked={this.state.onlyDisplayStockedProducts} />
      </div>
    );
  }
}

export default App;
