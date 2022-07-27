export { useState } from 'react'
import { PlusSmIcon, MinusSmIcon } from '@heroicons/react/solid';
import ButtonBlue from '../Buttons/ButtonBlue';

export default function ItemCount({ stock, initial = 1, onAdd }) {
    const [count, setCount] = useState(initial)

    const addCount = () => {
        if (count < stock) { setCount(count + 1) }
    }

    const subCount = () => {
        if (count > initial) { setCount(count - 1) }
    }

    return (
        <div className='m-2 w-36'>
            <div className='border-solid border-gray-400 border-2 rounded mb-1 flex items-center justify-between px-1 py-0.5'>
                <button className='text-teal-700' onClick={subCount}><MinusSmIcon className="h-6 w-6" /></button>
                <p className='font-semibold text-lg'>{count}</p>
                <button className='text-teal-700' onClick={addCount}><PlusSmIcon className="h-6 w-6" /></button>
            </div>

            <ButtonBlue click={() => onAdd(count, true)} text="Agregar a Carrito" />
        </div>
    )
}
