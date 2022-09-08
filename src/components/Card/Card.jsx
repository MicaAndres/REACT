import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';


export const Card = ({item}) => {
  const {title, img, price, id} = item
  return (
    
        <div className='card'>
        <h4 className='fontStyle'>{title}</h4>
        <div>
            <img className='fotoProducto' src={img} alt={`Imagen del producto ${title}`} />
        </div>
        <p className='fontStyle'>$ {price} </p>
        <Link to={`/detalles/${id}`}>
          <button className='styleButton'>+ info</button>
        </Link>
    </div>
      
    
  )
}