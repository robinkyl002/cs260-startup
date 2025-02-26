import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./new.css";

export function New() {
  const navigate = useNavigate();

  let userName = localStorage.getItem("userName");

  const addRecipe = () => {};

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
        <div id="new-recipe-buttons">
          <AddRecipe userName={userName} />

          <Button variant="primary" onClick={addRecipe}>
            Add
          </Button>
          <Button variant="secondary" onClick={() => navigate("/recipes")}>
            Cancel
          </Button>
        </div>
      </form>
    </main>
  );
}

function AddRecipe(props) {
  const navigate = useNavigate();

  // let userName = localStorage.getItem("userName");
  const userName = props.userName;

  const handleClick = () => {
    navigate("/recipes", { state: { userName: userName } });
  };
  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Add
    </button>
  );
}
