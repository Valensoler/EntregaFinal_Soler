import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Item from '../Item/Item'
import "./Cart.css"

const Cart = () => {
    const { cart } = useContext(CartContext)

    if (cart.length === 0 ){ 
        return ('No hay productos')
    }else {
        return (
        <div className='cartCount'>
            <h1>Mi carrito</h1>
            <div className='cart'>
            {
                cart.map(product => {
                    return (
                        <div className='cartDetail' key={product.id}>
                        {product.name}
                        {product.img}
                        {product.description} 
                        </div>
                    )
                })
            }
            </div>
            <Link className='button' to='/checkout'>Finalizar compra</Link>
        </div>
    )
    }
}

export default Cart