import * as React from 'react'
import { Link } from 'gatsby'

import { font_serif } from './Navigation.module.scss'
import { GitHub } from '../../utils/icons'

function Navigation() {
  return (
    <nav className="d-flex flex-row justify-content-between align-items-center py-2">
      <ul className="nav">
        <li className="nav-link">
          <Link to="/about" className="link-secondary" title="Send a message">
            About Me
          </Link>
        </li>
      </ul>
      <ul className="nav">
        <li className="nav-link text-center">
          <Link
            to="/"
            className={`link-secondary fs-2 ${font_serif}`}
            title="Main page"
          >
            <span className="text-dark fs-2">👨🏻‍💻 Alex</span>
          </Link>
        </li>
      </ul>
      <ul className="nav">
        <li className="nav-link">
          <a
            href="https://github.com/slimcandy"
            rel="nofollow noopener"
            className="link-secondary d-flex flex-row align-items-center gap-2"
            title="GitHub profile"
          >
            <GitHub />
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
