import React, { useContext, useEffect, useState } from "react";
import { CartContext } from '../../hooks/CartContext'
import { Link } from 'react-router-dom'


const CartView = () => {
    const { cart, removeFromCart, getTotal } = useContext(CartContext);

    return cart.length > 0 ? (
        <div>
            {cart.map((element) =>  (
                    <div>
                        <span> {element.item.name}</span>
                        <span> {element.item.price}</span>
                        <img src={element.item.img} />

                        <span>Cantidad: {element.quantity}</span>
                        <button onClick={() => removeFromCart(element.item.id)}>
                            Eliminar
                        </button>
                    </div>
                ))}
            <div>
                <h4>Precio Total $ {getTotal()}</h4>
                <button>Confirmar compra</button>
            </div>
        </div>     
    
    ) : (

        <div>
            <div>
                <h1>Tu carrito esta vacio</h1>
                <Link to="/productos">
                    <button>Ir a comprar</button>
                </Link>
            </div>
        </div>

    )
}

export default CartView;