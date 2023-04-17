import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/firebase/firebaseConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const { itemId } = useParams()

    useEffect(() => {
        const productRef = doc(db, 'products', itemId)

        getDoc(productRef)
            .then(snapshot => {
                const data = snapshot.data()
                const productAdapted = { id: snapshot.id, ...data}
                setProduct(productAdapted)
            }).catch(error => {
                console.log(error)
                //AGREGAR NOTIF DE ERROR
            })
    }, [itemId])

    return (
            <div className="ItemDetailContainer">
                <ItemDetail {...product}/>
            </div>

    )
}

export default ItemDetailContainer