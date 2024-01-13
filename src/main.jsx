import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Mission from './components/Mission/Mission.jsx'
import Membership from './components/Membership/Membership.jsx'
import Activities from './components/Activites/Activities.jsx'
import Media from './components/Media/Media.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>} > 
      <Route path='' element={<Home/>} />
      <Route path='/about' element ={<About/>} />
      <Route path='/mission' element={<Mission/>} />
      <Route path='/activities' element={<Activities/>} />
      <Route path='/membership' element={<Membership/>} />
      <Route path='/media' element={<Media/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
    router={router}
     />
  </React.StrictMode>,
)
