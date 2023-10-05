import './App.css';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/Newnav';
import Cart from './components/cart/Cart';
import MainComp from './components/home/MainComp';

function App() {
  return (
    <div className='App'>
      
      <>
    <Navbaar/> 
    <Newnav/>  
    <Cart/>
    <MainComp/>
  </>

  </div>

  );
}

export default App;
