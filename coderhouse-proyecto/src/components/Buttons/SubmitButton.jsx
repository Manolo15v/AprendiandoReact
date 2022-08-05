export default function SubmitButton({ text, style = '' }) {
  return (
    <input value={text} className={`font-light text-base bg-slate-800 text-gray-100 border-solid border-slate-800 border-2 rounded hover:border-slate-600 hover:bg-slate-600 transition-all duration-700 px-2.5 py-0.5 ${style}`}  /> 
  )
}
