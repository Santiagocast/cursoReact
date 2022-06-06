import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';

function App() {
  return (
    <div className="App">
    <NavBar></NavBar>
    {/* <ItemListContainer></ItemListContainer> */}
    <ItemDetailContainer></ItemDetailContainer>
    </div> 
    
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header>

  );
}

export default App;
