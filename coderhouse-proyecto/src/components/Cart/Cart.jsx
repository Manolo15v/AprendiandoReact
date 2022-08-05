import { memo } from "react";
import { Link } from "react-router-dom";

import { useCartContext } from "../../hooks/useCartContext";
import ButtonBlue from "../Buttons/ButtonBlue";
import ButtonRed from "../Buttons/ButtonRed";
import ItemCart from "../Item/ItemCart";

const CartList = memo(
  ({ items }) => {
    const { total, removeItem } = useCartContext()

    return (
      <>
        <div>
          {items.map((item) =>
            <ItemCart item={item} key={item.id}>
              <ButtonRed text="Eliminar" click={() => removeItem(item)} />
            </ItemCart>
          )}
        </div>
        <div className="flex justify-evenly">
            <p className="font-semibold text-xl border-b-2 border-slate-800">Total: {total}$</p>
         
          
          <Link to="/payment">
            <ButtonBlue text="Proceder a pago" />
          </Link>
        </div>
      </>
    )
  }
)

export default CartList