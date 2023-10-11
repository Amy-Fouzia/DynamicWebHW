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
            <div class='cardtext'>
                <div class='row'>
                    <RecipeInfo title={RECIPE.title} />
                </div>
                <div class='row'>
                    <div class="column">
                        <IngredientsList ingredients={RECIPE.ingredients} />
                    </div>
                    <div class="column">
                        <InstructionsList instructions={RECIPE.instructions} />
                    </div>
                </div>
            </div>
        </div>
    )
}