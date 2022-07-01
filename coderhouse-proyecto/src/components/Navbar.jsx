import CarWidget from "./CarWidget"

export default function Navbar() {
    return (
        <header className="bg-slate-800">
            <div className="container">
                <nav className="flex justify-between py-5 px-2 ">
                    <div>
                        <a className="font-semibold text-xl text-gray-200 rounded-full bg-teal-600 py-1 px-3 transition-all hover:bg-teal-800 hover:text-gray-300 duration-500" href="">E-shop Generica</a>
                    </div>

                    <div className="text-gray-400">
                        <ul className="flex space-x-3">
                            <li>
                                <a className="decoration-slate-800  transicton-all hover:text-gray-300 hover:decoration-gray-200 hover:underline decoration-2 underline-offset-2 duration-700" href="">Soluciones</a>
                            </li>
                            <li>
                                <a className="decoration-slate-800 transicton-all hover:text-gray-300 hover:decoration-gray-200 hover:underline decoration-2 underline-offset-2 duration-700" href="">Productos</a>
                            </li>
                            <li>
                                <a className="decoration-slate-800 flex items-center transicton-all hover:text-gray-200 hover:decoration-gray-300 hover:underline decoration-2 underline-offset-2 duration-700" href="">
                                    Carrito
                                    <CarWidget />
                                </a>
                            </li>
                        </ul>
                    </div> 
                </nav>  
            </div>
        </header>
    )
}