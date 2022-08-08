import { useEffect, useState } from "react"
import { getsDoc } from "../firebase/funtionsFirebase"

export default function useProduct(param) {
    const [product, setProduct] = useState([])

    useEffect(() => {
        getsDoc("items", param)
            .then(resp => setProduct({ id: resp.id, ...resp.data() }))
    }, [])

    return product
}