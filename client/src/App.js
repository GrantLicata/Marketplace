import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';

function App() {
  return (
    <div>
      <Navigation/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductList/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
