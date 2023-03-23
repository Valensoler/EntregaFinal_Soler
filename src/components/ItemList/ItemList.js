import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({products}) => {
    return (
        <div class= "ItemList">
            {
                products.map (product => {
                    return <Item key = {product.id} {...product} />
                })
            }
        </div>
    )
}

export default ItemList