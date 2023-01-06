import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from "react";
import { UserContext } from "./contexts/UserContext";
import axios from 'axios';

import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import ProductList from './components/ProductList';
import Registration from './components/Registration/Registration';
import FoodCategories from './components/FoodCategories/FoodCategories';
import Sell from './components/Sell';
import About from './components/About/About';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';

function App() {
  const [loggedUser, setLoggedUser] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getLoggedUser", { withCredentials: true })
      .then(
        (res) => (
          console.log("logged user info", res),
          setLoggedUser({
            id: res.data.user._id,
            username: res.data.user.username
          })
        )
      )
      .catch((err) => console.log("logged user error", err));
  }, []);

  return (
    <div>
      <UserContext.Provider value={{loggedUser, setLoggedUser}}>
      <Navigation/>
      <BrowserRouter>
        <Routes>
          {loggedUser != null ?
          <>
            {/* Routes available to signed-in users */}
            <Route path='/' element={<ProductList/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/logout' element={<ProductList/>} />
            <Route path='/registration' element={<Registration/>} />
            <Route path='/categories' element={<FoodCategories/>} />
            <Route path='/sell' element={<Sell/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/product/:id' element={<ProductDetails/>} />
          </>
          :
          <>
            {/* Routes available to non-users */}
            <Route path='/' element={<ProductList/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/logout' element={<ProductList/>} />
            <Route path='/registration' element={<Registration/>} />
            <Route path='/categories' element={<FoodCategories/>} />
            <Route path='/sell' element={<Sell/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/product/:id' element={<ProductDetails/>} />
          </>
          }
        </Routes>
      </BrowserRouter>
      <Footer/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
