import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartProvider } from './context/CartContext';

const App = () => {

  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path= '/' element = {<ItemListContainer greeting={"Listado de todos los productos"}/>}/>
            <Route path= '/category/:categoryId' element = {<ItemListContainer greeting={"Productos filtrados"}/>}/>
            <Route path= '/item/:itemId' element = {<ItemDetailContainer/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
