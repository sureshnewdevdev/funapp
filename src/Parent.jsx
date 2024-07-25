import React from 'react';
import Child from './Child';

const Parent = () => {
  const greeting = 'Hello from Parent!';
  const product = {
    name: 'Sample Product',
    price: 29.99,
    description: 'This is a sample product description.'
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <Child greeting={greeting} product={product} />
    </div>
  );
};

export default Parent;
