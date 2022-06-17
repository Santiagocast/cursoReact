import './App.css';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './cartContext/cartContext';
import Cart from './components/cart/cart';

function App() {
  return (
    <div className="App">
    <CartProvider>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/'element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path='/detail/:productId' element= {<ItemDetailContainer></ItemDetailContainer>}></Route>
          <Route path='/category/:category' element= {<ItemListContainer></ItemListContainer>}></Route>
          <Route path='/cart' element = {<Cart></Cart>}></Route>
        </Routes>    
      </BrowserRouter>
    </CartProvider>

    </div>
  );
}

export default App;
