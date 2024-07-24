import React from 'react';

const ProductItem = ({ name, price }) => {
  return (
    <li className="list-group-item">
      {name}: ${price}
    </li>
  );
};

export default ProductItem;
