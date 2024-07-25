import React, { useState } from 'react';
import './SelectableList.css';

const SelectableList = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5'
  ];

  const handleItemClick = (item) => {
    console.log(item);
    setSelectedItem(item);
  };

  return (
    <div>
      <h2>Selectable List</h2>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={`list-group-item ${selectedItem === item ? 'selected' : ''}`}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectableList;
