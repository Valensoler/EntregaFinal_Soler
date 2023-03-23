import {useState} from "react"
import Button from "../Button/Button"

const Counter = (props) => {
    const [count,setCount] = useState(props.initial || 1)
    const [message, setMessage] = useState('')

    const decrement = () => {
        setMessage('')
        if (count>1){
            setCount(count-1)
        }else{
            setMessage('No es posible que la cantidad sea menor a 1')
        }
    }

    const increment = () => {
        setMessage('')
        if(count < props.stock){
            setCount(count+1)
        }else{
            setMessage('No hay stock suficiente para la cantidad seleccionada')
        }
    }

    const reset = () => {
        setCount(props.initial)
        setMessage('')
    }

    return (
        <div>
            <h2>{count}</h2>
            <h4>Cantidad Disponible: {props.stock}</h4>
            <Button label="-" handleClick={decrement}/>
            <Button label="Reset" handleClick={reset}/>
            <Button label="+" handleClick={increment}/>
            <h2>{message}</h2>
        </div>
    )
}

export default Counter