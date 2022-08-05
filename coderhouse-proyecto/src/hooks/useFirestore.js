import { useEffect } from "react"
import { getFirestore } from "firebase/firestore"


export const useFirestore = () => {
    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            const db = getFirestore()

            const queryItem = doc(db, "items", itemId)
            resolve(getDoc(queryItem)) 
            reject('Not found')
        })

        getItem.then(resp => setProduct({ id: resp.id, ...resp.data() }))
    }, [])
}
