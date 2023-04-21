import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrdenCompra,getOrdenCompra } from '../../service/firebase/firestore/orders';
import { getProducts, getProductsById } from "../../service/firebase/firestore/products";
import { CartContext } from '../../context/CartContext';
import Swal from "sweetalert2"
import './Checkout.css'

const Checkout = () => {
    const {getTotal, cart, clearCart} = useContext(CartContext)
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)

        const aux = [...cart]

        aux.forEach(prodCarrito => {
            getProducts(prodCarrito.id).then(prod => {
                if(prod.stock >= prodCarrito.quantity) {
                    prod.stock -= prodCarrito.quantity
                    getProductsById(prodCarrito.id, prod)
                } else {
                }
            })
        })

        createOrdenCompra(cliente, getTotal , new Date().toISOString()).then(ordenCompra => {
            getOrdenCompra(ordenCompra.id)
            .then(item => {
                Swal.fire(
                    'Compra finalizada',
                    `¡Muchas gracias por su compra, su orden es ${item.id}!`,
                    'success'
                )
                clearCart()
                e.target.reset()
            }).catch(error => {
                Swal.fire(
                    'Error',
                    `Hubo un error con su orden. Vuelva a intentarlo`,
                    'error'
                )
            })
            
        })
        
    }

    return (
        <div className="container">
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="form">
                    <label htmlFor="nombre" className="formData">Nombre y Apellido</label>
                    <input type="text" className="formDataNew" name="nombre" />
                </div>
                <div className="form">
                    <label htmlFor="email" className="formData">Email</label>
                    <input type="email" className="formDataNew" name="email" />
                </div>
                <div className="form">
                    <label htmlFor="email2" className="formData">Repetir Email</label>
                    <input type="email" className="formDataNew" name="email2" />
                </div>
                <div className="form">
                    <label htmlFor="dni" className="formData">DNI</label>
                    <input type="number" className="formDataNew" name="dni" />
                </div>
                <div className="form">
                    <label htmlFor="celular" className="formData">Numero telefonico</label>
                    <input type="number" className="formDataNew" name="celular" />
                </div>
                <div className="form">
                    <label htmlFor="direccion" className="formData">Dirección</label>
                    <input type="text" className="formDataNew" name="direccion" />
                </div>
                <button className='buttonConfirm' type="submit">Generar Orden</button>
            </form>
        </div>
    );
}

export default Checkout;


