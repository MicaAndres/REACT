import React, { useContext, useState } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    /*Logica del carrito de compras*/

    const [cart, setCart] = useState([]);

    /*Agregar elementos al carrito (verifico si el elemento existe: si existe modifico valores, sino lo agrego al array)*/
    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            console.log("existe en el carrito")
            setCart(cart.map(product=>{
                return product.id === item.id ? {...product, quantity: product.quantity + quantity , stock: product.stock - quantity} : product
            })); 
        }else{
            console.log("No existe en el carrito")
            setCart([...cart, {...item, quantity}]) //Si no está el item lo agrego y le sumo el campo quantity
        }
    }

    const removeItem = (id) => setCart(cart.filter(product => product.id !== id ));

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const totalProductos = () => cart.reduce((collector, product)=> collector + product.quantity,0);

    const totalprecio = () => {
        return cart.reduce((prev, act)=>prev + act.quantity * act.precio, 0)
    }

    return (
        <CartContext.Provider value={{
            isInCart,
            addToCart,
            removeItem,
            totalProductos,
            totalprecio,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}