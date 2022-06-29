import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/itemDetail";
import Spinner from "../Spinner/spinner";
import { getProduct } from "../../services/firebase/firestore";
import { useAsync } from "../../hooks/useAsync";

const ItemDetailContainer = () =>{
    const {productId} = useParams()
    const { loading, data, error } = useAsync(() => getProduct(productId), [productId])

    if(loading){
        return( <Spinner></Spinner>)
    }

    return(
        <div>
            <ItemDetail {...data}></ItemDetail>
        </div>
    )
} 

export default ItemDetailContainer;