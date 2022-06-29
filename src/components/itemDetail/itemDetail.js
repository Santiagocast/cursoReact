import { useContext, useState } from "react";
import {Link} from "react-router-dom";
import CartContext from "../../cartContext/cartContext";
import Counter from "../Counter/counter";

const ItemDetail = ({id,tittle,description,price, pictureUrl,category, stock}) =>{
  const {addItem} = useContext(CartContext)
  const handleOndAdd = (cantidad) =>{
    addItem({id, tittle, price, cantidad})
    setItemaniadido(1)
  }

  const [itemAniadido, setItemaniadido] = useState(0)

  const handleSumbit = (e)=>{
    e.preventDefault();
  }
  
  return(
    <main role="main" className="container pt-5">
      <div className="row">
        <div className="col-md-6 blog-main">
          <h3 className="pb-3 mb-4 font-italic border-bottom">
            {tittle}
          </h3>

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
             <img src={pictureUrl} className="d-block w-100" alt="..."></img>
            </div>
        </div>
        
      </div>

      <aside className="col-md-6 blog-sidebar pt-6 row align-items-center">
        <div className="p-3 mb-3">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h2>${price}</h2>
            <p>Descripción: {description}</p>
            <p className="mb-0">Categoría: {category}</p>
            <p className="mb-0">Stock: {stock}</p>
            <form onSubmit={handleSumbit} className=" d-flex justify-content-center row g-1 h-100 p-5 text-white bg-dark rounded-3 ">
               { itemAniadido=== 0
               ?<Counter inicial={1} stock={stock} onAdd={handleOndAdd}></Counter>
               :<Link to='/cart' className="col-form-label btn btn-outline-light">Finalizar compra</Link>
               }
            </form>
          </div>
        </div>
      </aside>
      </div>
    </main>
    )
}

export default ItemDetail;