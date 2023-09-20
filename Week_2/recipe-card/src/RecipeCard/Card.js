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
            <RecipeInfo title={RECIPE.title} desc={RECIPE.description} />
            <RecipeImg imgSrc={RECIPE.imgSrc} />
            <IngredientsList ingredients={RECIPE.ingredients} />
            <InstructionsList instructions={RECIPE.instructions} />
        </div>
    )
}