import { Link } from "react-router-dom";

const Item = ({id,tittle ,description,price, pictureUrl,category }) =>{
    return (
            <div className="card mb-4 box-shadow mt-5 mx-2">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">{tittle}</h4>
            </div>
            <div className="card-body">
                {console.log(pictureUrl)}
                <img className ="card-img-top" src={pictureUrl[0].url} alt="" width="90" height="110"></img>
                <h2 className="card-title pricing-card-title">${price}</h2>
                <ul className="list-unstyled mt-3 mb-4">
                <li>{description}</li>
                </ul>
                <Link to={'/detail/'+id } type="button" className="btn btn-lg btn btn-outline-secondary">Ver detalle</Link>
            </div>
            </div>
    )
}

export default Item;