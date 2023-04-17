import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../firebaseConfig'

export const getProducts = (categoryId) => {
    const productsRef = categoryId 
    ? query(collection(db, 'products'), where('category', '==', categoryId))
    : collection(db, 'products')

    return getDocs(productsRef)
    .then(snapshot => {
        const productsAdapted = snapshot.docs.map(doc => {
            const data = doc.data()
            return { id: doc.id, ...data }
        })

        return productsAdapted
    })
    .catch(error => {
        return error
    })

}

export const getProductsById = () => {

}