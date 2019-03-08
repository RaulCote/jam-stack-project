import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/ika-logo.png'

const Navbar = class extends React.Component {
  // componentDidMount() {
  //   // Get all "navbar-burger" elements
  //   const $navbarBurgers = Array.prototype.slice.call(
  //     document.querySelectorAll('.navbar-burger'),
  //     0
  //   )
  //   // Check if there are any navbar burgers
  //   if ($navbarBurgers.length > 0) {
  //     // Add a click event on each of them
  //     $navbarBurgers.forEach(el => {
  //       el.addEventListener('click', () => {
  //         // Get the target from the "data-target" attribute
  //         const target = el.dataset.target
  //         const $target = document.getElementById(target)

  //         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  //         el.classList.toggle('is-active')
  //         $target.classList.toggle('is-active')
  //       })
  //     })
  //   }     
  // }  
  
  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="navbar-container">
          <div className="navbar-brand">
            <Link to="/" className="logo-navbar-container" title="Logo">
              <img src={logo} alt="Ika" className="logo-navbar" />
            </Link>
            {/* Hamburger menu */}
            {/* <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div> */}
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              <Link 
                className='navbar-item'
                to="/about" 
                activeStyle={{color: 'cyan', fontWeight: '450' }}>
                 About
              </Link>
              <Link 
                className='navbar-item' 
                to="/products" 
                activeStyle={{color: 'cyan', fontWeight: '450'}}>
                Editions
              </Link>
              <Link 
                className='navbar-item' 
                to="/blog" 
                activeStyle={{color: 'cyan', fontWeight: '450'}}>
                Blog
              </Link>
              <Link 
                className='navbar-item' 
                to="/contact" 
                activeStyle={{color: 'cyan', fontWeight: '450'}}>
                Contact
              </Link>
              {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link> */}
            </div>
            {/* <div className="navbar-end"> */}
              {/* <a
                className="navbar-item"
                href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
              > */}
                {/* <span className="icon">
                  <img src={github} alt="Github" />
                </span> */}
              {/* </a> */}
            {/* </div> */}
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
