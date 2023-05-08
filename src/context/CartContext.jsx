import { createContext , useState } from 'react';

// creamos contexto 
export const CartContext = createContext({ 
    cart: []
});

// creamos la funcion de logica del carrito
export const CartProvider =  ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, { ...item, quantity}])
        }else{
            console.error('el producto ya fue agregado')
        }
    }

    const removeToCart = (itemId) =>{
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () =>{
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const total = cart.reduce((tot, dataObj) => {tot += (dataObj.price * dataObj.quantity); return tot;},0)

    return (
        <CartContext.Provider value= {{ cart, removeToCart, addItem, clearCart, total}}>
            {children}
        </CartContext.Provider>
    )
}
