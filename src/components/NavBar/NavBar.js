import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink, useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
// import { collection, getDocs, query, orderBy, where } from 'firebase/firestore'
// import { db } from "../../service/firebase/firebaseConfig"
import { getCategories } from '../../service/firebase/firestore/categories'
import { useAsync } from '../../hooks/useAsync'

const NavBar = () => {
    const { categorieId } = useParams ()

    const getCategoriesWithId = () => getCategories (categorieId)

    const { data: categories} = useAsync(getCategoriesWithId, [categorieId])
// const [categories, setCategories] = useState([])    
//   useEffect(() => {
//     const categoriesRef = categorieId
//     ? query(collection(db, 'categories'), where ('categories', '==', 'categorieId'))
//     : collection (db,'categories')
//     orderBy('order')

//     getDocs(categoriesRef)
//         .then(snapshot => {
//           const categoriesAdapted = snapshot.docs.map(doc => {
//             const data = doc.data()
//             return { id: doc.id, ...data }
//           })

//           setCategories(categoriesAdapted)

//       }).catch(error => {
//             return error
//       })
//   }, [])

  return (
    <nav className="NavBar" >
        <Link to='/' className='Titulo'>Donna Civetta</Link>
        <div className="Categories">
            <NavLink key={categories.id} to={`/category/${categories.slug}`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{categories.label}</NavLink>
            <CartWidget/>
        </div>
    </nav>
  )

    // return (
    //     <nav>
    //         <NavLink to='/'><h1 className="h1Primario">Donna Civetta</h1></NavLink>
    //         <div>
    //             <NavLink to ='/category/Remeras' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}> Remeras </NavLink>
    //             <NavLink to ='/category/Pantalones' className= {({ isActive }) => isActive ? 'ActiveLink' : 'Link'}> Pantalones </NavLink>
    //             <NavLink to ='/category/Shorts'className= {({ isActive }) => isActive ? 'ActiveLink' : 'Link'}> Shorts </NavLink>
    //             <NavLink to ='/category/Buzos'className= {({ isActive }) => isActive ? 'ActiveLink' : 'Link'}> Buzos </NavLink>
    //         </div>
    //         <CartWidget/>
    //     </nav>
    // )
}

export default NavBar