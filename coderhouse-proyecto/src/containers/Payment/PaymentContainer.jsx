import Payment from "../../components/Payment/Payment";
import { useCartContext } from "../../hooks/useCartContext";

export default function PaymentContainer() {

  const { clearCart, sendOrder } = useCartContext()
  const sendForm = (e) => {
    e.preventDefault();
    sendOrder()
    clearCart()
  }

  return (
    <main className=" bg-gray-50 text-slate-800 container">
      <Payment sendForm={sendForm} />
    </main>
  )
}
