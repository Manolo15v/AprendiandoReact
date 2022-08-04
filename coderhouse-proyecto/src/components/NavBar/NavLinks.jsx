import { NavLink } from "react-router-dom"

export default function NavLinks({ href = '/', text, children }) {
  return (
    <li>
      <NavLink to={ href } className="flex hover:text-gray-300 transicton-all duration-700">
        <div className="flex items-center decoration-slate-800  transicton-all  hover:decoration-gray-200 hover:underline decoration-2 underline-offset-2 duration-700">
          <p className="first-letter:uppercase">{text}</p>
        </div>
        {children}
      </NavLink>
    </li>
  )
}
