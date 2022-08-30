import {useState} from 'react'


const Counter = ({stock, onAdd}) =>{
    const [count, setCount] = useState(0)
    
    function suma(){
        if (count < stock){
            setCount(count + 1)
        }
    }

    function resta(){
        if (count >= stock){
            setCount(count - 1)
        }
    }

    function borrar(){
      setCount(0)
    }
    return(
        <div>
            <div className='divCount'>
                <h1>Cocinita Rosa</h1>
                <img src="" alt="Cocinita en color rosa" />
                <p>Stock: {stock} </p>
                <p>cantidad: {count} </p>

                <div>
                    <button  className='btn' onClick={resta}>-</button>
                    <button className='btn'onClick={borrar}>Borrar</button>
                    <button className='btn' onClick={suma}>+</button>
                </div>
                <div>
                    <button className='btn' onClick={() => onAdd(count)}>Confirmar</button>
                </div>
            </div>
        </div>
    )

}

export default Counter