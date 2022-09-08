import React from 'react'
import { Card } from '../Card/Card'


export const ItemList = ({productList}) => {

  return (
    <>
      {
        productList.map(item => <Card  key={item.id} item={item} />)
      }
    </>

  )
}
