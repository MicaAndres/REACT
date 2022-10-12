import React from 'react'
import { Card } from '../Card/Card'


export const ItemList = ({productList}) => {// le llega la info que consumio el padre  de ese componente 
  return (
    <>
      {
        productList?.map((item) => (<Card  key={item.id} item={item} />))// y aca mapea y lo envia a card
      }
    </>

  )
}
