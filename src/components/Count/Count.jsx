import React, { useState } from 'react'
import './Count.css'

export const Count = ({stock, initial = 1, addItem}) => {
    const [count, setCount] = useState(initial)

    
    const addCounter = () => {
        count < stock && setCount( count + 1 )
    }

    const subtractCounter = () => {
        count > initial && setCount( count - 1 )
    }


  return (
    <div className='divCounterContainer'>
        <p className='counter'>{count}</p>
        <div className='divButton'>
            <button className='styleButtonCount' onClick={subtractCounter}>-</button>
            <button className='styleButtonCount' onClick={addCounter}>+</button>
        </div>
        <button className='styleButtonCount' onClick={()=> addItem(count)}>Agregar</button>
    </div>
  )
}

