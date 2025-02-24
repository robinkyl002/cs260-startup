import React, { use } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recipes.css";
import { useNavigate } from "react-router-dom";
import { Suggested } from "./suggested";
import { UserRecipes } from "./userRecipes";
import { Activity } from "./activity";

export function Recipes(props) {
  const userName = props.userName;
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
      <Activity userName={userName} />
      <UserRecipes />
      <Suggested />
    </main>
  );
}
