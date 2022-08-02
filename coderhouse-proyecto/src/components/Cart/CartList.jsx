import { memo } from "react";

import { useCartContext } from "../../hooks/useCartContext";
import ButtonRed from "../Buttons/ButtonRed";
import ItemCart from "../Item/ItemCart";

const CartList = memo(
  ({ items }) => {
    const { removeItem } = useCartContext()

    let total = items.reduce((count, item) => count + item.price * item.amount, 0)

    return (
      <>
        <div>
          {items.map((item) =>
            <ItemCart item={item} key={item.id}>
              <ButtonRed text="Eliminar" click={() => removeItem(item.id)} />
            </ItemCart>
          )}
        </div>
        <div>
          <p>Total: </p>
          <p>{total}</p>
        </div>
      </>
    )
  }
)

export default CartList