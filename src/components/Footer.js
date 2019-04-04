import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/ika-logo.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">

        <div className="footer-logo-container">
          <img
            src={logo}
            alt="Ika Editions"
            style={{ width: '8.5em', height: '7em' }}
          />
        </div>

        <div className="footer-info">

          {/* <div className="footer-container"> */}

              <div className="footer-columns">

                <div className="footer-column">
                  {/* <section className="menu">
                      <ul className="footer-links">
                        <li><Link activeStyle={{ color: 'white' }} to="/" className="navbar-item">Home</Link></li>
                        <li><Link activeStyle={{ color: 'white' }} className="navbar-item" to="/about">About</Link></li>
                        <li><Link activeStyle={{ color: 'white' }} className="navbar-item" to="/news">News</Link></li>
                        <li><Link activeStyle={{ color: 'white' }} className="navbar-item" to="/products">Products</Link></li>
                        <li><Link activeStyle={{ color: 'white' }} className="navbar-item" to="/contact/examples">Form Examples</Link></li>
                      <li><a
                                className="navbar-item"
                                href="/admin/"
                                target="_blank"
                                rel="noopener noreferrer">
                                  Admin
                              </a>
                          </li>
                      </ul>
                  </section> */}
                </div>

                <div className="footer-column">
                  <section>
                    <ul className="footer-links">
                      <li>
                          <Link className="navbar-item" to="/">
                            Home
                          </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/blog">
                          Latest Stories
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/about">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/news">
                          News
                        </Link>
                      </li>
                    </ul>
                  </section>
                </div>

                <div className="footer-column social">
                  <a title="facebook" href="https://facebook.com/ikaeditions" target="_blank" rel="noopener noreferrer">
                    <img 
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  <a title="instagram" href="https://instagram.com/ika_editions" target="_blank" rel="noopener noreferrer">
                    <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                  {/* <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a> */}
                {/* <a title="vimeo" href="https://vimeo.com">
                  <img
                  src={vimeo}
                  alt="Vimeo"
                  style={{ width: '1em', height: '1em' }}
                  />
                </a> */}
                </div>

              {/* </div> */}

            </div>

        </div>

      </footer>
    )
  }
}

export default Footer
