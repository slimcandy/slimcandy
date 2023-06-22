import { graphql, type HeadProps, type PageProps } from "gatsby"
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/Seo"
import TinyLayout from "../layouts/TinyLayout"

function AboutPage({ data }: PageProps<Queries.AboutPageQuery>): JSX.Element {
  const siteMetadata = data.site?.siteMetadata

  return (
    <TinyLayout siteMetadata={siteMetadata}>
      <main className="tufte-container font-serif min-padding-y">
        <article className="tufte-article">
          <h1 className="wp-block-post-title">Lorem ipsum dolor sit amet</h1>
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

          <hr />
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>HEADING 5</h5>
          <h6>HEADING 6</h6>

          <hr />
          <StaticImage
            src="../../static/images/photo.jpeg"
            alt="Photo of me in Adidas tracksuit. I'm standing at the edge of a cliff – national park."
            placeholder="dominantColor"
            formats={["auto", "webp", "avif", "jpg", "png"]}
            objectFit="contain"
            as="figure"
            loading="lazy"
          />

          <hr />
          <h2 id="list_types">List Types</h2>
          <h3>Definition List</h3>
          <dl>
            <dt>Definition List Title</dt>
            <dd>This is a definition list division.</dd>
          </dl>
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

          <hr />
          <h2 id="misc">
            Misc Stuff &ndash; abbr, acronym, pre, code, sub, sup, etc.
          </h2>
          <p>
            Lorem <sup>superscript</sup> dolor <sub>subscript</sub> amet,
            consectetuer adipiscing elit. Nullam dignissim convallis est.
            Quisque aliquam. <cite>cite</cite>. Donec sed tellus eget sapien
            fringilla nonummy.
            <acronym title="National Basketball Association">NBA</acronym>
            Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae,
            feugiat in, nunc. Morbi imperdiet augue quis tellus.
            <abbr title="Avenue">AVE</abbr>
          </p>
          <pre>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam
            dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc
            iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi,
            imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent
            mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu
            volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed
            tellus eget sapien fringilla nonummy.
            <acronym title="National Basketball Association">NBA</acronym>
            Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae,
            feugiat in, nunc. Morbi imperdiet augue quis tellus.
            <abbr title="Avenue">AVE</abbr>
          </pre>
          <div className="epigraph">
            <blockquote>
              <p>
                The English language . . . becomes ugly and inaccurate because
                our thoughts are foolish, but the slovenliness of our language
                makes it easier for us to have foolish thoughts.
              </p>
              <footer>
                George Orwell, “Politics and the English Language”
              </footer>
            </blockquote>
            <blockquote>
              <p>
                For a successful technology, reality must take precedence over
                public relations, for Nature cannot be fooled.
              </p>
              <footer>
                Richard P. Feynman,
                <cite>“What Do You Care What Other People Think?”</cite>
              </footer>
            </blockquote>
            <blockquote>
              I do not paint things, I paint only the differences between
              things.
              <footer>
                Henri Matisse,
                <cite>Henri Matisse Dessins: thèmes et variations</cite> (Paris,
                1943), 37
              </footer>
            </blockquote>
          </div>
          <p>I said! My -- reason. I&apos;m h-ere;</p>
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
      title="Let's Move Code Mountains!"
      description={siteDescription}
      pathname={location.pathname}
    />
  )
}

export const AboutPageQuery = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
        description
        motto
        social {
          github
          linkedin
          youtube
        }
      }
    }
  }
`
