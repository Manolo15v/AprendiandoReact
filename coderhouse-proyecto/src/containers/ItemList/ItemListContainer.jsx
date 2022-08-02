import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

import ItemList from "../../components/Item/ItemList";
import CargeView from "../CargeView";

export default function ItemListContainer() {

  const [products, setProducts] = useState([])

  const { categoryId } = useParams()


  useEffect(() => {

    const getItems = new Promise((resolve, reject) => {
      const db = getFirestore()

      let queryItems 
      if(categoryId) {
        queryItems = query(
          collection(db, "items"),
          where("category", "==", categoryId)
        )
      } else{
        queryItems = collection(db, "items")
      }
      
      resolve(getDocs(queryItems))
      reject('Not found')
    })

    getItems.then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))      
  }, [categoryId])

  return (
    products.length === 0 ? <CargeView text="Cargando Productos" /> :

      <main className="bg-gray-50 flex items-center text-slate-800">
        <ItemList items={products} />
      </main>
  )
}
