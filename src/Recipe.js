import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, dietLabels, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <p>{dietLabels}</p>
      <img src={image} alt=""></img>
      <ol>
        {ingredients.map(ingredients => (
          <li>{ingredients.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;
