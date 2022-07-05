export default function NavLink({ href = '', text, children}) {
  return (
    <li>
      <a className="flex items-center decoration-slate-800  transicton-all hover:text-gray-300 hover:decoration-gray-200 hover:underline decoration-2 underline-offset-2 duration-700" href={ href }>
        <p className="first-letter:uppercase">{text}</p>
        {children}
      </a>
    </li>
  )
}
