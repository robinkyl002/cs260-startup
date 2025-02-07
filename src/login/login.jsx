import React from "react";

import "./login.css";

export function Login() {
  return (
    <main className="container-fluid bg-white text-center">
      <h1>Let's get started</h1>
      <form method="get" action="recipes.html">
        <div className="input-group mb-3">
          <span className="input-group-text" id="email">
            Email:
          </span>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="password">
            Password:
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="password"
            aria-describedby="password"
          />
        </div>
        <span id="login-buttons">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <button type="submit" className="btn btn-secondary">
            Create
          </button>
        </span>
      </form>
    </main>
  );
}
