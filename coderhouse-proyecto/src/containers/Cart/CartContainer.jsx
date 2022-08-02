import { useCartContext } from "../../hooks/useCartContext";

import CartList from "../../components/Cart/CartList";
import CartEmpty from "../../components/Cart/CartEmpty";


export default function CartContainer() {

    const { cartList } = useCartContext()

    if (cartList.length === 0 ) {
        return <CartEmpty/>
    }

    return (
        <CartList items={cartList} /> 
    )
}
