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
    // let count = 0;
    let line = "";

    for (let i = 0; i < input.length; i++) {
      if (input.at(i) == "\n") {
        // output += "<br />";
        output.push(<li style={{ listStyleType: "none" }}>{line}</li>);

        line = "";
        // count++;
      } else {
        line += input.at(i);
      }
    }
    // console.log(count);
    return output;
  }

  let formattedIngredients = addNewLines(ingredients);

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
          {/* <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Cinnamon</li>
            <li>Vanilla</li>
          </ul> */}
        </div>
        <div id="instructions" className="recipe-details">
          <h3>Instructions</h3>
          <p>{instructions}</p>
          {/* <ol>
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
          </ol> */}
        </div>
      </div>
    </main>
  );
}
