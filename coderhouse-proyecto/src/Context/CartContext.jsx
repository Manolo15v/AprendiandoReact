import { useState, createContext } from "react";

export const CartContext = createContext([])

export default function CartProvider({ children }) {
  const [cartList, setCartList] = useState([])

  let newCartList = [...cartList]
  
  const addItem = (product) => {
    const [productFound , productIndex] = isInCart(product)
    
    if(!productFound) {
      setCartList([...newCartList, product]) 
    } else {
      newCartList[productIndex].cantidad += product.cantidad
      setCartList(newCartList)
    }
  }
  
  const removeItem = (product) => {
    const [ , productIndex] = isInCart(product)
    newCartList.splice(productIndex, 1)
    setCartList(newCartList)
  }
  
  const clearCart = () => setCartList([])

  const total = cartList.reduce((count, item) => count + item.price * item.amount, 0)
  
  function isInCart(product) {
    const productFound = cartList.find((item) => item.id == product.id)
    const productIndex = cartList.indexOf(productFound)

    return [productFound , productIndex]
  }

  return (
    <CartContext.Provider value={{ cartList, total, addItem, removeItem, clearCart  }}>
      {children}
    </CartContext.Provider>
  )
}

