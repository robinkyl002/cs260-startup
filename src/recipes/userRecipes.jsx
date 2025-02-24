import React, { use } from "react";
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
  } else {
    recipeCards.push(
      <div className="col">
        <div className="card">
          <img className="card-img-top my-recipe-images" alt="no recipe"></img>
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
        <div className="col">
          <div className="card">
            <img
              src="/french-toast.jpg"
              className="card-img-top my-recipe-images"
              alt="french toast"
            />
            <div className="card-body">
              <h4 className="card-title">French Toast</h4>
              <ViewRecipe />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="/apple-fritter.jpg"
              className="card-img-top my-recipe-images"
              alt="apple fritter"
            />
            <div className="card-body">
              <h4 className="card-title">Apple Fritter</h4>
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="/chocolate-chip-cookies.jpeg"
              className="card-img-top my-recipe-images"
              alt="chocolate chip cookies"
            />
            <div className="card-body">
              <h4 className="card-title">Chocolate Chip Cookies</h4>
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="/shepherds-pie.jpg"
              className="card-img-top my-recipe-images"
              alt="Shepherd's Pie"
            />
            <div className="card-body">
              <h4 className="card-title">Shepherd's Pie</h4>
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="/Spaghetti.jpg"
              className="card-img-top my-recipe-images"
              alt="spaghetti"
            />
            <div className="card-body">
              <h4 className="card-title">Spaghetti</h4>
              <button className="btn btn-primary">View Recipe</button>
            </div>
          </div>
        </div>
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
