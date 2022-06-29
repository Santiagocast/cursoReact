export const productAdapter = (doc) => {
    const data = doc.data()

    const productFormatted = {
        id: doc.id,
        tittle: data.tittle,
        category: data.category,
        pictureUrl: data.pictureUrl,
        price: data.price,
        description: data.description
    }

    return productFormatted
}