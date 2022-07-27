import { useState, createContext, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export default function CartProvider({ children }) {
  const [cartList, setCartList] = useState([])

  const agregarCarrito = (producto) => {
    setCartList([ ...cartList, producto])
  }

  console.log(cartList);

  return (
    <CartContext.Provider value={{ cartList, agregarCarrito }}>
      {children}
    </CartContext.Provider>
  )
}

