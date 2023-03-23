import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path= '/' element = {<ItemListContainer greeting={"Listado de todos los productos"}/>}/>
          <Route path= '/category/:categoryId' element = {<ItemListContainer greeting={"Productos filtrados"}/>}/>
          <Route path= '/item/:itemId' element = {<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
