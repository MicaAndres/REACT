import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader'
import db from '../../services/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

//itemlistcointerner tiene la logica, no se encarga de mapear solo consume, lo guarda en el estado y se lo pasa a itemlist que es el que se encarga de mapearlo
export const ItemListContainer = () => {
  const [productList, setProductList] = useState([]) //estado que guarda los productos
  const [load, setLoad] = useState(true);
  const {categoria} = useParams()



  useEffect(() => {// encargado de consumir la promesa y con setProductList lo setea en el estado
    setLoad(true);

    const myItems = categoria
      ? query(collection(db, 'products'), where('category', '==', categoria))
      : collection(db, 'products');

    // aca usamos el paso intermedio de crear un objeto para agregarle el id de firebase, que viene por afuera de nuestro objeto
    getDocs(myItems)
      .then((res) => {
        const results = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        setProductList(results);
      })
      .finally(() => setLoad(false));
  }, [categoria]);
  

  return (
    <div className=' body'>
      <div className='divTitulo body'>   
            <div className='listaProductos'>
              {load ? <ItemList productList={productList} /> :   <Loader/>}
            </div>
        </div>
      
    </div>
  )
}
