import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import ProductList from './components/ProductList';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div>
      <Navigation/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductList/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/registration' element={<Registration/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
