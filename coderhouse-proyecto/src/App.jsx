import NavBar from './components/NavBar/Navbar'
import ItemDetailContainer from './containers/ItemDetail/ItemDetailContainer'
import ItemListContainer from './containers/ItemList/ItemListContainer'
import CargeView from './containers/CargeView'


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index path="/" element={<ItemListContainer />} />
        <Route path='/detail' element={<ItemDetailContainer />} />
        <Route path='/charge' element={<CargeView text="You shouldn't be here"/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
