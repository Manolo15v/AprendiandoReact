import { useParams } from "react-router-dom"
import useProduct from "../../hooks/useProduct"

import ItemDetail from "../../components/Item/ItemDetail"
import CargeView from "../CargeView"

export default function ItemDetailContainer() {

    const { itemId } = useParams()
    const product = useProduct(itemId)
    
    return (
        product.length === 0 ? <CargeView text="Cargando Producto" /> :

            <main className="bg-gray-50 text-slate-800">
                <ItemDetail item={product} />
            </main>
    )
}
