
import { useCartContext } from '../../hooks/useCartContext';
import CartWiget from '../Widgets/CartWiget';

import DropLink from "./DropLink";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";



export default function NavBar() {

    const { cartList } = useCartContext()
    return (
        <header className="bg-slate-800">
            <div className="container">
                <nav className="flex items-center justify-between py-5 px-2">
                    <NavLogo />

                    <div className="text-gray-400">
                        <ul className="flex space-x-3">
                            <li>
                                <DropLink />
                            </li>
                            <NavLinks text="soluciones" />
                            <NavLinks href="/cart" text="carrito">
                                <CartWiget />
                            </NavLinks>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}