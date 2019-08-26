import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/ika-logo.png'

const Navbar = class extends React.Component {
  
  toggleNavBar = (e) => {
    e.preventDefault();

    const navMenu = document.getElementById('navMenu');
    const body = document.querySelector('body');
    const logoLink = document.getElementById('logoLink');

    if (navMenu.className === 'navbar-menu') {
      navMenu.className += ' responsive';
      body.style = 'overflow-y: hidden';
      logoLink.style = 'width: 50%';
    } else {
      navMenu.className = 'navbar-menu';
      body.style = 'overflow-y: scroll';
      logoLink.style = '';
    }
  };

  closeNavBar = () => {
    const navMenu = document.getElementById('navMenu');
    const body = document.querySelector('body');
    const logoLink = document.getElementById('logoLink');

    navMenu.className = 'navbar-menu';
    body.style = 'overflow-y: scroll';
    logoLink.style = '';
  };

  render() {
    return (
      <nav
        className={'navbar'}
        role={'navigation'}
        aria-label={'main-navigation'}>

        <div className={'navbar-container'}>

          <div id={'navMenu'} className={'navbar-menu'}>
            <div className={'navbar-start'}>
              <Link 
                to={'/'}
                id={'logoLink'}
                className={'logo-navbar-container'} 
                title={'Logo'} 
                onClick={() => this.closeNavBar()}>
                <img src={logo} alt={'Ika'} className={'logo-navbar'} />
              </Link>
              <Link 
                className={'navbar-item navbar-links'}
                to={'/about'} 
                onClick={() => this.closeNavBar()}
                activeStyle={{ color: 'white' }}>
                 About
              </Link>
              <Link 
                className={'navbar-item navbar-links'} 
                to={'/tags/editions'} 
                onClick={() => this.closeNavBar()}
                activeStyle={{ color: 'white' }}>
                Editions
              </Link>
              <Link
                className={'navbar-item navbar-links'}
                to={'/videos'}
                onClick={() => this.closeNavBar()}
                activeStyle={{ color: 'white' }}>
                Videos
              </Link>
              <Link 
                className={'navbar-item navbar-links'} 
                to={'/news'} 
                onClick={() => this.closeNavBar()}
                activeStyle={{ color: 'white' }}>
                News
              </Link>
              <Link 
                className={'navbar-item navbar-links'} 
                to={'/shop'} 
                onClick={() => this.closeNavBar()}
                activeStyle={{ color: 'white' }}>
                Shop
              </Link>
              <Link 
                className={'navbar-item navbar-links'} 
                to={'/tags/press'} 
                onClick={() => this.closeNavBar()}
                activeStyle={{ color: 'white' }}>
                Press
              </Link>
              <a 
                href={'true'}
                className={'icon navbar-item burguer'}
                onClick={(e) => this.toggleNavBar(e)}>
                <div className={'burguer-bar'} />
                <div className={'burguer-bar'} />
              </a>
            </div>
          </div>
          
        </div>
      </nav>
    )
  };
};

export default Navbar;
