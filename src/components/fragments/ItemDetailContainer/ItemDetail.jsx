import  Count  from "../ItemCount/ItemCount"
import '../ItemDetailContainer/ItemDetail.css'
import '../../../Mock/productDetail'
import '../ItemDetailContainer/ItemDetailContainer'


export const ItemDetail = ({prod}) => {
     const onAdd = (cantidad) => {
        console.log(cantidad)
    }

  return (
    <article>
    <h1>{prod.title}</h1>
    <div className="card-detail">
        <div className="card-detail-left">
            <img src={prod.img} alt={prod.title} className="img" />
        </div>
        <div className="card-detail-right">
            <p>{prod.description}</p>
            <p className="price">${prod.price}</p>
            <p>Stock: {prod.stock}</p>
            <Count stock={prod.stock} initial={0} onAdd={onAdd}/>
        </div>
    </div>
</article>
  )
}