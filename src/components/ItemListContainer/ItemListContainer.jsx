import React, { useEffect, useState, useContext } from 'react';
import { products } from '../../mock/products';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../../services/firebase';
export const ItemListContainer = () => {
  const [productList, setProductList] = useState([])
  const [load, setLoad] = useState(true) 
  const {categoria} = useParams()

  const getProducts = () => new Promise((resolve, reject) => {
    if(categoria) {
      setTimeout(()=> resolve(products.filter(item => item.category === categoria)), 2000)
    } else {
      setTimeout(()=> resolve(products), 2000)
    }
  })

  /*useEffect(() => {
    getProducts(categoria)
    .then(products => {setProductList(products)})
    .catch(error => console.error(error))

    return () => {
      setProductList([])
    }

  }, [categoria])*/

  const getData = async (categoria) =>{
    try{
      setLoad(true)
      const document = categoria ? query(collection(db, "Items"), where("category", "==", categoria))
                                 : collection(db, "Items")
    const col = await getDocs(document)
    console.log("col.docs", col.docs)
    const result = col.docs.map((doc) => doc = {id: doc.id, ...doc.data()})
      setProductList(result)
      setLoad(false)
  } catch (error){
      console.log(error)
  }

  }
  useEffect(() =>{
    getData(categoria)
    }, [categoria])

  return (
    <div className=' body'>
      <div className='divTitulo body'>
            <div className='listaProductos'>
              {getProducts ? <ItemList productList={productList} /> : <Loader/>}
            </div>
        </div>
      
    </div>
  )
}
