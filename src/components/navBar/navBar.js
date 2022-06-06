/*titulo /nombre de la tienda
Listado de categorías clickeables (p)
Complemente CartWidget.js con un icono y ubicalo en navbar
*/

import CartWidget  from "../cartWidget/cartWidget";
const NavBar = ()=>{
    return(        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><CartWidget></CartWidget>Partienda</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Paquetes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">vuelos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Alojamientos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Excursiones</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Alquiler de autos</a>
                        </li>
                        
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-light" type="submit">
                            Carrito <span class="badge bg-secondary">4</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;