export default function Input({ text, type, id}) {
  return (
    <label htmlFor={id} className="block text-sm font-medium">
        {text}
        <input type={type} id={id} className="mt-1 focus-visible:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-sm border-gray-300 rounded-md"/>
    </label>
    
  )
}