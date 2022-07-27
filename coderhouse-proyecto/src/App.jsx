import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './containers/ItemList/ItemListContainer'
import CargeView from './containers/CargeView'


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import CartProvider from './Context/CartContext'

const ItemDetailContainer = lazy(() => import('./containers/ItemDetail/ItemDetailContainer'))

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
          <Route path='/cart' element={<CargeView text="El carrito esta cargando" />} />
          <Route path='/charge' element={<CargeView text="You shouldn't be here" />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </CartProvider>
    </BrowserRouter >
  )
}

export default App