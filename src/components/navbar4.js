import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar4.css'

const Navbar4 = (props) => {
  return (
    <header className={`navbar4-container ${props.rootClassName} `}>
      <header data-thq="thq-navbar" className="navbar4-navbar-interactive">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar4-image1"
        />
        <link
          to="/"
          className="navbar4-action1 thq-link thq-body-small"
        ></link>
        <div data-thq="thq-navbar-nav" className="navbar4-desktop-menu">
          <nav className="navbar4-links">
            <span className="thq-link thq-body-small">{props.link1}</span>
            <Link to="/list" className="navbar4-link2 thq-link thq-body-small">
              {props.link2}
            </Link>
            <Link
              to="/searcher"
              className="navbar4-link3 thq-link thq-body-small"
            >
              {props.link3}
            </Link>
            <span className="thq-link thq-body-small">{props.link4}</span>
          </nav>
          <div className="navbar4-buttons">
            <Link
              to="/list"
              className="navbar4-action2 thq-button-animated thq-button-outline"
            >
              <span className="thq-body-small">See my tools</span>
            </Link>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar4-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar4-icon">
            <path
              d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              className=""
            ></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar4-mobile-menu">
          <div className="navbar4-nav">
            <div className="navbar4-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar4-logo"
              />
              <div data-thq="thq-close-menu" className="navbar4-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar4-icon2">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
            <nav className="navbar4-links1">
              <span className="thq-link thq-body-small">{props.link1}</span>
              <span className="thq-link thq-body-small">{props.link2}</span>
              <span className="thq-link thq-body-small">{props.link3}</span>
              <span className="thq-link thq-body-small">{props.link4}</span>
              <span className="thq-link thq-body-small">{props.link5}</span>
            </nav>
          </div>
          <div className="navbar4-buttons1">
            <button className="thq-button-filled">Login</button>
            <button className="thq-button-outline">Register</button>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar4.defaultProps = {
  action2: 'Searcher',
  link4: 'Credit Helper',
  action1: 'Ir a Inicio',
  link1: 'Home',
  logoAlt: 'logo',
  logoSrc: 'https://bxscinhs.vercel.app/favicon.ico',
  link3: 'Searcher',
  link2: 'List Tools',
  link5: 'Perfil',
  rootClassName: '',
}

Navbar4.propTypes = {
  action2: PropTypes.string,
  link4: PropTypes.string,
  action1: PropTypes.string,
  link1: PropTypes.string,
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  link3: PropTypes.string,
  link2: PropTypes.string,
  link5: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Navbar4
