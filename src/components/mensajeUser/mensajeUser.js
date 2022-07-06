const MensajeUser = ({color, mensaje}) =>{
    
    return (
        <div className={"alert alert-" + color} role="alert">
        {mensaje}
        </div>
    )
}

export default MensajeUser