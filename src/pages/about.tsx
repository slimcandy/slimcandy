import * as React from 'react'
import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'

const About = () => (
  <Layout title="About me">
    <ContactForm />
    <article>
      <h2 className="pb-4 mb-4 fst-italic border-bottom">Experience</h2>
      <dl>
        <div className="row">
          <dt className="col-3 mb-1 text-secondary fw-light">
            August 2021 — Now
          </dt>
          <dd
            className="col-9 px-1 d-flex flex-column flex-wrap"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <h3>
              <a
                href="https://www.gazprombank.ru/en/"
                rel="nofollow noopener"
                itemProp="url"
                className="link-dark"
                title="gazprombank.ru"
              >
                <span itemProp="name">Gazprombank</span>
              </a>{' '}
              🇷🇺
            </h3>
            <p className="text-secondary">React Frontend Developer</p>
            <ul>
              <li>made the json processing micro frontend,</li>
              <li>
                created and maintained internal ui library components (semantic
                code, speed optimization, legacy code refactoring),
              </li>
              <li>
                described the processes in dozens of pages of documentation.
              </li>
            </ul>
            <p>
              Stack: Javascript/TypeScript, ReactJS, Mobx/Redux,
              Styled-Components, Webpack 5 (microfrontend), Figma, git.
            </p>
          </dd>
        </div>
        <div className="row">
          <dt className="col-3 mb-1 text-secondary fw-light">
            October 2020 — April 2021
          </dt>
          <dd
            className="col-9 px-1 d-flex flex-column flex-wrap"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <h3>
              <a
                href="https://www.innoscripta.com/en"
                rel="nofollow noopener"
                itemProp="url"
                className="link-dark"
                title="innoscripta.com"
              >
                <span itemProp="name">innoscripta</span>
              </a>{' '}
              🇩🇪
            </h3>
            <p className="text-secondary">React Frontend Developer</p>
            <ul>
              <li>Created dynamic HTML email templates in CRM - mjml, twig,</li>
              <li>
                Created landing pages to BEM, bootstrap, webpack + babel and
                redesigned them by mobile first - vanilla js, rest, google page
                speed to the green zone.
              </li>
            </ul>
            <p>React components:</p>
            <ul>
              <li>
                Drag'n'Drop upload with intelligent tagging (the category is
                taken from the folder structure and file name),
              </li>
              <li>Star rating with fractions (accessible, mobile first).</li>
            </ul>
          </dd>
        </div>
        <div className="row">
          <dt className="col-3 mb-1 text-secondary fw-light">
            October 2015 — June 2020
          </dt>
          <dd
            className="col-9 px-1 d-flex flex-column flex-wrap"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <h3>
              <a
                href="https://brandcontrast.de"
                rel="nofollow noopener"
                itemProp="url"
                className="link-dark"
                title="brandcontrast.de"
              >
                <span itemProp="name">
                  BRAND CONTRAST (CATerpillar Partner)
                </span>
              </a>{' '}
              🇩🇪
            </h3>
            <p className="text-secondary">Full-Stack Web Developer</p>

            <ul>
              <li>described the code base of the internal CMS,</li>
              <li>
                wrote a script for moving from the internal CMS to WordPress,
              </li>
              <li>
                created dozens of components (HTML emails, links to rapidmail),
              </li>
              <li>themes and plugins for WordPress.</li>
            </ul>
          </dd>
        </div>
      </dl>
    </article>
    <article>
      <h2 className="pb-4 mb-4 fst-italic border-bottom">Education</h2>
      <dl>
        <div className="row">
          <dt className="col-3 mb-1 text-secondary fw-light">2016 — 2018</dt>
          <dd
            className="col-9 px-1 d-flex flex-column flex-wrap"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <h3>
              <a
                href="https://etu.ru/en/university/"
                rel="nofollow noopener"
                itemProp="url"
                className="link-dark"
              >
                <span itemProp="name">
                  Saint Petersburg State Electrotechnical University "LETI"
                </span>
              </a>{' '}
              🇷🇺
            </h3>
            <p className="text-secondary">Master @ Software Engineering</p>
          </dd>
        </div>
        <div className="row">
          <dt className="col-3 mb-1 text-secondary fw-light">2015 — 2016</dt>
          <dd
            className="col-9 px-1 d-flex flex-column flex-wrap"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <h3>
              <a
                href="https://h-da.de/en/"
                rel="nofollow noopener"
                itemProp="url"
                className="link-dark"
              >
                <span itemProp="name">
                  Darmstadt University of Applied Sciences
                </span>
              </a>{' '}
              🇩🇪
            </h3>
            <p className="text-secondary">Bachelor @ Software Engineering</p>
          </dd>
        </div>
      </dl>
    </article>
  </Layout>
)

export default About
