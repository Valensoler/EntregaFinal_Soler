import { db } from "../firebaseConfig"
import { collection, getDocs, where, query } from "firebase/firestore"

export const getCategories = (categoriesId) => {

    const categoriesRef = categoriesId 
    ? query(collection(db, 'categories'), where('categories', '==', categoriesId))
    : collection(db, 'categories')

    return getDocs(categoriesRef)
        .then(snapshot => {
        const categoriesAdapted = snapshot.docs.map(doc => {
            const data = doc.data()
            return { id: doc.id, ...data }
        })

        return categoriesAdapted

    }).catch(error => {
            return error
    })
}
