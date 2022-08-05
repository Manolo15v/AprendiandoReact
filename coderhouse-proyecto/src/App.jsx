import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './containers/ItemList/ItemListContainer'
import CargeView from './containers/CargeView'
import CartProvider from './Context/CartContext'
import PaymentContainer from './containers/Payment/PaymentContainer'

const ItemDetailContainer = lazy(() => import('./containers/ItemDetail/ItemDetailContainer'))
const CartContainer = lazy(() => import('./containers/Cart/CartContainer'))

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route index path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:itemId' element={
            <Suspense fallback={<CargeView text="Cargando productos" />}>
              <ItemDetailContainer />
            </Suspense>
          } />
          <Route path='/cart' element={
            <Suspense fallback={<CargeView text="Cargando carrito" />}>
              <CartContainer/>
            </Suspense>
          } />
          <Route index path='/payment' element={<PaymentContainer />} />
          <Route path='/charge' element={<CargeView text="You shouldn't be here" />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </CartProvider>
    </BrowserRouter >
  )
}

export default App