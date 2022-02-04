import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home';
import Contact from './pages/contact';
import User from './pages/user';
const App=()=> {
  return (
    <div  className='container'>
       {/**Router -Yönlendirme */}
      <BrowserRouter>
      <ul>
        <li><Link to="/">Home </Link></li>
        <li><Link to="/contact">Contact </Link></li>
      </ul>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/user/:id' element={<User/>} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;

