import React, {useEffect, useState} from 'react';
import '../App.css';
import '../styles.css';
import logo from '../logo.svg';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from "react-router-dom";


function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <nav>
                <ul>
                    <li><Link to='/'  >Начальная</Link></li>
                    <li><Link to='/posts'  >Посты</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;