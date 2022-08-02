import { memo } from "react";

import { useCartContext } from "../../hooks/useCartContext";
import ButtonRed from "../Buttons/ButtonRed";
import ItemCart from "../Item/ItemCart";

const CartList = memo(
  ({ items }) => {
    const { total ,removeItem } = useCartContext()

    return (
      <>
        <div>
          {items.map((item) =>
            <ItemCart item={item} key={item.id}>
              <ButtonRed text="Eliminar" click={() => removeItem(item)} />
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