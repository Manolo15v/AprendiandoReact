export default function Input({ text, type, id, change}) {
  return (
    <label htmlFor={id} className="block text-sm font-medium pb-3">
        {text}
        <input type={type} id={id} onChange={change} className="mt-1 p-1 md:9/12 w-2/4 focus-visible:outline-none focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm text-sm border-gray-300 rounded"/>
    </label>
    
  )
}