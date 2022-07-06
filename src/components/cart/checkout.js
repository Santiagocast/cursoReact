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
    const [emailConfirmacion, setEmailConfirmacion] = useState()
    const [phone, setPhone] = useState()
    const [direccion, setDireccion] = useState()
    const [validNombre, setValidNombre] = useState(false)
    const [validEmail, setValidEmail] = useState(false)
    const [validEmailConfirmacion, setValidEmailConfirmacion] = useState(false)
    const [validPhone, setValidPhone] = useState(false)
    const [validDireccion, setValidDireccion] = useState(false)
    const [botonValid, setBotonValid] = useState(false)
   
    const handleOnChange = (event, fn, valid)=>{
        fn(event.target.value);
        event.target.value.length !==0? valid(true) : valid(false)
        if(validNombre && validEmail && validEmailConfirmacion && validPhone && validDireccion){
            setBotonValid(true)
        }else{
            setBotonValid(false)
        }
    }

    const generarOrden = (e)=>{
        e.preventDefault();
        if(email === emailConfirmacion){
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
        }else{
            //Alerta email no coincide
            console.log("EMAIL no coincide");
        }
    }
        
    if(loading){
        return(<Spinner></Spinner>)
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
                <input onChange={(e)=>handleOnChange(e,setEmail,setValidEmail)} name="email" type="email" className="form-control" id="email" required ></input>
                <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating mb-3 input-group">
                <input onChange={(e)=>handleOnChange(e,setEmailConfirmacion,setValidEmailConfirmacion)} name="email" data-bs-toggle="popover" data-bs-content="Stock insuficiente" type="email" className="form-control" id="email" required ></input>
                <label htmlFor="floatingInput">Confirmar Email</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={(e)=>handleOnChange(e,setNombre, setValidNombre)} name="name" type="text" className="form-control" id="name" required></input>
                <label htmlFor="floatingInput">Nombre completo</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={(e)=>handleOnChange(e,setPhone, setValidPhone)} name="phone" type="text" className="form-control" id="phone" required></input>
                <label htmlFor="floatingInput">Telefono</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={(e)=>handleOnChange(e,setDireccion, setValidDireccion)} name="direccion" type="text" className="form-control" id="adress" required></input>
                <label htmlFor="floatingInput">Direccion</label>
            </div>
            <button id="generarOrden" onClick={generarOrden} disabled={!botonValid} className="btn btn-outline-dark m-2">Generar</button>
        </form>
        }
        </>
    )   
}

export default Checkout