import  {useState} from 'react'


export default function useCounter(stock) {
    const [count, setCount] = useState(0)
    
    function suma(){
        if (count < stock){
            setCount(count + 1)
        }
    }

    function resta(){
        if (count >= 1){
            setCount(count - 1)
        }
    }

    function borrar(){
      setCount(0)
    }
    
    return {
        suma, resta, borrar, count
  }
}
