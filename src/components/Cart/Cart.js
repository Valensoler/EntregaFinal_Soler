import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart } = useContext(CartContext)

    return (
        <div>
            <h1>Cart</h1>
            <div>
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id}>
                            {prod.name}
                        </div>
                    )
                })
            }
            </div>
            <Link to='/checkout'>Finalizar compra</Link>
        </div>
    )
}

export default Cart