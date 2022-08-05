import { ShoppingCartIcon } from '@heroicons/react/solid'
import { useCartContext } from '../../hooks/useCartContext'

export default function CartWiget() {
    const { cartList } = useCartContext()
    let totalItem = cartList.reduce((count, item) => count + item.amount, 0)
    
    return (
        <div className='flex'>
            <ShoppingCartIcon className='h-5 w-5 ml-1 ' />
            {cartList.length != 0  && <p className=' text-sm '>{totalItem}</p>}
        </div>
    )
}
