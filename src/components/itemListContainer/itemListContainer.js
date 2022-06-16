import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductByCategory, getProducts } from "../asyncmock"
import ItemList from "../itemList/itemList"
import Spinner from "../Spinner/spinner"

const ItemListContainer = () =>{
    const [products, setProducts] = useState([])
    const {category} = useParams()
    const [loading, setLoading] = useState([])

    useEffect( ()=>{
        setLoading(true)
        if(!category){
            getProducts().then( (res) => {
                setProducts(res)
            }).finally( ()=>{
                setLoading(false)    
            })
        }else{
            getProductByCategory(category).then((res)=>{
                setProducts(res)
            }).finally( ()=>{
                setLoading(false)    
            })
        }
        
    },[category])

    if(loading){
        return(<Spinner></Spinner>)
    }

    return(
        <ItemList productos={products}></ItemList>
    )
}

export default ItemListContainer