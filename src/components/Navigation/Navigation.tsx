import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { github, font_serif } from './Navigation.module.scss'

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
            className="link-secondary text-decoration-none d-flex flex-row align-items-center gap-1"
            title="GitHub profile"
          >
            <StaticImage
              src="../../images/github.svg"
              alt="GitHub logo"
              className={github}
              placeholder="blurred"
              quality={100}
              objectFit="contain"
              height={28}
              width={28}
              layout="constrained"
            />{' '}
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
