import * as React from 'react'
import { Link } from 'gatsby'

import { logo } from './Navigation.module.scss'
import { GitHub } from '../../utils/icons'

function Navigation() {
  return (
    <nav className="row flex-nowrap justify-content-between align-items-center">
      <ul className="nav col-4 pt-1">
        <li className="nav-link">
          <Link to="/about" className="link-secondary" title="Send a message">
            About Me
          </Link>
        </li>
      </ul>
      <ul className="nav col-4 text-center">
        <li className="nav-link text-center">
          <Link to="/" className={`link-secondary text-dark fs-2 fw-bold ${logo}`} title="Main page">
            React Developer
          </Link>
        </li>
      </ul>
      <ul className="nav col-4 d-flex justify-content-end align-items-center">
        <li className="nav-link px-0">
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
