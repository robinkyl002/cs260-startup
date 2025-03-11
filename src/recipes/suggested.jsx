import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recipes.css";
import apiConfig from "./apiConfig";

export function Suggested() {
  const [firstSuggestedName, setFirstSuggestedName] = React.useState("Loading");
  const [firstSuggestedLink, setFirstSuggestedLink] = React.useState("");
  const [secondSuggestedName, setSecondSuggestedName] =
    React.useState("Loading");
  const [secondSuggestedLink, setSecondSuggestedLink] = React.useState("");

  async function getRecipes() {
    const url = "https://themealdb.p.rapidapi.com/random.php";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": apiConfig.key,
        "x-rapidapi-host": apiConfig.host,
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      const recipe = {
        recipeName: result.meals.at(0).strMeal,
        imgURL: result.meals.at(0).strSource,
      };

      setFirstSuggestedName(recipe.recipeName);
      setFirstSuggestedLink(recipe.imgURL);
    } catch (error) {
      console.error(error);
    }

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      const recipe2 = {
        recipeName: result.meals.at(0).strMeal,
        imgURL: result.meals.at(0).strSource,
      };

      setSecondSuggestedName(recipe2.recipeName);
      setSecondSuggestedLink(recipe2.imgURL);
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      <h2>Suggested Recipes</h2>
      <div id="suggested-recipes" className="row row-cols-2 g-2">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{firstSuggestedName}</h4>
              <Button variant="primary" href={firstSuggestedLink}>
                View Recipe
              </Button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{secondSuggestedName}</h4>
              <Button variant="primary" href={secondSuggestedLink}>
                View Recipe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
