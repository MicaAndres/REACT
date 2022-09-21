import React, { useState, useContext } from "react";
import { Count } from "../Count/Count"
import './ItemDetail.css'
import { CartContext } from '../../hooks/CartContext'
import {Link} from 'react-router-dom'

export const ItemDetail = ({ item }) => {

    const [cantidad, setCantidad] = useState(0);

    const addItem = useContext(CartContext)    

    const handleOnAdd = (count) =>{ 
        setCantidad(count) 
        console.log(`Se agregaron ${count} de items del producto ${item.name}`)
        addItem(item, count)
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

                    <Count stock={item.stock} initial={0} onAdd={handleOnAdd} />

                    {cantidad>0&&
                        <Link to="/Cart" type="button">
                            Finalizar compra
                        </Link>} 

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