import { NavLink } from "react-router-dom";

export default function NavLogo() {
  return (
    <NavLink to="/">
      <p className="font-semibold italic text-xl text-gray-200 rounded-md bg-teal-600 py-1 px-3 transition-all hover:bg-teal-800 hover:text-gray-300 duration-500" href="">Tennis e-shop</p>
    </NavLink>
  )
}
