import {useEffect, useState } from "react";
import { Popover } from "bootstrap";

const Counter = ({inicial, onAdd, stock}) =>{
    const [count, setCount] = useState(inicial)
    const [popover, setPopover] = useState()

    useEffect(()=>{
        const pop = document.getElementById("cantidad")
        setPopover(new Popover(pop))
    },[])

    const cambiarNro = (e)=>{
        
        if(e.target.value <= stock && e.target.value>0){
            setCount(e.target.value)   
            popover.hide();     
        }
        else{
            document.getElementById("cantidad").value = count;
            popover.show()
        }
    } 

    return(
        <>
            <div className="col-auto">
                <label htmlFor="cantidad" className="col-form-label">Cantidad:</label>
            </div>
            <div className="col-md-3">
                <input value={count} onChange={cambiarNro} id="cantidad" type="number" data-bs-toggle="popover" data-bs-content="Stock insuficiente" className=" form-control" aria-label="Cantidad"></input>
            </div>
            <div className="col-auto">
                <button onClick={()=>onAdd(count)} className="col-form-label btn btn-outline-light" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                </button>
               </div>
        </>
        
    )
}

export default Counter;