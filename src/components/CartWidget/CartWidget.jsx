import React,  { useContext } from 'react';
import './CartWidget.css';
import { CartContext } from '../../hooks/CartContext';
import {Link} from 'react-router-dom'
import ItemCart from '../Cart/ItemCart';

const CartWidget = () => {
   const {cart, getQuantity} = useContext(CartContext);
   
   return  (
    <>
    
    <li className={`nav-item ${cart.length === 0 ?  : }`}>
        <Link className="" to="../cart">
          <img src="/images/carrito.png" alt="carrito" width="40px" />
        </Link>
        <span>{getQuantity()}</span>
      </li>
    
    </>
    )
    
}

export default CartWidget;




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