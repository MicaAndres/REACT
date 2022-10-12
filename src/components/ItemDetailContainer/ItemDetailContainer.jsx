import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader'
import db from '../../services/firebase';
import { doc, getDoc } from 'firebase/firestore';


//la diferencia con itemlistcontainer es que este realiza un filter en su promesa y itemdetailcontainer realiza un find
export const ItemDetailContainer = () => {

  const {id} = useParams()
  const [item, setItem] = useState() //estado 
  const [load, setLoad] = useState(true)


    useEffect(() => { // el que consume la promesa y guardar la info en el estado
      setLoad(true);

   const myItem = doc(db, 'products', id);

    // aca usamos el paso intermedio de crear un objeto para agregarle el id de firebase, que viene por afuera de nuestro objeto
    getDoc(myItem)
      .then((res) => {
        const result = { id: res.id, ...res.data() };
        setItem(result);
      })
      .finally(() => {
        setLoad(false);
      });
  }, []);

    
    return (
      <>
        {
          load ? <Loader/> : <ItemDetail item={item}/> 
        }
      </>
  )
}