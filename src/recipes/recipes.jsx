import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recipes.css";

export function Recipes() {
  return (
    <main id="all-recipes">
      <aside id="users">
        <span>User: Cooking Fanatic</span>
        <ul>
          <li>Susan just added Crepes</li>
          <li>Jason just added Apple Fritter</li>
        </ul>
      </aside>

      <h2>My Recipes</h2>
      <div
        id="user-recipes"
        className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-6"
      >
        <div className="col">
          <div className="card">
            <img
              src="/french-toast.jpg"
              className="card-img-top my-recipe-images"
              alt="french toast"
            />
            <div className="card-body">
              <h4 className="card-title">French Toast</h4>
              <form method="get" action="view.html">
                <button type="submit" className="btn btn-primary">
                  View Recipe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="/apple-fritter.jpg"
              className="card-img-top my-recipe-images"
              alt="apple fritter"
            />
            <div className="card-body">
              <h4 className="card-title">Apple Fritter</h4>
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="/chocolate-chip-cookies.jpeg"
              className="card-img-top my-recipe-images"
              alt="chocolate chip cookies"
            />
            <div className="card-body">
              <h4 className="card-title">Chocolate Chip Cookies</h4>
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="/shepherds-pie.jpg"
              className="card-img-top my-recipe-images"
              alt="Shepherd's Pie"
            />
            <div className="card-body">
              <h4 className="card-title">Shepherd's Pie</h4>
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="/Spaghetti.jpg"
              className="card-img-top my-recipe-images"
              alt="spaghetti"
            />
            <div className="card-body">
              <h4 className="card-title">Spaghetti</h4>
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>
      </div>

      <h2>Suggested Recipes</h2>
      <div id="suggested-recipes" className="row row-cols-2 g-2">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Biscuits and Gravy</h4>
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Chicken Curry</h4>
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
