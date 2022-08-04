import { Link } from "react-router-dom";
import ButtonBlue from "../Buttons/ButtonBlue";

export default function CartEmpty() {
  return (
    <main className="bg-gray-50 text-slate-900 h-screen flex items-center">
      <div className="container flex items-end">
        <h1 className="text-5xl font-medium">Tu carrito esta vacio</h1>

        <Link className="" to="/">
          <ButtonBlue text={"Volver a inicio"}  style="w-full"/>
        </Link>

      </div>
    </main>
  )
}
