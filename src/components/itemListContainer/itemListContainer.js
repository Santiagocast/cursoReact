import { useEffect, useState } from "react"
import { getProducts } from "../asyncmock"
import ItemList from "../itemList/itemList"

const ItemListContainer = () =>{
    const [products, setProducts] = useState([])
    useEffect( ()=>{
        getProducts().then( (res) => {
            setProducts(res)
            //console.log(res);
        })

    },[])

    return(
        //<h1>{greeting}</h1>
        <ItemList productos={products}></ItemList>
    )
}

export default ItemListContainer