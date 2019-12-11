import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "b0ef6492";
  const APP_KEY = "8131ee9b177e6809a87e4b28d941e837";

  const [recipes, setRecipes] = useState([]); // Add an empty array, to later put in elements

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]); // Put counter in brackets if you want to update on counter change.

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json(); // Always use 'await' when using promises
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault(); // Stop page refresh
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe Search</h1>
      </header>

      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="e.g. Chicken, Banana, Turkey"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe // Taking it from the states and passing it unto the props into the Recipe file.
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            dietLabels={recipe.recipe.dietLabels}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
