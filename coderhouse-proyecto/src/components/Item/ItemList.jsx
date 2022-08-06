import { memo } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";


const ItemList = memo(
    ({ items }) => {
        return (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 container w-full mt-3">
                {items.map((item) =>
                    <Link to={`/detail/${item.id}`} key={item.id}>
                        <Item item={item} />
                    </Link>
                )}
            </div>
        )
    }
)

export default ItemList