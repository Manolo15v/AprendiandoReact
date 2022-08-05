import { useState, createContext } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const CartContext = createContext([])

export default function CartProvider({ children }) {
  const [cartList, setCartList] = useState([])
  const [orderId, setOrderId] = useState("")

  let newCartList = [...cartList]
  
  const addItem = (product) => {
    const [productFound , productIndex] = isInCart(product)
    
    if(!productFound) {
      setCartList([...newCartList, product]) 
    } else { 
      newCartList[productIndex].amount += product.amount
      setCartList(newCartList)
    }
  }
  
  const removeItem = (product) => {
    const [ , productIndex] = isInCart(product)
    newCartList.splice(productIndex, 1)
    setCartList(newCartList)
  }

  const sendOrder = () => {
    const order = {
      buyer : { name:"Manuel", phone:"1010101", email:"Manolo15v@gmail.com" },
      items: cartList,
      total: total,
    }

    const db = getFirestore()
    const ordersCollection = collection(db , "orders")
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
  }
  
  
  const clearCart = () => setCartList([])

  const total = cartList.reduce((count, item) => count + item.price * item.amount, 0)
  
  function isInCart(product) {
    const productFound = cartList.find((item) => item.id == product.id)
    const productIndex = cartList.indexOf(productFound)

    return [productFound , productIndex]
  }

  return (
    <CartContext.Provider value={{ cartList, total, addItem, removeItem, clearCart, sendOrder, orderId  }}>
      {children}
    </CartContext.Provider>
  )
}

