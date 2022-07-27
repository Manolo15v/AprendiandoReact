import { Link } from "react-router-dom";
import Item from "./item";

export default function ItemList({ items }) {
    return (
        <div className="grid grid-cols-4 gap-3 container w-full mt-3">
            {items.map((item) =>
                <Link to={`/detail/${item.id}`} key={item.id}>
                    <Item item={item}  />
                </Link>
            )}
        </div>
    )
}
