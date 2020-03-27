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

  };

  generateLinks(links) {
    let linkList = [];
    for (let i = 0; i < links.length; i++) {
      linkList.push(<li><a href={links[i].path}>{links[i].name}</a></li>);
    }
    return linkList
  }

  render() {
    return (
      <nav className="nav">
        <div id="nav-logo">
          <a className="logo" href="/"><h1>Amy Henning</h1></a>
        </div>

        <div id="nav-links">
          <ul>
            {this.generateLinks(this.props.links)}
          </ul>
        </div>

      </nav>
    )
  }
}

export default NavBar;
