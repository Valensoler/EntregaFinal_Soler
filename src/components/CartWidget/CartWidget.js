import '../CartWidget/CartWidget.css'
import carrito from '../CartWidget/carrito.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'



const CartWidget = () => {

    const { totalQuantity } = useContext (CartContext)

    const navigate = useNavigate()

    return (
        <div className='CartWidget' onClick={() => navigate ("./Cart") }>
            <img src={carrito} alt="cart-widget" className='CartImg'/>
            {totalQuantity}
        </div>
    );
}

export default CartWidget