/*titulo /nombre de la tienda
Listado de categorías clickeables (p)
Complemente CartWidget.js con un icono y ubicalo en navbar
*/

import CartWidget  from "./cartWidget";
const NavBar = ()=>{
    return(
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
            <CartWidget></CartWidget>Partienda</a>
            <a className="navbar-text" href="#">Ofertas</a>
            <a className="navbar-text" href="#">Paquetes</a>
            <a className="navbar-text" href="#" >Vuelos</a>
            <a className="navbar-text" href="#" >Alojamientos</a>
            <a className="navbar-text" href="#" >Excursiones</a>
            <a className="navbar-text" href="#" >Alquiler de autos</a>
            <a className="navbar-text" href="#" >Transporte publico extranjero</a>
        </nav>       
    )
}

export default NavBar;