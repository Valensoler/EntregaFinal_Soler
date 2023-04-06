import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState (true)
    const [error, setError] = useState (false)

    const { itemId } = useParams ()
    useEffect(() => {
        setLoading (true)
        getProductById (itemId)
            .then (product => {
                setProduct (product)
            })
            .catch (error =>{
                console.log (error)
                setError (true)
            })
            .finally (() => {
                setLoading (false)
            })
    }, [itemId]) 

    if (loading) {
        return <h1>Cargando...</h1>
    }

    if (error) {
        return <h1> Vuelve a cargar la pagina </h1>
    }

    return (
        <div className="producto">
            <h1>Detalle del producto</h1>
            <div className="caract">
                <ItemDetail {...product}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer