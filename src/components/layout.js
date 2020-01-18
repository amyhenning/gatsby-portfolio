import React from "react"
import styles from './layout.css'
import Icofont from 'react-icofont'

let showMenu = false
let activeClass



function handleClick(e) {
  e.preventDefault();
  showMenu = !showMenu;
  activeClass = showMenu == true ? 'active' : ''
  console.log(showMenu);
  console.log(activeClass);
}

export default ({children}) => (
  <div id="layout-container">
    <nav className="nav">
      <ul className="menu">
        <li className="logo"><a href="/"><h1>Amy Henning</h1></a></li>
        <li className="item"><a href="/">Home</a></li>
        <li className="item"><a href="/about">About</a></li>
        <li className="item"><a href="/blog">Blog</a></li>
        <li className="item"><a href="/work">Work</a></li>
        <li className="item last"><a href="/contact">Contact</a></li>
        <li className="toggle"><Icofont icon="icofont-navigation-menu" className="hamburger" onClick={handleClick} /></li>
      </ul>
    </nav>

    {children}

    <footer className="footer">
      Coded by Amy with Gatsby
    </footer>
  </div>
)