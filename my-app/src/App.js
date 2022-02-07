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
import Home2 from './pages/home2';
import TodoList from './components/TodoList';
const App=()=> {
  return (
    <div  className='container'>
       {/**Router -Yönlendirme */}
      <BrowserRouter>
      <ul>
        <li><Link to="/">Home </Link></li>
        <li><Link to="/contact">Contact </Link></li>
        <li><Link to="/home2">Home2 </Link></li>
        <li><Link to="/BağlantıAdresi">TodoList</Link></li>
      </ul>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/user/:id' element={<User/>} />
          <Route path='/home2' element={<Home2/>} />
          <Route path='/TodoList' element={<TodoList/>}/>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;

