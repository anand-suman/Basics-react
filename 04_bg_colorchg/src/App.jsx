import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color , setColor] = useState("AntiqueWhite")

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'>
        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-black px-1 py-1 rounded-3xl'>
          <button onClick={() => setColor("Violet")}
          className='outline-none px-6 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Violet"}}
          >Violet</button>
          
          <button onClick={() => setColor("Indigo")}
          className='outline-none px-6 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Indigo"}}
          >Indigo</button>Blue

          <button onClick={() => setColor("Blue")}
          className='outline-none px-6 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Blue"}}
          >Blue</button>

          <button onClick={() => setColor("Green")}
          className='outline-none px-6 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Green"}}
          >Green</button>

          <button onClick={() => setColor("Yellow")}
          className='outline-none px-6 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Yellow"}}
          >Yellow</button>

          <button onClick={() => setColor("Orange")}
          className='outline-none px-6 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "Orange"}}
          >Orange</button>

          <button onClick={() => setColor("red")}
          className='outline-none px-6 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor: "red"}}
          >Red</button>


        </div>
      </div>
    </div>
    </>
  )
}

export default App
