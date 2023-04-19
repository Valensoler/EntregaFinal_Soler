import { db } from "../firebaseConfig"
import { getDocs, collection, query, where } from "firebase/firestore"
import { createAdaptedOrderFromFirestore } from "../../../adapters/createAdaptedOrderFromFirestore"

export const createOrder = (orderId) => {
    
    const orderRef = orderId
    ? query (collection(db, 'orders'), where ('orders', '==', orderId))
    : collection (db, 'orders')


    return getDocs (orderRef)
    .then (snapshot => {
        const ordersAdapted = snapshot.docs.map(doc => {
            return createAdaptedOrderFromFirestore (doc)
        })

        return ordersAdapted 
    }).catch (error =>{
        return error
    })
}

    // cart.map (prod => prod.id) 

    //         const productRef = query (collection (db, "products"), where (documentId(), 'in', ids))

    //         const productAddedFromFirestore = getDocs(productRef)

    //         const { docs } = productAddedFromFirestore

    //         const batch = writeBatch (db)
    //         const outOfStock = []

    //         docs.forEach (doc =>{
    //             const dataDoc = doc.data ()
    //             const stockDb = dataDoc.stock

    //             const productAddedToCart = cart.find (prod => prod.id === doc.id)
    //             const prodQuantity = productAddedToCart?.quantity

    //             if (stockDb >= prodQuantity) {
    //                 batch.update (doc.ref, { stock: stockDb - prodQuantity})
    //             } else {
    //                 outOfStock.push ({ id: doc, ...dataDoc })
    //             }
    //         })

        //     if (outOfStock.length === 0) {
        //         batch.commit ()

        //         const orderRef = collection (db, "orders")

        //         const orderAdded = await addDoc (orderRef, objOrder)
        //         clearCart ()
        //         setOrderId (orderAdded.id)

        //         setTimeout (() => {
        //             navigate ('/')
        //         }, 5000)

        //     } else {
        //         setNotification ("error", "Hay productos que no tienen stock disponible")
        //     }
        // } .catch (error) {
        //     setNotification ("error", "Hubo un error generando la orden")
        // } finally {
        //     setLoading (false)
        // }
