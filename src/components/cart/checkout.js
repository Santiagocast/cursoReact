import CartContext from "../../cartContext/cartContext";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import Spinner from "../Spinner/spinner";
import { Link } from "react-router-dom";
import MensajeUser from "../mensajeUser/mensajeUser";


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
    const [orden,setOrden] = useState(null)
    const [invalidEmail,setInvalidEmail] = useState(false)
    const [sinStock,setSinStock] = useState(false)
   
    const handleOnChange = (event, fn, valid)=>{
        fn(event.target.value);
        event.target.value === "" ? valid(false) : valid(true)
    }

    useEffect(()=>{
        if(validNombre && validEmail && validEmailConfirmacion && validPhone && validDireccion){
            setBotonValid(true)
        }else{
            setBotonValid(false)
        }
    },[validNombre, validEmail, validEmailConfirmacion, validPhone, validDireccion])

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
                setOrden(id);                
            }).catch(error => {
                if(error.type === 'out_of_stock') {
                    setSinStock(true);                    
                } else {
                    console.log(error)
                }
            }).finally(() => {
                setLoading(false)
            })
        }else{
            setInvalidEmail(true)
        }
    }
        
    if(loading){
        return(<Spinner></Spinner>)
    }

    return(
        <>
        {
            cart.length === 0?
            <>
                {orden !== null?
                    <MensajeUser color={"success"} mensaje = {"Compra Realizada, el código de tu orden es: " + orden}></MensajeUser>
                :
                    <></>
                }
                <h1>No hay items en tu carrito</h1>
                <Link to='/' className="btn btn-outline-dark">Buscar servicios</Link>
            </>
            :
            <>
                {invalidEmail? <MensajeUser color = "danger" mensaje = "El Email de confirmación no coincide con Email ingresado"></MensajeUser>
                : sinStock? <MensajeUser color = "danger" mensaje = "No hay stock disponible para generar tu orden, volver a generar compra"></MensajeUser> 
                :<></>
                }
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
                    {
                        sinStock?
                        <Link to='/cart' className="col-form-label btn btn-outline-dark">Volver al carrito</Link>
                        : <></>
                    }
                </form>
            </>
        }
        </>
    )   
}

export default Checkout