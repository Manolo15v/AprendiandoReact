import { useEffect, useState } from "react";
import ItemList from "../../components/Item/ItemList";
import CargeView from "../CargeView";

export default function ItemListContainer() {

  const [productos, setProductos] = useState([])

  const url = 'https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12'

  const getItems = async () => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setProductos(data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    setTimeout(() => {
      getItems()
    }, 2000)
  }, [])

  while (productos.length === 0) {
    return (
      <CargeView text="Cargando Productos"/>
    )
  }


  return (
    <main className="bg-gray-50 flex items-center text-slate-800">
      <ItemList items={productos} />
    </main>
  )
}
