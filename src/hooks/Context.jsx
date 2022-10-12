import React, { useState, createContext, useContext } from 'react';

const Context = createContext();
const useCartContext = () => useContext(Context)
const CartFuncion = ({ children }) => {
  const [cart, setCart] = useState([]);

  // este valor serian las unidades totales del carrito
  const [unidades, setUnidades] = useState(0);

  //este valor seria el precio total del carrito
  const [total, setTotal] = useState(0);

  const onAdd = (producto, cantidad) => {
    const itemExiste = cart.find((item) => item.id === producto.id);
    if (!itemExiste) {
      setCart([
        ...cart,
        {
          ...producto,
          cantidad: cantidad,
          subtotal: producto.price * cantidad,
        },
      ]);
      setTotal(total + producto.price * cantidad);

      // para que el contador sume TODOS los items y no los items diferentes le sumamos cantidad
      setUnidades(unidades + cantidad);
    } else {
      const cartAux = cart.map((item) => {
        if (item.id === producto.id) {
          item.cantidad += cantidad;
          item.subtotal += producto.price * cantidad;
        }
        return item;
      });
      setCart(cartAux);
      setTotal(total + producto.price * cantidad);

      // aca tambien le sumamos cantidad si el item ya existe para que sea consistente
      setUnidades(unidades + cantidad);
    }
  };

  /* FUNCION BORRAR ITEM - recibe el id del item a borrar como parametro*/
  const onRemove = (id) => {
    //buscamos el item a borar en nuestro carrito
    const myItem = cart.find((item) => item.id === id);

    //usamos el filter para devolver todos los items que NO son el que queremos borrar
    const cartAux = cart.filter((item) => item.id !== id);

    //actualizamos el carrito con el cartAux que tiene TODOS los items MENOS el que queriamos borrar
    setCart(cartAux);

    //actualizamos las unidades restandole la cantidad que teniamos de ese item
    setUnidades(unidades - myItem.cantidad);

    //actualizamos el precio total del carrito restandole el precio total (subtotal) que teniamos del item que queriamos borrar
    setTotal(total - myItem.subtotal);
  };

  // pasamos la funcion nueva a nuestro Provider --> onRemove
  return (
    <Context.Provider value={{ cart, unidades, total, onAdd, onRemove, useCartContext }}>
      {children}
    </Context.Provider>
  );
};

export { CartFuncion, Context };


























/*import React, {createContext, useState, useContext} from 'react'

 const Context = createContext();//creo el contexto 

 const useCartContext = () => useContext(Context);// (es un hook) el custom hook  que nos permite acceder a nuestro contexto necesita un valor por defecto con esto usas solo un import
function CartProvider({children}) {// provee el codigo de mi context, ofrece la posibilidad de consultar dicho contexto. Envuelve a nuestra app
  //props es la info que me provee 
  const [cart, setCart] = useState([]);// valor inicial es un array vacio
  // este valor serian las unidades totales del carrito
  const [unidades, setUnidades] = useState(0);

  //este valor seria el precio total del carrito
  const [total, setTotal] = useState(0);
 
  const agregarProductoCarrito = (item, quantity) => {//addcandidate seria en el after de gabriel
  const isInCart = (id) => cart.find(item => item.id === id) ? true : false// fijarse si no se repite hay que solo modiciar la cntidad***
    if(item.id){
      isInCart.push();
      setCart([...cart])
    } else{
      setCart([...cart, {...item, quantity}])
    }
  } ;

  const addProd = (prodId) => {
    const isInCart = (id) => cart.find(item => item.id === prodId) ? true : false// fijarse si no se repite hay que solo modiciar la cntidad***
    if(prodId){
        isInCart.push();
        setCart([...cart])
    } 
  } ;
  
  


    
  const quitarProductoCarrito = (producto) => {
    const auxCarrito = cart.filter((prod) => prod.id !== producto.id);

     setCart(auxCarrito);
   }


  return (
    <>
      <CartContext.Provider value={{cart, addProd, agregarProductoCarrito, quitarProductoCarrito}}>
          {children}{/*si no le pasamos children aca, en app no renderiza nada puede ser tambien props.children pero cambiar el children de arriba por props*/ //}
    /*  </CartContext.Provider>
    </>
  )
}

export { CartContext, CartProvider, useCartContext };


/*import React, {createContext, useState, useContext} from 'react'

 const CartContext = createContext();//creo el contexto 

 const useCartContext = () => useContext(CartContext);// (es un hook) el custom hook  que nos permite acceder a nuestro contexto necesita un valor por defecto con esto usas solo un import
function CartProvider({children}) {// provee el codigo de mi context, ofrece la posibilidad de consultar dicho contexto. Envuelve a nuestra app
  //props es la info que me provee 
  const [cart, setCart] = useState([]);// valor inicial es un array vacio

  const agregarProductoCarrito = (producto) => {//addcandidate seria en el after de gabriel
   const auxCarrito = cart// fijarse si no se repite hay que solo modiciar la cntidad***
   auxCarrito.push(producto)
    setCart(auxCarrito)
  }
  const quitarProductoCarrito = (producto) => {
    const auxCarrito = cart
    let indice = auxCarrito.findIndex(prod => prod.id === producto.id)
    auxCarrito.splice(indice, 1)
     setCart(auxCarrito)
   }


  return (
    <>
      <CartContext.Provider value={{cart, agregarProductoCarrito, quitarProductoCarrito}}>
          {children} si no le pasamos children aca, en app no renderiza nada puede ser tambien props.children pero cambiar el children de arriba por props
          </CartContext.Provider>
          </>
        )
      }
      
      export { CartContext, CartProvider, useCartContext };*/