import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../hooks/useCartContext";

import ItemCount from "./ItemCount";
import ButtonBlue from "../Buttons/ButtonBlue";

export default function ItemDetail({ item }) {

  const [amount, setAmount] = useState(1)
  const [bought, setBought] = useState(false)
  const { addItem } = useCartContext()

  const { id, name,  image, description, price, stock } = item

  const onAdd = (amount, bought) => {
    setAmount(amount)
    setBought(bought)
    addItem({ ...item, amount })
  }

  return (
    bought === false ?
      <div className="flex m-2">
        <img className="w-auto h-96 rounded" src={image} alt="imagen producto" />
        <div className="grid grid-cols-2 m-2 w-full">
          <div className="ml-3 font-semibold">
            <p className="text-3xl font-bold">{name}</p>
            <p className="text-xl">{description}</p>
          </div>
          <div className="self-center justify-self-end">
            <ItemCount stock={stock} onAdd={onAdd} />
          </div>
        </div>
      </div>
      :
      <>
        <div className="flex my-2 mx-28 p-2 bg-gray-200 rounded">
          <img className="w-auto h-36 rounded" src={image} alt="imagen producto" />
          <div className="ml-3 font-semibold">
            <p className="text-2xl font-bold">{name}</p>
            <p className="text-lg">{description}</p>
            <p>Cantidad: {amount} </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mx-56">
          <Link to="/cart">
            <ButtonBlue text="Ir a carrito" />
          </Link>
          <ButtonBlue click={() => setBought(false)} text="Volver" />
        </div>
      </>
  )
}
