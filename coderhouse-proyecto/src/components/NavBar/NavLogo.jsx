import { NavLink } from "react-router-dom";

export default function NavLogo() {
  return (
    <NavLink to="/">
      <p className="font-semibold text-xl text-gray-200 rounded-full bg-teal-600 py-1 px-3 transition-all hover:bg-teal-800 hover:text-gray-300 duration-500" href="">E-shop Generica</p>
    </NavLink>
  )
}
