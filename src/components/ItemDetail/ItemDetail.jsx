import React, { useContext, useState } from 'react';
import { Count } from "../Count/Count"
import './ItemDetail.css'
import { Context } from '../../hooks/Context';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ id, title, category, img, price, stock, description }) => { // info que nos llega de itemdetailcontainer, consumida del padre
    const [purchased, setPurchased] = useState(false);
    const { onAdd } = useContext(Context);
  
    const addItem = (count) => {
        if (count > 0) {
          onAdd({ id, title, category, img, price, stock }, count);
          setPurchased(true);
        } else {
          alert('La cantidad debe ser mayor a cero');
        }
      };

  return (
    <article className='cardDetail'>
        <h1 className='fontStyle'>{title}</h1>
        <div className="divCardDetail">
            <div className="cardImg">
                <img src={img} alt={title} className='fotoProducto' />
            </div>
            <div className="cardInfo">
                <p>{description}</p>
                <p className='fontStyle'>${price}</p>
                <p>Stock: {stock}</p>
            </div>
            {!purchased ? (
                <Count stock={stock} initial={0} addItem={addItem}/>
  
            ) :(
                <Link to="/cart">Terminar compra</Link>
            )}
            
        </div>

    </article>
  );
};