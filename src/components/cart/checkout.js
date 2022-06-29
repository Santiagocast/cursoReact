import CartContext from "../../cartContext/cartContext";
import { useContext } from "react";

const Checkout = () =>{
    const {total, cart} = useContext(CartContext)
    const generarOrden = ()=>{

    }

    return(
        <>
            <form className="container pt-5">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="email" required ></input>
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="name" required></input>
                    <label htmlFor="floatingInput">Nombre completo</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="phone" required></input>
                    <label htmlFor="floatingInput">Telefono</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="adress" required></input>
                    <label htmlFor="floatingInput">Direccion</label>
                </div>
                
                <a onClick={generarOrden} className="btn btn-outline-dark m-2">Generar</a>


            </form>
            
        </>
    )   
}

export default Checkout