import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const changeHandler = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...initialFormData });
  };

  //console.log(formData);
  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor = "name">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={changeHandler}
                  value={formData.name}
                />
              </label>
            </td>
            <td>
              <label htmlFor = "cuisine">
                <input
                  type="text"
                  name="cuisine"
                  placeholder="Cuisine"
                  onChange={changeHandler}
                  value={formData.cuisine}
                  />
              </label>
            </td>
            <td>
              <label htmlFor = "photo">
                <input
                  type="text"
                  name="photo"
                  placeholder="URL"
                  onChange={changeHandler}
                  value={formData.photo}
                />
              </label>
            </td>
            <td>
              <label htmlFor = "ingredients">
                <textarea
                  name="ingredients"
                  onChange={changeHandler}
                  value={formData.ingredients}
                >
                  Ingredients
                </textarea>
              </label>
            </td>
            <td>
              <label htmlFor = "preparation">
                <textarea
                  name="preparation"
                  onChange={changeHandler}
                  value={formData.preparation}
                >
                  Preparation
                </textarea>
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;