import React, { useState, useContext } from "react";
import { Count } from "../Count/Count"
import './ItemDetail.css'
import { CartContext } from '../../hooks/CartContext'
import {Link} from 'react-router-dom'

export const ItemDetail = ({ item }) => {


    const { addToCart } = useContext(CartContext);

   
    const [goToCart, setGoToCart] = useState(false);

    
    const onAdd = (count) => {
      
        setGoToCart(true);
        addToCart(item, count);
        let stock = item.stock - count
        item.stock = stock

    };


    return (
        <article className='cardDetail'>
            <h1 className='fontStyle'>{item.title}</h1>
            <div className="divCardDetail">
                <div className="cardImg">
                    <img src={item.img} alt={item.title} className='fotoProducto' />
                </div>
                <div className="cardInfo">
                    <p>{item.description}</p>
                    <p className='fontStyle'>${item.price}</p>
                    <p>Stock: {item.stock}</p>

                    {goToCart ? (
                        <Link to="/Cart" type="button">
                            Finalizar compra
                        </Link>
                        ) : (
                        <Count stock={item.stock} initial={0} onAdd={onAdd} />
                        )} 

                        <Link to="/" type="button">
                            <button className='styleButtonCount' onClick={onclick}>
                                Seguir comprando
                            </button> 
                        </Link>
                </div>
            </div>
        </article>
    )
}