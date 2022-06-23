import { useContext} from "react";
import CartContext from "../../cartContext/cartContext";
import {Link} from "react-router-dom";
import CartDetail from "../cartDetail/cartDetail";

const Cart = ()=>{
    const {cantidad, cart} = useContext(CartContext)
    if(cantidad == 0){
        return (
            <>
                <h1>No hay items</h1>
                <Link to='/' className="btn btn-outline-dark">Buscar servicios</Link>
            </>
        )
    }
    return(
        <>
            <CartDetail productos ={cart}></CartDetail> 
            
        </>
         
    )
}

export default Cart;