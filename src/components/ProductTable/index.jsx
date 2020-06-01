import React from 'react';

import ProductRow from './../ProductRow';

const ProductTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map(product => {
          return ( <ProductRow key={Date.now() * Math.random()} {...product} />)
          })
        }
      </tbody>
    </table>
  );
}

export default ProductTable;
