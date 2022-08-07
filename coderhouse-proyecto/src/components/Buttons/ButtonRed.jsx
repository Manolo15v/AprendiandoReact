export default function ButtonRed({ click, text }) {
    return (
        <button className='w-auto h-10 font-light text-base bg-red-700 text-gray-100 border-solid border-red-700 border-2 rounded shadow-sm shadow-red-800 hover:border-red-900 hover:bg-red-900 transition-all duration-500 px-2.5 py-0.5' onClick={click} > {text}</button>
    )
}

