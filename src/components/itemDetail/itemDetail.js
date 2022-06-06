const ItemDetail = ({id,tittle,description,price, pictureUrl,category}) =>{
    return(
    <main role="main" className="container pt-5">
      <div className="row">
        <div className="col-md-8 blog-main">
          <h3 className="pb-3 mb-4 font-italic border-bottom">
            {tittle}
          </h3>

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={pictureUrl} className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                <img src="..." className="d-block w-100" alt="..."></img>
                </div>
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

        <aside className="col-md-4 blog-sidebar pt-6 row align-items-center">
          <div>
            <div className="p-3 mb-3 bg-light rounded">
                <h4 className="font-italic">Descripción</h4>
                <p className="mb-0">{description}</p>
                <h1 className="card-title pricing-card-title">${price}</h1>
            </div>
            <div>
                <form class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label for="cantidad" class="col-form-label">Cantidad:</label>
                    </div>
                    <div class="col-md-3">
                        <input id="cantidad" type="number" class=" form-control" aria-label="Cantidad"></input>
                    </div>
                    <div class="col-auto">
                        <button class="col-form-label btn btn-outline-secondary" type="button">Agregar al carrito</button>
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