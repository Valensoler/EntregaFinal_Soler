import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
// import { db } from '../../service/firebase/firebaseConfig'
// import { documentId, getDocs, query, collection, where, writeBatch, addDoc } from 'firebase/firestore'
import { useNotification } from '../../notification/NotificationService'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { addOrder } from "../../service/firebase/firestore/orders"
import { useAsync } from '../../hooks/useAsync'


    function Form () {
    const { cart, total, clearCart } = useContext(CartContext)
    const { setNotification } = useNotification()
    const [ user, setUser] = useState ({})


    const {newOrder} = useParams ()

    const getOrdersWithId = () => addOrder (newOrder)

    const { data: orders, error, loading } = useAsync (getOrdersWithId, [newOrder])


    const handleConfirm = async (userData) => {
        try{ 
            const objOrder = {
                buyer: {
                    name: '',
                    phone: '',
                    address: ''
                },
                items: cart,
                total: total
            }
        } catch (error) {
                setNotification('error', 'Hubo un error generando la orden')
                } finally {
                    
                }
        }
    

        const CampoDeFormulario = ({ label, name }) => {
                return (
                <div>
                    <label htmlFor={name}>{label}</label>
                    <input type="text" id={name} name={name} value={user[name]} onChange={handleConfirm}/>
                </div>
                );
            };

        // const [user, setUser] = useState({
        //     nombre: '',
        //     apellido: '',
        //     codigoPostal: '',
        //     telefono: '',
        //     correoElectronico: '',
        //     direccion: ''
        // });

        // const handleChange = (event) => {
        //     setUser({
        //     ...user,
        //     [event.target.name]: event.target.value
        //     });
        // };

        // const CampoDeFormulario = ({ label, name }) => {
        //     return (
        //     <div>
        //         <label htmlFor={name}>{label}</label>
        //     </div>
        //     );
        // };
        
        // console.log (CampoDeFormulario)

        // if (loading){
        //     return <h1> Se esta generando su orden...</h1>
        // }

        // if (error){
        //     return <h1> Vuelva a cargar la pagina </h1>
        // }


        return (
            <div className='formulario'>
                    <form>
                        <CampoDeFormulario label="Nombre:" name="nombre" />
                        <CampoDeFormulario label="Apellido:" name="apellido" />
                        <CampoDeFormulario label="Código Postal:" name="codigoPostal" />
                        <CampoDeFormulario label="Teléfono:" name="telefono" />
                        <CampoDeFormulario label="Correo Electrónico:" name="correoElectronico" />
                        <CampoDeFormulario label="Dirección:" name="direccion" />
                        <button> Terminar compra </button>
                    </form>
                    {
                        orders?.map (order =>{
                            return (
                                <NavLink key={order.id} onChange={handleConfirm} />
                            )
                        })
                    }
                    {/* <div className='datos del formulario'>
                    <h1>{ greeting }</h1>
                    {
                    orders.map (order => {
                        return (
                            <input key={order.id}>{orderId.label}</input>
                        )
                        })
                    }
                </div> */}
            </div>
        )    
}
export default Form;

// const Checkout = () => {
//         const [orderId, setOrderId] = useState('') 
//         const [loading, setLoading] = useState(false)
//         const [user, setUser] = useState ({})

//         const { cart, total, clearCart } = useContext(CartContext)
//         const { setNotification } = useNotification()
        
//         const navigate = useNavigate()



//         const updateUser = (event) => {
//             setUser( user => ({...user, [event.target.name]: event.target.value }))
//         }

//             <form>
//                 <label>
//                     Nombre:
//                     <input
//                     type="text"
//                     name="nombre"
//                     value={user.nombre}
//                     onChange={updateUser}
//                 />
//                 </label>
//                 <label>
//                     Apellido:
//                     <input
//                     type="text"
//                     name="apellido"
//                     value={user.apellido}
//                     onChange={updateUser}
//                 />
//                 </label>
//                 <label>
//                     Código postal:
//                     <input
//                     type="text"
//                     name="codigoPostal"
//                     value={user.codigoPostal}
//                     onChange={updateUser}
//                 />
//                 </label>
//                 <label>
//                 Teléfono:
//                 <input
//                     type="text"
//                     name="telefono"
//                     value={user.telefono}
//                     onChange={updateUser}
//                 />
//                 </label>
//                 <label>
//                 Correo electrónico:
//                 <input
//                     type="email"
//                     name="correoElectronico"
//                     value={user.correoElectronico}
//                     onChange={updateUser}
//                 />
//                 </label>
//                 <label>
//                 Dirección:
//                 <input
//                     type="text"
//                     name="direccion"
//                     value={user.direccion}
//                     onChange={updateUser}
//                 />
//                 </label>
//                 </form>
//         // if(loading) {
//         //     return <h1>Cargando...</h1>
//         // }
    
//         // if(error) {
//         //     return <h1>Vuelva a cargar la pagina</h1>
//         // }
    

//         return <form setUser = {orders}/>
// }
// export default Checkout        

    // const handleConfirm = async (userData) => {
    //     try{ 
    //         setLoading(true)
    //         const objOrder = {
    //             buyer: {
    //                 name: '',
    //                 phone: '',
    //                 address: ''
    //             },
    //             items: cart,
    //             total: total
    //         }
    //     } catch (error) {
            //         setNotification('error', 'Hubo un error generando la orden')
            //     } finally {
            //         setLoading(false)
            //     }
    //     }
    // }

    //         const ids = cart.map(prod => prod.id)

    //         const productRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

    //         const productsAddedFromFirestore = await getDocs(productRef)

    //         const { docs } = productsAddedFromFirestore

    //         const batch = writeBatch(db)
    //         const outOfStock = []

    //         docs.forEach(doc => {
    //             const dataDoc = doc.data()
    //             const stockDb = dataDoc.stock

    //             const productAddedToCart = cart.find(prod => prod.id === doc.id)
    //             const prodQuantity = productAddedToCart?.quantity

    //             if(stockDb >= prodQuantity) {
    //                 batch.update(doc.ref, { stock: stockDb - prodQuantity})
    //             } else {
    //                 outOfStock.push({ id: doc, ...dataDoc})
    //             }
    //         })

    //         if(outOfStock.length === 0) {
    //             batch.commit()

    //             const orderRef = collection(db, 'orders')

    //             const orderAdded = await addDoc(orderRef, objOrder)
    //             clearCart()
    //             setOrderId(orderAdded.id)

    //             setTimeout(() => {
    //                 navigate('/')
    //             }, 5000)

    //         } else {
    //             setNotification('error', 'Hay productos que no tienen stock disponible')
    //         } 
    //     } catch (error) {
    //         setNotification('error', 'Hubo un error generando la orden')
    //     } finally {
    //         setLoading(false)
    //     }
    // }
    
    // if(loading) {
    //     return <h1>SE esta generando su orden...</h1>
    // }

    // return (
    //     <div>
    //         <h1>Checkout</h1>
    //         { orderId ? <h2>El id de su orden es: {orderId}</h2> : <button onClick={handleConfirm}>Generar orden</button> }
    //     </div>
    // )

    // // const [orderId, setOrderId] = useState ("")
    // // const [loading, setLoading] = useState (false)
    // // const {cart, total} = useContext (CartContext)
    // const { orderId } = useParams ()

    // const [user, setUser] = useState ({})

    // const updateUser = (event) => {
    //     setUser( user => ({...user, [event.target.name]: event.target.value }))
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setUser('');
    //     setUser('');
    //     setUser('');
    //     setUser ('');
    //     setUser('');
    //     setUser('');
    //     setUser('');
    //     setUser('');
    // }



    // const createOrderWithId = () => createOrder (orderId)

    // const { data: orders, loading, error } = useAsync(createOrderWithId, [orderId])

    // // const handleConfirm = async (userData) => {
    // //         const objOrder = {
    // //             buyer: {
    // //                 Name: "",
    // //                 Phone: "",
    // //                 Adress: ""
    // //             }, 
    // //             items: cart,
    // //             total: total,
    // //         }
    // //         console.log (handleConfirm)
    // //     }

    // //         const ids = cart.map (prod => prod.id) 

    // //         const productRef = query (collection (db, "products"), where (documentId(), 'in', ids))

    // //         const productAddedFromFirestore = await getDocs(productRef)

    // //         const { docs } = productAddedFromFirestore

    // //         const batch = writeBatch (db)
    // //         const outOfStock = []

    // //         docs.forEach (doc =>{
    // //             const dataDoc = doc.data ()
    // //             const stockDb = dataDoc.stock

    // //             const productAddedToCart = cart.find (prod => prod.id === doc.id)
    // //             const prodQuantity = productAddedToCart?.quantity

    // //             if (stockDb >= prodQuantity) {
    // //                 batch.update (doc.ref, { stock: stockDb - prodQuantity})
    // //             } else {
    // //                 outOfStock.push ({ id: doc, ...dataDoc })
    // //             }
    // //         })

    // //         if (outOfStock.length === 0) {
    // //             batch.commit ()

    // //             const orderRef = collection (db, "orders")

    // //             const orderAdded = await addDoc (orderRef, objOrder)
    // //             clearCart ()
    // //             setOrderId (orderAdded.id)

    // //             setTimeout (() => {
    // //                 navigate ('/')
    // //             }, 5000)

    // //         } else {
    // //             setNotification ("error", "Hay productos que no tienen stock disponible")
    // //         }
    // //     } catch (error) {
    // //         setNotification ("error", "Hubo un error generando la orden")
    // //     } finally {
    // //         setLoading (false)
    // //     }
    // // return (
    // //     // <div>
    // //     //     <h1> Checkout </h1>
    // // </div>
    // // )

    // if(loading) {
    //     return <h1>Cargando...</h1>
    // }

    // if(error) {
    //     return <h1>Vuelva a cargar la pagina</h1>
    // }


    // return (
    //     <div>
    //         {/* <h2>El id de su orden es: {orderId}</h2> : <button onClick={handleConfirm}>Generar orden</button> */}
    //     </div>
    // )



