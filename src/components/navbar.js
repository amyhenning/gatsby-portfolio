import React from 'react'
import './navbar.css'
import Icofont from 'react-icofont'

class NavBar extends React.Component {
  static defaultProps = {
    links: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Blog', path: '/blog' },
      { name: 'Work', path: '/work' },
      { name: 'Contact', path: '/contact' }
    ]
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
  }

  generateLinks(links) {
    let linkList = [];
    for (let i = 0; i < links.length; i++) {
      linkList.push(<li className={this.state.activeClass}><a href={links[i].path}>{links[i].name}</a></li>);
    }
    return linkList
  }

  render() {
    return (
      <nav className="nav">
        <ul className="menu">
          <li className="logo"><a href="/"><h1>Amy Henning</h1></a></li>
          {this.generateLinks(this.props.links)}
          <li className="toggle"><Icofont icon="icofont-navigation-menu" className="hamburger" onClick={this.handleClick} /></li>
        </ul>
      </nav>
    )
  }
}

export default NavBar;
