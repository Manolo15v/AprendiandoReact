import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";

import ItemCount from "./ItemCount";
import ButtonBlue from "../Buttons/ButtonBlue";
import ItemCart from "./ItemCart";

export default function ItemDetail({ item }) {
  
  const [itemAmount, setItemAmount] = useState(0)
  const { addItem } = useCartContext()

  const { name,  image, description, price, stock } = item

  const onAdd = (amount) => {
    setItemAmount(amount)
    addItem({ ...item, amount })
  }

  return (
    itemAmount === 0 ?
      <div className="flex m-2">
        <img className="w-auto h-96 rounded" src={image} alt="imagen producto" />
        <div className="grid grid-cols-2 m-2 w-full">
          <div className="ml-3 font-semibold">
            <p className="text-3xl font-bold">{name}</p>
            <p className="text-xl">{description}</p>
            <p className="text-2xl">{price}$</p>
          </div>
          <div className="self-center justify-self-end">
            <ItemCount stock={stock} onAdd={onAdd} />
          </div>
        </div>
      </div>
      :
      <>
        <ItemCart item={item} itemAmount={itemAmount} />
        <div className="grid grid-cols-2 gap-3 mx-56">
          <Link to="/cart">
            <ButtonBlue text="Ir a carrito" style="w-full"/>
          </Link>
          <Link to="/">
           <ButtonBlue  text="Volver a inicio" style="w-full"/>
          </Link>
        </div>
      </>
  )
}
