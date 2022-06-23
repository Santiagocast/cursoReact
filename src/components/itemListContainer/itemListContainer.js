import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductByCategory, getProducts } from "../asyncmock"
import ItemList from "../itemList/itemList"
import Spinner from "../Spinner/spinner"
import {db} from "../../services/firebase"
import { getDocs, query, where, collection } from 'firebase/firestore'

const ItemListContainer = () =>{
    const [products, setProducts] = useState([])
    const {category} = useParams()
    const [loading, setLoading] = useState([])

    useEffect(()=>{
        setLoading(true)
        const prodsFireStore = category ? query(collection(db,"productos"),where("category", "==", category)) 
        : collection(db,"productos")
        getDocs(prodsFireStore).then(res =>{
            const productos = res.docs.map(doc =>{return {id:doc.id, ...doc.data()} })
            setProducts(productos)
        }).catch(e => {console.log(e);})
        .finally(()=> setLoading(false))
    },[category])

    if(loading){
        return(<Spinner></Spinner>)
    }

    return(
        <ItemList productos={products}></ItemList>
    )
}

export default ItemListContainer