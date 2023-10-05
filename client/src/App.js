
import './App.css'
import Maincomp from  "./components/home/MainComp";
import Sign_in from './components/signup_signin/Sign_in';
import SignUp from './components/signup_signin/SignUp';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

    <Routes>
         <Route  path="/"  element={<Maincomp/>} />
          <Route path="/login" element={<Sign_in/>}/>
          <Route  path='/register'  element={<SignUp/>} />
    </Routes>
  

    </div>
  );
}

export default App;
