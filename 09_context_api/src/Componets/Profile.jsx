import React, { useContext } from 'react'
import Usercontext from '../Context/Usercontext'

function Profile() {
    const {user} = useContext(Usercontext)

    if(!user) return <div>Plase Login</div>

    return <div>WelCome {user.username}</div>
        
    
}

export default Profile
