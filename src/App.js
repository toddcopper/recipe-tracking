import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const createRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe])
   // console.log(recipes);
  }

  const deleteRecipe = (recipeToDelete) => {
    const updatedRecipes = recipes.filter((recipeObj) => {
      return recipeObj !== recipeToDelete;
    });
    setRecipes(updatedRecipes);
  };



  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  return (
    <div className="App">
      <header>
        <h1 className="heading">Delicious Food Recipes</h1>
      </header>
      <RecipeList deleteHandler={deleteRecipe} recipes={recipes}/>
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;