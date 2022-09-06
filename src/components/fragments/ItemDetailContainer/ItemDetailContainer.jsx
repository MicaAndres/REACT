import React, {useEffect, useState} from 'react'
import {productDetail} from '../../../Mock/productDetail'
import {ItemDetail} from '../ItemDetailContainer/ItemDetail'

 const ItemDetailContainer = () => {
    const {Prod, setProd} = useState([]);
    

useEffect(() => {
    const getProduct = new Promise ((resolve, reject) => {
        setTimeout(() => { resolve (productDetail.find(product => product.id === 3))}, 2000) 
    });

  getProduct 
  .then((response) => setProd(response))
 }, []);

    return(
      <>
        {
          Prod ? <ItemDetail list={Prod}/> : <h1>Cargando...</h1>
        }
      </>
    )
        
    
};
export default ItemDetailContainer


/*import React, {useEffect, useState} from 'react'
import {productDetail} from '../../../Mock/productDetail'
import {ItemDetail} from '../ItemDetailContainer/ItemDetail'

 const ItemDetailContainer = () => {
    const { item, setItem} = useState ([])
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    const getProduct =  new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (productDetail.find(product => product.id ===3));
        }, 2000);
        
    });

  getProduct
  .then((response) => setItem(response))
  .finally(() => setIsLoading(false));
}, []);

    return(
      item ?  <ItemDetail item={item}/> : <h1>Cargando...</h1>
    )
        
    
};
export default ItemDetailContainer


*/