const ItemImg = ({id,picture})=>{
    return(
        <>
            <div id={id} className="carousel-item active">
                <img src={picture} className="d-block w-100" alt="..."></img>
            </div>
        </>

    )
}

export default ItemImg;