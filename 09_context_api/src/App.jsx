import { useState } from 'react'

import './App.css'
import LogIn from './Componets/LogIn'
import Profile from './Componets/Profile'
import UsercontextProvider from './Context/UsercontextProvider'

function App() {
  

  return (
    <UsercontextProvider>
      <h1>Hello, Anand is Using the Context Api</h1>
      <LogIn/>
      <Profile/>

    </UsercontextProvider>
  )
}

export default App
