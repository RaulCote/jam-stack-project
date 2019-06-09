import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/ika-logo.png'

const Navbar = class extends React.Component {

  
  toggleNavBar = () => {
    const navMenu = document.getElementById('navMenu');
    const body = document.querySelector('body');

    if (navMenu.className === 'navbar-menu') {
      navMenu.className += ' responsive';
      body.setAttribute('style', 'overflow-y: hidden') 
    } else {
      navMenu.className = 'navbar-menu';
      body.setAttribute('style', 'overflow-y: scroll')
    }
  }

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation">

        <div className="navbar-container">
          {/* <div className="navbar-brand">
            <Link to="/" className="logo-navbar-container" title="Logo">
              <img src={logo} alt="Ika" className="logo-navbar" />
            </Link>
          </div> */}

          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              <Link to="/" className="logo-navbar-container" title="Logo" onClick={() => this.toggleNavBar()}>
                <img src={logo} alt="Ika" className="logo-navbar" />
              </Link>
              <Link 
                className='navbar-item'
                to="/about" 
                onClick={() => this.toggleNavBar()}
                activeStyle={{ color: 'white' }}>
                 About
              </Link>
              <Link 
                className='navbar-item' 
                to="/tags/editions" 
                onClick={() => this.toggleNavBar()}
                activeStyle={{ color: 'white' }}>
                Editions
              </Link>
              {/* <Link 
                className='navbar-item' 
                to="/blog" 
                activeStyle={{ color: 'white' }}>
                Blog
              </Link> */}
              <Link
                className='navbar-item'
                to={'/videos'}
                onClick={() => this.toggleNavBar()}
                activeStyle={{ color: 'white' }}>
                Videos
              </Link>
              <Link 
                className='navbar-item' 
                to="/news" 
                onClick={() => this.toggleNavBar()}
                activeStyle={{ color: 'white' }}>
                News
              </Link>
              <a 
                href="javascript:void(0);" 
                className="icon navbar-item burguer" 
                onClick={() => this.toggleNavBar()}>
                {/* <i>X</i> */}
                <div className={'burguer-bar'} />
                {/* <div className={'burguer-bar'} /> */}
                <div className={'burguer-bar'} />
              </a>
            </div>
          </div>
          
        </div>
      </nav>
    )
  }
}

export default Navbar
