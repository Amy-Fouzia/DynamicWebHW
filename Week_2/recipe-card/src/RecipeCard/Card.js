import React from 'react'
import './recipecard.css'
import {RECIPE} from './recipe-data'
import RecipeImg from './RecipeImg'
import RecipeInfo from './RecipeInfo'
import IngredientsList from './IngredientsList'
import InstructionsList from './InstructionsList'

export default function Card(props) {
    return (
        <div class='card'>
            <RecipeImg imgSrc={RECIPE.imgSrc} />
            <RecipeInfo title={RECIPE.title} desc={RECIPE.description} />
            <IngredientsList ingredients={RECIPE.ingredients} />
            <InstructionsList instructions={RECIPE.instructions} />
        </div>
    )
}