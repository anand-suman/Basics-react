import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Home from './componets/Home/Home.jsx'
import About from './componets/About/About.jsx'
import Contact from './componets/Contact/Contact.jsx'
import User from './User/User.jsx'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Github, {githubInfoLoader} from './componets/Github/Github.jsx'


const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userid' element={<User />}/>
      <Route
        loader = {githubInfoLoader}
        path='github'
        element={<Github/>}
      />

    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
