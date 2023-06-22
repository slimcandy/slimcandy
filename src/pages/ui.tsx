import { type HeadProps } from "gatsby"
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/Seo"
import TinyLayout from "../layouts/TinyLayout"

function AboutPage(): JSX.Element {
  return (
    <TinyLayout>
      <main className="tufte-container font-serif min-padding-y">
        <article className="tufte-article">
          <h1>Lorem ipsum dolor sit amet</h1>
          <aside>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <q>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </q>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </aside>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <p>
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Donec sed tellus eget sapien fringilla nonummy. Mauris a ante.
            Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc.
            Morbi imperdiet augue quis tellus. adipiscing elit. Nullam dignissim
            convallis est. Quisque aliquam.
          </p>

          <hr className="hr" />
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>

          <hr className="hr" />
          <StaticImage
            src="../../static/images/photo.jpeg"
            alt="Photo of me in Adidas tracksuit. I'm standing at the edge of a cliff – national park."
            placeholder="dominantColor"
            formats={["auto", "webp", "avif", "jpg", "png"]}
            objectFit="contain"
            as="figure"
            loading="lazy"
          />

          <hr className="hr" />

          <h3>Ordered List</h3>
          <ol>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
          </ol>
          <h3>Unordered List</h3>
          <ul>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
          </ul>

          <hr className="hr" />

          <h2>Links</h2>
          <ol>
            <li>
              <a href="https://jsbin.com/muqomobeyu">Live demo ⚡️</a>
            </li>
            <li>
              <a href="https://www.w3.org/WAI/tutorials/page-structure/content/">
                Content Structure
              </a>
            </li>
            <li>
              <a href="https://webdesign.tutsplus.com/articles/start-using-quotation-marks-the-correct-way--webdesign-16905">
                Start Using Quotation Marks the “Correct” Way
              </a>
            </li>
            <li>
              <a href="https://www.artlebedev.ru/kovodstvo/sections/104/">
                § 104. Кавычки
              </a>
            </li>
            <li>
              <a href="https://www.artlebedev.ru/kovodstvo/sections/62/">
                § 62. Экранная типографика
              </a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Quotation_mark#Unicode_code_point_table">
                Unicode code point table
              </a>
              @ wiki
            </li>
            <li>
              <a href="https://www.artlebedev.ru/kovodstvo/sections/120/">
                § 120. Висячая пунктуация
              </a>
            </li>
            <li>
              <a href="https://css-tricks.com/almanac/properties/h/hanging-punctuation/">
                hanging-punctuation
              </a>
              @ css-tricks
            </li>
            <li>
              <a href="https://practice.typekit.com/lesson/">
                Typekit Practice Lessons
              </a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens">
                hyphens
              </a>
              @ MDN
            </li>
            <li>
              <a href="https://rwt.io/typography-tips/">Jason Pamental blog</a>
            </li>
            <li>
              <a href="http://webtypography.net/toc/">
                The Elements of Typographic Style Applied to the Web
              </a>
            </li>
            <li>
              <a href="https://edwardtufte.github.io/tufte-css/">tufte-css</a>
            </li>
          </ol>
        </article>

        <ul>
          <li>
            <button className="button" type="button">
              Button
            </button>
          </li>
          <li>
            <button className="button button-secondary" type="button">
              Button Secondary
            </button>
          </li>
          <li>
            <button className="button button-teal" type="button">
              Button Teal
            </button>
          </li>
          <li>
            <input type="text" className="input" />
          </li>
          <li>
            <a href="#" className="Link">
              Link
            </a>
          </li>
          <li>
            <h1 className="label-text-size">label-text-size</h1>
          </li>
          <li>
            <span className="badge">badge</span>
          </li>
          <li>
            <span className="badge badge-teal">badge</span>
          </li>
        </ul>
      </main>
    </TinyLayout>
  )
}

export default AboutPage

export function Head({
  data,
  location,
}: HeadProps<Queries.AboutPageQuery>): JSX.Element | null {
  const siteDescription = data.site?.siteMetadata?.description ?? ``

  return (
    <Seo
      title="Website UI Kit"
      description={siteDescription}
      pathname={location.pathname}
    />
  )
}
