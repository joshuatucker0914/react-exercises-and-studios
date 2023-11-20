import React from "react";
import styles from './Description.module.css';

const ingredients = 
["12 slices bread toasted",
 "2 tablespoons butter", 
 "4 tablespoons mayonnaise", 
 "8 ounces thin sliced deli turkey breast",
 "1 large tomato thinly sliced", 
 "salt", 
 "4 slices cheddar deli style", 
 "1/2 lb. thin sliced ham", 
 "8 slices bacon crispy cooked", 
 "4 slices leaf lettuce or iceberg lettuce"]

const RecipeIngredients = () => {
    return(
        <div>
            <h3>Recipe Ingredients</h3>
                <ul className = {styles.ingredientList}>
                    {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                    ))}
                </ul>
        </div>
    )
}

export default RecipeIngredients;