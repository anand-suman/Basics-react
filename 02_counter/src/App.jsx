import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
 
  let counting = 7;
  const [count, setCount] = useState(counting);
  const [errorMessage, setErrorMessage] = useState('');


  const Add_num = () => {
    //console.log("add wala chal rha ahi" , count)
    if(count >= 20)
    {
      setErrorMessage("Max limit reached");
    }
    else{
      setCount(count+1);
      setErrorMessage('');
      
    }
  }
  const Remove_num = () => {
    //console.log("Remove wala chal rha ahi" , count)
    if(count <= 0)
    {
      setErrorMessage("Min limit reached");
    }
    else{
      setCount(count - 1);
      setErrorMessage('');
    }
  }

  //console.log("Error Message:", errorMessage); // Log error message to console for debugging

  return (
    <>
      
      <h1>1st project from React with vite</h1>
      <h3>just Add and Remove the Number</h3>
      <button onClick={Add_num}> Add by 0ne {count}</button>
      <br />
      <button onClick={Remove_num}> Remove by 0ne {count}</button>
      <p>Here the another check {count}</p>
    </>
  )
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   let counting = 7;
//   const [count, setCount] = useState(counting);
//   const [errorMessage, setErrorMessage] = useState('');

//   const Add_num = () => {
//     if(count >= 20) {
//       setErrorMessage("Max limit reached");
//     } else {
//       setCount(count + 1);
//       setErrorMessage('');
//     }
//   }

//   const Remove_num = () => {
//     if(count <= 0) {
//       setErrorMessage("Min limit reached");
//     } else {
//       setCount(count - 1);
//       setErrorMessage('');
//     }
//   }

//   console.log("Error Message:", errorMessage); // Log error message to console for debugging

//   return (
//     <>
//       <h1>1st project from React with vite</h1>
//       <h3>just Add and Remove the Number</h3>
//       <button onClick={Add_num}> Add by 0ne {count}</button>
//       <br />
//       <button onClick={Remove_num}> Remove by 0ne {count}</button>
//       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//       <p>Here's another check: {count}</p>
//     </>
//   )
// }

// export default App

