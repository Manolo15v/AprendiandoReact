import { useEffect, useState } from "react";
import ItemList from "../components/Item/ItemList";

export default function ItemListContainer() {
  return (
    <main className="bg-gray-50 h-screen flex items-center text-slate-800">
      <ItemList />
    </main>
  )
}
