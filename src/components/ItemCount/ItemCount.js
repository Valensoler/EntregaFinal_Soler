import { useState } from "react"

const ItemCount = ({stock, onAdd}) => {

    const [count, setCount] = useState (1)

    const decrement = () => setCount (prev => prev - 1)

    const increment = () => setCount (prev => prev + 1)

    return (
        <div> 
            <h2>0</h2>
            <button onClick={decrement}> Decrement </button>
            <button onClick={increment}> Increment</button>
            <button onClick={() => onAdd(count)} disabled={stock === 0} > Agregar al carrito </button>
        </div>
    )
}

export default ItemCount