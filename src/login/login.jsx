import React from "react";

export function Login() {
  return (
    <main class="container-fluid bg-white text-center">
      <h1>Let's get started</h1>
      <form method="get" action="recipes.html">
        <div class="input-group mb-3">
          <span class="input-group-text" id="email">
            Email:
          </span>
          <input type="email" class="form-control" id="email" name="email" />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="password">
            Password:
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="password"
            aria-describedby="password"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Login
        </button>
        <button type="submit" class="btn btn-secondary">
          Create
        </button>
      </form>
    </main>
  );
}
