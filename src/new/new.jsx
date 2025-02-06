import React from "react";

import "./new.css";

export function New() {
  return (
    <main id="new-recipe">
      <div id="page-title">
        <h2>Add a new Recipe</h2>
      </div>
      <form method="get" action="recipes.html">
        <div class="input-group mb-3">
          <label for="recipe-name" class="form-label">
            Recipe name:
          </label>
          <input type="text" class="form-control" id="recipe-name"></input>
        </div>
        <div class="input-group mb-3">
          <label for="recipe-ingredients" class="form-label">
            Recipe Ingredients:
          </label>
          <textarea
            id="recipe-details"
            class="form-control"
            aria-label="Recipe Ingredients"
            rows="15"
            cols="50"
          ></textarea>
        </div>
        <div class="input-group mb-3">
          <label for="recipe-instructions" class="form-label">
            Recipe Instructions:
          </label>
          <textarea
            class="form-control"
            aria-label="Recipe Instructions"
            rows="15"
            cols="50"
          ></textarea>
        </div>
        <div class="input-group mb-3">
          <label for="recipe-picture" class="form-label">
            Add a picture:
          </label>
          <input
            type="file"
            class="form-control"
            id="recipe-picture"
            aria-label="Add a picture: "
            name="varFile"
            accept="image/*"
            multiple
          />
        </div>
        <span id="new-recipe-buttons">
          <button class="btn btn-primary" type="submit">
            Add
          </button>
          <button class="btn btn-secondary" type="submit">
            Cancel
          </button>
        </span>
      </form>
    </main>
  );
}
