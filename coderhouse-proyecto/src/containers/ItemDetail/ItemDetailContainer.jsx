import { useEffect , useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"

import ItemDetail from "../../components/Item/ItemDetail"
import CargeView from "../CargeView"

export default function ItemDetailContainer() {

    const [product, setProduct] = useState([])

    const { itemId } = useParams()

    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            const db = getFirestore()

            const queryItem = doc(db, "items", itemId)
            resolve(getDoc(queryItem)) 
            reject('Not found')
        })

        getItem.then(resp => setProduct({ id: resp.id, ...resp.data() }))
    }, [])

    return (
        product.length === 0 ? <CargeView text="Cargando Producto" /> :

            <main className="bg-gray-50 text-slate-800">
                <ItemDetail item={product} />
            </main>
    )
}
