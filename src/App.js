import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { CartProvider } from './context/CartContext';
import { Notification, NotificationProvider } from './notification/NotificationService';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


const App = () => {
  return (
    <div>
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path= '/' element = {<ItemListContainer greeting={"Listado de todos los productos"}/>}/>
              <Route path= '/category/:categoryId' element = {<ItemListContainer greeting={"Productos"}/>}/>  
              <Route path= '/item/:itemId' element = {<ItemDetailContainer/>} />
              <Route path= "/cart" element = {<Cart/>}/>
              <Route path= "/checkout" element = {<Checkout/> } />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
