import React from "react";
import { useLocation } from "react-router-dom";
import "./view.css";

export function View(props) {
  let userRecipes = [];
  const [imgURL, setImgURL] = React.useState(
    "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
  );
  const [ingredients, setIngredients] = React.useState([]);
  const [instructions, setInstructions] = React.useState([]);
  const location = useLocation();

  const recipeName = location.state.recipeId;

  function getRecipeDetailsLocal(recipeName) {
    const recipesText = localStorage.getItem("userRecipes");

    if (recipesText) {
      userRecipes = JSON.parse(recipesText);
      // console.log(userRecipes);
    }

    // console.log(userRecipes[0]);
    let found = false;
    for (const [i, recipe] of userRecipes.entries()) {
      if (recipe.recipeName === recipeName) {
        found = true;

        setImgURL(recipe.imgUrl);
        setIngredients(addNewLines(recipe.ingredients));
        setInstructions(addNewLines(recipe.instructions));

        break;
      }
    }
  }

  React.useEffect(() => {
    getRecipeDetailsLocal(recipeName);
  }, []);

  function addNewLines(input) {
    const output = [];
    let line = "";

    for (let i = 0; i < input.length; i++) {
      if (input.at(i) == "\n") {
        output.push(<li style={{ listStyleType: "none" }}>{line}</li>);

        line = "";
      } else {
        line += input.at(i);

        if (i === input.length - 1) {
          output.push(<li style={{ listStyleType: "none" }}>{line}</li>);
        }
      }
    }
    return output;
  }

  return (
    <main id="recipe-view">
      <div id="recipe-image">
        <img id="current-recipe" alt={recipeName} src={imgURL} />
      </div>
      <div id="recipe-text-elements">
        <h1>{recipeName}</h1>
        <div id="ingredients" className="recipe-details">
          <h3>Ingredients</h3>
          <ul>{ingredients}</ul>
        </div>
        <div id="instructions" className="recipe-details">
          <h3>Instructions</h3>
          <p>{instructions}</p>
        </div>
      </div>
    </main>
  );
}
