import { createContext, useState, useEffect } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) =>{
    const [cart, setCart] = useState([])
    const [cantidad, setCantidad] = useState(0)

    useEffect(() => {
        let cantidad = 0
        cart.forEach( (prod) => {
            cantidad += parseInt(prod.cantidad)
        })
        setCantidad(cantidad)
    }, [cart])

    const addItem = (item)=>{
        if(!isInCart(item.id)){
            setCart([...cart, item])
        }   
    }
    console.log(cart);

    const removeItem = (id) => {
        const filterCart = cart.filter((prod)=>prod.id !== id)
        setCart(filterCart)
    }

    const clear = () =>{
        setCart([])
    }

    const isInCart = (id) =>{
        return cart.some(prod => prod.id === id)
    }


    return(
        <CartContext.Provider value={
            {addItem,removeItem,clear,isInCart, cantidad, cart}
        }>
            {children}

        </CartContext.Provider>

    )
}

export default CartContext;