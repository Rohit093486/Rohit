import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Forget from './Components/Forget';
import Search from './Components/Search';
import Cart from './Components/Cart';
import Spinner from './Components/Spinner';
import DashBoard from './Components/DashBoard';
import ProductForm from './Components/ProductForm';
import { ToastContainer, toast } from 'react-toastify';


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
          {/* <Route path='/cart' exact component={Cart} /> */}
          <Route path='/dash' exact component={DashBoard} />
          <Route path='/productForm' exact component={ProductForm} />
          
        </div>
      </BrowserRouter>
      <ToastContainer />
      
    </div>
  );
}

export default App;
