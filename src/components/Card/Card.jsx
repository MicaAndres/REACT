import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';

//card es las card que estan en home, cocinita y heladera
export const Card = ({item}) => { //es el encargado de recibir la informacion del mapeo realizado en itemlist y renderizarlo informacion por informacion  titulo, img, etc
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