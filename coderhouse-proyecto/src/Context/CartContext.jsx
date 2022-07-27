import { useState, createContext, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export default function CartProvider({ children }) {
  const [cartList, setCartList] = useState([])

  const addItem = (producto) => {
    const [productoEncontrado , productoIndex] =isInCart(producto)

    !productoEncontrado ? setCartList([...cartList, producto]) : cartList[productoIndex].cantidad += producto.cantidad
  }

  const removeItem = (producto) => {
    const [ , productoIndex] =isInCart(producto)
    cartList.splice(productoIndex, 1)
  }

  function isInCart(producto) {
    const productoEncontrado = cartList.find((item) => item.id == producto.id)
    const productoIndex = cartList.indexOf(productoEncontrado)

    return [productoEncontrado , productoIndex]
  }


  return (
    <CartContext.Provider value={{ cartList, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}

