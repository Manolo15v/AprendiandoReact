import { Link } from "react-router-dom";


export default function ItemCart({ item, itemAmount ,children }) {

    //itemAmount prop only use is when ItemCart component is call in ItemDetail component
    const { id, name, image, description, price, amount } = item

    return (
        <div className="flex my-2 mx-28 p-2 bg-gray-200 rounded">
            <Link className="flex" to={`/detail/${id}`} >
                <img className="w-auto h-36 rounded m-0" src={image} alt="imagen producto" />
                <div className="ml-3 font-semibold">
                    <p className="text-2xl font-bold">{name}</p>
                    <p className="text-lg">{description}</p>
                    <p className="text-lg">{price}$</p>
                    <p>Cantidad: {itemAmount ? itemAmount : amount} </p>
                </div>
            </Link>
            <div className="self-center">
                {children}
            </div>
        </div>
    )
}
