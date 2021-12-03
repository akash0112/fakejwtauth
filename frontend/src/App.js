import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Welcome from './components/welcome/Welcome';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import PrivateRoute from './components/privateroute/PrivateRoute';
import Products from './components/products/Products';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <ToastContainer/>
   <Header/>
   <Routes>
    <Route exact path="/" element={<Welcome/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/signup" element={<Signup/>}/>
    <Route exact path="/product" element={<PrivateRoute><Products/></PrivateRoute>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
