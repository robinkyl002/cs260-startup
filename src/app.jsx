import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className='app bg-dark text-light'>
        <header class="container-fluid">
            <nav class="navbar fixed-top navbar-custom">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Let's Eat!</a>
                    <menu class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="recipes.html">My Recipes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="new.html">Add a Recipe</a>
                        </li>
                    </menu>
                </div>
            </nav>
        </header>

        <main class="container-fluid bg-white text-center">
            <h1>Let's get started</h1>
            <form method="get" action="recipes.html">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="email">   Email:    </span>
                    <input type="email" class="form-control" id="email" name="email" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="password">Password: </span>
                    <input type="text" class="form-control" aria-label="password" aria-describedby="password" />
                </div>
                <button type="submit" class="btn btn-primary" >Login</button>
                <button type="submit" class="btn btn-secondary">Create</button>
            </form>
        </main>

        <footer class="bg-dark text-white-50">
            <div class="container-fluid">
                <span class="text-reset">Kyle Robinson</span>
                <a class="text-reset" href="https://github.com/robinkyl002/cs260-startup/tree/main">Source</a>
            </div>
        </footer>
    </div>
  );
}