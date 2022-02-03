import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return <div className='container'>
        <ul>
            <li>Name:Kaan</li>
            <li>SurName:Yapar</li>
            <li>Age:23</li>
            <li>Depart:Bilişim</li>
        </ul>
    </div>;
  }
}

export default Navbar;
