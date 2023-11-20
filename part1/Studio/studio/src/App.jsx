import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeDescription from './Components/Description'
import RecipeIngredients from './Components/Ingredients'
import RecipePhoto from './Components/Photos'

function App() {
  const [count, setCount] = useState(0)

 
  return (
    <>
      <div className="App">
        <div>
            <div className="recipePhotoBlock">
              <RecipePhoto/>
            </div>
            <RecipeDescription/>
            <RecipeIngredients/>
        </div>
      </div>
    </>
  )
}

export default App
