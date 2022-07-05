import MinusWidget from '../Widgets/MinusWidget'
import PlusWidget from '../Widgets/PlusWidget'

export { useState } from 'react'

export default function ItemCount({ stock, initial = 1 }) {
    const [count, setCount] = useState(initial)

    const addCount = () => {
        if (count < stock) { setCount(count + 1) }
    }

    const subCount = () => {
        if (count > initial) { setCount(count - 1) }
    }

    return (
        <div className='m-2'>
            <div className=' border-solid border-gray-400 border-2 rounded mb-1 flex items-center justify-between px-1 py-0.5'>
                <button className='text-teal-700' onClick={subCount}><MinusWidget/></button>
                <p className='font-semibold text-lg'>{count}</p>
                <button className='text-teal-700' onClick={addCount}><PlusWidget/></button>
            </div>

            <button className='font-light text-base bg-slate-800 text-gray-100 border-solid border-slate-800 border-2 rounded hover:border-slate-600 hover:bg-slate-600 transition-all duration-700 px-2.5 py-0.5'>Agregar a Carrito</button>
        </div>
    )
}
