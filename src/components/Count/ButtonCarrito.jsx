import React, {useEffect, useState, useContext} from 'react'
import {useParams} from 'react-router-dom';
import {products} from '../../mock/products'

export default function ButtonCarrito() {
    const { id } = useParams()
    const [producto, setProductoButton] = useState([]);
    const [cantidad, setCantidad] = useState(1);
    
    
    const getProduct = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve(products.find(product => product.id === Number(id))), 2000)
      })
    
    
      useEffect(() => {
        getProduct()
          .then(response => setProductoButton(response))
      }, [])
  
  
      function agregarAlCarrito(producto, cantidad){
        const productoCarrito = {id: producto.id, cantidad: cantidad}
        console.log(productoCarrito)
    }


    const cantidadProducto =(operacion) =>{
        if(operacion == "+"){
          if(cantidad < producto.stock){
            setCantidad (cantidad + 1)
          } 
        }else{
          if (cantidad > 1){
              setCantidad (cantidad - 1)
          }
        }

    }
    return (
    <div>
      <p className='counter'>{cantidad}</p>
       <div className='divButton'>
            <button className='styleButtonCount' onClick={() => cantidadProducto("-")}>-</button>
            <button className='styleButtonCount' onClick={() => cantidadProducto("+")}>+</button>
        </div>
        <button className='styleButtonCount' onClick={() => agregarAlCarrito(producto, cantidad)}>Agregar</button>

    </div>
  )
}


/*const { id } = useParams()
    const [producto, setProductoButton] = useState([]);
    const [cantidad, setCantidad] = useState(1);
    
    
    const getProduct = () => new Promise((resolve, reject) => {
        setTimeout(() => resolve(products.find(product => product.id === Number(id))), 2000)
      })
    
    
      useEffect(() => {
        getProduct()
          .then(response => setProductoButton(response))
      }, [])
  
  
      function agregarAlCarrito(producto, cantidad){
        const productoCarrito = {id: producto.id, cantidad: cantidad}
        console.log(productoCarrito)
    }


    const cantidadProducto =(operacion) =>{
        if(operacion == "+"){
          if(cantidad < producto.stock){
            setCantidad (cantidad + 1)
          } 
        }else{
          if (cantidad > 1){
              setCantidad (cantidad - 1)
          }
        }

    }
    return (
    <div>
      <p className='counter'>{cantidad}</p>
       <div className='divButton'>
            <button className='styleButtonCount' onClick={() => cantidadProducto("-")}>-</button>
            <button className='styleButtonCount' onClick={() => cantidadProducto("+")}>+</button>
        </div>
        <button className='styleButtonCount' onClick={() => agregarAlCarrito(producto, cantidad)}>Agregar</button>

    </div>
  )
}
 */