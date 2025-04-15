import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./new.css";

export function New() {
  const [recipeName, setRecipeName] = React.useState("");
  const [ingredients, setIngredients] = React.useState("");
  const [instructions, setInstructions] = React.useState("");
  const [image, setImage] = React.useState("/public/default-photo.jpg");

  const username = localStorage.getItem("userName");

  const navigate = useNavigate();

  async function addRecipe() {
    const newRecipe = {
      username: username,
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

  async function uploadFile(fileInput) {
    const file = fileInput.target.files[0];

    // check to see that it is actually uploaded
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        // Save the correct file path
        setImage(data.file);
      } else {
        alert(data.message);
      }
    }
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
            // onChange={createDataURL}
            onChange={uploadFile}
          />
        </div>
        <div id="new-recipe-buttons">
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
