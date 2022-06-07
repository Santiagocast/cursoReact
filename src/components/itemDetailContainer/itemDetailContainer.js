import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../asyncmock";
import ItemDetail from "../itemDetail/itemDetail";
import Spinner from "../Spinner/spinner";

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState([])
    const [ pictures, setPictures] = useState([])
    const {productId} = useParams()
    const [loading, setLoading] = useState()


    useEffect( ()=>{
        setLoading(true)
        getProduct(productId).then( (res) => {
            setProduct(res)
            setPictures(res.pictureUrl)
            console.log(res);
        }).finally(()=> setLoading(false))
    },[])

    if(loading){
        return( <Spinner></Spinner>)
    }


    return(
        <div>
            <ItemDetail pictureUrl= {pictures} {...product}></ItemDetail>
        </div>
    )
} 

export default ItemDetailContainer;