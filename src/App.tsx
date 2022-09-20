import { useState } from 'react'
import './App.css'
import { Signin } from './Pages/SignIn'
import { SignOut } from './Pages/SignOut'

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
     <SignOut/>
     <Signin/>
    </div>
  )
}

export default App
