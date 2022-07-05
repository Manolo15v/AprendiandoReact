import ItemCount from "../components/Item/ItemCount";
import CargeView from "./CargeView";

export default function ItemListContainer() {
  return (
    <main className="bg-gray-50 h-screen flex items-center text-slate-800">
      <CargeView text= "Cargando proyecto"/>
      <ItemCount stock={5} />
    </main>
  )
}
