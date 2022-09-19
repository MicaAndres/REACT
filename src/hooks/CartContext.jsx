import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext({});

//extraigo el provider del cart context para pasar por props lo que voy a usar del contexto
const { Provider } = CartContext

export const CartProvider = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue);


    //funcion para limpiar el carrito
    const clearCart = () => {
        setCart([]);
    }

    //funcion para agregar al carrito
    const addToCart = (item, quantity) => {
        //chequeo si el item ya esta en el carrito para sumarle la cantidad si esta y si no, agregarlo
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity, stock : product.stock - quantity} : product
            }));
        } else {
            setCart([...cart, { ...item, quantity }]) //Si no está el item lo agrego y le sumo el campo quantity
        }
    };
    console.log(cart)
    //funcion para saber si esta o no en el carrito, modificar la cantidad
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    //funcion para elimiar elementos del carrito
    const removeFromCart = (id) => setCart(cart.filter(product => product.id !== id));

    const getQuantity = () => cart.reduce((collector, product) => collector + product.quantity, 0);

    const getTotal = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }

    //exporto al contexto con todas las funciones que voy a utilizar para agregar, eliminar, vaciar y chequear si esta en el carrito
    


    return (
        <Provider value={{
            clearCart,
            addToCart,
            removeFromCart,
            getQuantity,
            getTotal,
            cart

        }}>



            {children}
        </Provider>
    )
}



/*  //exporto al contexto con todas las funciones que voy a utilizar para agregar, eliminar, vaciar y chequear si esta en el carrito
    const context = {
        
        clearCart,
        addToCart,
        removeFromCart,
        getQuantity,
        getTotal,
        cart
    }


    return (



        
        <Provider value={context}>
            {children}
        </Provider>
    )
}*/