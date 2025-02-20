import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recipes.css";
import { useNavigate } from "react-router-dom";

export function Suggested() {
  return (
    <>
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
    </>
  );
}
