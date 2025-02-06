import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className='app bg-light text-dark'>
        <header className="container-fluid">
            <nav className="navbar fixed-top navbar-custom">
                <div className="container-fluid">
                    <div className="navbar-brand">Let's Eat!</div>
                    <menu className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="recipes.html">My Recipes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="new.html">Add a Recipe</a>
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
  );
}