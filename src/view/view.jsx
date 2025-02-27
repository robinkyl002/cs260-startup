import React from "react";
import { useLocation } from "react-router-dom";
import "./view.css";

export function View(props) {
  const [userRecipes, setUserRecipes] = React.useState([]);
  const location = useLocation();

  const recipeName = location.state.recipeId;

  function getRecipeDetailsLocal(recipe) {
    const recipesText = localStorage.getItem("userRecipes");

    if (recipesText) {
      setUserRecipes(JSON.parse(recipesText));
    }
  }

  return (
    <main id="recipe-view">
      <div id="recipe_image">
        <img id="current-recipe" alt={recipeName} src="/french-toast.jpg" />
      </div>
      <div id="recipe-text-elements">
        <h1>{recipeName}</h1>
        <div id="ingredients" className="recipe-details">
          <h3>Ingredients</h3>
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Cinnamon</li>
            <li>Vanilla</li>
          </ul>
        </div>
        <div id="instructions" className="recipe-details">
          <h3>Instructions</h3>
          <ol>
            <li>
              Mix together the eggs, cinnamon, and vanilla in a large, shallow
              bowl
            </li>
            <li>
              Take a piece of bread and coat both sides by placing it in the
              mix, then turning it over to coat the other side
            </li>
            <li>
              Cook in the pan until the toast is golden brown, and the egg
              mixture is no longer liquid
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}
