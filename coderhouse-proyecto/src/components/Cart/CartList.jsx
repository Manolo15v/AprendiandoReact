import { Link } from "react-router-dom";
import ButtonRed from "../Buttons/ButtonRed";
import ItemCart from "../Item/ItemCart";
import { useCartContext } from "../../Context/useCartConext"

const { removeItem } = useCartContext()

export default function CartList({ items }) {
  return (
    items.map(item => (
      <Link to={`/detail/${item.id}`} key={item.id}>
        <ItemCart item={item}>
          <ButtonRed text="Eliminar" click={() => removeItem(item.id)}/>
        </ ItemCart>
      </Link>
    ))
  )
}
