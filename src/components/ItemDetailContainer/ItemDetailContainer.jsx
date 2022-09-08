import React, { useEffect, useState } from 'react'
import { products } from '../../mock/products'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader'

export const ItemDetailContainer = () => {

  const {id} = useParams()


    const [item, setItem] = useState()

    const getProduct = () => new Promise((resolve, reject) => {
        setTimeout(()=> resolve(products.find(product => product.id === Number(id))), 2000)
      })


    useEffect(() => {
      getProduct()
      .then(response => setItem(response))
    }, [])
  
    
    return (
      <>
        {
          item ? <ItemDetail item={item}/> : <Loader/>
        }
      </>
  )
}