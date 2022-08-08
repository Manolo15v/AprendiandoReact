import { useEffect, useState } from "react"
import { getsDocs } from "../firebase/funtionsFirebase"

export default function useProducts(param) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getsDocs("items", "category", "==", param)
            .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
    }, [param])

    return products
}

