export default function Item({ item }) {

    const { id, name, image, description, price, stock } = item

    return (
        <div className="hover:cursor-pointer rounded bg-gray-200 h-full pb-3">
            <div className="bg-white w-full max-h-60 h-4/6 flex justify-center pb-2">
                <img className="w-auto h-auto rounded-t" src={image} alt="imagen producto" />
            </div>
            <div className="m-2 flex flex-col justify-between h-2/6">
                <p className="text-2xl font-bold">{name}</p>
                <p className="text-xl font-semibold first-letter:uppercase ">{price}$</p>
            </div>
        </div>
    )
}
