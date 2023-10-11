import React from 'react'
import { RECIPE } from './recipe-data'

export default function IngredientsList(props) {
    const {ingredients} = props

    return (
        <div>
            <h3>Ingredients</h3>
            <ul class='ing'>
                {RECIPE.ingredients.map((ingred, index) => (<li key={index}>{ingred}</li>))}
            </ul>
        </div>
    )
}