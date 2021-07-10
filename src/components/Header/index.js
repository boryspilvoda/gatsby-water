import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Nav from "../Nav"
import MobileNav from "../MobileNav"

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-20 bg-white shadow-md">
      <div className="max-w-7xl mx-auto">
        <Nav />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
