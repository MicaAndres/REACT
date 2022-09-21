import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, amount) => {
        let itemAmount = { ...item, amount };
        if (!isInCart(item.id)) {
            setCart([...cart, itemAmount]);
        } else {
            
            const newProducts = cart.map(prod => {
                if(prod.id === item.id) {
                    const newProduct = {
                        ...prod,
                        amount: prod.amount + amount
                    }
                    return newProduct
                } else {
                    return prod
                }
            })

            setCart(newProducts)
        }
    };
    

    const removeItem = (id) => {
        setCart( cart.filter((item) => item.id !== id));
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some((e) => e.id === id);
    };

    const getQuantity = () => {
        let cant = 0
        cart.forEach((e) => cant += e.amount)
        return cant
    };
    
    const getTotal = () => {
        let total = 0
        cart.forEach((e) => total += (e.amount*e.price))
        return total        
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, getQuantity, getTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider










/*import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

//extraigo el provider del cart context para pasar por props lo que voy a usar del contexto
//const { Provider } = CartContext

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    //funcion para agregar al carrito
    const addToCart = (item, quantity) => {
        let itemAmount = { ...item, quantity };
        //chequeo si el item ya esta en el carrito para sumarle la cantidad si esta y si no, agregarlo
        if (!isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity, stock : product.stock - quantity} : product
            }));
        } else {

            setCart([...cart, { ...item, quantity }]) //Si no está el item lo agrego y le sumo el campo quantity
        }
    };
    
    //funcion para saber si esta o no en el carrito, modificar la cantidad
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
        //funcion para limpiar el carrito
    const clearCart = () => {
        setCart([]);
        }
    //funcion para elimiar elementos del carrito
    const removeFromCart = (id) => setCart(cart.filter(product => product.id !== id));

    const getQuantity = () => cart.reduce((collector, product) => collector + product.quantity, 0);

    const getTotal = () => {
       // return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
        let total = 0;
        cart.forEach((element)=>{
            total= total + (element.quantity * element.item.price)
        })
        return total;
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