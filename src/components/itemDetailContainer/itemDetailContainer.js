import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../asyncmock";
import ItemDetail from "../itemDetail/itemDetail";

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState([])
    const [ pictures, setPictures] = useState([])
    const {productId} = useParams()
    useEffect( ()=>{
        getProduct(productId).then( (res) => {
            setProduct(res)
            setPictures(res.pictureUrl)
            console.log(res);
        })
    },[])
    return(
        <div>
            <ItemDetail pictureUrl= {pictures} {...product}></ItemDetail>
        </div>
    )
} 

export default ItemDetailContainer;