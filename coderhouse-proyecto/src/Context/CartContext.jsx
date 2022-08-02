import { useState, createContext } from "react";

export const CartContext = createContext([])

export default function CartProvider({ children }) {
  const [cartList, setCartList] = useState([])

  const addItem = (product) => {
    const [productFound , productIndex] = isInCart(product)

    !productFound ? setCartList([...cartList, product]) : cartList[productIndex].cantidad += product.cantidad
  }

  const removeItem = (product) => {
    const [ , productIndex] = isInCart(product)
    cartList.splice(productIndex, 1)
    setCartList(cartList)
  }

  const total = cartList.reduce((count, item) => count + item.price * item.amount, 0)

  function isInCart(product) {
    const productFound = cartList.find((item) => item.id == product.id)
    const productIndex = cartList.indexOf(productFound)

    return [productFound , productIndex]
  }

  return (
    <CartContext.Provider value={{ cartList, total, addItem, removeItem  }}>
      {children}
    </CartContext.Provider>
  )
}

