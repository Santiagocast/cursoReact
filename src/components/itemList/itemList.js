import Item from "../item/item";

const ItemList = ({productos}) =>{
    return(
        <div className="container">
            <div style={{display: "-webkit-flex"}} className="card-deck mb-6 text-center">
                {productos.map((prod)=> <Item key={prod.id} {...prod}></Item>)}

            </div>
        </div>

    )
}

export default ItemList;