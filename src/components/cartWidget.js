/*
Complemente CartWidget.js con un icono y ubicalo en navbar
*/
import logo from "./iconoPartienda.png"
const CartWidget = ()=>{
    return(
        <img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""></img>
    )
}


export default CartWidget;