import React from 'react'
import RecipeCard from './RecipeCard'
import Header from './RecipeCard/Header.js'
import {RECIPE_LIST} from './RecipeCard/recipe-data'

function App() {
  return (
    <div>
      <Header></Header>
      <br></br>
      <br></br>
      {RECIPE_LIST.map((recipe, index) => (
        <RecipeCard recipe={recipe} key={index} />
      ))}
    </div>
  )
}

export default App
