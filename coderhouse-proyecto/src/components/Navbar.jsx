function Navbar() {
    return (
        <header className="bg-slate-800">
            <div className="container color">
                <nav className="flex justify-between py-5 text-gray-300">
                    <div>
                        <a className="font-semibold" href="">E-shop Generica</a>
                    </div>

                    <div>
                        <ul className="flex space-x-3">
                            <li>
                                <a className="hover:underline decoration-teal-800 hover:text-teal-800 decoration-2 underline-offset-2" href="">Soluciones</a>
                            </li>
                            <li>
                                <a className="hover:underline decoration-teal-800 hover:text-teal-800 decoration-2 underline-offset-2" href="">Productos</a>
                            </li>
                            <li>
                                <a className="hover:underline decoration-teal-800 hover:text-teal-800 decoration-2 underline-offset-2" href="">Carrito</a>
                            </li>
                        </ul>
                    </div> 
                </nav>  
            </div>
        </header>
    )
}

export default Navbar