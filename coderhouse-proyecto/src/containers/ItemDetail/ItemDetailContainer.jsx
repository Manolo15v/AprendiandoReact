import { useEffect, useState } from "react"
import ItemDetail from "../../components/Item/ItemDetail"
import CargeView from "../CargeView"

export default function ItemDetailContainer() {

    const [producto, setProducto] = useState([])

    const url = 'https://rickandmortyapi.com/api/character/1'

    const getItems = async () => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            setProducto(data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        setTimeout(() => {
            getItems()
        }, 2000)
    }, [])

    while (producto.length === 0) {
        return (
            <CargeView text="Cargando Productos" />
        )
    }

    return (
        <main className="bg-gray-50 h-screen text-slate-800">
            <ItemDetail item={producto}/>
        </main>
    )
}
