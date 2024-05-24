import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
  // const name= "Anand";
  // const photo = "maine khicha"
  let myObj={
    username: "Anand"
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-6'>Teilwind Test</h1>
    <Card username="The Coldest Sunset"/>
    <Card username="The Lovly Sunset" />
    </>
  )
}

export default App
