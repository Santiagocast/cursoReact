import { useContext } from "react";
import CartContext from "../../cartContext/cartContext";
import Counter from "../Counter/counter";
import ItemImg from "./itemImg";

const ItemDetail = ({id,tittle,description,price, pictureUrl,category, stock}) =>{
  const {addItem} = useContext(CartContext)
  const handleOndAdd = (cantidad) =>{
    addItem({id, tittle, price, cantidad})
  }

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
              {pictureUrl.map((pic)=> <ItemImg key={pic.id} picture = {pic.url}></ItemImg>)}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        
      </div>

      <aside className="col-md-6 blog-sidebar pt-6 row align-items-center">
        <div className="p-3 mb-3">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h2>${price}</h2>
            <p>Descripción: {description}</p>
            <p className="mb-0">Categoría: {category}</p>

            <form onSubmit={handleSumbit} className=" d-flex justify-content-center row g-1 h-100 p-5 text-white bg-dark rounded-3 ">
               <Counter inicial={1} stock={stock} onAdd={handleOndAdd}></Counter>
            </form>
          </div>
        </div>
      </aside>
      </div>
    </main>
    )
}

export default ItemDetail;