import React from 'react'

function ItemCart({product}) {
    return (
        <div className='itemcart'>
            <img src={product.img} alt={product.name}/>
        <div>
            <p>Titulo: {product.name} </p>
            <p>Cantidad: {product.quantity} </p>
            <p>Precio u.: {product.price} </p>
            <p>Subtotal: $ {(product.quantity) * (product.price)} </p>
        </div>
    </div>
    )
}

export default ItemCart