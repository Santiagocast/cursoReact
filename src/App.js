import './App.css';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/'element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path='/detail/:productId' element= {<ItemDetailContainer></ItemDetailContainer>}></Route>
      </Routes>    
    </BrowserRouter>

    </div>
  );
}

export default App;
