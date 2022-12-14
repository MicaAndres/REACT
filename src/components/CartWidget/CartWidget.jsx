import React, {useContext} from 'react';
import { Context } from '../../hooks/Context';
import { Link } from 'react-router-dom';
import './CartWidget.css';

export const CartWidget = () => {
    const {unidades} = useContext(Context);
    return(<>{
        <Link to='/cart'>
                   <img className='cartLogo' src='/images/carrito.png' alt='carrito de compras'/>
        
    {
      unidades() > 0 && <p>{unidades()}</p>
     
    }
     </Link>
      
     }  </> 
    ); 
};










/*import React from 'react'
import { Link } from 'react-router-dom'
import "./CartWidget.css"
import { useCartContext } from '../Cart/CartContext';


export default function CartWidget() {
    const { cart, totalProductos  } = useCartContext();

    return (
        <>
            <div className={`${cart.length === 0 ? "d-none" : "d-block"}`}>
                <Link to={`/cart/`}>
                    <img  className='Margin-widget' src="https://cdn-icons-gif.flaticon.com/6416/6416376.gif" width="50" heigth="50"></img>
                </Link>
                <strong className='CantProductos'>{totalProductos()}</strong>
                
            </div>
        </>
    )
}



/*import React,  { useContext } from 'react';
import './CartWidget.css';
import { CartContext } from '../../hooks/CartContext';
import {Link} from 'react-router-dom'
import ItemCart from '../Cart/ItemCart';

const CartWidget = () => {
   const {cart, getQuantity} = useContext(CartContext);
   
   return (
    <>{<ItemCart/>}
        <Link>
            
            <img className='cartLogo' src='/images/carrito.png' alt='carrito de compras'/>
        </Link> 
    </>
   )
    
   
    
}

export default CartWidget;

 /*   <li className={`nav-item ${cart.length === 0 ? "d-none" : "d-block"}`}>
        <Link className="" to="../cart">
          <img src="/images/carrito.png" alt="carrito" width="40px" />
        </Link>
        <span>{getQuantity()}</span>
      </li>
    */



/*<Link to="/">
            <div>
                <div>
                   {<ItemCart/>}<img className='cartLogo' src='/images/carrito.png' alt='carrito de compras'/>
                   
                </div>
                
            </div>
        </Link>*/
  /*
  ANTES DEL RETURNconst {cart, getQuantity, getTotal} = useContext(CartContext);*/

/* DESPUES DEL RETURN cart.length === 0 ? (
        <div>
            <Link to="/">
                <div>
                    <div>
                       <Link>{<ItemCart/>}<img className='cartLogo' src='/images/carrito.png' alt='carrito de compras'/></Link> 
                    </div>
                    <span>{getQuantity()}</span>
                </div>
            </Link>
        </div> 
    ) : (
       <></>
    )*/



    /*if (cart.length ===0){
       return(
            <div>
                <div>
                    <Link to="/cart">
                        <img className='cartLogo' src='/images/carrito.png' alt='carrito de compras'/>
                    </Link> 
                </div>
                <span>{getQuantity}</span>
            </div>
       )
       
   }else{
    <></>
   }*/