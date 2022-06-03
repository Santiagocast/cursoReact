const Item = ({id,tittle ,description,price, pictureUrl,category }) =>{
    return (
            <div className="card mb-4 box-shadow mt-5 mx-2">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">{tittle}</h4>
            </div>
            <div className="card-body">
                <img className ="card-img-top" src={pictureUrl} alt="" width="90" height="110"></img>
                <h1 className="card-title pricing-card-title">${price}</h1>
                <ul className="list-unstyled mt-3 mb-4">
                <li>{description}</li>
                </ul>
                <button type="button" className="btn btn-lg btn-block btn-primary">Agregar al carrito</button>
            </div>
            </div>
    )
}

export default Item;