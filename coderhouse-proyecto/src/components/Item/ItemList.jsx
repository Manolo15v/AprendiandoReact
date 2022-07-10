import { useEffect, useState } from "react";
import CargeView from "../../containers/CargeView";
import Item from "./item";

export default function ItemList() {

    const [productos, setProductos] = useState([])

    // const items = [
    //     { id: 1, name: 'Rick Sanchez', status: 'Alive', species: 'Human', type: '' },
    //     { id: 2, name: 'Morty Smith', status: 'Alive', species: 'Human', type: '' },
    //     { id: 3, name: 'Summer Smith', status: 'Alive', species: 'Human', type: '' },
    //     { id: 4, name: 'Beth Smith', status: 'Alive', species: 'Human', type: '' },
    //     { id: 5, name: 'Jerry Smith', status: 'Alive', species: 'Human', type: '' },
    //     { id: 6, name: 'Abadango Cluster Princess', status: 'Alive', species: 'Alien', type: '' },
    //     { id: 7, name: 'Abradolf Lincler', status: 'unknown', species: 'Human', type: 'Genetic experiment' },
    //     { id: 8, name: 'Adjudicator Rick', status: 'Dead', species: 'Human', type: '' },
    //     { id: 9, name: 'Agency Director', status: 'Dead', species: 'Human', type: '' }
    // ]



    // const getItems = new Promise((resolve, reject) => {
    //    setTimeout(() => {
    //         resolve(items)
    //    }, 2000);
    // })


    const getItems = async () => {
        try {
            const res = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9')
            const data = await res.json()
            setProductos(data)
        } catch (error) {
            console.log(error)
        }
    }
    
    let listProductos 

    function setListProductos() {
        listProductos = productos.map((item) => {
           return <Item item={item} key={item.id} />
        })
    }
    
    useEffect(() => {
        getItems()
    }, [])


    if(productos.length !== 0) {
        setListProductos()
    }

    while (productos.length === 0) {
        return (<CargeView text="Cargando productos" />)
    }

    return (
        <div>
            {listProductos}
        </div>
    )

}
