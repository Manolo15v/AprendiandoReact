import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../../components/Item/ItemList";
import CargeView from "../CargeView";
import { getsDocs } from "../../firebase/funtionsFirebase";

export default function ItemListContainer() {

  const [products, setProducts] = useState([])

  const { categoryId } = useParams()


  useEffect(() => {
    getsDocs("items", "category", "==", categoryId)
    .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))      
  }, [categoryId])

  return (
    products.length === 0 ? <CargeView text="Cargando Productos" /> :

      <main className="bg-gray-50 flex items-center text-slate-800">
        <ItemList items={products} />
      </main>
  )
}
