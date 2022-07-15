import CarWidget from "../Widgets/CarWidget";
import DropLink from "./DropLink";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";

export default function NavBar() {
    return (
        <header className="bg-slate-800">
            <div className="container">
                <nav className="flex items-center justify-between py-5  px-2 ">
                    <NavLogo />

                    <div className="text-gray-400">
                        <ul className="flex space-x-3">
                            <li>
                                <DropLink />
                            </li>
                            <NavLinks text="soluciones" />
                            <NavLinks text="productos" />
                            <NavLinks text="carrito">
                                <CarWidget />
                            </NavLinks>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}