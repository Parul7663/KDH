import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home';
import LoginForm from './components/UserLogin';
import Dashboard from './components/Dashboard';
import Register from './components/UserRegister';
import Header from './components/Header';
import AdminLogin from './components/AdminLogin';
import Cart from './components/Cart';
import AdminAddProduct from './components/AdminAddProduct';
import AdminShowProduct from './components/AdminShowProduct';
import AdminEditProduct from './components/AdminEditProduct';
import ExpenseTracker from './components/ExpenseTracker';


import {BrowserRouter as Router,Routes,Route }from 'react-router-dom'


function App() {
  return (
  
   <Router>
    <Routes>
      <Route exact path='/' element ={<Home/>}/>
      <Route exact path='/Login' element ={<LoginForm/>}/>
      <Route exact path='/register' element ={<Register/>}/>
      <Route exact path='/adminlogin' element ={<AdminLogin/>}/>
      <Route exact path='/dashboard' element ={<Dashboard/>}/>
      <Route exact path='/header' element ={<Header/>}/>
      <Route exact path='/cart' element ={<Cart/>}/>
      <Route exact path='/admin/add' element ={<AdminAddProduct/>}/>
      <Route exact path='/show' element ={<AdminShowProduct/>}/>
      <Route exact path='/edit' element ={<AdminEditProduct/>}/>
      <Route exact path='/tracker' element ={<ExpenseTracker/>}/>
    </Routes>
   </Router>
   
  );
}


export default App;
