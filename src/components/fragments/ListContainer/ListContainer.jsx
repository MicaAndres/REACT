import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Productos from '../../../Productos/productos.js';




const ListContainer = () => {
  const [Producto, setProducto] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    const getProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Productos);

      }, 2000);
    });

    getProductos
      .then((response) => setProducto(response))
      .finally(() => setIsLoading(false));
  }, []);

  return isLoading ? <h2>Cargando...</h2> : <ItemList list={Producto} />;
};

export default ListContainer;
