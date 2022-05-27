/*
ItemListContainer.js con una prop greeting y muestra el mensaje dentro del contenedor con el styling integrado
Crea un componenete ItemListContainer. Importalo dentro de app.js y abajo de navBar.js
*/
const ItemListContainer = ({greeting}) =>{
    return(
        <h1>{greeting}</h1>
    )
}

export default ItemListContainer