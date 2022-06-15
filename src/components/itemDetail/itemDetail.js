import { useContext } from "react";
import CartContext from "../../cartContext/cartContext";
import Counter from "../Counter/counter";
import ItemImg from "./itemImg";

const ItemDetail = ({id,tittle,description,price, pictureUrl,category, stock}) =>{
  const {addItem} = useContext(CartContext)
  const agregarItem = (cantidad) =>{
    addItem(id, tittle, price, cantidad)
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
               <Counter inicial={1}></Counter>
               <div className="col-auto">
                <button className="col-form-label btn btn-outline-light" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                </button>
               </div>
            </form>
          </div>
        </div>
      </aside>
      </div>
    </main>
    )
}

export default ItemDetail;