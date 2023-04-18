import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
// import { getDoc, doc } from 'firebase/firestore'
// import { db } from '../../service/firebase/firebaseConfig'
import { getProductsById } from "../../service/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync"

const ItemDetailContainer = () => {
    // const [product, setProduct] = useState([])
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(false)

    const { itemId } = useParams()

    const getProductsWithId = () => getProductsById(itemId)

    const { data: product, error, loading } = useAsync(getProductsWithId, [itemId])

    // useEffect(() => {
    //     const productRef = doc(db, 'products', itemId)

    //     getDoc(productRef)
    //         .then(snapshot => {
    //             const data = snapshot.data()
    //             const productAdapted = { id: snapshot.id, ...data}
    //             setProduct(productAdapted)
    //         }).catch(error => {
    //             console.log(error)
    //             //AGREGAR NOTIF DE ERROR
    //         })
    // }, [itemId])

        // setLoading (true)

        // getProductsById (itemId)
        // .then (product => {
        //     setProduct (product)
        // })
        // .catch (error => {
        //     console.log ("error")
        // })
        // .finally (() => {
        //     setLoading (false)
        // })
        // const productRef = doc(db, 'products', itemId)

    return (
            <div className= "ItemDetailContainer">
                <ItemDetail {...product}/>
            </div>

    )
}

export default ItemDetailContainer