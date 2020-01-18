import React from 'react'
import './navbar.css'
import Icofont from 'react-icofont'




class NavBar extends React.Component {

  static defaultProps = {
    // insert link names, hrefs, and classnames here
  };

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      activeClass: 'item',
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(e) {
    let menuStatus = !this.state.showMenu;
    let activeClass = menuStatus === true ? 'item active' : 'item'
    this.setState(st => {
      return {
        showMenu: menuStatus,
        activeClass: activeClass,
      }
    });
    console.log(menuStatus);
    console.log(activeClass);
  }

  render() {
    return (
      <nav className="nav">
        <ul className="menu">
          <li className="logo"><a href="/"><h1>Amy Henning</h1></a></li>
          <li className={this.state.activeClass}><a href="/">Home</a></li>
          <li className={this.state.activeClass}><a href="/about">About</a></li>
          <li className={this.state.activeClass}><a href="/blog">Blog</a></li>
          <li className={this.state.activeClass}><a href="/work">Work</a></li>
          <li className={this.state.activeClass}><a href="/contact">Contact</a></li>
          <li className="toggle"><Icofont icon="icofont-navigation-menu" className="hamburger" onClick={this.handleClick} /></li>
        </ul>
      </nav>
    )
  }
}

export default NavBar;