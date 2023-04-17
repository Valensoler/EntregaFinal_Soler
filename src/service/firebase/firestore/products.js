import { getDocs, getDoc, collection, query, where } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { createAdaptedProductFromFirestore } from "../../../adapters/createAdaptedProductFromFirestore"

export const getProducts = (categoryId) => {
    const productsRef = categoryId 
    ? query(collection(db, 'products'), where('category', '==', categoryId))
    : collection(db, 'products')

    return getDocs(productsRef)
        .then(snapshot => {
            const productsAdapted = snapshot.docs.map(doc => {
                return createAdaptedProductFromFirestore(doc)
            })

            return productsAdapted
        })
        .catch(error => {
            return error
        })
}

// export const getProductsById = (itemId) => {
//     const idRef = itemId
//     ? query (collection (db, 'products'), where ('id', '==', itemId))
//     : collection (db,'products')

//     return getDoc(idRef)
//         .then(snapshot => {
//             const productAdapted = { id: snapshot.id, ...data}
//             const data = snapshot.data()

//             return productAdapted
//         })
//         .catch(error => {
//             return error
//         })
// }