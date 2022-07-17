import { useEffect, useState } from "react";
import ItemList from "../../components/Item/ItemList";
import CargeView from "../CargeView";

import getFetch from "../../helpers/getFetch";

export default function ItemListContainer() {

  const [productos, setProductos] = useState([])

  const url = 'https://rickandmortyapi.com/api/character/?page=1'

  useEffect(() => {
    getFetch(url)
      .then(data =>setProductos(data.results))
  }, [])

  return (
    productos.length === 0 ? <CargeView text="Cargando Productos" /> :

      <main className="bg-gray-50 flex items-center text-slate-800">
        <ItemList items={productos} />
      </main>
  )
}
