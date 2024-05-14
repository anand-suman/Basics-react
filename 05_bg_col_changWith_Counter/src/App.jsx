import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5)
  const [color,setColor] = useState('CadetBlue')

  const Add_num = ()=>{
    if(count>=0 && count<=6)
      {
        setCount(count + 1)
      }
  }

  const Remove_num = ()=>{
    if(count>=1 && count<=7 )
      {
        setCount(count - 1)
      }
  }

  useEffect(()=>{
    changeIn_color();
  },[count]);

  const changeIn_color=()=>{
    switch (count) {
      case 1:
        // console.log(setColor())
        // console.log(count)
        setColor('red')
        break;

      case 2:
        setColor('orange')
        break;

      case 3:
        setColor('yellow')
        break;

      case 4:
        setColor('green')
        break;

      case 5:
        setColor('blue')
        break;

      case 6:
        setColor('indigo')
        break;

      case 7:
        setColor('violet')
        break;
    
      default:
        setColor('CadetBlue');
        break;
    }
  }
  

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <h1 className='flex flex-wrap justify-center shadow-lg bg-white px-1 py-1 rounded-3xl text-black'>Marging the two project Count and backgroundChanger</h1>
      <h3 className='flex flex-wrap justify-center shadow-lg bg-white py-3 m-8 rounded-full text-center text-black'>Just add and remove the number for Change in background color as the Rainbow color</h3>
      <button onClick={Add_num} className='m-3'>Add by One{count}</button>
      <br />
      <button onClick={Remove_num} className='m-2'>Remove by One{count}</button>
      

    </div>
    </>
  )
}

export default App
