const products = [
    {
        id: `1`,
        name: `Remeras`,
        price: 2000,
        category: `Remera`,
        img: `../imagenes/remera.jpeg`,
        stock: 50,
        description: `Remera de algodon`,
    },
    {id: `2`, name: `Pantalon`, price: 5000, category: `Pantalon`, img: `../imagenes/pantalon.jpeg`, stock: 30, description: `Pantalon de jean`,},
    {id: `3`, name: `Short`, price: 3500, category: `Short`, img: `../imagenes/short.jpeg`, stock: 25, description: `Short de jean`,},
    {id: `4`, name: `Abrigos`, price: 4500, category: `buzos`, img: `../imagenes/abrigo.jpeg`, stock: 20, description: `Buzo de lana` }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products)
        }, 500)
    })
}

export const getProductsByCategory  = (categoryId) => { 
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.find (prod => prod.id === productId))
        }, 500)
    })
}

