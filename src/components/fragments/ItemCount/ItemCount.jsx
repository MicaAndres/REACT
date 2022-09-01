import useCounter from '../../../hooks/useCounter'

export default function CounterCustomhook({ stock, onAdd }) {
  const { suma, resta, borrar, count } = useCounter(stock)
  return (
    <div>
      <div className='divCount'>
        <h1>Cocinita Rosa</h1>
        <p>Stock: {stock} </p>
        <p>Elegiste: {count} cocinitas</p>
        <div>
          <button className='btn' onClick={resta}>-</button>
          <button className='btn' onClick={borrar}>Borrar</button>
          <button className='btn' onClick={suma}>+</button>
        </div>
        <div>
          <button className='btn' onClick={() => onAdd(count)}>Confirmar</button>
        </div>
      </div>
    </div>
  )
}
