import CarWidget from "../Widgets/CarWidget";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";

export default function NavBar() {
    return (
        <header className="bg-slate-800">
            <div className="container">
                <nav className="flex items-center justify-between py-5  px-2 ">
                    <NavLogo />

                    <div className="text-gray-400">
                        <ul className="flex space-x-3">
                            <NavLink text="soluciones" />
                            <NavLink text="productos" />
                            <NavLink text="carrito">
                                <CarWidget />
                            </NavLink>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}