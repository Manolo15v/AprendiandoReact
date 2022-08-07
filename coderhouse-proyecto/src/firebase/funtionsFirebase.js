import { initFirebase } from "./config";
import { getFirestore, addDoc, collection, doc, getDoc, getDocs, query, where, documentId, writeBatch, } from "firebase/firestore";

initFirebase();
const DB = getFirestore();

//add
export function addsDoc(coll, document) {
    const createQuery = collection(DB, coll);
    return addDoc(createQuery, document);
}

//get 
export async function getsDoc(coll, id) {
    const readQuery = doc(DB, coll, id);
    try {
        return getDoc(readQuery);
    } catch (error) {
        console.log(error);
    }
}

export async function getsDocs(coll, field, op, search) {
    let readQuery = collection(DB, coll);

    if (search) {
        readQuery = query(
            readQuery,
            where(field, op, search)
        );
    }

    try {
        return getDocs(readQuery)
    } catch (error) {
        console.log(error)
    }
}

