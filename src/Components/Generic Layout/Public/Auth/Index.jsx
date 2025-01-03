import React from 'react'
import Navbar from './Navbar/Index'
import Footer from './Footer/Index'
import { Outlet } from 'react-router-dom'

function AuthRootLayout() {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default AuthRootLayout