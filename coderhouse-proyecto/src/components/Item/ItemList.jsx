import Item from "./item";

export default function ItemList({ items }) {
    return (
        <ul className="grid grid-cols-4 gap-3 container w-full mt-3">
            {items.map((item) => <Item item={item} key={item.id} />)}
        </ul>
    )
}
