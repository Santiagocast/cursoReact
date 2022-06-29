import { createContext, useState, useEffect } from "react";

const CartContext = createContext()

export const CartProvider = ({ children }) =>{
    const [cart, setCart] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] =useState(0)

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


    useEffect(()=>{
        if(cart.length !== 0 ){
            const tot = cart.map((prod)=>prod.price * prod.cantidad).reduce((prev,curr)=> prev+curr)
            setTotal(tot);
        }else{
            setTotal(0);
        }
    },[cart])
    

    return(
        <CartContext.Provider value={{addItem,removeItem,clear,isInCart,total, cantidad, cart}}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContext;