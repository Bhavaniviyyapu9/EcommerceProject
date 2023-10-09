import './App.css'
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/Newnav';
import Cart from './components/cart/Cart';
import Maincomp from  "./components/home/MainComp";
import Sign_in from './components/signup_signin/Sign_in';
import SignUp from './components/signup_signin/SignUp';
import { Routes,Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Buynow from './components/buynow/Buynow';




function App() {
  return (
  
      
<>
    <Navbaar/> 
    <Newnav/>  
    
    <Routes>
         <Route  path="/"  element={<Maincomp/>} />
         <Route path="/login" element={<Sign_in/>}/>
         <Route  path="/register"  element={<SignUp/>} />
         <Route path="/getproductsone/:id" element={<Cart/>}/>
         <Route path="/buynow" element={<Buynow/>}/>
    </Routes>
    <Footer/>
  
     </>




  );
}

export default App;
