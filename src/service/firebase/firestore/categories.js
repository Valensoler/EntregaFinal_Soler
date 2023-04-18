import { db } from "../firebaseConfig"
import { collection, getDoc, doc } from "firebase/firestore"


// export const getCategories = (categorieId) => {
   
//     const collectionCat = collection(db,"categories")

//     const categoriesRef = doc(collectionCat,itemId)

//     return getDoc(categoriesRef)
//     .then(result => {
//             const categoriesAdapted = {
//                 id:result.id,
//                 ...result.data()
//               }
        
//             return categoriesAdapted
//         })
//         .catch(error => {
//             return error
//         })
// }

export const getCategories = (categorieId) => {

    const categoriesRef = categorieId 
    ? query(collection(db, 'categories'), where('categories', '==', categorieId))
    : collection(db, 'categories')

    return getDoc(categoriesRef)
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
