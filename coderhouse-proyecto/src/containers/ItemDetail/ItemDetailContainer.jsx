import React, { useEffect , useState } from "react"
import { useParams } from "react-router-dom"

import ItemDetail from "../../components/Item/ItemDetail"
import CargeView from "../CargeView"
import { getsDoc } from "../../firebase/funtionsFirebase"

export default function ItemDetailContainer() {

    const [product, setProduct] = useState([])

    const { itemId } = useParams()

    useEffect(() => {
        getsDoc("items", itemId).then(resp => setProduct({ id: resp.id, ...resp.data() }))
    }, [])

    return (
        product.length === 0 ? <CargeView text="Cargando Producto" /> :

            <main className="bg-gray-50 text-slate-800">
                <ItemDetail item={product} />
            </main>
    )
}
