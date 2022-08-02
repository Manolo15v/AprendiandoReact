import { ShoppingCartIcon } from '@heroicons/react/solid';
import { useCartContext } from '../../hooks/useCartContext';

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
                                <ShoppingCartIcon className="h-5 w-5 ml-1" />
                               {cartList.length != 0 &&  <p className='border-none'>{cartList.length}</p>}
                            </NavLinks>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}