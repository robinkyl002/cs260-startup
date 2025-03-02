import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recipes.css";
import { useNavigate } from "react-router-dom";

export function Suggested() {
  //   const [suggested, setSuggested] = React.useState([]);
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
    // "Creme Brulee",
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
    // "Panko Sesame Chicken",
    // "Swissburgers",
  ];

  React.useEffect(() => {
    let temp;
    let tempArray = [];
    let index = 0;

    // for (let i = 0; i < 2; i++) {
    index = Math.floor(Math.random() * (suggestedRecipesArray.length - 1));
    temp = suggestedRecipesArray.at(index);

    setFirstSuggestedName(temp.recipeName);
    setFirstSuggestedLink(temp.link);

    tempArray = suggestedRecipesArray;
    tempArray.splice(index, 1);

    temp = tempArray.at(
      Math.floor(Math.random() * (suggestedRecipesArray.length - 1))
    );

    setSecondSuggestedName(temp.recipeName);
    setSecondSuggestedLink(temp.link);
  }, []);

  function createCards() {
    const cards = [];

    for (const [i, item] of suggested) {
      cards.push(
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{item.recipeName}</h4>
              <Button variant="primary" href={item.link}>
                View Recipe
              </Button>
            </div>
          </div>
        </div>
      );
    }

    console.log(cards);
    return cards;
  }

  return (
    <>
      <h2>Suggested Recipes</h2>
      <div id="suggested-recipes" className="row row-cols-2 g-2">
        {/* {createCards()} */}
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
              <button className="btn btn-primary" href={secondSuggestedLink}>
                View Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
