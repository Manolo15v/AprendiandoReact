import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../../components/Item/ItemList";
import CargeView from "../CargeView";

import getFetch from "../../helpers/getFetch";

export default function ItemListContainer() {

  const [productos, setProductos] = useState([])

  const { categoryId } = useParams()



  let url = 'https://rickandmortyapi.com/api/character/?page=1'

  useEffect(() => {    
    if (categoryId) {
      switch (categoryId) {
        case "ricks":
          url = 'https://rickandmortyapi.com/api/character/?page=1&name=rick'
          break;
        case "mortys":
          url = 'https://rickandmortyapi.com/api/character/?page=1&name=morty'
          break;
        case "summers":
          url = 'https://rickandmortyapi.com/api/character/?page=1&name=summer'
          break;
        case "beths":
          url = 'https://rickandmortyapi.com/api/character/?page=1&name=beth'
          break;
      }
    }

    getFetch(url)
      .then(data =>setProductos(data.results))
  }, [categoryId])

  return (
    productos.length === 0 ? <CargeView text="Cargando Productos" /> :

      <main className="bg-gray-50 flex items-center text-slate-800">
        <ItemList items={productos} />
      </main>
  )
}
