import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../service/firebase/firebaseConfig"
import { collection, documentId, query, getDocs, where, writeBatch, addDoc } from "firebase/firestore"
import { useNotification } from "../../notification/NotificationService"
import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const [orderId, setOrderId] = useState ("")
    const [loading, setLoading] = useState (false)
    const {cart, total, clearCart} = useContext (CartContext)

    const {setNotification} = useNotification ()

    const navigate = useNavigate ()

    const handleConfirm = async (userData) => {
        try {
            setLoading (true)
            const objOrder = {
                buyer: {
                    name: 'Sebastian Zuviria',
                    phone: '123456789',
                    address: 'mi direaccion 123'

                    //BORRAR ESTO Y HACER LOS DATOS DESDE EL FORMULARIO 
                },
                items: cart,
                total: total,
            }
            console.log (objOrder)

            const ids = cart.map (prod => prod.id) 

            const productRef = query (collection (db, "products"), where (documentId(), 'in', ids))

            const productAddedFromFirestore = await getDocs(productRef)

            const { docs } = productAddedFromFirestore

            const batch = writeBatch (db)
            const outOfStock = []

            docs.forEach (doc =>{
                const dataDoc = doc.data ()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find (prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update (doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push ({ id: doc, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                batch.commit ()

                const orderRef = collection (db, "orders")

                const orderAdded = await addDoc (orderRef, objOrder)
                clearCart ()
                setOrderId (orderAdded.id)

                setTimeout (() => {
                    navigate ('/')
                }, 5000)

            } else {
                setNotification ("error", "Hay productos que no tienen stock disponible")
            }
        } catch (error) {
            setNotification ("error", "Hubo un error generando la orden")
        } finally {
            setLoading (false)
        }
    }

    if (loading) {
        return (<h1>Se esta generando su orden</h1>)
    }

    return (
        <div>
            <h1> Checkout </h1>
        
            {orderId ? <h2> El id de su orden es: {orderId} </h2> : <button onClick={handleConfirm}>Generar orden</button>}
        </div>
    )
}

export default Checkout