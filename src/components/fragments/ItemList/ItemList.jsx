import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ list }) => {
  return (
    <ul>
      {list.map((producto) => (
        <Item producto={producto} key={producto.id} />
      ))}
    </ul>
  );
};

export default ItemList;
