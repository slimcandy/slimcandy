import * as React from 'react'
import { Link } from 'gatsby'

import { aboutMeBlock } from './AboutMe.module.scss'

const AboutMe = () => (
  <div className={`position-sticky ${aboutMeBlock}`}>
    <div
      className='p-4 mb-3 bg-light rounded d-flex flex-column flex-wrap'
      itemScope
      itemType='https://schema.org/Person'>
      <h4 className='fst-italic' itemProp='name'>
        About
      </h4>
      <p>
        I'm Alex! I'm writing react SPAs, react-native apps and micro frontend
        form builders.
      </p>
      <p>
        I want to apply my knowledge to a team where tests are written, code is
        reviewed, and learning is encouraged.
      </p>
      <Link to='/about' className='btn btn-sm btn-outline-secondary'>
        Send a greeting message
      </Link>
    </div>

    <div className='p-4'>
      <h4 className='fst-italic'>Elsewhere</h4>
      <ol className='list-unstyled'>
        <li>
          <a
            href='https://github.com/slimcandy'
            rel='nofollow noopener'
            title='GitHub profile'>
            github
          </a>
        </li>
        <li>
          <a
            href='https://www.npmjs.com/~loopreport'
            rel='nofollow noopener'
            title='NPM profile'>
            npm
          </a>
        </li>
      </ol>
    </div>
  </div>
)

export default AboutMe
