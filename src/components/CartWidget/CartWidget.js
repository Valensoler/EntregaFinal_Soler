import '../CartWidget/CartWidget.css'
import carrito from '../CartWidget/carrito.png'

const CartWidget = () => {
    return (
        <div className='Logo'>
            <img src={carrito} alt="logo-carrito"/>
            {0}
        </div>
    )
}

export default CartWidget