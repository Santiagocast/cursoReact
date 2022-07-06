import { db } from "."
import { getDocs, query, where , collection, getDoc, doc} from 'firebase/firestore'
import { productAdapter } from "../../adapters/productAdapter"

export const getProducts = (category) => {
    return new Promise((resolve, reject) => {
        const prodsFireStore = category ? query(collection(db, 'productos'), where('category', '==', category))
        : ( collection(db, 'productos') )
        getDocs(prodsFireStore).then(res => {
            const productos = res.docs.map(doc => {return productAdapter(doc)})
            resolve(productos)
        }).catch(error => {
            reject(error)
        })
    })

}

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        const documentoFireStore = doc(db,"productos", id)
        getDoc(documentoFireStore).then(res => {
            const producto = {id: res.id, ...res.data()}
            if (res.data() === undefined){
                return Promise.reject({ type: 'id_inexistente'})
            }
            resolve(producto)
        }).catch(error => {
            reject(error)
        })
    })

}