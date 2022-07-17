import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ItemDetail from "../../components/Item/ItemDetail"
import getFetch from "../../helpers/getFetch"
import CargeView from "../CargeView"

export default function ItemDetailContainer() {

    const [producto, setProducto] = useState([])

    const { itemId } = useParams()

    const url = `https://rickandmortyapi.com/api/character/${itemId}`

    useEffect(() => {
        getFetch(url)
        .then(data => setProducto(data))
    }, [])

    return (
        producto.length === 0 ? <CargeView text="Cargando Producto" /> :

        <main className="bg-gray-50 text-slate-800">
            <ItemDetail item={producto}/>
        </main>
    )
}
