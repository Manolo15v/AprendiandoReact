export { useState } from 'react'
import { PlusSmIcon, MinusSmIcon } from '@heroicons/react/solid';



export default function ItemCount({ stock, initial = 1, productoID }) {
    const [count, setCount] = useState(initial)

    const addCount = () => {
        if (count < stock) { setCount(count + 1) }
    }

    const subCount = () => {
        if (count > initial) { setCount(count - 1) }
    }

    const onAdd = () => {
        console.log("Agregado a carrito");
    }

    return (
        <div className='m-2 w-36'>
            <div className='border-solid border-gray-400 border-2 rounded mb-1 flex items-center justify-between px-1 py-0.5'>
                <button className='text-teal-700' onClick={subCount}><MinusSmIcon className="h-6 w-6" /></button>
                <p className='font-semibold text-lg'>{count}</p>
                <button className='text-teal-700' onClick={addCount}><PlusSmIcon className="h-6 w-6" /></button>
            </div>

            <button className='w-full font-light text-base bg-slate-800 text-gray-100 border-solid border-slate-800 border-2 rounded hover:border-slate-600 hover:bg-slate-600 transition-all duration-700 px-2.5 py-0.5' onClick={onAdd}>Agregar a Carrito</button>
        </div>
    )
}
