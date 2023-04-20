import './ItemDetail.css'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { useNotification } from '../../notification/NotificationService'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem } = useContext(CartContext)
    const { setNotification } = useNotification ()


    const handleOnAdd = (quantity) => {
        const productToAdd = {
        id, name, price, quantity
        }
        setQuantity(quantity)
        addItem(productToAdd)
        setNotification ('succes', `Se agrego correctamente ${quantity} ${name}`)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                        {stock > 0 ? <ItemCount onAdd={handleOnAdd} stock={stock} /> : <div>No hay stock disponible</div>}
            </footer>
        </article>
    )
}

export default ItemDetail