import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Recipes } from './recipes/recipes';
import { New } from './new/new';
import { View } from './view/view';

export default function App() {
  return (
    <BrowserRouter>
        <div className='app bg-light text-dark'>
            <header className="container-fluid">
                <nav className="navbar fixed-top navbar-custom">
                    <div className="container-fluid">
                        <div className="navbar-brand">Let's Eat!</div>
                        <menu className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="recipes">
                                    My Recipes
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="new">
                                    Add a Recipe
                                </NavLink>
                            </li>
                        </menu>
                    </div>
                </nav>
            </header>

            <main className="container-fluid bg-white text-center">
                Placeholder for app components
            </main>

            <footer className="bg-dark text-white-50">
                <div className="container-fluid">
                    <span className="text-reset">Kyle Robinson</span>
                    <a className="text-reset" href="https://github.com/robinkyl002/cs260-startup/tree/main">Source</a>
                </div>
            </footer>
        </div>
    </BrowserRouter>
  );
}