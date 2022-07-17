import { NavLink } from "react-router-dom"

export default function NavLinks({ href = '/', text, children }) {
  return (
    <li>
      <NavLink to={ href }>
        <div className="flex items-center decoration-slate-800  transicton-all hover:text-gray-300 hover:decoration-gray-200 hover:underline decoration-2 underline-offset-2 duration-700">
          <p className="first-letter:uppercase">{text}</p>
          {children}
        </div>
      </NavLink>
    </li>
  )
}
