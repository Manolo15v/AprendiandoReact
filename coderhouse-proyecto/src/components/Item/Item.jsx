export default function Item({ item }) {

    const { gender, id, image, location, name, origin, species, status, url } = item

    const { name: originName } = origin

    return (
        <li className="hover:cursor-pointer rounded bg-gray-200">
            <a>
                <img className="w-full h-auto rounded-t" src={image} alt="imagen producto" />
                <div className="m-2">
                    <p className="text-2xl font-semibold">{name}</p>
                    <p className="text-lg">{gender}</p>
                    <p className="">{species}</p>
                    {
                        status === "Alive"
                            ? <p className=" text-lime-600">{status}</p>
                            : <p className="first-letter:uppercase text-red-700">{status}</p>
                    }
                    <p className="first-letter:uppercase">{originName}</p>
                </div>
            </a>
        </li>
    )
}
