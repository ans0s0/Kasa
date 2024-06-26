import React from 'react'
import { Outlet } from "react-router-dom"

import { Header } from './Header/Header.tsx'
import { Footer } from './Footer/Footer.tsx'

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
       <Footer />
    </>
  )
}