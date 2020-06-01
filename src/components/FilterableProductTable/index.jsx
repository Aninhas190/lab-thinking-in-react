import React, { Component } from 'react';

import SearchBar from './../SearchBar';
import ProductTable from './../ProductTable';

class FilterableProductTable extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }


  render() { 
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar filterProducts={this.props.filterProducts} checked={this.props.onlyAllowStocked} />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

export default FilterableProductTable;