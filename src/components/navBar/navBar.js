/*titulo /nombre de la tienda
Listado de categorías clickeables (p)
Complemente CartWidget.js con un icono y ubicalo en navbar
*/
import logo from "./iconoPartienda.png"
import { Link, useLocation } from "react-router-dom";
import CartWidget  from "../cartWidget/cartWidget";

const NavBar = ()=>{
    const location = useLocation();
    return(        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand" href="#"> <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""></img>Partienda</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={"/category/Paquetes"} className={location.pathname === "/category/Paquetes"? "nav-link " + "active" : "nav-link "} aria-current="page" href="#">Paquetes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/Vuelos"} className={location.pathname === "/category/Vuelos"? "nav-link " + "active" : "nav-link "} href="#">Vuelos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/Alojamientos"} className={location.pathname === "/category/Alojamientos"? "nav-link " + "active" : "nav-link "} href="#">Alojamientos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/Excursiones"} className={location.pathname === "/category/Excursiones"? "nav-link " + "active" : "nav-link "} href="#">Excursiones</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/Autos"} className={location.pathname === "/category/Autos"? "nav-link " + "active" : "nav-link "} href="#">Alquiler de autos</Link>
                        </li>
                        
                    </ul>
                    <form className="d-flex">
                        <CartWidget></CartWidget>
                        
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;