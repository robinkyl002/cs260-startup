import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recipes.css";
import { data, useNavigate } from "react-router-dom";

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

  React.useEffect(() => {
    let index = Math.floor(Math.random() * (suggestedRecipesArray.length - 1));

    fetch("www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        response.text();
      })
      .then((text) => {
        console.log(text);
      });

    setFirstSuggestedName(suggestedRecipesArray[index].recipeName);
    setFirstSuggestedLink(suggestedRecipesArray[index].link);

    let newIndex = Math.floor(
      Math.random() * (suggestedRecipesArray.length - 1)
    );
    while (newIndex === index) {
      newIndex = Math.floor(Math.random() * (suggestedRecipesArray.length - 1));
    }

    setSecondSuggestedLink(suggestedRecipesArray[newIndex].link);
    setSecondSuggestedName(suggestedRecipesArray[newIndex].recipeName);
  }, []);

  // function createCards() {
  //   const cards = [];

  //   for (const [i, item] of suggested) {
  //     cards.push(
  //       <div className="col">
  //         <div className="card">
  //           <div className="card-body">
  //             <h4 className="card-title">{item.recipeName}</h4>
  //             <Button variant="primary" href={item.link}>
  //               View Recipe
  //             </Button>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }

  //   console.log(cards);
  //   return cards;
  // }

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
