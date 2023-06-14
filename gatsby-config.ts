import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `JS.Garden`,
    siteUrl: `https://js.garden`,
    author: `Aleksei Volkov`,
    motto: `My Journey to $10k/mo. before my 30s`,
    description: `👋 Hi, join my coding journey towards $10K/month! I'm a seasoned React dev sharing tips and tutorials. Dive into CSS, JavaScript, React, and more with me!`,
    image: `/website-image.png`,
    social: {
      github: `https://github.com/slimcandy`,
      linkedin: `https://www.linkedin.com/in/aleksei-volkov-react/`,
      youtube: `http://youtube.com/@codeto10k`,
    },
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "qtyf8bhl",
        dataset: "production",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://garden.us21.list-manage.com/subscribe/post?u=b07bceb74d3a87f2508eb80d9&amp;id=21faca19f6&amp;f_id=00845ae1f0", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
  ],
}

export default config
