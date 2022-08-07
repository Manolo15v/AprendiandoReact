import { collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";
import { useState, createContext } from "react";
import { addsDoc } from "../firebase/funtionsFirebase";

export const CartContext = createContext([])

export default function CartProvider({ children }) {
  const [cartList, setCartList] = useState([])
  const [orderId, setOrderId] = useState("")

  let newCartList = [...cartList]

  const addItem = (product) => {
    const [productFound, productIndex] = isInCart(product)

    if (!productFound) {
      setCartList([...newCartList, product])
    } else {
      newCartList[productIndex].amount += product.amount
      setCartList(newCartList)
    }
  }

  const removeItem = (product) => {
    const [, productIndex] = isInCart(product)
    newCartList.splice(productIndex, 1)
    setCartList(newCartList)
  }

  const setOrder = (buyer) => {
    const { name, phone, email } = buyer

    const order = {}
    order.buyer = { name, phone, email }
    order.items = cartList.map(product => {
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        amount: product.amount
      }
    })
    order.total = total

    updateDocuments()

    addsDoc("order", order).then(({ id }) => setOrderId(id))
      .finally(() => clearCart())
  }


  const clearCart = () => setCartList([])

  const total = cartList.reduce((count, item) => count + item.price * item.amount, 0)

  function isInCart(product) {
    const productFound = cartList.find((item) => item.id == product.id)
    const productIndex = cartList.indexOf(productFound)

    return [productFound, productIndex]
  }

  async function updateDocuments() {
    const db = getFirestore();
    const batch = writeBatch(db)


    const updateQuery = query(
      collection(db, "items"),
      where(documentId(), "in", cartList.map(prod => prod.id))
    )

    try {
      await getDocs(updateQuery)
      .then(resp => resp.docs.forEach(res => batch.update(res.ref, { stock: res.data().stock - cartList.find(prod => prod.id === res.id).amount }))) 
    } catch (error) {
      console.log(error)
    }

    batch.commit()
  }

  return (
    <CartContext.Provider value={{ cartList, total, addItem, removeItem, clearCart, setOrder, orderId }}>
      {children}
    </CartContext.Provider>
  )
}

