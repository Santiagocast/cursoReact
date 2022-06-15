import { createContext, useState, useEffect } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) =>{
    const [cart, setCart] = useState([])
    const [cantidad, setCantidad] = useState(0)

    const addItem = (item, cantidad)=>{
        if(!isInCart(item.id)){
            setCart(...cart, item)
        }
        
    }

    const removeItem = (id) => {
        const filterCart = cart.filter((prod)=>prod.id !== id)
        setCart(filterCart)
    }

    const clear = () =>{
        setCart([])
    }

    const isInCart = (id) =>{
        return cart.some((prod)=> prod.id === id)
    }

    //Entender la parte de la cantidad
    // useEffect(() => {
    //     let total = 0
    //     cart.forEach(prod => {
    //         total += prod.quantity
    //     })
    //     setCantidad(total)
    // }, [cart])

    return(
        <CartContext.Provider value={
            {addItem,removeItem,clear,isInCart}
        }>
            {children}

        </CartContext.Provider>

    )
}

export default CartContext;