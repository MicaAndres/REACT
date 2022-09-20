import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../hooks/CartContext'
import { Order } from './Order'
import  ItemCart  from './ItemCart.jsx'


export const Cart = () => {

    const { cart, getTotal, getQuantity } = useContext(CartContext);
    /* const [empty, setEmpty] = useState(true);
    const [showOrder, setShowOrder] = useState(true);
 */
    if (cart.length === 0) {
        return (
            <>
                <div class="container text-center">
                    <div class="row">
                        <div class="col p-5 m-5">
                            <h2>Todavía no agregaste cocinitas o heladeras</h2>
                            <Link to="/"><h3>Ir al catalogo de cocinitas y heladeras</h3></Link>
                        </div>
                    </div>
                </div>
            </>
        );

    }

    return (
        <>
            {cart.map((item) => (
                <ItemCart key={item.id} item={item} />
            ))}
            
            <Order getTotal={getTotal} getQuantity={getQuantity}/>
        </>
    );
};
