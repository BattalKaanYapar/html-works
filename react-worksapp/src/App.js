import React, { Component } from 'react' ;
import Navbar  from './components/Navbar';
import User from './components/User';
import './App.css';

const name = "Kaan";
const surname= "Yapar";
const isLoggedIn = false;
function App() {
  return (
    <div className="container">
      <Navbar/>
      <hr></hr>
      <User></User>
      <h1>
        {
          isLoggedIn ? ` Beim adım ${name}, soyadım ${surname}`
          : "Giriş yapmadınız."
        }
      </h1>
    </div>
  );
}

export default App;
