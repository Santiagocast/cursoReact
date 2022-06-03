/*titulo /nombre de la tienda
Listado de categorías clickeables (p)
Complemente CartWidget.js con un icono y ubicalo en navbar
*/

import CartWidget  from "../cartWidget/cartWidget";
const NavBar = ()=>{
    return(
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand mx-auto" href="#">
            <CartWidget></CartWidget>Partienda</a>
            <a className="navbar-text mx-auto" href="#">Ofertas</a>
            <a className="navbar-text mx-auto" href="#">Paquetes</a>
            <a className="navbar-text mx-auto " href="#" >Vuelos</a>
            <a className="navbar-text mx-auto" href="#" >Alojamientos</a>
            <a className="navbar-text mx-auto" href="#" >Excursiones</a>
            <a className="navbar-text mx-auto" href="#" >Alquiler de autos</a>
            <a className="navbar-text mx-auto" href="#" >Transporte publico extranjero</a>
        </nav>       
    )
}

export default NavBar;