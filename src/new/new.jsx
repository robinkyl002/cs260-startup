import React from "react";

import "./new.css";

export function New() {
  return (
    <main id="new-recipe">
      <div id="page-title">
        <h2>Add a new Recipe</h2>
      </div>
      <form method="get" action="recipes.html">
        <div className="input-group mb-3">
          <label for="recipe-name" className="form-label">
            Recipe name:
          </label>
          <input type="text" className="form-control" id="recipe-name"></input>
        </div>
        <div className="input-group mb-3">
          <label for="recipe-ingredients" className="form-label">
            Recipe Ingredients:
          </label>
          <textarea
            id="recipe-details"
            className="form-control"
            aria-label="Recipe Ingredients"
            rows="15"
            cols="50"
          ></textarea>
        </div>
        <div className="input-group mb-3">
          <label for="recipe-instructions" className="form-label">
            Recipe Instructions:
          </label>
          <textarea
            className="form-control"
            aria-label="Recipe Instructions"
            rows="15"
            cols="50"
          ></textarea>
        </div>
        <div className="input-group mb-3">
          <label for="recipe-picture" className="form-label">
            Add a picture:
          </label>
          <input
            type="file"
            className="form-control"
            id="recipe-picture"
            aria-label="Add a picture: "
            name="varFile"
            accept="image/*"
            multiple
          />
        </div>
        <span id="new-recipe-buttons">
          <button className="btn btn-primary" type="submit">
            Add
          </button>
          <button className="btn btn-secondary" type="submit">
            Cancel
          </button>
        </span>
      </form>
    </main>
  );
}
