import { Link } from "react-router-dom";

export default function Item({ item }) {

    const { gender, id, image, location, name, origin, species, status, url } = item

    const { name: originName } = origin


    let statusStyle 

    switch (status) {
        case "Alive":
            statusStyle = "text-lime-600"
            break;
        case "Dead":
            statusStyle = "text-red-700"
            break;

        default:
            statusStyle = "first-letter:uppercase text-zinc-800"
            break;
    }

    return (
        <li className="hover:cursor-pointer rounded bg-gray-200">
            <Link to={`/detail/${id}`}>
                <img className="w-full h-auto rounded-t" src={ image } alt="imagen producto" />
                <div className="m-2">
                    <p className="text-2xl font-bold">{ name }</p>
                    <p className="text-lg font-semibold first-letter:uppercase">{ gender }</p>
                    <p className={`text-lg font-semibold ${statusStyle}`}>{ status }</p>
                    <p>{ species }</p>
                    <p className=" text-sm first-letter:uppercase">{ originName }</p>
                </div>
            </Link>
        </li>
    )
}
