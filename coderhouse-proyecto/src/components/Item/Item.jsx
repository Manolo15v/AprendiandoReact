import { useEffect, useState } from "react"

export default function Item({ item }) {

    const { id, name, status, spicies } = item
    

    return (
        <div>
            <p>{name}</p>
            <p>{status}</p>
            <p>{spicies}</p>
        </div>
    )
}
