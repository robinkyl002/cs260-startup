import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./new.css";

export function New() {
  const [recipeName, setRecipeName] = React.useState("");
  const [ingredients, setIngredients] = React.useState("");
  const [instructions, setInstructions] = React.useState("");
  const [image, setImage] = React.useState(
    "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
  );

  const navigate = useNavigate();

  async function addRecipe() {
    // saveRecipeLocal();

    const newRecipe = {
      recipeName: recipeName,
      ingredients: ingredients,
      instructions: instructions,
      imgUrl: image,
    };

    await fetch("/api/recipe", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newRecipe),
    });

    navigate("/recipes");
  }

  function saveRecipeLocal() {
    let recipes = [];
    const userRecipes = localStorage.getItem("userRecipes");

    if (userRecipes) {
      recipes = JSON.parse(userRecipes);
    }

    let recipeDetails = {
      recipeName: recipeName,
      ingredients: ingredients,
      instructions: instructions,
      imgUrl: image,
    };

    recipes.push(recipeDetails);

    localStorage.setItem("userRecipes", JSON.stringify(recipes));
  }

  async function createDataURL() {
    const imgEl = document.getElementById("recipe-picture");

    const fr = new FileReader();

    fr.onloadend = function () {
      const dataURL = fr.result;
      let url = dataURL;

      setImage(url);
    };
    fr.readAsDataURL(imgEl.files[0]);
  }

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
          <input
            type="text"
            className="form-control"
            id="recipe-name"
            onChange={(e) => setRecipeName(e.target.value)}
          ></input>
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
            onChange={(e) => setIngredients(e.target.value)}
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
            onChange={(e) => setInstructions(e.target.value)}
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
            onChange={createDataURL}
          />
        </div>
        <div id="new-recipe-buttons">
          {/* <AddRecipe /> */}

          <Button
            variant="primary"
            onClick={addRecipe}
            disabled={!recipeName || !instructions || !ingredients}
          >
            Add
          </Button>
          <Button variant="secondary" onClick={() => navigate(-1)}>
            Cancel
          </Button>
        </div>
      </form>
    </main>
  );
}
