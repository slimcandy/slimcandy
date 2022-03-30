import * as React from 'react'
import { Link } from 'gatsby'

import { aboutMeBlock } from './AboutMe.module.scss'

const AboutMe = () => (
  <div className={`position-sticky ${aboutMeBlock}`}>
    <div
      className="p-4 mb-3 bg-light rounded d-flex flex-column flex-wrap"
      itemScope
      itemType="https://schema.org/Person"
    >
      <h4 className="fst-italic" itemProp="name">
        About
      </h4>
      <p>
        I'm Alex! Third year of writing on react. Being happy with scrum
        workflow, typescript codebase and micro frontends.
      </p>
      <p>
        I adore working in huge companies, scrum teams and modern stack. I often
        take courses at frontendmasters.com after work.
      </p>
      <Link to="/about" className="btn btn-sm btn-outline-secondary">
        Send a greeting message
      </Link>
    </div>

    <div className="p-4">
      <h4 className="fst-italic">Elsewhere</h4>
      <ol className="list-unstyled">
        <li>
          <a
            href="https://github.com/slimcandy"
            rel="nofollow noopener"
            title="GitHub profile"
          >
            github
          </a>
        </li>
        <li>
          <a
            href="https://www.npmjs.com/~loopreport"
            rel="nofollow noopener"
            title="NPM profile"
          >
            npm
          </a>
        </li>
      </ol>
    </div>
  </div>
)

export default AboutMe
