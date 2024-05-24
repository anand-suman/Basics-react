import { useEffect, useState } from 'react'

import { ThemeProvider } from './Context/them'
import ThemeBtn from './Componet/ThemeBtn'
import Card from './Componet/Card'


function App() {
 
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
   
      <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
      <h1 className='flax bg-orange-500 rounded-lg px-3 py-3'>Hello, Anand this is Your 2nd Context project</h1>
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
    
  )
}

export default App
