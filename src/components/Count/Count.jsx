import React, { useState } from 'react'
import './Count.css'
import '../../mock/products'
import ButtonCarrito from './ButtonCarrito'

export const Count = ({stock, initial = 1, onAdd}) => {
    

  return (
    <div className='divCounterContainer'>
        <ButtonCarrito/>
    </div>
  )
} 


