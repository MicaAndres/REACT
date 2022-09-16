import React,  { useContext }from 'react';
import './CartWidget.css';
import { CartContext } from '../../hooks/CartContext';

function CartWidget() {
    return(
        <>
            <img className='cartLogo' src='/images/carrito.png' alt='carrito de compras'/>
        </>
    );
}

export default CartWidget;


