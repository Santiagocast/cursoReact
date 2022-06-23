import { useEffect, useState } from "react"
import CartItem from "./cartItem"

const CartDetail = ({productos})=>{
    const [total, setTotal] =useState(0)
    useEffect(()=>{
        const totalCalculado = productos.map((prod)=>prod.price * prod.cantidad).reduce((prev,curr)=> prev+curr)
        setTotal(totalCalculado)
    },[productos])
    return(
        <>
            <main role="main" className="container pt-5">
                <div className="row">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Subtotal</th>
                            <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((prod) => <CartItem key ={prod.id} {...prod}></CartItem>)}
                        </tbody>
                    </table> 
                </div>
                    <div className="card text-center">
                    <div className="card-header">
                        Finalizar compra
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Total: ${total}</h5>
                        <a href="#" className="btn btn-outline-dark m-2">Generar orden</a>
                        <a href="#" className="btn btn-outline-dark m-2">Limpiar carrito</a>
                    </div>
                </div>
            </main>
        </>
    )
}

export default CartDetail