/** @type {import('gatsby).GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `React developer blog`,
    siteUrl: `https://reactdeveloper.netlify.app`,
    description: `I have been programming for more than 7 years. Started from html landing pages and WordPress plugins up to react-native apps and micro frontend form`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/components/BlogLayout/BlogLayout.tsx'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + '/' + node.slug,
                  guid: site.siteMetadata.siteUrl + '/' + node.slug,
                  custom_elements: [{ 'content:encoded': node.html }],
                })
              })
            },
            query: `
            {
              allMdx {
                nodes {
                  id
                  frontmatter {
                    title
                    date
                    icon
                    category
                  }
                  slug
                  excerpt(pruneLength: 100, truncate: true)
                  timeToRead
                }
              }
            }
            `,
            output: '/rss.xml',
            title: "React Developer's Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `React Developer`,
        short_name: `Alex`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#343a40`,
        display: `minimal-ui`,
        icon: require.resolve('./src/images/apple.png'),
        theme_color_in_head: false,
      },
    },
  ],
}
