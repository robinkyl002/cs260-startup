import React, { use } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recipes.css";
import { useNavigate } from "react-router-dom";

export function UserRecipes() {
  const [userRecipes, setUserRecipes] = React.useState([]);

  React.useEffect(() => {
    const recipesText = localStorage.getItem("userRecipes");
    if (recipesText) {
      setUserRecipes(JSON.parse(recipesText));
    }
  }, []);

  const recipeCards = [];
  if (userRecipes.length) {
    for (const [i, recipe] of userRecipes.entries()) {
      recipeCards.push(
        <div className="col" key={i}>
          <div className="card">
            <img
              className="card-img-top my-recipe-images"
              src={recipe.imgUrl}
              alt={recipe.recipeName}
            />
            <div className="card-body">
              <h4 className="card-title">{recipe.recipeName}</h4>
              <ViewRecipe />
            </div>
          </div>
        </div>
      );
    }
  } else {
    recipeCards.push(
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Get started by adding a recipe!</h4>
            <AddRecipe />
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <h2>My Recipes</h2>
      <div
        id="user-recipes"
        className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-6"
      >
        {recipeCards}
      </div>
    </>
  );
}

function ViewRecipe() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/view");
  };

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      View Recipe
    </button>
  );
}

function AddRecipe() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/add");
  };

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Add a Recipe
    </button>
  );
}
