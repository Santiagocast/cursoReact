import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../asyncmock";
import ItemDetail from "../itemDetail/itemDetail";
import Spinner from "../Spinner/spinner";
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState([])
    const {productId} = useParams()
    const [loading, setLoading] = useState()


    useEffect( ()=>{
        setLoading(true)
        const documentoFireStore = doc(db,"productos", productId)
        getDoc(documentoFireStore).then((res)=>{
            const producto = {id: res.id, ...res.data()}
            setProduct(producto);
        }).catch(e =>{console.log(e);})
        .finally(()=> setLoading(false))
        // getProduct(productId).then( (res) => {
        //     setProduct(res)
        //     setPictures(res.pictureUrl)
        // }).finally(()=> setLoading(false))
    },[productId])

    if(loading){
        return( <Spinner></Spinner>)
    }


    return(
        <div>
            <ItemDetail {...product}></ItemDetail>
        </div>
    )
} 

export default ItemDetailContainer;