import { useEffect, useState } from "react";

const Counter = ({inicial}) =>{
    const [count, setCount] = useState(inicial)
    
    const cambiarNro = (e)=>{
        if(e.target.value>0){
            setCount(e.target.value)        
        }
        else{
            document.getElementById("cantidad").value = count;
        }
    } 

    return(
        <>
            <div className="col-auto">
                <label htmlFor="cantidad" className="col-form-label">Cantidad:</label>
            </div>
            <div className="col-md-3">
                <input value={count} onChange={cambiarNro} id="cantidad" type="number" className=" form-control" aria-label="Cantidad"></input>
            </div>
        </>
        
    )
}

export default Counter;