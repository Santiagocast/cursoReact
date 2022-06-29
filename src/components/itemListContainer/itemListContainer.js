import { useParams } from "react-router-dom"
import ItemList from "../itemList/itemList"
import Spinner from "../Spinner/spinner"
import { getProducts } from "../../services/firebase/firestore"
import { useAsync } from "../../hooks/useAsync"

const ItemListContainer = () =>{
    const {category} = useParams()
    const { loading, data, error } = useAsync(() => getProducts(category), [category])

    if(loading){
        return(<Spinner></Spinner>)
    }

    return(
        <>
        { data.length > 0 ? 
                <ItemList productos={data}></ItemList>
               : <h1>No hay productos</h1>
        }
        </>
    )
}

export default ItemListContainer