import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recipes.css";
import apiConfig from "./apiConfig";

export function Suggested() {
  const [suggested, setSuggested] = React.useState([]);
  // const [firstSuggested, setFirstSuggested] = React.useState([]);
  const [firstSuggestedName, setFirstSuggestedName] = React.useState("Loading");
  const [firstSuggestedLink, setFirstSuggestedLink] = React.useState("");
  const [secondSuggestedName, setSecondSuggestedName] =
    React.useState("Loading");
  const [secondSuggestedLink, setSecondSuggestedLink] = React.useState("");
  const suggestedRecipesArray = [
    {
      recipeName: "Beef Stew",
      link: "https://www.simplyrecipes.com/easy-beef-stew-recipe-6829610",
    },
    {
      recipeName: "Biscuits and Gravy",
      link: "https://sugarspunrun.com/sausage-gravy/",
    },
    {
      recipeName: "Chicken Curry",
      link: "https://www.allrecipes.com/recipe/46822/indian-chicken-curry-ii/",
    },
    {
      recipeName: "Crepes",
      link: "https://www.allrecipes.com/recipe/16383/basic-crepes/",
    },
    {
      recipeName: "Cajun Chicken Pasta",
      link: "https://natashaskitchen.com/creamy-cajun-chicken-pasta/",
    },
    {
      recipeName: "Chicken Alfredo",
      link: "https://bellyfull.net/chicken-alfredo-recipe/",
    },
    {
      recipeName: "Chicken Pot Pie",
      link: "https://tastesbetterfromscratch.com/chicken-pot-pie/",
    },
    {
      recipeName: "Farmer's Casserole",
      link: "https://www.allrecipes.com/recipe/22454/farmers-casserole/",
    },
    {
      recipeName: "Spaghetti",
      link: "https://www.inspiredtaste.net/38940/spaghetti-with-meat-sauce-recipe/",
    },
    {
      recipeName: "Ham Fried Rice",
      link: "https://tastesbetterfromscratch.com/ham-fried-rice/",
    },
    {
      recipeName: "Teriyaki Chicken",
      link: "https://www.cookingclassy.com/teriyaki-chicken/",
    },
  ];

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
      // const recipe = result.at(1);

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
      // const recipe = result.at(1);

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
    // const url = "https://themealdb.p.rapidapi.com/random.php";
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "x-rapidapi-key": apiConfig.key,
    //     "x-rapidapi-host": apiConfig.host,
    //   },
    // };

    // try {
    //   const response = await fetch(url, options);
    //   const result = await response.json();
    //   // const recipe = result.at(1);

    //   const recipe = {
    //     recipeName: result.meals.at(0).strMeal,
    //     imgURL: result.meals.at(0).strSource,
    //   };
    // } catch (error) {
    //   console.error(error);
    // }
    // const recipe1 = getRecipes();
    // console.log(recipe1);
    // setFirstSuggestedName(recipe1.recipeName);
    // setFirstSuggestedLink(recipe1.imgURL);
    // fetch("themealdb.p.rapidapi.com/")
    //   .then((response) => {
    //     response.text();
    //   })
    //   .then((htmlString) => {
    //     const parser = new DOMParser();
    //     const htmlDocument = parser.parseFromString(htmlString, "text/html");

    //     console.log(htmlDocument);

    //     const element = htmlDocument.querySelectorAll(body);

    //     console.log(element);
    //   });

    // setFirstSuggestedName(suggestedRecipesArray[index].recipeName);
    // setFirstSuggestedLink(suggestedRecipesArray[index].link);

    // let newIndex = Math.floor(
    //   Math.random() * (suggestedRecipesArray.length - 1)
    // );

    // setSecondSuggestedLink(suggestedRecipesArray[newIndex].link);
    // setSecondSuggestedName(suggestedRecipesArray[newIndex].recipeName);
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
