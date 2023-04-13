import { useEffect, useState, memo } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../service/firebase/firebaseConfig'

const ItemListMemo = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const { categoryId } = useParams()

    useEffect(() => {
        const productsRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(productsRef)
            .then(snapshot => {
                const productsAdapted = snapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })

                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    if(error) {
        return <h1>Vuelva a cargar la pagina</h1>
    }

 
    return (
        <div className="titulo"> 
            <h1> { greeting} </h1>
            <ItemList products = {products}/>
        </div>
    )
}

export default ItemListContainer