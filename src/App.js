import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
    <ItemListContainer greeting={'Bienvenido a partienda'}></ItemListContainer>
    </div> 
    
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header>

  );
}

export default App;
