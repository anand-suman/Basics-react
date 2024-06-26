import React from 'react'
import { useState, useContext } from 'react'
import Usercontext from '../Context/Usercontext'

function LogIn() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(Usercontext)

    const handalevent = (e)=>{
        e.preventDefault();
        setUser({username,password})
    }



    return (

        <div>
            <h2>LogIn</h2>
            <input type='text' 
            placeholder='username' 
            value={username} 
            onChange={(e)=> setUsername(e.target.value)}/>
            
            <br />
            <input type='text' 
            placeholder='password' 
            value={password} 
            onChange={(e)=> setPassword(e.target.value)}/>
            <br />
            <button onClick={handalevent}>Submit</button>
        </div>
    )
}

export default LogIn
