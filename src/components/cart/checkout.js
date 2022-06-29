import CartContext from "../../cartContext/cartContext";
import React, { useContext, useState } from "react";
import { db } from "../../services/firebase";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import Spinner from "../Spinner/spinner";
import { Link } from "react-router-dom";

const Checkout = () =>{
    const {total, cart, clear} = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const [nombre, setNombre] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [direccion, setDireccion] = useState()
   
    const handleOnChange = (event, fn)=>{
        fn(event.target.value)
    }

    const generarOrden = ()=>{
        setLoading(true)
        const order = {
            buyer: {
                name: nombre,
                email: email,
                phone: phone,
                address: direccion
            },
            items: cart,
            total: total
        }
        const batch = writeBatch(db)
        const ids = cart.map(prod => prod.id)
        const prodSinStock = []
        const productosFire = collection(db, 'productos')
        getDocs(query(productosFire, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prod = cart.find(prod => prod.id === doc.id)
                    const cantidadProducto = prod.cantidad
                    if(dataDoc.stock >= cantidadProducto) {
                        batch.update(doc.ref, { stock: dataDoc.stock - cantidadProducto })
                    } else {
                        prodSinStock.push({ id: doc.id, ...dataDoc})
                    }
                })
            }).then(() => {
                if(prodSinStock.length === 0) {
                    const collectionRef = collection(db, 'orders')
                    return addDoc(collectionRef, order)
                } else {
                    return Promise.reject({ type: 'out_of_stock', products: prodSinStock })
                }
            }).then(({ id }) => {
                batch.commit()
                clear()
                console.log("se genero la orden" + id); //mostrar el id
            }).catch(error => {
                if(error.type === 'out_of_stock') {
                   //Mostrar error

                } else {
                    console.log(error)
                }
            }).finally(() => {
                setLoading(false)
            })
    }

    if(loading){
        return(<Spinner></Spinner>)
    }

    if(cart.length === 0){

    }

    return(
        <>
        {cart.length === 0?
            <>
                <h1>No hay items</h1>
             <Link to='/' className="btn btn-outline-dark">Buscar servicios</Link>
            </>
            :
            <form className="container pt-5">
            <div className="form-floating mb-3">
                <input onChange={(e)=>handleOnChange(e,setEmail)} name="email" type="email" className="form-control" id="email" required ></input>
                <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={(e)=>handleOnChange(e,setNombre)} name="name" type="text" className="form-control" id="name" required></input>
                <label htmlFor="floatingInput">Nombre completo</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={(e)=>handleOnChange(e,setPhone)} name="phone" type="text" className="form-control" id="phone" required></input>
                <label htmlFor="floatingInput">Telefono</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={(e)=>handleOnChange(e,setDireccion)} name="direccion" type="text" className="form-control" id="adress" required></input>
                <label htmlFor="floatingInput">Direccion</label>
            </div>
            
            <a onClick={generarOrden} className="btn btn-outline-dark m-2">Generar</a>
        </form>
        }
        </>
    )   
}

export default Checkout