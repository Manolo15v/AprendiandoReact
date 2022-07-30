import { useCartContext } from "../../Context/CartContext";

import CartList from "../../components/Cart/CartList";
import CartEmpty from "../../components/Cart/CartEmpty";

export default function CartContainer() {

    const { cartList } = useCartContext()

    if (cartList.lenght === 0) {
        return <CartEmpty/>
    }

    return (
        <CartList items={cartList} /> 
    )
}
