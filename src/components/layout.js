import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./Layout.scss"

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default layout
