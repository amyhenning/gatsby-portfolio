import React from "react"
import styles from './layout.css'
import NavBar from './navbar.js'

export default ({children}) => (
  <div id="layout-container">
    <NavBar />

    {children}

    <footer className="footer">
      Coded by Amy with Gatsby
    </footer>
  </div>
)