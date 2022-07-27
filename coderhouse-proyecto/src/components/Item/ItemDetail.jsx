import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

import ItemCount from "./ItemCount";
import ButtonBlue from "../Buttons/ButtonBlue";

export default function ItemDetail({ item }) {

  const [cantidad, setCantidad] = useState(1)
  const [comprado, setComprado] = useState(false)
  const { addItem } = useCartContext()

  const { gender, id, image, location, name, origin, species, status, url } = item

  const { name: originName } = origin

  const { name: locationName } = location

  let ramdonStock = () => Math.random() * (15 - 1) + 1;

  const onAdd = (cantidad, comprado) => {
    setCantidad(cantidad)
    setComprado(comprado)
    addItem({ ...item, cantidad })
  }

  let statusStyle
  switch (status) {
    case "Alive":
      statusStyle = "text-lime-600"
      break;

    case "Dead":
      statusStyle = "text-red-700"
      break;

    default:
      statusStyle = "first-letter:uppercase text-zinc-800"
      break;
  }

  return (
    comprado === false ?
      <div className="flex m-2">
        <img className="w-auto h-96 rounded" src={image} alt="imagen producto" />
        <div className="grid grid-cols-2 m-2 w-full">
          <div className="ml-3 font-semibold">
            <p className="text-3xl font-bold">Nombre: {name}</p>
            <p className="text-xl">Genero: {gender}</p>
            <p className="text-xl">Estatus: <span className={statusStyle}>{status}</span></p>
            <p>Especie: {species}</p>
            <p className="first-letter:uppercase">Ubicacion de origen: {originName}</p>
            <p className="">Ubicacion actual: {locationName}</p>
          </div>
          <div className="self-center justify-self-end">
            <ItemCount stock={ramdonStock()} onAdd={onAdd} />
          </div>
        </div>
      </div>
      :
      <>
        <div className="flex my-2 mx-28 p-2 bg-gray-200 rounded">
          <img className="w-auto h-36 rounded" src={image} alt="imagen producto" />
          <div className="ml-3 font-semibold">
            <p className="text-2xl font-bold">Nombre: {name}</p>
            <p className="text-lg">Genero: {gender}</p>
            <p className="text-lg">Estatus: <span className={statusStyle}>{status}</span></p>
            <p>Especie: {species}</p>
            <p>Cantidad: {cantidad} </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mx-56">
          <Link to="/cart">
            <ButtonBlue text="Ir a carrito" />
          </Link>
          <ButtonBlue click={() => setComprado(false)} text="Volver" />
        </div>
      </>
  )
}
