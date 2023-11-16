import { useState } from 'react'
import './App.css'
import HobbyIntroduction from './components/Introduction';
import MyProjects from './components/Projects';
import HobbyIntroductions from './components2/Introduction';
import MyProjects2 from './components2/Projects';

function App() {

  return (
    <>
      <div className="App">
	        <h1>My Hobby: Music Production</h1>
          <HobbyIntroductions/>
          <MyProjects2/>
      </div>
    </>
  )
}

export default App
