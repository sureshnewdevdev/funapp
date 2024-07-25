import React from 'react';

const Child = ({ greeting, product }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Greeting: {greeting}</p>
      <div>
        <h3>Product Details:</h3>
        <p>Name: {product.name}</p>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
      </div>
    </div>
  );
};

export default Child;
