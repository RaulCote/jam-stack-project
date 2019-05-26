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
          <Link className="navbar-item" to="/">
            <img
              src={logo}
              alt="Ika Editions"
              style={{ width: '8.5em', height: '7em' }}
            />
          </Link>
        </div>

        <div className="footer-info">
          <div className="footer-columns">
            {/* works as a separator to center the other column */}
            <div className="footer-column" />
          
            <div className="footer-column">
              <section>
                <ul className="footer-links">
                  <li>
                    <Link className="navbar-item" to="/tags/editions">
                      Editions
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
                  <li>
                    <Link className="navbar-item" to="/videos">
                      Videos
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
            </div>
          </div>
        </div>

      </footer>
    )
  }
}

export default Footer
