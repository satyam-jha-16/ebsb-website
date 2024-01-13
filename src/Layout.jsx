import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <>
    <Header/>
    {/* This work can also be done in app.jsx */}
    {/* Now here header and footer won't change only the outlet part will change due to Router usage */}
    <Outlet /> 
    <Footer/>
    </>
  )
}

export default Layout