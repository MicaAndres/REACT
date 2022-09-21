import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../hooks/CartContext'
import { Order } from './Order'
import  ItemCart  from './ItemCart.jsx'


export const Cart = (item) => {

    const { clear, cart, getTotal, getQuantity } = useContext(CartContext);
    /* const [empty, setEmpty] = useState(true);
    const [showOrder, setShowOrder] = useState(true);
 */
    

    return (
        <>
      <h1>Bienvenidos al carrito</h1>
      <hr />
      {cart.length !== 0 ?
        (
          <div className=''>
            <div className=''>
              {cart.map((e) => <ItemCart key={e.id} item={e} />)}
              <br />
              {`Total:  $ ${getTotal()}`}
              <br />
              <button className="btn btn-danger" onClick={clear}>Vaciar Carrito</button>
              <br />
              <br />
              <Link to='/checkout'>
                <button className="btn btn-info">
                  Finalizar Compra
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <h3>El carrito esta vacio</h3>
            <Link to='/'>Ir a la tienda</Link>
          </div>
        )
      }

    </>
    );
};
