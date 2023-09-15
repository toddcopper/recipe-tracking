import React from "react";

function Recipe({ recipes, deleteHandler }) {
  const formattedRecipes = recipes.map((recipeObj) => {
    return (
      <tr key={recipeObj.name}>
        <td>{recipeObj.name} </td>
        <td>{recipeObj.cuisine}</td>
        <td>
          <img src={recipeObj.photo} />
        </td>
        <td className="content_td"><p>{(recipeObj.ingredients)}</p></td>
        <td className="content_td"><p>{(recipeObj.preparation)}</p></td>
        <td>
          {" "}
          <button
            type="delete"
            name="delete"
            onClick={() => deleteHandler(recipeObj)}
          >
            DELETE
          </button>
        </td>
      </tr>
    );
  });
  return formattedRecipes;
}

export default Recipe;