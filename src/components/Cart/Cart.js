import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import "./Cart.css"

const Cart = () => {
    const { cart } = useContext(CartContext)

    if (cart.length === 0 ){ 
        return ('No hay productos')
    }else {
        return (
        <div>
            <h1>Cart</h1>
            <div>
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id}>
                            {prod.name}
                            {prod.img}
                            {prod.description}
                        </div>
                    
                    )
                })
            }
            </div>
            <Link to='/checkout'>Finalizar compra</Link>
        </div>
    )
    }
}
export default Cart