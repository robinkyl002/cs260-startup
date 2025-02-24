import React, { use } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recipes.css";
import { useNavigate } from "react-router-dom";
import { Suggested } from "./suggested";
import { UserRecipes } from "./userRecipes";
import { Activity } from "./activity";

export function Recipes() {
  const [userRecipes, setUserRecipes] = React.useState([]);

  React.useEffect(() => {
    const recipesText = localStorage.getItem("userRecipes");
    if (recipesText) {
      setUserRecipes(JSON.parse(recipesText));
    }
  }, []);

  const recipeCards = [];
  if (userRecipes.length) {
  } else {
  }

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
      <UserRecipes />

      <Suggested />
    </main>
  );
}
