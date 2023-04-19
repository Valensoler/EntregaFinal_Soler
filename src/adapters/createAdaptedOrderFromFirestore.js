export const createAdaptedOrderFromFirestore = (doc) => {
    const data = doc.data()

    const orderAdapted = {
        id: doc.id,
        buyer: data.buyer,
        items: data.items,
        total: data.total
    }

    return orderAdapted
}

