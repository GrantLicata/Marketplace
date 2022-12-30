import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import ProductList from './components/ProductList';
import Registration from './components/Registration/Registration';
import Categories from './components/Categories/Categories';
import Sell from './components/Sell';
import About from './components/About/About';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div>
      <Navigation/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductList/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/registration' element={<Registration/>} />
          <Route path='/categories' element={<Categories/>} />
          <Route path='/sell' element={<Sell/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/product' element={<ProductDetails/>} />
          {/* The product details page will need ID specification following backend development */}
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
