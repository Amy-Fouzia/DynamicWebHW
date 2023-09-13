import React from 'react'
import { RECIPE } from './recipe-data'

export default function InstructionsList(props) {
    const {instructions} = props

    return (
        <div>
            <h3>Instructions</h3>
            <ul>
                {RECIPE.instructions.map((instruc, index) => (<li key={index}>{instruc}</li>))}
            </ul>
        </div>
    )
}