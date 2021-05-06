import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Forget from './Components/Forget';
import Search from './Components/Search';
import DashBoard from './Components/DashBoard';
import ProductForm from './Components/ProductForm';
import { ToastContainer, toast } from 'react-toastify';
import CakeDetails from './Components/CakeDetails';
import Details from './Components/Details';
import  Cart from "./Components/Cart";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
       
        
        <div>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/registration' exact component={Registration} />
          <Route path='/forget' exact component={Forget} />
          <Route path='/search' exact component={Search} />     
          <Route path='/dash' exact component={DashBoard} />
          <Route path='/productForm' exact component={ProductForm} />
          <Route exact path="/cakedetails/:id" exact component={CakeDetails} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/cart" component={Cart} />
          
          
        </div>
      </BrowserRouter>
      <ToastContainer />
      
    </div>
  );
}

export default App;
