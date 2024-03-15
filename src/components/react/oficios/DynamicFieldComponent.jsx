import React, { useState } from 'react';

const DynamicFieldComponent = ({ onAdd }) => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = { id: items.length, value: '' }; // Simplified item structure
    setItems([...items, newItem]);
    onAdd(); // Callback for any additional actions
  };

  return (
    <>
      <button onClick={addItem}>Add Item</button>
      {items.map(item => (
        <div key={item.id}>
          <input type="text" placeholder={`Item ${item.id + 1}`} />
          <button onClick={() => alert('Button clicked!')}>Button {item.id + 1}</button>
        </div>
      ))}
    </>
  );
};
