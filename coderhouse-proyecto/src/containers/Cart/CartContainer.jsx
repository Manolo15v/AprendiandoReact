import { useCartContext } from "../../hooks/useCartContext";

import CartList from "../../components/Cart/CartList";
import CartEmpty from "../../components/Cart/CartEmpty";


export default function CartContainer() {

    const { cartList } = useCartContext()

    return (
        cartList.length === 0 ? <CartEmpty/> : <CartList items={cartList} /> 
    )
}
