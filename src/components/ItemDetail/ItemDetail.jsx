import { Count } from "../Count/Count"
import './ItemDetail.css'

export const ItemDetail = ({item}) => {

    const onAdd = (quantity) => {
        console.log(quantity)
    }

  return (
    <article className='cardDetail'>
        <h1 className='fontStyle'>{item.title}</h1>
        <div className="divCardDetail">
            <div className="cardImg">
                <img src={item.img} alt={item.title} className='fotoProducto' />
            </div>
            <div className="cardInfo">
                <p>{item.description}</p>
                <p className='fontStyle'>${item.price}</p>
                <p>Stock: {item.stock}</p>
                <Count stock={item.stock} initial={0} onAdd={onAdd}/>
            </div>
        </div>
    </article>
  )
}