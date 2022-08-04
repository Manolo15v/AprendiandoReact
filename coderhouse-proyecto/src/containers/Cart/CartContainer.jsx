import { useCartContext } from "../../hooks/useCartContext";

import Cart from "../../components/Cart/Cart";
import CartEmpty from "../../components/Cart/CartEmpty";


export default function CartContainer() {

    const { cartList } = useCartContext()

    return (
        <main className="bg-gray-50 text-slate-800">
            {cartList.length === 0 ? <CartEmpty/> : <Cart items={cartList} />}
        </main>
         
    )
}
