import React, { useEffect, useState } from 'react'
import { products } from '../../mock/products'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader'
import db from '../../services/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {

  const { id } = useParams()
  const [item, setItem] = useState()
  const [load, setLoad] = useState(true)

  const getItem = async (idItem) =>{
    try{
      const document = doc(db, "Items", idItem)
            const response = await getDoc(document)
            const result = { id: response.id, ...response.data() }
            setItem(result)
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getItem(id)
    }, [id])

  

  return (
    <>
      {
        load ? <Loader /> : <ItemDetail item={item} />  
      }
    </>
  )
}