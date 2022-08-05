import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import DropLink from "./DropLink";
import CartWiget from '../Widgets/CartWiget';

export default function NavBar() {

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