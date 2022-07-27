
export default function ItemCart({ item }) {

    const { gender, id, image, location, name, origin, species, status, url } = item

    return (
        <div className="flex my-2 mx-28 p-2 bg-gray-200 rounded">
            <img className="w-auto h-36 rounded" src={image} alt="imagen producto" />
            <div className="ml-3 font-semibold">
                <p className="text-2xl font-bold">Nombre: {name}</p>
                <p className="text-lg">Genero: {gender}</p>
                <p className="text-lg">Estatus: <span className={statusStyle}>{status}</span></p>
                <p>Especie: {species}</p>
                <p>Cantidad: {cantidad} </p>
            </div>
        </div>
    )
}
