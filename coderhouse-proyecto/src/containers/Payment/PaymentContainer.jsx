import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Payment from "../../components/Payment/Payment";
import PaymentFinish from "../../components/Payment/PaymentFinish";
import { useCartContext } from "../../hooks/useCartContext";

export default function PaymentContainer() {
  
  const { clearCart, sendOrder, orderId } = useCartContext()

  const [buyer, setBuyer] = useState({ name: "", phone: "", email: "", emailValidate: "" })

  const buyerKeysNicknames = {
    name: "Nombre",
    phone: "Telefono",
    email: "E-mail",
    emailValidate: "Verificacion E-mail"
  }

  const setForm = (e) => {
    setBuyer({
      ...buyer,
      [e.target.id]: e.target.value
    })
  }

  const sendForm = (e) => {
    e.preventDefault();

    if (validatForm() === true) {
      sendOrder(buyer)
      clearCart()
    }
  }

  function validatForm() {
    let valid = false
    Object.keys(buyer).forEach(key => buyer[key] === "" ? warningEmpty(key) : valid = true)
    if (buyer.email !== buyer.emailValidate) {
      valid = false
      emailFail()
    }
    return valid
  }

  function emailFail() {
    toast.warn('Los email no son iguales', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  function warningEmpty(field) {
    let emptyField = buyerKeysNicknames[field]
    toast.warn(`${emptyField} esta vacio`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }


  return (
    <main className=" bg-gray-50 text-slate-800 container">
       {orderId ? <PaymentFinish orderId={orderId}/> :<Payment sendForm={sendForm} setForm={setForm} />}
      <ToastContainer  />
    </main>
  )
}
