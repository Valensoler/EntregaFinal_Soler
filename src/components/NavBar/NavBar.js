import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from "react-router-dom"
// import { useEffect, useState } from 'react'
// import { collection, getDocs, query, orderBy } from 'firebase/firestore'
// import { db } from "../../service/firebase/firebaseConfig"

const NavBar = () => {

// const [categories, setCategories] = useState([])

//   useEffect(() => {
//     const categoriesRef = query(collection(db, 'categories'), orderBy('order'))

//     getDocs(categoriesRef)
//       .then(snapshot => {
//           const categoriesAdapted = snapshot.docs.map(doc => {
//             const data = doc.data()

//             return { id: doc.id, ...data }
//           })

//           setCategories(categoriesAdapted)
//       }).catch(error => {
//         console.log(error)
//       })
//   }, [])

//   return (
//     <nav className="NavBar" >
//         <Link to='/'>Donna Civetta</Link>
//         <div className="Categories">
//             {
//               categories.map(cat => {
//                 return (
//                   <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
//                 )
//               }) 
//             }
//         </div>
//     </nav>
//   )

    return (
        <nav>
            <NavLink to='/'><h1 className="h1Primario">Donna Civetta</h1></NavLink>
            <div>
                <NavLink to ='/category/Remeras' className={({ isActive }) => isActive ? 'ActiveLink' : 'Link'}> Remeras </NavLink>
                <NavLink to ='/category/Pantalones' className= {({ isActive }) => isActive ? 'ActiveLink' : 'Link'}> Pantalones </NavLink>
                <NavLink to ='/category/Shorts'className= {({ isActive }) => isActive ? 'ActiveLink' : 'Link'}> Shorts </NavLink>
                <NavLink to ='/category/Buzos'className= {({ isActive }) => isActive ? 'ActiveLink' : 'Link'}> Buzos </NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar