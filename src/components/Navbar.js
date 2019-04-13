import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/ika-logo.png'

const Navbar = class extends React.Component {
  
  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation">

        <div className="navbar-container">
          <div className="navbar-brand">
            <Link to="/" className="logo-navbar-container" title="Logo">
              <img src={logo} alt="Ika" className="logo-navbar" />
            </Link>
          </div>

          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              <Link 
                className='navbar-item'
                to="/about" 
                activeStyle={{ color: 'white' }}>
                 About
              </Link>
              <Link 
                className='navbar-item' 
                to="/tags/editions" 
                activeStyle={{ color: 'white' }}>
                Editions
              </Link>
              <Link 
                className='navbar-item' 
                to="/blog" 
                activeStyle={{ color: 'white' }}>
                Blog
              </Link>
              <Link 
                className='navbar-item' 
                to="/news" 
                activeStyle={{ color: 'white' }}>
                News
              </Link>
            </div>
          </div>
          
        </div>
      </nav>
    )
  }
}

export default Navbar
