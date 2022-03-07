import * as React from 'react'
import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'

const About = () => (
  <Layout title='About me'>
    <ContactForm />
    <article>
      <h2 className='pb-4 mb-4 fst-italic border-bottom'>Experience</h2>
      <dl>
        <div className='row'>
          <dt className='col-3 mb-1 text-secondary fw-light'>
            August 2021 — Now
          </dt>
          <dd
            className='col-9 px-1 d-flex flex-column flex-wrap'
            itemScope
            itemType='https://schema.org/Organization'>
            <h3>
              <a
                href='https://www.gazprombank.ru/en/'
                rel='nofollow noopener'
                itemProp='url'
                className='link-dark'
                title='gazprombank.ru'>
                <span itemProp='name'>Gazprombank</span>
              </a>{' '}
              🇷🇺
            </h3>
            <p className='text-secondary'>React Frontend Developer</p>
            <p>Making form generator. CI/CD and stuff</p>
          </dd>
        </div>
        <div className='row'>
          <dt className='col-3 mb-1 text-secondary fw-light'>
            October 2020 — April 2021
          </dt>
          <dd
            className='col-9 px-1 d-flex flex-column flex-wrap'
            itemScope
            itemType='https://schema.org/Organization'>
            <h3>
              <a
                href='https://www.innoscripta.com/en'
                rel='nofollow noopener'
                itemProp='url'
                className='link-dark'
                title='innoscripta.com'>
                <span itemProp='name'>innoscripta</span>
              </a>{' '}
              🇩🇪
            </h3>
            <p className='text-secondary'>React Frontend Developer</p>
            <p>
              Created dynamic HTML email templates in CRM - mjml, twig. Created
              landing pages to BEM, bootstrap, webpack + babel and redesigned
              them by mobile first - vanilla js, rest, google page speed to the
              green zone. React components. Drag'n'Drop upload with intelligent
              tagging (the category is taken from the folder structure and file
              name). Star rating with fractions (accessible, mobile first).
            </p>
          </dd>
        </div>
        <div className='row'>
          <dt className='col-3 mb-1 text-secondary fw-light'>
            June 2020 — October 2020
          </dt>
          <dd
            className='col-9 px-1 d-flex flex-column flex-wrap'
            itemScope
            itemType='https://schema.org/Organization'>
            <h3>
              <a
                href='https://molinos.ru'
                rel='nofollow noopener'
                itemProp='url'
                className='link-dark'
                title='molinos.ru'>
                <span itemProp='name'>Molinos</span>
              </a>{' '}
              🇷🇺
            </h3>
            <p className='text-secondary'>Full-Stack PHP Developer</p>
            <p>
              Outstanging tasks: script for transferring content from a
              self-written CMS to Laravel; a script for parsing by Puppeteer,
              sending the data through RabbitMQ and parsing Laravel at the
              backend; legacy code: &lt;map&gt; &lt;area&gt; &lt;/map&gt;.
              Everything else is on Laravel + React + Vanilla JS + SCSS.
            </p>
          </dd>
        </div>
        <div className='row'>
          <dt className='col-3 mb-1 text-secondary fw-light'>
            October 2015 — June 2020
          </dt>
          <dd
            className='col-9 px-1 d-flex flex-column flex-wrap'
            itemScope
            itemType='https://schema.org/Organization'>
            <h3>
              <a
                href='https://brandcontrast.de'
                rel='nofollow noopener'
                itemProp='url'
                className='link-dark'
                title='brandcontrast.de'>
                <span itemProp='name'>
                  BRAND CONTRAST (CATerpillar Partner)
                </span>
              </a>{' '}
              🇩🇪
            </h3>
            <p className='text-secondary'>Full-Stack Web Developer</p>
            <p>
              Documented the internal CMS Kwizzly from scratch; Wrote a
              migration script from internal CMS to WordPress;configured sending
              HTML email templates; Made 10+ plugins for internal CMS; Connected
              forms with the rapidmail API; Made up themes and plugins for
              WordPress.
            </p>
          </dd>
        </div>
        <div className='row'>
          <dt className='col-3 mb-1 text-secondary fw-light'>
            September 2014 — April 2015
          </dt>
          <dd
            className='col-9 px-1 d-flex flex-column flex-wrap'
            itemScope
            itemType='https://schema.org/Organization'>
            <h3>
              <a
                href='https://www.ecwid.com'
                rel='nofollow noopener'
                itemProp='url'
                className='link-dark'
                title='ecwid.com'>
                <span itemProp='name'>Ecwid</span>
              </a>{' '}
              🇺🇸
            </h3>
            <p className='text-secondary'>Junior PHP Developer</p>
            <p>
              Filled in 15 cards of goods with content; Coded a php script for
              automatically loading goods from exel to Ecwid.
            </p>
          </dd>
        </div>
      </dl>
    </article>
    <article>
      <h2 className='pb-4 mb-4 fst-italic border-bottom'>Education</h2>
      <dl>
        <div className='row'>
          <dt className='col-3 mb-1 text-secondary fw-light'>2016 — 2018</dt>
          <dd
            className='col-9 px-1 d-flex flex-column flex-wrap'
            itemScope
            itemType='https://schema.org/Organization'>
            <h3>
              <a
                href='https://etu.ru/en/university/'
                rel='nofollow noopener'
                itemProp='url'
                className='link-dark'>
                <span itemProp='name'>
                  Saint Petersburg State Electrotechnical University "LETI"
                </span>
              </a>{' '}
              🇷🇺
            </h3>
            <p className='text-secondary'>Master @ Software Engineering</p>
          </dd>
        </div>
        <div className='row'>
          <dt className='col-3 mb-1 text-secondary fw-light'>2015 — 2016</dt>
          <dd
            className='col-9 px-1 d-flex flex-column flex-wrap'
            itemScope
            itemType='https://schema.org/Organization'>
            <h3>
              <a
                href='https://h-da.de/en/'
                rel='nofollow noopener'
                itemProp='url'
                className='link-dark'>
                <span itemProp='name'>
                  Darmstadt University of Applied Sciences
                </span>
              </a>{' '}
              🇩🇪
            </h3>
            <p className='text-secondary'>Bachelor @ Software Engineering</p>
          </dd>
        </div>
        <div className='row'>
          <dt className='col-3 mb-1 text-secondary fw-light'>2014 — 2016</dt>
          <dd
            className='col-9 px-1 d-flex flex-column flex-wrap'
            itemScope
            itemType='https://schema.org/Organization'>
            <h3>
              <a
                href='https://www.ulsu.ru/en/'
                rel='nofollow noopener'
                itemProp='url'
                className='link-dark'>
                <span itemProp='name'>
                  Ulyanovsk State Technical University
                </span>
              </a>{' '}
              🇷🇺
            </h3>
            <p className='text-secondary'>
              Specialist @ Translation and Interpreting
            </p>
          </dd>
        </div>
      </dl>
    </article>
  </Layout>
)

export default About
