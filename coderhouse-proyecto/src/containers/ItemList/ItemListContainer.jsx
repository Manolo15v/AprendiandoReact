import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";

import ItemList from "../../components/Item/ItemList";
import CargeView from "../CargeView";
import { getsDocs } from "../../firebase/funtionsFirebase";


export default function ItemListContainer() {

  const { categoryId } = useParams()
  const products = useProducts(categoryId)



  return (
    products.length === 0 ? <CargeView text="Cargando Productos" /> :

      <main className="bg-gray-50 flex items-center text-slate-800">
        <ItemList items={products} />
      </main>
  )
}
