import React, { useContext } from 'react'
import { CartContext } from '../../hooks/CartContext'

export default function ItemCart({item}) {
    const {title, img, price, id, cantidad } = item
    const { removeFromCart} = useContext(CartContext)
    return (
        <>
        <div >
            <div >
                <div >
                    <div >
                        <img src={item.img} alt={item.title} />
                    </div>
                    <div >
                        <div >
                            <h5>{item.title}</h5>
                        </div>
                    </div>
                    <div >
                        <div>
                            <p>Cantidad:{cantidad}</p>
                            <p>Precio: ${item.price}</p>
                        </div>
                    </div>
                    <div >
                        <div >
                            <p>Subtotal:${cantidad * price}</p>
                        </div>
                    </div>
                    <div >
                        <div >
                            <i onClick={() => removeFromCart(id)}  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}
/*<div>
            <button  type="button" >
                Toggle right offcanvas
            </button>

            <div >
                <div >
                    <h5 >Offcanvas right</h5>
                    <button type="button"  aria-label="Close">

                    </button>
                </div>
                <div >
                    ...
                </div>
            </div>
        </div>*/