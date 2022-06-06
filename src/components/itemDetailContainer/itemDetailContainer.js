import { useEffect, useState } from "react";
import { getProducts } from "../asyncmock";
import ItemDetail from "../itemDetail/itemDetail";

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState()
    useEffect( ()=>{
        getProducts().then( (res) => {
            setProduct(res[0])
            //console.log(res);
        })
    },[])
    return(
        <div>
            <ItemDetail  {...product}></ItemDetail>
        </div>
    )
} 

export default ItemDetailContainer;