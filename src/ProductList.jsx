import React from 'react';
import ProductItem from './ProductItem'; // Adjust the import path as necessary

const ProductList = () => {
  const products = [
    { name: 'Product 1', price: 29.99 },
    { name: 'Product 2', price: 39.99 },
    { name: 'Product 3', price: 19.99 },
    { name: 'Product 4', price: 49.99 },
    { name: 'Product 5', price: 59.99 }
  ];

  return (
    <div>
      <p>List of Products</p>
      <ul className="list-group">
        {products.map((product, index) => (
          <ProductItem key={index} name={product.name} price={product.price} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
